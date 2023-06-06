import BeginSectorImg from '../../Assets/BeginSector.jpg'
import './BeginSector.css'

const BeginSector = () => {
    return(
        <div className='beginSector'>
            <div className='beginSectorDivImg'>
                <img src={BeginSectorImg} className='beginSectorImg' alt="Sector Image" />
            </div>
            <div className='beginSectorText'>
                <h1>Sectores</h1>
                <h2>___________</h2>
            </div>
        </div>
    )
}

export default BeginSector