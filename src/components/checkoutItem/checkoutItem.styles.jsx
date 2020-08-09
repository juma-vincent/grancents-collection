import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 19px;
  align-items: center;
  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
  @media screen and (max-width: 400px) {
    font-size: 12.5px;
  }
`;
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const TextContainer = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled(TextContainer)`
  padding-left: 15px;
  display: flex;
  div {
    cursor: pointer;
    font-weight: bold;
  }
  span {
    margin: 3px 10px;
  }

  @media screen and (max-width: 800px) {
    padding-left: 15px;
    span {
      margin: 2px 3px;
    }
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
