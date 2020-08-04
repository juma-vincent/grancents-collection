import React from "react";
import "./cartIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";
import { selectItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {
  ShoppingIcon,
  ItemCountContainer,
  CartIconContainer,
} from "./cartIcon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
