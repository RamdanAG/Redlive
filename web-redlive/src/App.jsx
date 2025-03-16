import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getDonors, addDonor, deleteDonor } from "./services/api";

import Login from "./pages/Login";
import Register from "./pages/Register";
import StockDarah from "./pages/StockDarah";
import RiwayatDonor from "./pages/RiwayatDonor";
import JadwalDonor from "./pages/JadwalDonor";
import InformasiDonor from "./pages/InformasiDonor";

import Home from "./pages/Home";
import Error from "./pages/Error";

import DonorList from "./components/DonorList/DonorList";
import DonorForm from "./components/DonorForm";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDonors();
      setDonors(data);
    };
    fetchData();
  }, []);

  const handleAddDonor = async (formData) => {
    const newDonor = await addDonor(formData);
    if (newDonor) setDonors([...donors, { id: newDonor.id, ...formData }]);
  };

  const handleDeleteDonor = async (id) => {
    await deleteDonor(id);
    setDonors(donors.filter((donor) => donor.id !== id));
  };

  const handleUpdateDonor = (updatedDonor) => {
    setDonors(donors.map(donor => (donor.id === updatedDonor.id ? updatedDonor : donor)));
  };

  return (
    <Router>
      <Routes>
        {/* Halaman login dan register bisa diakses tanpa login */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Halaman ini hanya bisa diakses jika sudah login */}
        <Route path="/" element={
          <ProtectedRoute>
            <div>
              <DonorList donors={donors} onDelete={handleDeleteDonor} onUpdate={handleUpdateDonor} />
              <DonorForm onAdd={handleAddDonor} />
            </div>
          </ProtectedRoute>
        } />

        <Route path="/stock-darah" element={<ProtectedRoute><StockDarah /></ProtectedRoute>} />
        <Route path="/riwayat-donor" element={<ProtectedRoute><RiwayatDonor /></ProtectedRoute>} />
        <Route path="/jadwal-donor" element={<ProtectedRoute><JadwalDonor /></ProtectedRoute>} />
        <Route path="/informasi-donor" element={<ProtectedRoute><InformasiDonor /></ProtectedRoute>} />

        <Route path="*" element={<ProtectedRoute><Error /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />

        {/* Jika halaman tidak ditemukan, arahkan ke login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
