import React, { Component } from "react";
import Homepage from "./Homepage";
import Login from "./Login";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoggedIn: false,
    };
  }
  render() {
    return (
      <div>
        <h2 style={}>To-do Application</h2>
        {!this.state.isLoggedIn && <Login />}
        {!!this.state.isLoggedIn && <Homepage />}
      </div>
    );
    }
    
    // CSS objects

    styleFunction() {
        const h2styling = {

    }
    }
}
