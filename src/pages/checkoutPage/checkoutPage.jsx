import React from "react";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkoutItem/checkoutItem";
import StripeCheckoutButton from "./../../components/stripeButton/stripeButton";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./checkoutPage.styles";

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>Total ${totalPrice}</TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4000 0566 5566 5556 - Exp: 01/21 - CVV: 135
      </WarningContainer>
      <StripeCheckoutButton price={totalPrice} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
