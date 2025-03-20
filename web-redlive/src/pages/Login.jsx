import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './style/Login.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Reset error sebelum mencoba login

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login gagal. Periksa username dan password.");
      }

      const data = await response.json();

      if (data.success) {
        sessionStorage.setItem("user", JSON.stringify(data.user)); // Simpan user
        navigate("/home"); // Redirect ke home
      } else {
        setError("Login gagal. Periksa username dan password.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label className="Login-Label">Username</label>
          <input className="Input-login"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label className="Login-Label">Password</label>
          <input className="Input-login"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* {error && <p className="error-message">{error}</p>} */}
        <button className="button-login" type="submit">Sign In</button>
      </form>
      <div className="label-register-forgot">
        <p className="f-register">Belum punya akun? <a href="/register">Daftar</a></p>
        <p className="f-register"><a href="/register">Forgot Password</a></p>
      </div>
      </div>
    </div>
  );
};

export default Login;
