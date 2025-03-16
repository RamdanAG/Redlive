export default function Navbar() {
    const handleLogout = () => {
        sessionStorage.removeItem("user"); // Hapus session saat logout
        window.location.href = "/login"; // Redirect ke halaman login
    };

    return (
        <nav>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
}
