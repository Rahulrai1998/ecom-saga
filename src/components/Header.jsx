import { ShoppingCart } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.log(result);
  return (
    <div className="header">
      <div className="cart-div">
        <span className="cart-item-count">{result.length}</span>
        <span>
          <ShoppingCart color="#fff" className="cart-icon" />
        </span>
      </div>
    </div>
  );
};

export default Header;
