import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (data) => {
  return { type: ADD_TO_CART, data };
};

export const removeFromCart = (name) => {
  return { type: REMOVE_FROM_CART, data: name };
};

export const emptyCart = () => {
  return { type: EMPTY_CART };
};
