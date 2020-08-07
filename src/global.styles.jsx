import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    padding: 20px 60px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    body {
      padding: 10px;
    }
  }
`;
