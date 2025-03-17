import './style/Navbar.css'

export default function Navbar() {
    const handleLogout = () => {
        sessionStorage.removeItem("user"); // Hapus session saat logout
        window.location.href = "/login"; // Redirect ke halaman login
    };

    return (
        <nav>
            <ul>
                <li><a href="/">Beranda</a></li>
                <li><a href="/stock-darah">Stock Darah</a></li>
                <li><a href="/jadwal-donor">Jadwal Donor</a></li>
                <li><a href="/informasi-donor">Informasi Donor</a></li>
                <li><a href="/riwayat-donor">Riwayat Donor</a></li>
            </ul>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
}
