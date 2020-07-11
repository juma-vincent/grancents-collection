import React, { Component } from "react";
import "./signin.scss";
import FormInput from "./../formInput/formInput";
import CustomButton from "./../customButton/customButton";
import { signInWithGoogle } from "./../../firebase/firebase.utils";

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

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 style={{ fontSize: 30, fontWeight: "bold" }}>
          I already have an account
        </h2>
        <span style={{ fontSize: 20, fontWeight: "normal", opacity: 0.86 }}>
          Sign in with your email and password{" "}
        </span>
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

          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
