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
  user: "root",
  password: "",
  database: "testdb",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Connected to MySQL Database");
  }
});

// **Read Data**
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// **Create Data**
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "User added successfully", id: result.insertId });
  });
});

// **Update Data**
app.put("/users/:id", (req, res) => {
  const { name, email } = req.body;
  db.query("UPDATE users SET name=?, email=? WHERE id=?", [name, email, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "User updated successfully" });
  });
});

// **Delete Data**
app.delete("/users/:id", (req, res) => {
  db.query("DELETE FROM users WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "User deleted successfully" });
  });
});

// Jalankan server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
