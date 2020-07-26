import React from "react";
import "./cartItem.scss";
import {
  CartItemImage,
  ItemDetailsContainer,
  CartItemContainer,
} from "./cartItem.styles";

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
