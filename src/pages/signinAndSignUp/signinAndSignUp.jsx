import React from "react";
import "./signinAndSignUp.scss";
import SignIn from "../../components/signin/signin";
import SignUp from "../../components/signup/signup";
import { SignInAndSignUpContainer } from "./signinAndSignup.styles";

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUpPage;
