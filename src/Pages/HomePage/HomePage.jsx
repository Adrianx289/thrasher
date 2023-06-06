import About from "../../Components/About/About"
import BeginHome from "../../Components/BeginHome/BeginHome"
import Sectors from "../../Components/Sector/Sectors"
import Services from "../../Components/Service/Services"


const HomePage = () =>{
    return(
        <>
            <BeginHome/>
            <About/>
            <Services/>
            <Sectors/>
        </>
    )
}

export default HomePage