import axios from "axios";

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
