import axios from "axios";

export const registerUser = (name: string, email: string, password: string) => async (dispatch: any) => {
  try {
    dispatch({ type: "USER_REGISTER_REQUEST" });
    const { data } = await axios.post(
      "http://localhost:8000/api/users/register/",
      { name: name, username: email, password: password },
      { headers: { "Content-type": "application/json" } }
    );
    dispatch({ type: "USER_REGISTER_REQUEST_SUCCESS", payload: data });
    localStorage.setItem("loggedUser", JSON.stringify(data));
  } catch (error: any) {
    dispatch({
      type: "USER_REGISTER_REQUEST_FAIL",
      payload: error.response.data.detail || error.message,
    });
  }
};

export const loginUser = (email: string, password: string) => async (dispatch: any) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    const { data } = await axios.post(
      "http://localhost:8000/api/users/login/",
      { username: email, password: password },
      { headers: { "Content-type": "application/json" } }
    );
    dispatch({ type: "USER_LOGIN_REQUEST_SUCCESS", payload: data });
    localStorage.setItem("loggedUser", JSON.stringify(data));
  } catch (error: any) {
    dispatch({
      type: "USER_LOGIN_REQUEST_FAIL",
      payload: error.response.data.detail || error.message,
    });
  }
};

export const logoutUser = () => (dispatch: any) => {
  localStorage.removeItem("loggedUser");
  dispatch({ type: "USER_LOGOUT" });
};
