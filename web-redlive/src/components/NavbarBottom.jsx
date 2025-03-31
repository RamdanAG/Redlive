import React from "react";
import './style/BottomNavbar.css'

import User from '../../public/Icons/User.svg'
import Home from '../../public/Icons/Home.svg'
import Logo from '../../public/Logo/Logo.svg'

const BottomNavbar = () => {
  return (
    <div className="bottom-navbar">
      {/* Home Button */}
      <a href="/home" className="nav-item">
        <img src={Home} alt="Home" className="icon" />
        <span>Home</span>
      </a>

      {/* Logo Tengah */}
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      {/* Profile Button */}
      <a href="/profile" className="nav-item">
        <img src={User} alt="Profile" className="icon" />
        <span>Profile</span>
      </a>
    </div>
  );
};

export default BottomNavbar;
