import React from "react";
import Navbar from "../components/Navbar";
export default function Homepage(props) {
  const logoutfunction = (data) => {
    props.logoutfunction(data);
    return;
  };
  return (
    <div>
      <Navbar logoutfunction={logoutfunction()} />
      <h2>Welcome</h2>
    </div>
  );
}
