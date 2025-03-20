import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();
    if (data.success) {
      alert("Registrasi berhasil! Silakan login.");
      navigate("/login");
    } else {
      alert("Gagal mendaftar, coba lagi!");
    }
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label className="register-label">Username</label>
            <input type="text" className="input-register" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="input-group">
            <label className="register-label">Email</label>
            <input type="email" className="input-register" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label className="register-label">Password</label>
            <input type="password" className="input-register" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="button-register">Register</button>
        </form>
        <div className="label-register-forgot">
          <p className="f-register">
            Sudah punya akun? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;