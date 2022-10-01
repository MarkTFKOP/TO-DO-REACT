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
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li style={{ float: "right" }}>
          <a href="#about">About</a>
        </li>
      </ul>
    </div>
  );
}
