import React from "react";
import "./Navnar.css";
export default function Navbar() {
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
          <a href="#about">Logout</a>
        </li>
      </ul>
    </div>
  );
}
