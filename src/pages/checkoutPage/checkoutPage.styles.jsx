import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 30px;
  }

  @media screen and (max-width: 800px) {
    width: 90vw;
    font-size: 12px;
    button {
      margin: auto;
      margin-top: 30px;
    }
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  font-size: 20px;
  font-weight: bold;

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    width: 90%;
    font-size: 16px;
  }
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 800px) {
    font-size: 11px;
    width: 23%;
    &:last-child {
      width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin: auto;
  font-size: 36px;
  @media screen and (max-width: 800px) {
    margin-top: 30px;
    font-size: 26px;
  }
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 22px;
  color: red;
  @media screen and (max-width: 800px) {
    margin-top: 30px;
    font-size: 15px;
  }
`;
