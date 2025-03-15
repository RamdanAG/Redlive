import React, { useState, useEffect } from "react";
import { getDonors, addDonor, deleteDonor } from "./services/api";
import DonorList from "./components/DonorList/DonorList";
import DonorForm from "./components/DonorForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StockDarah from "./pages/StockDarah";
import RiwayatDonor from "./pages/RiwayatDonor";
import JadwalDonor from "./pages/JadwalDonor";
import InformasiDonor from "./pages/InformasiDonor";
import Error from "./pages/Error";

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
        <Route path="/" element={
          <div>
            <DonorList donors={donors} onDelete={handleDeleteDonor} onUpdate={handleUpdateDonor} />
            <DonorForm onAdd={handleAddDonor} />
          </div>
        } />
        <Route path="/stock-darah" element={<StockDarah />} />
        <Route path="/riwayat-donor" element={<RiwayatDonor />} />
        <Route path="/jadwal-donor" element={<JadwalDonor />} />
        <Route path="/informasi-donor" element={<InformasiDonor />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
