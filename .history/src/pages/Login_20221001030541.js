import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errorStyles = {
    color: "red",
  };
  return (
    <div>
      <h3>Login</h3>
      <div>
        <div>
          <label>Email</label>
          <input type="text" />
        </div>
        {!email && <span style={errorStyles}>Email cannot be empty</span>}
        {email && !email.includes("@") && (
          <span style={errorStyles}>Email is wrong</span>
        )}
        {email}
        <div>
          <label>Password</label>
          <input
            type="password"
            show-password="true"
            onChange={(val) => setEmail(val)}
          ></input>
        </div>
        {!password && <span style={errorStyles}>Password cannot be empty</span>}
        {password && !password.includes("@") && (
          <span style={errorStyles}>Password is wrong</span>
        )}
        {password}
      </div>
    </div>
  );
}
