import { ShoppingCart } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { searchProduct } from "../store/productAction";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  console.log(result);
  return (
    <div className="header">
      <Link to={"/"}>
        <h2>Ecom-saga</h2>
      </Link>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search product.."
          className="search-input"
          onChange={(e) => dispatch(searchProduct(e.target.value))}
        />
      </div>
      <div>
        <Link to={"cart"}>
          <div className="cart-div">
            <span className="cart-item-count">{result.length}</span>
            <span>
              <ShoppingCart color="#fff" className="cart-icon" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
