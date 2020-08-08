import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding-top: 12px;

  h2 {
    font-size: 30px;
    font-weight: bold;
    margin: 20px 0px;
  }

  span {
    font-size: 20px;
    font-weight: normal;
    opacity: 0.86;
  }

  @media screen and (max-width: 800px) {
    h2 {
      font-size: 25px;
      font-weight: bold;
      margin: 20px 0px;
      justify-self: center;
    }

    span {
      font-size: 17px;
      font-weight: normal;
      opacity: 0.86;
      justify-self: center;
    }
    width: 90vw;
    font-size: 15px;
  }
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 2px;
  }
`;
