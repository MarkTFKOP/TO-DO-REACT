import React from "react";
import Navbar from "../components/Navbar";
export default function Homepage(props) {
  const logoutfunction = (data) => {
    props.logoutfunction(data);
  };
  return (
    <div>
      <Navbar logoutfunction={this.logoutfunction()} />
      <h2>Welcome</h2>
    </div>
  );
}
