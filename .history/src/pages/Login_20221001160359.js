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
  function isEmail() {
    console.log("is email called");
    if (!email) return "Email cannot be empty";
    if (!!email && email.length < 8)
      return "Email must be of lenght 8 characters";
    if (!!email && !email.toString().includes("@"))
      return "Email must include @";
    if (!!email && email.toString().match(/[0-9]+/))
      return "Email cant have numbers";
    return false;
  }
  function isEmail() {
    console.log("is email called");
    if (!email) return "Email cannot be empty";
    if (!!email && email.length < 8)
      return "Email must be of lenght 8 characters";
    if (!!email && !email.toString().includes("@"))
      return "Email must include @";
    if (!!email && email.toString().match(/[0-9]+/))
      return "Email cant have numbers";
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
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
}
