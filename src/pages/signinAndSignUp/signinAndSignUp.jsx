import React from "react";
import "./signinAndSignUp.scss";
import SignIn from "../../components/signin/signin";
import SignUp from "../../components/signup/signup";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
