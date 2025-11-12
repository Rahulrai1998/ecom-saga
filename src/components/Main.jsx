import { useDispatch } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../store/action";
import { listProduct } from "../store/productAction";
import { useSelector } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productListData);
  console.log(productList, "VIEW LIST");
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
      <button onClick={() => dispatch(listProduct())}>Get Product list</button>

      {productList.map((prod) => (
        <div>{prod.name}</div>
      ))}
    </div>
  );
}

export default Main;
