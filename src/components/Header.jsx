import { ShoppingCart } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.log(result);
  return (
    <div className="header">
      <Link to={"cart"}>
        <div className="cart-div">
          <span className="cart-item-count">{result.length}</span>
          <span>
            <ShoppingCart color="#fff" className="cart-icon" />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
