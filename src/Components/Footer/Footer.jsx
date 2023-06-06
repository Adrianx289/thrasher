import logo from '../../Assets/skate.png';
import {TiSocialFacebook} from "react-icons/ti";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {FaPinterestP} from "react-icons/fa";
import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <div className='footer'>
            <div className='footerContainer grid'>
                <div className='footerImgDiv'>
                    <img src={logo} alt="Logo Footer" />
                </div>
                <div className='footerInfoDiv'>
                    <p><b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. Assumenda eius nobis exercitationem aliquid totam possimus dolore saepe quasi obcaecati mollitia! Commodi autem saepe at dicta qui asperiores repudiandae tempora animi!</p>
                </div>
                <div className='footerLinksDiv'>
                    <span>Enlaces</span>
                    <ul>
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li>
                            <a href="/nosotros">Nosotros</a>
                        </li>
                        <li>
                            <a href="/servicios">Servicios</a>
                        </li>
                        <li>
                            <a href="/sectores">Sectores</a>
                        </li>
                        <li>
                            <a href="/contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className='footerSocialDiv'>
                    <span>Redes Sociales</span>
                    <div className='footerSocialIconDiv flex'>
                        <TiSocialFacebook className='socialIcon'/>
                        <AiOutlineTwitter className='socialIcon'/>
                        <AiFillYoutube className='socialIcon'/>
                        <FaPinterestP className='socialIcon'/>
                    </div>
                </div>
            </div>
            <div className='footerSing'>
                <p>Diseñado / Desarrollado por Callua Digital</p>
            </div>
        </div>
    )
}

export default Footer