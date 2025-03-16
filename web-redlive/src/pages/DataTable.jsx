import React from "react";
import DonorList from "../components/DonorList/DonorList";
import DonorForm from "../components/DonorForm";

const DataTable = ({ donors, onDelete, onUpdate, onAdd }) => {
  return (
    <div>
      <h2>Data Donor</h2>
      <DonorList donors={donors} onDelete={onDelete} onUpdate={onUpdate} />
      <DonorForm onAdd={onAdd} />
    </div>
  );
};

export default DataTable;
