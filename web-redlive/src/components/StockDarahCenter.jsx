import './style/Stockdarah.css'

export default function StockDarahBox() {
    // Data stok darah dalam bentuk array
    const dataStokDarah = [
      {
        golonganDarah: { A: 20, B: 22, AB: 22, O: 20 },
        rumahSakit: "RSUD Wirahadikusuma",
        alamat: "Jl. Prabu Geusan Ulun No.41/0821***",
      },
      {
        golonganDarah: { A: 20, B: 22, AB: 22, O: 20 },
        rumahSakit: "RSU Pakuwon",
        alamat: "Jl. Rd Dewi Sartika No.16/0821***",
      },
      {
        golonganDarah: { A: 20, B: 22, AB: 22, O: 20 },
        rumahSakit: "RSU Cimalaka",
        alamat: "Jl. Raya Mandalaherang No.225/0821***",
      },
    ];
  
    return (
      <div className="stock-container">
        <h2 className="stock-title">STOK DARAH</h2>
        <div className="stock-grid">
          {dataStokDarah.map((data, index) => (
            <div className="stock-box" key={index}>
              <div className="stock-content">
                <p><strong>Stok Golongan Darah:</strong></p>
                <p>A: {data.golonganDarah.A} | B: {data.golonganDarah.B} | AB: {data.golonganDarah.AB} | O: {data.golonganDarah.O}</p>
                <p><strong>Rumah Sakit:</strong> {data.rumahSakit}</p>
                <p><strong>Alamat:</strong> {data.alamat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  