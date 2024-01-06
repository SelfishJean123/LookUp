import User from "../../models/User.model";

interface payloadType {
  user: User;
  loading: boolean;
  error: string;
}

const loggedUserFromLocalStorage = localStorage.getItem("loggedUser")
  ? JSON.parse(localStorage.getItem("loggedUser")!)
  : null;

const initialState = {
  user: { loggedUser: loggedUserFromLocalStorage },
  loading: false,
  error: "",
};

export const userLoginReducer = (state = initialState, action: { type: string; payload: payloadType }) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return { ...state, loading: true, user: undefined };
    case "USER_LOGIN_REQUEST_SUCCESS":
      return { ...state, loading: false, user: action.payload };
    case "USER_LOGIN_REQUEST_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "USER_LOGOUT":
      return {};
    default:
      return state;
  }
};
