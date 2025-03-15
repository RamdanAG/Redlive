import React from "react";

const DonorList = ({ donors, onDelete }) => {
  return (
    <div>
      <h1>Daftar Pendonor</h1>
      <ul>
        {donors.map((donor) => (
          <li key={donor.id}>
            {donor.Nama} - {donor.goldarah} - {donor.jenis_kelamin}
            <button onClick={() => onDelete(donor.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonorList;
