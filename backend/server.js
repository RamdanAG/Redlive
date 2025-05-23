require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Koneksi ke MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Ganti jika pakai user lain
  password: "", // Ganti sesuai password MySQL kamu
  database: "db_redlive"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Connected to MySQL Database");
  }
});

// Register User
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const query = "INSERT INTO riwayat_donor (username, password) VALUES (?, ?)";
  
  db.query(query, [username, password], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true, message: "User registered successfully!" });
  });
});

// Login User
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM riwayat_donor WHERE username = ? AND password = ?";
  
  db.query(query, [username, password], (err, results) => {
    if (err) return res.status(500).json({ error: err });

    if (results.length > 0) {
      res.json({ success: true, user: results[0] });
    } else {
      res.json({ success: false, message: "Invalid username or password!" });
    }
  });
});

// Read Data
app.get("/riwayat_donor", (req, res) => {
  db.query("SELECT * FROM riwayat_donor", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Create Data
app.post("/riwayat_donor", (req, res) => {
  const { id_kartu, notelp, goldarah, jumlahdonor, tanggal_donor, Nama, alamat, jenis_kelamin, Agama } = req.body;
  const query = "INSERT INTO riwayat_donor (id_kartu, notelp, goldarah, jumlahdonor, tanggal_donor, Nama, alamat, jenis_kelamin, Agama) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  
  db.query(query, [id_kartu, notelp, goldarah, jumlahdonor, tanggal_donor, Nama, alamat, jenis_kelamin, Agama], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Donor added successfully", id: result.insertId });
  });
});

// Delete Data
app.delete("/riwayat_donor/:id", (req, res) => {
  db.query("DELETE FROM riwayat_donor WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Donor deleted successfully" });
  });
});

// Jalankan server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
