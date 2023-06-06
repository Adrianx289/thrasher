import BeginContacImg from '../../Assets/Contacto.jpg'
import './BeginContac.css'

const BeginContac = () => {
    return(
        <div className='beginContac'>
            <div className='beginContacDivImg'>
                <img src={BeginContacImg} className='beginContacImg' alt="Contac Image" />
            </div>
            <div className='beginContacText'>
                <h1>Contactos</h1>
                <h2>___________</h2>
            </div>
        </div>
    )
}

export default BeginContac