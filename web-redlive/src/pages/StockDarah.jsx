import Navbar from "../components/Navbar"
import NavbarBottom from "../components/NavbarBottom"
import StockDarahCenter from "../components/StockDarahCenter"

export default function StockDarah(){
    return(
        <div>
            <Navbar />
            <StockDarahCenter/>
            <NavbarBottom/>
        </div>
    )
}