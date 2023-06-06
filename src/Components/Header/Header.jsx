import logo from '../../Assets/skate.png';
import { CgMenuGridO } from "react-icons/cg";
import './Header.css'
import { useState } from 'react';
import {Link} from 'react-router-dom'

const Header = () => {

    const [active, setActive] = useState("listDiv")

    const showListBar = () =>{
        const navBarListDiv = document.getElementById('navBarList')
        if (navBarListDiv.className == 'listDiv showToggleList'){
            setActive("listDiv")
        }else{
            setActive("listDiv showToggleList")
        }
    }

    return(
        <div className='header flex'>
            <div className='headerDiv flex'>
                <div className="logoDiv flex">
                    <img src={logo} className="logo" alt="Logo"/>
                    <h2>THRASHER</h2>
                </div>
                <div id='navBarList' className={active}>
                <ul className='flex'>
                    <Link to='/'>
                        <li  onClick={showListBar}>Inicio</li>
                    </Link>
                    <Link to='/nosotros'>
                        <li onClick={showListBar}>Nosotros</li>
                    </Link>
                    <Link to='/servicios'>
                        <li onClick={showListBar}>Servicios</li>
                    </Link>
                    <Link to='/sectores'>
                        <li onClick={showListBar}>Sectores</li>
                    </Link>
                </ul>
                <Link to='/contacto'>
                    <button className='btn btnList' onClick={showListBar}>Contact</button>
                </Link>
                </div>
                <Link to='/contacto'>
                    <button className='btn btnBar'>Contact</button>
                </Link>
                <div className='toggleIcon' onClick={showListBar}>
                    <CgMenuGridO className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default Header