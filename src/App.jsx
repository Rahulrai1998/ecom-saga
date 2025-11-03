import { useDispatch } from "react-redux";
import { addToCart } from "./store/action";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
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

export default App;
