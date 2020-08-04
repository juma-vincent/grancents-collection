import styled from "styled-components";
import { ReactComponent as ShoppingIconSVG } from "../../assets/cart.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 13px;
  font-weight: bolder;
  right: 22px;
  bottom: 30px;
  color: rgb(236, 101, 11);
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 35px;
  height: 35px;
`;
