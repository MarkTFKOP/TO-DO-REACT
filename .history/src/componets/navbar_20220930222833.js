import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mark",
      age: 25,
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
      </div>
    );
  }
}

export default Navbar;
