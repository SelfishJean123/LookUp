import { combineReducers } from "redux";
import { productsListReducer, productDetailsReducer } from "./productsReducers";
import { userLoginReducer } from "./usersReducers";

const rootReducer = combineReducers({
  productsListReducer,
  productDetailsReducer,
  userLoginReducer,
});

export default rootReducer;
