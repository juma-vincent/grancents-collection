import React from "react";
import FormInput from "./../formInput/formInput";
import CustomButton from "./../customButton/customButton";
import { SignUpContainer, SignUpTitle } from "./signup.styles";
import { signUpStart } from "./../../redux/user/user.actions";
import { connect } from "react-redux";
import { useState } from "react";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ email, password, displayName });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          onChange={handleChange}
          label="Display name"
          required
        />

        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />

        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit"> SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
