import React, { useState } from "react";
import "./Login.css";
import Main from "./Main";
export default function Login(props) {
  // DATA
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  // CSS ERS
  const errorStyles = {
    color: "red",
  };
  const centerDiv = {
    margin: "auto",
    width: "50%",
    height: "50%",
  };
  const showPassowordCSS = {
    cursor: "pointer",
  };
  // CHECKERS
  function isEmail() {
    console.log(["net", "com", "tech", "in", "us", "uk"].includes(email));
    if (!email) return "Email cannot be empty";
    if (!!email && email.length < 8)
      return "Email must be of lenght 8 characters";
    if (!!email && !email.toString().includes("@"))
      return "Email must include @";
    if (!!email && email.toString().match(/[0-9]+/))
      return "Email cant have numbers";
    if (
      !!email &&
      ![".net", ".com", ".tech", ".in", ".us", ".uk"].some((x) =>
        email.includes(x)
      )
    )
      return "Email must include '.net','.com','.tech','.in','.us','.uk'";
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
  function toggleShowPassword() {
    if (showPassword === "password") setShowPassword("text");
    if (showPassword === "text") setShowPassword("password");
  }
  function goToHome() {
    props.passedfunction();
    return;
    // return <Main loggedIn={true} />;
  }
  // WRITERS
  const writeEmail = (e) => {
    setEmail(e.target.value);
    isEmail();
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
            type={showPassword}
            value={password}
            onChange={(e) => writePssword(e)}
          ></input>
          <span style={showPassowordCSS} onClick={() => toggleShowPassword()}>
            show password
          </span>
        </div>
        {!!isPassword() && <span style={errorStyles}>{isPassword()}</span>}
        <div>
          <input
            type="submit"
            value="Submit"
            className="submitbutton"
            disabled={!!isEmail() && !!isPassword()}
            onClick={goToHome()}
          />
        </div>
      </div>
    </div>
  );
}
