import Product from "../../models/Product.model";

interface payloadType {
  products: Product[];
  product: Product;
  loading: boolean;
  error: string;
}

const initialState = {
  products: [],
  product: undefined,
  loading: false,
  error: "",
};

export const productsListReducer = (state = initialState, action: { type: string; payload: payloadType }) => {
  switch (action.type) {
    case "SET_PRODUCTS_ARRAY":
      return { ...state, loading: true, products: [] };
    case "SET_PRODUCTS_ARRAY_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "SET_PRODUCTS_ARRAY_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = initialState, action: { type: string; payload: payloadType }) => {
  switch (action.type) {
    case "SET_PRODUCT_DETAILS":
      return { ...state, loading: true, product: undefined };
    case "SET_PRODUCT_DETAILS_SUCCESS":
      return { ...state, loading: false, product: action.payload };
    case "SET_PRODUCT_DETAILS_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
