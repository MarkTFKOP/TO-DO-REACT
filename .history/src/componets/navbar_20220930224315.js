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
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <p>{this.state.count}</p>
        <button onClick={() => this.counter()}>onClick</button>
      </div>
    );
  }
}

export default Navbar;
