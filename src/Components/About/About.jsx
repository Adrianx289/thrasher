import React, { useEffect } from "react";
import AboutImg1 from '../../Assets/ImgAbout2.jpg'
import AboutImg2 from '../../Assets/ImgAbout.jpg'
import './About.css'
import Aos from "aos";
import "aos/dist/aos.css";


const About = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return(
        <div className='about'>
            <div className='aboutContainer grid'>
                <div className='aboutDivImgContainer grid'>
                    <div data-aos="fade-right" data-aos-duration="2500" className='aboutDivImg'>
                        <img src={AboutImg1} className='aboutImg' alt="About Image 1" />
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2500" className='aboutDivImg'>
                        <img src={AboutImg2} className='aboutImg' alt="About Image 2" />
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="2500" className='aboutDivText grid'>
                    <h2>Acerca de Nosotros</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla distinctio perspiciatis dignissimos veritatis nam debitis, molestiae temporibus odit voluptatibus officiis, dolor incidunt ut corrupti blanditiis et non. Consectetur, quis laudantium?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, sit quidem, quibusdam, earum sunt blanditiis ex animi maiores quam sint obcaecati? Fugiat, ea suscipit amet numquam hic aspernatur neque sunt.</p>
                </div>
            </div>
        </div>
    )
}

export default About