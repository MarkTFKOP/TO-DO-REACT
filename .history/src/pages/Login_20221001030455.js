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
        <div>
          <label>Password</label>
          <input
            type="password"
            show-password="true"
            onChange={(val) => setEmail(val)}
          ></input>
        </div>
        {}
      </div>
    </div>
  );
}
