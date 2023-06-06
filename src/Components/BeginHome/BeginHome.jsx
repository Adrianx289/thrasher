import BeginHomeImg from '../../Assets/ImgBegin.jpg'
import './BeginHome.css'

const BeginHome = () => {
    return(
        <div className='beginHome'>
            <div className='beginHomeDivImg'>
                <img src={BeginHomeImg} className='beginHomeImg' alt="Home Image" />
            </div>
            <div className='beginHomeText'>
                <h4>Lorem, ipsum</h4>
                <h1>Lorem ipsum, dolor sit amet conectetur adipisicing elit.</h1>
            </div>
        </div>
    )
}

export default BeginHome