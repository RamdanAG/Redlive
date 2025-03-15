import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Fetch data dari backend
  useEffect(() => {
    axios.get("http://localhost:5000/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Tambah user
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/users", { name, email })
      .then((response) => {
        setUsers([...users, { id: response.data.id, name, email }]);
        setName("");
        setEmail("");
      })
      .catch((error) => console.error("Error adding user:", error));
  };

  // Hapus user
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div>
      <h1>Daftar Pengguna</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleDelete(user.id)}>Hapus</button>
          </li>
        ))}
      </ul>

      <h2>Tambah Pengguna</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
};

export default App;
