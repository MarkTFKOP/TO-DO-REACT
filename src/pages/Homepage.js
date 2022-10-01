import React from "react";
import Navbar from "../components/Navbar";
import CRUD from "./Views/CRUD";
export default function Homepage(props) {
  const logoutfunction = (data) => {
    console.log(data);
    props.logoutfunction(data);
    return;
  };
  return (
    <div>
      <Navbar logoutfunction={logoutfunction} />
      <h2>Welcome</h2>
      <div>
        <CRUD />
      </div>
    </div>
  );
}
