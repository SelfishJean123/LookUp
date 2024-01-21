import User from "../../models/User.model";

interface payloadType {
  userData: User;
  loading: boolean;
  error: string;
}

const loggedUserFromLocalStorage = localStorage.getItem("loggedUser")
  ? JSON.parse(localStorage.getItem("loggedUser")!)
  : null;

const initialState = {
  userData: loggedUserFromLocalStorage,
  loading: false,
  error: "",
};

export const userRegisterReducer = (state = initialState, action: { type: string; payload: payloadType }) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return { ...state, loading: true, userData: undefined };
    case "USER_REGISTER_REQUEST_SUCCESS":
      return { ...state, loading: false, userData: action.payload };
    case "USER_REGISTER_REQUEST_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "USER_LOGOUT":
      return {};
    default:
      return state;
  }
};

export const userLoginReducer = (state = initialState, action: { type: string; payload: payloadType }) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return { ...state, loading: true, userData: undefined };
    case "USER_LOGIN_REQUEST_SUCCESS":
      return { ...state, loading: false, userData: action.payload };
    case "USER_LOGIN_REQUEST_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "USER_LOGOUT":
      return {};
    default:
      return state;
  }
};
