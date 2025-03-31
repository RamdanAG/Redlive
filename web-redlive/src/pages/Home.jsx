import HomeBox from "../components/HomeBox"
import Navbar from "../components/Navbar"
import NavbarBottom from "../components/NavbarBottom"

export default function Home(){
    return(
        <div>
            <Navbar />
            <HomeBox />
            <NavbarBottom/>
        </div>
    )
}