import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 90vw;
  }
`;
