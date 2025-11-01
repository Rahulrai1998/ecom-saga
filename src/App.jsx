import { useDispatch } from "react-redux";
import { addToCart } from "./store/action";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(addToCart())}>Add to cart</button>
    </>
  );
}
 
export default App;
