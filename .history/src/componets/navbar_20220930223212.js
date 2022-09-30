import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mark",
      age: 25,
      count: 0,
    };
  }

  counter = () => {
    this.setState({ count: this.state.count++ });
  };

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <p>{this.state.counter}</p>
        <button onClick={() => this.counter}></button>
      </div>
    );
  }
}

export default Navbar;
