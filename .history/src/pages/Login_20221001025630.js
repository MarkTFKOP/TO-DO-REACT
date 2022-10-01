import React from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h3>Login</h3>
      <div>
        <div>
          <label>Email</label>
          <input type="text" />
          {email && <span>Error: validation is wrong</span>}
          {email && email.inclueds("@") && (
            <span>Error: validation is wrong</span>
          )}
        </div>
        <div>
          <label>Password</label>
          <input type="password" show-password="true"></input>
        </div>
        {}
      </div>
    </div>
  );
}
