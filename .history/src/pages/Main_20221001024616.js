import React, { Component } from "react";
import Homepage from "./Homepage";
import Login from "./Login";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoggedIn: true,
    };
  }
  render() {
    return (
      <div>
        <h2>To-do</h2>
        {!!this.state.isLoggedIn && <Login />}
        {!this.state.isLoggedIn && <Homepage />}
      </div>
    );
  }
}
