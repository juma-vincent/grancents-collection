import React, { Component } from "react";
import "./signin.scss";
import FormInput from "./../formInput/formInput";
import CustomButton from "./../customButton/customButton";
import { auth, signInWithGoogle } from "./../../firebase/firebase.utils";
import { SignInContainer, ButtonsBarContainer } from "./signin.styles";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            required
          />

          <FormInput
            handleChange={this.handleChange}
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            required
          />

          <ButtonsBarContainer>
            <CustomButton type="submit">Sign in</CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
