import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (data) => {
  console.log("Action called", data);
  return { type: ADD_TO_CART, data };
};
