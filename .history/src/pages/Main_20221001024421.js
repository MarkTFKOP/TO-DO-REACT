import React, { Component } from "react";
import Login from "./Login";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  render() {
    return (
      <div>
        <h2>To-do</h2>
        <Login />
      </div>
    );
  }
}
