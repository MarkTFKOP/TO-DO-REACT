import React from "react";
import "./Navnar.css";
export default function Navbar(props) {
  const goToLogin = () => {
    props.logoutfunction("Logout success");
  };
  return (
    <div>
      <ul>
        <li>
          <a class="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">Text 1</a>
        </li>
        <li>
          <a href="#contact">Text 2</a>
        </li>
        <li style={{ float: "right" }}>
          <a href="#about" onClick={goToLogin()}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
