import React, { useState } from "react";
import "./DonorList.css"; // Import CSS untuk styling

const DonorList = ({ donors, onDelete, onUpdate }) => {
  const [editDonor, setEditDonor] = useState(null);

  const handleEditDonor = (donor) => {
    setEditDonor({ ...donor }); // Menyalin data donor ke state editDonor
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditDonor((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = () => {
    onUpdate(editDonor); // Memanggil fungsi update dari props
    setEditDonor(null); // Menutup modal
  };

  return (
    <div className="donor-container">
      <h1>Daftar Pendonor</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>ID Kartu</th>
              <th>No Telp</th>
              <th>Golongan Darah</th>
              <th>Jumlah Donor</th>
              <th>Tanggal Donor</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Jenis Kelamin</th>
              <th>Agama</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {donors.length > 0 ? (
              donors.map((donor) => (
                <tr key={donor.id}>
                  <td>{donor.id}</td>
                  <td>{donor.id_kartu}</td>
                  <td>{donor.notelp}</td>
                  <td>{donor.goldarah}</td>
                  <td>{donor.jumlahdonor}</td>
                  <td>{donor.tanggal_donor}</td>
                  <td>{donor.Nama}</td>
                  <td>{donor.alamat}</td>
                  <td>{donor.jenis_kelamin}</td>
                  <td>{donor.Agama}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEditDonor(donor)}>Edit</button>
                    <button className="delete-btn" onClick={() => onDelete(donor.id)}>Hapus</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11" className="no-data">Tidak ada data pendonor</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {editDonor && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Data Pendonor</h2>
            <label>ID Kartu:</label>
            <input type="text" name="id_kartu" value={editDonor.id_kartu} onChange={handleChange} />
            
            <label>No Telp:</label>
            <input type="text" name="notelp" value={editDonor.notelp} onChange={handleChange} />
            
            <label>Golongan Darah:</label>
            <input type="text" name="goldarah" value={editDonor.goldarah} onChange={handleChange} />
            
            <label>Jumlah Donor:</label>
            <input type="number" name="jumlahdonor" value={editDonor.jumlahdonor} onChange={handleChange} />
            
            <label>Tanggal Donor:</label>
            <input type="date" name="tanggal_donor" value={editDonor.tanggal_donor} onChange={handleChange} />
            
            <label>Nama:</label>
            <input type="text" name="Nama" value={editDonor.Nama} onChange={handleChange} />
            
            <label>Alamat:</label>
            <textarea name="alamat" value={editDonor.alamat} onChange={handleChange}></textarea>
            
            <label>Jenis Kelamin:</label>
            <select name="jenis_kelamin" value={editDonor.jenis_kelamin} onChange={handleChange}>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>

            <label>Agama:</label>
            <input type="text" name="Agama" value={editDonor.Agama} onChange={handleChange} />

            <div className="modal-actions">
              <button className="save-btn" onClick={handleSaveEdit}>Simpan</button>
              <button className="cancel-btn" onClick={() => setEditDonor(null)}>Batal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonorList;
