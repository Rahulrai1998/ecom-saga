import { PRODUCT_LIST } from "./constant";

export const listProduct = (product) => {
  console.log("Product added to cart", product);
  return { type: PRODUCT_LIST, data: "hello" };
};
