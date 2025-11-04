import { useDispatch } from "react-redux";
import { addToCart } from "../store/action";
function Main() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              name: "Cart Track",
            })
          )
        }
      >
        Add to cart
      </button>
    </div>
  );
}

export default Main;
