import { PRODUCT_LIST, STORE_PRODUCTS } from "./constant";

export const productListData = (data = [], action) => {
  switch (action.type) {
    // case PRODUCT_LIST:
    //   return [...data, action.data];
    //   break;
    case STORE_PRODUCTS:
      console.log(action.data, "API DATA");
      return [...data, ...action.data];
    default:
      return [];
  }
};
