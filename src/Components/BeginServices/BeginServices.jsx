import BeginServicesImg from '../../Assets/BeginServices.jpg'
import './BeginServices.css'

const BeginServices = () => {
    return(
        <div className='beginServices'>
            <div className='beginServicesDivImg'>
                <img src={BeginServicesImg} className='beginServicesImg' alt="Services Image" />
            </div>
            <div className='beginServicesText'>
                <h1>Servicios</h1>
                <h2>___________</h2>
            </div>
        </div>
    )
}

export default BeginServices