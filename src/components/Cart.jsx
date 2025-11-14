import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/action";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  const totalAmount = cartData
    .map((item) => item.price)
    .reduce((cur, acc) => {
      return cur + acc;
    }, 0);

  const dispatch = useDispatch();

  if (cartData.length === 0) return "Nothing here...";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "10px",
        }}
      >
        {cartData?.map((item) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              border: "1px solid red",
              width: "500px",
              maxHeight: "300px",
            }}
          >
            <div>
              <img
                src={item.photo}
                alt="Image"
                style={{ objectFit: "cover", height: "100%", width: "50%" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <h3 style={{ margin: "0px" }}>{item.name}</h3>
              <h4 style={{ margin: "0px" }}>{item.color}</h4>
              <h4 style={{ margin: "0px" }}>{item.price}</h4>
              <h4 style={{ margin: "0px" }}>{item.category}</h4>
              <h4 style={{ margin: "0px" }}>{item.brand}</h4>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", padding: "10px" }}
      >
        <p>Tota item: {cartData.length}</p>
        <p>Total amount: {totalAmount}</p>
        <p>Discount: {(totalAmount * 10) / 100}</p>
        <p>To Pay: {totalAmount - (totalAmount * 10) / 100}</p>
      </div>
    </div>
  );
};

export default Cart;
