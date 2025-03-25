import React, { useState } from "react";
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", 
        { email, password }, 
        { headers: { "Content-Type": "application/json" } }
      );
      localStorage.setItem("token", res.data.token);
      setUser(res.data.email);
    } catch (err) {
      console.error("Login error:", err.response?.data || err);
      setError("Invalid email or password");
    }
  };
  

  return (
    <div>
      <h2>Faculty Scheduler Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
