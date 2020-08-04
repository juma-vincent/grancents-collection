import React from "react";
import CartItem from "./../cartItem/cartItem";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartHidden,
} from "./../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";
import {
  CartDropdownButton,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownContainer,
} from "./cartDropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer> Your cart is empty </EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  hidden: selectCartHidden,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
