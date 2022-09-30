import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mark",
      age: 23,
    };
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}

export default Navbar;
