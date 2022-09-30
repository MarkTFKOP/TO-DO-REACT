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
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default Navbar;
