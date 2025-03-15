import React, { useState } from "react";

const DonorForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    id_kartu: "",
    notelp: "",
    goldarah: "",
    jumlahdonor: "",
    tanggal_donor: "",
    Nama: "",
    alamat: "",
    jenis_kelamin: "",
    Agama: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      id_kartu: "",
      notelp: "",
      goldarah: "",
      jumlahdonor: "",
      tanggal_donor: "",
      Nama: "",
      alamat: "",
      jenis_kelamin: "",
      Agama: ""
    });
  };

  return (
    <div>
      <h2>Tambah Pendonor</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="Nama" placeholder="Nama" value={formData.Nama} onChange={handleChange} required />
        <input type="text" name="id_kartu" placeholder="ID Kartu" value={formData.id_kartu} onChange={handleChange} required />
        <input type="text" name="notelp" placeholder="No Telp" value={formData.notelp} onChange={handleChange} required />
        <input type="text" name="goldarah" placeholder="Golongan Darah" value={formData.goldarah} onChange={handleChange} required />
        <input type="text" name="jumlahdonor" placeholder="Jumlah Donor" value={formData.jumlahdonor} onChange={handleChange} required />
        <input type="date" name="tanggal_donor" value={formData.tanggal_donor} onChange={handleChange} required />
        <input type="text" name="alamat" placeholder="Alamat" value={formData.alamat} onChange={handleChange} required />
        <input type="text" name="jenis_kelamin" placeholder="Jenis Kelamin" value={formData.jenis_kelamin} onChange={handleChange} required />
        <input type="text" name="Agama" placeholder="Agama" value={formData.Agama} onChange={handleChange} required />
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
};

export default DonorForm;
