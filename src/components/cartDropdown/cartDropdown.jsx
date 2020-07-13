import React from "react";
import "./cartDropdown.scss";
import CustomButton from "./../customButton/customButton";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton style={{ fontSize: "13px" }}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
