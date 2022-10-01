import React, { Component, useState } from "react";
import Homepage from "./Homepage";
import Login from "./Login";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoggedIn: false,
      errMsgUsername: "",
      errMsgPassword: "",
    };
  }
  isUsername = () => {
    if (!!this.state.username) return true;
    if (!this.state.username && this.state.username.length < 8)
      return "Username must be of lenght 8 characters";
    if (!this.state.username && this.state.username.match(/[0-9]+/))
      return "Username cant have numbers";
  };
  componentDidMount() {
    if (!!this.props.isLoggedIn) this.setState({ isLoggedIn: true });
  }
  componentDd;
  render() {
    return (
      <div>
        <h2 style={this.styleFunction().h2styling}>To-do Application</h2>
        {!this.state.isLoggedIn && <Login />}
        {!!this.state.isLoggedIn && <Homepage />}
      </div>
    );
  }

  // CSS objects

  styleFunction() {
    const h2styling = {
      color: "rgb(54, 149, 231)",
      "text-align": "left",
    };
    return {
      h2styling: h2styling,
    };
  }
}
