import styled, { css } from "styled-components";

const invertedButtonStyles = css`
background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
`;

const isGoogleSignInButtonStyles = css`
background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
`;
const defaultButtonStyle = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return isGoogleSignInButtonStyles;
  }

  return props.inverted ? invertedButtonStyles : defaultButtonStyle;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 15px 0 15px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: normal;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  margin-bottom: 2px;

  ${getButtonStyles}
`;
