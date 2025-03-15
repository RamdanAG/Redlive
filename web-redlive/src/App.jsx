import React, { useState, useEffect } from "react";
import { getDonors, addDonor, deleteDonor } from "./services/api";
import DonorList from "./components/DonorList";
import DonorForm from "./components/DonorForm";

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

  return (
    <div>
      <DonorList donors={donors} onDelete={handleDeleteDonor} />
      <DonorForm onAdd={handleAddDonor} />
    </div>
  );
};

export default App;
