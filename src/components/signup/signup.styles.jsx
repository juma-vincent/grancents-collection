import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  span {
    font-size: 20px;
    font-weight: normal;
    opacity: 0.86;
    margin: 1px 0px;
  }

  @media screen and (max-width: 800px) {
    span {
      display: flex;
      font-size: 17px;
      font-weight: normal;
      opacity: 0.86;
      margin: 1px 0px;
      justify-self: center;
    }

    width: 90vw;
    font-size: 15px;
  }
  @media screen and (max-width: 400px) {
    .button {
      width: 90vw;
    }
  }
`;

export const SignUpTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin: 32px 0px 21px;

  @media screen and (max-width: 800px) {
    font-size: 25px;
  }
`;
