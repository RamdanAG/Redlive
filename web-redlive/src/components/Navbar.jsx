export default function Navbar(){

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = "/login"; // Redirect ke halaman login
      };
      
    return(
        <nav>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    )
}