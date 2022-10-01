import React, { useState } from "react";

export default function Login() {
  // DATA
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // CSS ERS
  const errorStyles = {
    color: "red",
  };
  const centerDiv = {
    margin: "auto",
    width: "50%",
    height: "50%",
  };
  // CHECKERS
  const isEmail = () => {
    if (!email) return "Email cannot be empty";
    if (!!email && email.length < 8)
      return "Email must be of lenght 8 characters";
    // if (!!this.state.email && this.state.email.toString().includes("@"))
    //   return "Email must include @";
    if (!!email && email.toString().match(/[0-9]+/))
      return "Email cant have numbers";
    return false;
  };
  // WRITERS
  const writeEmail = (e) => {
    setEmail(e.target.value);
  };
  // MAIN RENDER
  return (
    <div>
      <h3>Login</h3>
      <div style={centerDiv}>
        <div>
          <label>Email</label>
          <input type="text" value={email} onChange={(e) => writeEmail(e)} />
        </div>
        {/* {!email && <span style={errorStyles}>Email cannot be empty</span>}
         */}
        {isEmail}
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        {/* {!password && <span style={errorStyles}>Password cannot be empty</span>}
        {password && !password.includes("@") && (
          <span style={errorStyles}>Password is wrong</span>
        )} */}
        {/* {password} */}
        <div>
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
}
