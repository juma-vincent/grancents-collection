import React from "react";
import "./cartDropdown.scss";
import CustomButton from "./../customButton/customButton";
import CartItem from "./../cartItem/cartItem";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartHidden,
} from "./../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message"> Your cart is empty </span>
        )}
      </div>
      <CustomButton
        style={{ fontSize: "13px" }}
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  hidden: selectCartHidden,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
