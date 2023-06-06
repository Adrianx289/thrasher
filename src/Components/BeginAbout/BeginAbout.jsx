import BeginHomeImg from '../../Assets/BeginAbout.jpg'
import './BeginAbout.css'

const BeginAbout = () => {
    return(
        <div className='beginAbout'>
            <div className='beginAboutDivImg'>
                <img src={BeginHomeImg} className='beginAboutImg' alt="Home Image" />
            </div>
            <div className='beginAboutText'>
                <h1>Nosotros</h1>
                <h2>___________</h2>
            </div>
        </div>
    )
}

export default BeginAbout