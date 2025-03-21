import React, { useState } from "react";
import "./style/Navbar.css";
import HamburgerIcon from "../../public/Icons/Hamburger.svg"; // Pastikan path benar

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem("user");
        window.location.href = "/login";
    };

    return (
        <nav className="navbar">
            {/* Logo */}
            <a href="" className="logo">RedLive</a>

            {/* Menu untuk Tablet & Mobile */}
            <ul className={`nav-links ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)}>
                <li><a href="/">Beranda</a></li>
                <li><a href="/stock-darah">Stock Darah</a></li>
                <li><a href="/jadwal-donor">Jadwal Donor</a></li>
                <li><a href="/informasi-donor">Informasi Donor</a></li>
                <li><a href="/riwayat-donor">Riwayat Donor</a></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>

            {/* Icon Menu Burger */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <img src={HamburgerIcon} alt="Menu" className="hamburger-img" />
            </div>
        </nav>
    );
}
