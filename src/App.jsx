import React from "react"
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage"
import AboutPage from "./Pages/AboutPage/AboutPage"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import ServicesPage from "./Pages/ServicesPage/ServicesPage"
import SectorPage from "./Pages/SectorPage/SectorPage"
import ContacPage from "./Pages/ContacPage/ContacPage"

function App(){
    return(
        <HashRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route exact path="/nosotros" element={<AboutPage />}/>
                <Route exact path="/servicios" element={<ServicesPage />}/>
                <Route exact path="/sectores" element={<SectorPage />}/>
                <Route exact path="/contacto" element={<ContacPage />}/>
            </Routes>
            <Footer/>
        </HashRouter>
    )
}

export default App
