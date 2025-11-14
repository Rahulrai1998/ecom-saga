import { ShoppingCart } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.log(result);
  return (
    <div className="header">
      <Link to={"/"}>
        <h2>Ecom-saga</h2>
      </Link>
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
