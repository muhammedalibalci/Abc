import { combineReducers } from "redux";
import auth from "./authReducer";
import errors from "./errorsReducer";
import product from "./productReducer";
import category from "./categoryReducer";
import basket from "./basketReducer";
import customer from "./customerReducer";

export default combineReducers({
  auth,
  errors,
  product,
  category,
  basket,
  customer
});