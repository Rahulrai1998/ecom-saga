import { useDispatch } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../store/action";
import { listProduct } from "../store/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productListData);
  console.log(productList, "VIEW LIST");

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      {/* <button onClick={() => dispatch(listProduct())}>Get Product list</button> */}

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "10px",
          width: "70%",
          overflow: "auto",
          margin: "20px auto",
        }}
      >
        {productList.map((prod) => (
          <div
            key={prod.id}
            style={{
              width: "200px",
              borderRadius: "16px",
              border: "1px solid grey",
            }}
          >
            <img
              src={prod.photo}
              alt="image"
              style={{ zIndex: -1, borderRadius: "16px" }}
            />
            <h5 style={{ textAlign: "center" }}>{prod.name}</h5>
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <button
                style={{
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: "grey",
                }}
                onClick={() =>
                  dispatch(
                    addToCart({
                      name: "Realme 6s",
                      category: "Phones",
                      price: 123456,
                      color: "red",
                    })
                  )
                }
              >
                Add to cart
              </button>
              <button
                style={{
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: "grey",
                }}
                onClick={() => dispatch(removeFromCart("Realme 65s"))}
              >
                Remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
