import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errorStyles = {
    color: "red",
  };
  const isEmail = () => {
    if (!!this.state.email) return false;
    if (!this.state.email && this.state.email.length < 8)
      return "Email must be of lenght 8 characters";
    if (!this.state.email && this.state.email.includes("@"))
      return "Email must include @";
    if (!this.state.email && this.state.email.match(/[0-9]+/))
      return "Email cant have numbers";
  };
  const centerDiv = {
    margin: "auto",
    width: "50%",
    height: "50%",
  };
  return (
    <div>
      <h3>Login</h3>
      <div style={centerDiv}>
        <div>
          <label>Email</label>
          <input type="text" value={email} onChange={(val) => setEmail(val)} />
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
            value={password}
            onChange={(val) => setPassword(val)}
          ></input>
        </div>
        {!password && <span style={errorStyles}>Password cannot be empty</span>}
        {password && !password.includes("@") && (
          <span style={errorStyles}>Password is wrong</span>
        )}
        {password}
        <div>
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
}
