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
  @media screen and (max-width: 800px) {
    width: 35px;
    height: 35px;
  }
  @media screen and (max-width: 400px) {
    width: 25px;
    height: 25px;
  }
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 13px;
  font-weight: bolder;
  right: 22px;
  bottom: 30px;
  color: rgb(236, 101, 11);
  @media screen and (max-width: 800px) {
    right: 16.5px;
    bottom: 22px;
  }
  @media screen and (max-width: 400px) {
    right: 12px;
    bottom: 17px;
  }
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 35px;
  height: 35px;
  @media screen and (max-width: 800px) {
    width: 29px;
    height: 29px;
  }
`;
