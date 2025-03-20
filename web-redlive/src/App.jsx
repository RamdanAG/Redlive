import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { getDonors, addDonor, deleteDonor } from "./services/api";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import StockDarah from "./pages/StockDarah";
import RiwayatDonor from "./pages/RiwayatDonor";
import JadwalDonor from "./pages/JadwalDonor";
import InformasiDonor from "./pages/InformasiDonor";
import DataTable from "./pages/DataTable";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

import "./App.css";

const App = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    // Fetch data donor dari API
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/stock-darah" element={<ProtectedRoute><StockDarah /></ProtectedRoute>} />
        <Route path="/riwayat-donor" element={<ProtectedRoute><RiwayatDonor /></ProtectedRoute>} />
        <Route path="/jadwal-donor" element={<ProtectedRoute><JadwalDonor /></ProtectedRoute>} />
        <Route path="/informasi-donor" element={<ProtectedRoute><InformasiDonor /></ProtectedRoute>} />
        <Route path="/data-table" element={
          <AdminRoute>
            <DataTable 
              donors={donors} 
              onDelete={handleDeleteDonor} 
              onUpdate={handleUpdateDonor} 
              onAdd={handleAddDonor} 
            />
          </AdminRoute>
        } />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default App;
