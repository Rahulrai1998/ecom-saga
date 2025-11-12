import { PRODUCT_LIST } from "./constant";

export const listProduct = (product) => {
  console.log("Product added to cart", product);
  const data = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (response) => response.json()
  );
  data?.then((d) => console.log(d, "New data"));
  
  return { type: PRODUCT_LIST, data };
};
