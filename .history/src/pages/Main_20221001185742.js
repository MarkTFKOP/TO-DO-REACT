import React, { Component } from "react";
import Homepage from "./Homepage";
import Login from "./Login";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  componentDidMount() {
    if (!!this.props.isLoggedIn) this.setState({ isLoggedIn: true });
  }
  loginfunction = (data) => {
    if (data === "Login success") this.setState({ isLoggedIn: true });
    // console.log(data);
  };
  logoutfunction = (data) => {
    if (data === "Logout success") this.setState({ isLoggedIn: false });
  };
  render() {
    return (
      <div>
        {!this.state.isLoggedIn && (
          <Login passedfunction={this.loginfunction} />
        )}
        {!!this.state.isLoggedIn && (
          <Homepage logoutfunction={this.logoutfunction()} />
        )}
      </div>
    );
  }

  // CSS objects
}
