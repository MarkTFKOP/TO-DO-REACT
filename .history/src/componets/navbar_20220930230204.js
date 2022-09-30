import React, { Component } from "react";
import PageOne from "../Pages/PageOne";
import PageTwo from "../Pages/PageTwo";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mark",
      age: 25,
      count: 0,
      page: 1,
    };
  }

  counter = () => {
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        {
          //   if(this.state.page == 1) return( <PageOne />)
        }
        {this.state.page === true && <PageTwo />}
        {this.state.page === false && <PageOne />}
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ page: !this.state.page })}>
          NEXT PAGE
        </button>
        <button onClick={() => this.counter()}>Click Count</button>
      </div>
    );
  }
}

export default Navbar;
