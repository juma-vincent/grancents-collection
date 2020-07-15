import React from "react";
import "./cartDropdown.scss";
import CustomButton from "./../customButton/customButton";
import CartItem from "./../cartItem/cartItem";
import { connect } from "react-redux";
import { selectCartItems } from "./../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton style={{ fontSize: "13px" }}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
