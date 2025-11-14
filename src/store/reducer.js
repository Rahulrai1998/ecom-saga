import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ACTION CALLED", action.type);
      return [...data, action.data];
    case REMOVE_FROM_CART:
      console.log("ACTION CALLED", action.type);
      if (!data.length) return;
      return data.filter((prod) => prod.id !== action.data);
    // return data.filter((obj) => action.data !== obj.name);
    case EMPTY_CART:
      console.log("ACTION CALLED", action.type);
      if (data.length) data = [];
      return [...data];
    default:
      return data;
  }
  //   if (action.type === ADD_TO_CART) {
  //     console.log("REDUCER LOG", action);
  //     return action.data;
  //   } else return "not action";
};
