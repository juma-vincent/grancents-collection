import React from "react";
import "./signin.scss";
import FormInput from "./../formInput/formInput";
import CustomButton from "./../customButton/customButton";

import { SignInContainer, ButtonsBarContainer } from "./signin.styles";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import { connect } from "react-redux";
import { useState } from "react";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          type="email"
          name="email"
          label="email"
          value={email}
          required
        />

        <FormInput
          handleChange={handleChange}
          type="password"
          name="password"
          label="password"
          value={password}
          required
        />

        <ButtonsBarContainer>
          <CustomButton type="submit">Sign in</CustomButton>

          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
