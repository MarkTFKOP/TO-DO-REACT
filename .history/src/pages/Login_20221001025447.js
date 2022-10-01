import React from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

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
          <input type="password" show-password="true"></input>
        </div>
      </div>
    </div>
  );
}
