import { combineReducers } from "redux";
import { productsListReducer, productDetailsReducer } from "./productsReducers";
import { userLoginReducer, userRegisterReducer } from "./usersReducers";

const rootReducer = combineReducers({
  productsListReducer,
  productDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
});

export default rootReducer;
