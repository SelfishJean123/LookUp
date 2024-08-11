import routes from "./routes/routes";
import SignContext from "./common/contexts/SignContext";
import { RouterProvider } from "react-router-dom";
import { useCallback, useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);

  const signIn = useCallback((uid: string) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const signOut = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  return (
    <SignContext.Provider value={{ isLoggedIn: isLoggedIn, userId: userId, signIn: signIn, signOut: signOut }}>
      <RouterProvider router={routes} />
    </SignContext.Provider>
  );
};

export default App;
