import React from "react";
import Navbar from "../components/Navbar";
export default function Homepage(props) {
  return (
    <div>
      <Navbar logoutfunction={props.logoutfunction()} />
      <h2>Welcome</h2>
    </div>
  );
}
