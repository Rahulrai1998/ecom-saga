export const addToCart = () => {
  console.log("Action called");
  return { type: "ADD_TO_CART", data: "1 item" };
};
