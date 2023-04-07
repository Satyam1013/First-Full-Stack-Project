import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");

  const handleForm = () => {
    const payload = {
      username,
      email,
      age,
      password,
      location,
    };

    fetch("https://lime-encouraging-walkingstick.cyclic.app/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
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
      <h1>Registration Form</h1>
      <input
        type={"text"}
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type={"email"}
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type={"number"}
        value={age}
        placeholder="Enter Your Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type={"password"}
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type={"text"}
        value={location}
        placeholder="Enter Your Location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleForm}>Submit</button>
    </div>
  );
};

export default Signup;
