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
  passedfunction() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h2 style={this.styleFunction().h2styling}>To-do Application</h2>
        {!this.state.isLoggedIn && (
          <Login passedfunction={this.passedfunction()} />
        )}
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
