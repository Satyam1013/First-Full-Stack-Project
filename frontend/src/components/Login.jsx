import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = () => {
    const payload = {
      email,
      password,
    };

    fetch("https://gorgeous-slug-robe.cyclic.app/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => localStorage.setItem("token", res.token))
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        gap: "30px",
        margin: "auto",
      }}
    >
      <h1>Login Form</h1>

      <input
        type={"email"}
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type={"password"}
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleForm}>Submit</button>
    </div>
  );
};

export default Login;
