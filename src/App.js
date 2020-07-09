import React, { Component } from "react";
import { Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Homepage} />

        <Route exact path="/shop" component={ShopPage} />
      </div>
    );
  }
}

export default App;
