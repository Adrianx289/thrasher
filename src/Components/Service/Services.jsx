import ServicesImg1 from '../../Assets/Services1.jpg'
import ServicesImg2 from '../../Assets/Services2.png'
import ServicesImg3 from '../../Assets/Services3.jpg'
import ServicesImg4 from '../../Assets/Services4.jpg'
import './Services.css'

const Services = () => {
    return(
        <div className='services section'>
            <div className='servicesContainer container'>
                <div className='servicesDivText'>
                    <h2>Servicios</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla distinctio perspiciatis dignissimos veritatis nam debitis, molestiae temporibus odit voluptatibus officiis, dolor incidunt ut corrupti blanditiis et non. Consectetur, quis laudantium?</p>
                </div>
                <div className='servicesDivImgContainer grid'>
                    <div className='servicesDivImg grid'>
                        <div className='servicesDivCon'>
                            <img src={ServicesImg1} className='servicesImg' alt="About Image 1" />
                        </div>
                        <h3>Lorem ipsum dolor sit</h3>
                    </div>
                    <div className='servicesDivImg grid'>
                        <div className='servicesDivCon flex'>
                            <img src={ServicesImg2} className='servicesImg' alt="About Image 2" />
                        </div>
                        <h3>Lorem ipsum dolor sit</h3>
                    </div>
                    <div className='servicesDivImg grid'>
                        <div className='servicesDivCon flex'>
                            <img src={ServicesImg3} className='servicesImg' alt="About Image 3" />
                        </div>
                        <h3>Lorem ipsum dolor sit</h3>
                    </div>
                    <div className='servicesDivImg grid'>
                        <div className='servicesDivCon flex'>
                            <img src={ServicesImg4} className='servicesImg' alt="About Image 4" />
                        </div>
                        <h3>Lorem ipsum dolor sit</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services