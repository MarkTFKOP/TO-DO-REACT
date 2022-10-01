import React, { useState } from "react";

export default function Login() {
  // DATA
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPasswordd] = useState("");
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
  function isEmail() {
    if (!email) return "Email cannot be empty";
    if (!!email && email.length < 8)
      return "Email must be of lenght 8 characters";
    if (!!email && !email.toString().includes("@"))
      return "Email must include @";
    if (!!email && email.toString().match(/[0-9]+/))
      return "Email cant have numbers";
    return false;
  }
  function isPassword() {
    if (!password) return "Password cannot be empty";
    if (!!password && password.length < 8)
      return "Password must be of lenght 8 characters";
    if (!!password && !password.toString().includes("@"))
      return "Password must include @";
    if (!!password && !password.toString().match(/[0-9]/))
      return "Password must be include a number";
    return false;
  }
  // WRITERS
  const writeEmail = (e) => {
    setEmail(e.target.value);
    isEmail();
    console.log(isEmail());
  };
  const writePssword = (e) => {
    setPassword(e.target.value);
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
        {!!isEmail() && <span style={errorStyles}>{isEmail()}</span>}
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => writePssword(e)}
          ></input>
          <p onClick={() => (showPassword = !showPassword)}>show password</p>
        </div>
        {!!isPassword() && <span style={errorStyles}>{isPassword()}</span>}
        <div>
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
}
