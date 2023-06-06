import {RiBankLine} from "react-icons/ri"
import {BiStoreAlt} from "react-icons/bi"
import {BsHeartPulse} from "react-icons/bs"
import {VscBook} from "react-icons/vsc"
import {GoGear} from "react-icons/go"
import {AiOutlineWifi} from "react-icons/ai"
import {MdEmojiTransportation} from "react-icons/md"
import {MdOutlineMiscellaneousServices} from "react-icons/md"
import './Sectors.css'

const Sectors = () => {
    return(
        <div className='sectors container section'>
            <div className='sectorsContainer grid'>
                <div className='sectorsDivText'>
                    <h2>Sectores</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit Nulla distinctio</p>
                </div>
                <div className='sectorsDivImgContainer grid'>
                    <div className='sectorsDivImg flex'>
                        <div className='iconDiv'>
                            <RiBankLine className="icon"/>
                        </div>
                        <div className='text'>
                            <h4>Banca</h4>
                        </div>
                    </div>
                    <div className='sectorsDivImg flex'>
                        <div className='iconDiv'>
                            <BiStoreAlt className="icon"/>
                        </div>
                        <div className='text'>
                            <h4>Retail</h4>
                        </div>
                    </div>
                    <div className='sectorsDivImg flex'>
                        <div className='iconDiv'>
                            <BsHeartPulse className="icon"/>
                        </div>
                        <div className='text'>
                            <h4>Salud</h4>
                        </div>
                    </div>
                    <div className='sectorsDivImg flex'>
                        <div className='iconDiv'>
                            <VscBook className="icon"/>
                        </div>
                        <div className='text'>
                            <h4>Educación</h4>
                        </div>
                    </div>
                    <div className='sectorsDivImg flex'>
                        <div className='iconDiv'>
                            <GoGear className="icon"/>
                        </div>
                        <div className='text'>
                            <h4>Manufactura</h4>
                        </div>
                    </div>
                    <div className='sectorsDivImg flex'>
                        <div className='iconDiv'>
                            <AiOutlineWifi className="icon"/>
                        </div>
                        <div className='text'>
                            <h4>Telecomunicaciones</h4>
                        </div>
                    </div>
                    <div className='sectorsDivImg flex'>
                        <div className='iconDiv'>
                            <MdEmojiTransportation className="icon"/>
                        </div>
                        <div className='text'>
                            <h4>Sector Público</h4>
                        </div>
                    </div>
                    <div className='sectorsDivImg flex'>
                        <div className='iconDiv'>
                            <MdOutlineMiscellaneousServices className="icon"/>
                        </div>
                        <div className='text'>
                            <h4>Servicios</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectors