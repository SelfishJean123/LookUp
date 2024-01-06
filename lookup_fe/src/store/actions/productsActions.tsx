import axios from "axios";

export const getAllProducts = () => async (dispatch: any) => {
  try {
    dispatch({ type: "SET_PRODUCTS_ARRAY" });
    const { data } = await axios.get("http://localhost:8000/api/products");
    dispatch({ type: "SET_PRODUCTS_ARRAY_SUCCESS", payload: data });
  } catch (error: any) {
    dispatch({
      type: "SET_PRODUCTS_ARRAY_FAIL",
      payload: error.response.data.detail || error.message,
    });
  }
};

export const getSingleProduct = (id: string) => async (dispatch: any) => {
  try {
    dispatch({ type: "SET_PRODUCT_DETAILS" });
    const { data } = await axios.get(`http://localhost:8000/api/products/${id}`);
    dispatch({ type: "SET_PRODUCT_DETAILS_SUCCESS", payload: data });
  } catch (error: any) {
    dispatch({
      type: "SET_PRODUCT_DETAILS_FAIL",
      payload: error.response.data.detail || error.message,
    });
  }
};
