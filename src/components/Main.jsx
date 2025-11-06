import { useDispatch } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../store/action";
function Main() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
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
      <button onClick={() => dispatch(removeFromCart("Realme 65s"))}>
        Remove from cart
      </button>
      <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
    </div>
  );
}

export default Main;
