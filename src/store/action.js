import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (data) => {
  return { type: ADD_TO_CART, data };
};

export const removeFromCart = (id) => {
  return { type: REMOVE_FROM_CART, data: id };
};

export const emptyCart = () => {
  return { type: EMPTY_CART };
};
