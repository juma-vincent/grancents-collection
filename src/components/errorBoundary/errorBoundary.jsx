import React, { Component } from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./errorBoundary.styles";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasErrored: false };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/FOeYt4E.png" />
          <ErrorImageText>
            Sorry this page is burried in the sand
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
