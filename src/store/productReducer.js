import { PRODUCT_LIST } from "./constant";

export const productListData = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      console.log(action)
      return [...data, action.data];
      break;
    default:
      return [];
  }
};
