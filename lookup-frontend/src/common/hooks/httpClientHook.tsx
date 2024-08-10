import { useCallback, useEffect, useRef, useState } from "react";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
type HeadersType = { [key: string]: string };

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const activeHttpRequests = useRef<AbortController[]>([]);

  const sendRequest = useCallback(
    async (url: string, method: HttpMethod = "GET", body: any = null, headers: HeadersType = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();
        activeHttpRequests.current = activeHttpRequests.current.filter((reqCtrl) => {
          return reqCtrl !== httpAbortCtrl;
        });

        if (!response.ok) {
          throw new Error(responseData.message || "Request failed!");
        }

        setIsLoading(false);
        return responseData;
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message);
        } else {
          console.log("Request was aborted");
        }
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => setError(null);

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl, index) => {
        if (abortCtrl.signal.aborted !== false) {
          abortCtrl.abort();
          console.log("Manually aborted request at index:", index);
        }
      });
      activeHttpRequests.current = [];
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
