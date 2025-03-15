import axios from "axios";

const API_URL = "http://localhost:5000/riwayat_donor";

// Ambil semua data donor
export const getDonors = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching donors:", error);
    return [];
  }
};

// Tambah donor baru
export const addDonor = async (newDonor) => {
  try {
    const response = await axios.post(API_URL, newDonor);
    return response.data;
  } catch (error) {
    console.error("Error adding donor:", error);
  }
};

// Hapus donor
export const deleteDonor = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting donor:", error);
  }
};
