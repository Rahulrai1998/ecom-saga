import { PRODUCT_LIST } from "./constant";

export const listProduct = (product) => {
  console.log("Product added to cart", product);

  const data = fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
  console.log(data);
  return { type: PRODUCT_LIST, data};
};
