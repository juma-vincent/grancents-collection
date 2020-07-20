import React from "react";
import "./checkoutPage.scss";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectItemsCount,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkoutItem/checkoutItem";
import StripeCheckoutButton from "./../../components/stripeButton/stripeButton";

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">Total ${totalPrice}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4000 0566 5566 5556 - Exp: 01/21 - CVV: 135
      </div>
      <StripeCheckoutButton price={totalPrice} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
