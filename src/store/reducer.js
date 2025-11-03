import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ACTION CALLED", action.type);
      return { ...data };
    case REMOVE_FROM_CART:
      console.log("ACTION CALLED", action.type);
      return;
    default:
      return data;
  }
  //   if (action.type === ADD_TO_CART) {
  //     console.log("REDUCER LOG", action);
  //     return action.data;
  //   } else return "not action";
};
