import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productListData } from "./productReducer";

export default combineReducers({
  cartData,
  productListData,
});
