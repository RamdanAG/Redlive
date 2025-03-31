import { useNavigate } from "react-router-dom";
import "./style/HomeBox.css";

// Image
import StockDarah from '../../public/image/Home/StockDarah.svg';
import JadwalDonor from '../../public/image/Home/JadwalDonor.svg';
import InformasiDonor from '../../public/image/Home/InformasiDonor.svg';
import RiwayatDonor from '../../public/image/Home/RiwayatDonor.svg';

export default function HomeBox() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="grid-box">
        <div className="box box1" onClick={() => navigate('/stock-darah')}>
          <img src={StockDarah} alt="Stock Darah" />
          <h3>Stock Darah</h3>
        </div>
        <div className="box box2" onClick={() => navigate('/jadwal-donor')}>
          <img src={JadwalDonor} alt="Jadwal Donor" />
          <h3>Jadwal Donor</h3>
        </div>
        <div className="box box3" onClick={() => navigate('/informasi-donor')}>
          <img src={InformasiDonor} alt="Informasi Donor" />
          <h3>Informasi Donor</h3>
        </div>
        <div className="box box4" onClick={() => navigate('/riwayat-donor')}>
          <img src={RiwayatDonor} alt="Riwayat Donor" />
          <h3>Riwayat Donor</h3>
        </div>
      </div>
    </div>
  );
}
