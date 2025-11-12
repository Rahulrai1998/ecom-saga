import { PRODUCT_LIST } from "./constant";

export const listProduct = async (product) => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = response.json();
  return { type: PRODUCT_LIST, data };
};
