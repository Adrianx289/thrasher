import {MdLocationOn} from "react-icons/md"
import {MdOutlineEmail} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import {BiPhone} from "react-icons/bi"
import './Contac.css'
import React, { useEffect, useRef } from "react"
import emailjs from '@emailjs/browser';
import Aos from "aos";

const Contac = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bzfl26b', 'template_ggjmxkc', form.current, 'KmnEjYmk0PQYBsHeO')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    

    return(
        <div className='contac container section'>
            <div className='contacContainer grid'>
                <div className="contacDivContainer grid">
                    <div className="iconDivGroup flex">
                        <div className="iconGroup flex">
                            <div className="iconDiv">
                                <MdLocationOn className="icon" />
                            </div>
                        </div>
                        <div className="text">
                            <h2>Dirección</h2>
                            <h4>Calle 5, Mz. G, Lt. 11. San Juan de Miraflores</h4>
                        </div>
                    </div>
                    <div className="iconDivGroup flex">
                        <div className="iconGroup flex">
                            <div className="iconDiv">
                                <MdOutlineEmail className="icon" />
                            </div>
                        </div>
                        <div className="text">
                            <h2>Email</h2>
                            <h4>ContactoThrasher@gmail.com</h4>
                        </div>
                    </div>
                    <div className="iconDivGroup flex">
                        <div className="iconGroup flex">
                            <div className="iconDiv">
                                <BiPhone className="icon" />
                            </div>
                            <div className="iconDiv">
                                <BsWhatsapp className="icon" />
                            </div>
                        </div>
                        <div className="text">
                            <h2>Telefono / WhatsApp</h2>
                            <h4>+51 956963230</h4>
                        </div>
                    </div>
                </div>
                <div className="formContariner grid">
                    <div className="tittleDiv flex">
                        <h4>Enviar mensaje</h4>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="formElement grid">
                        <div className="formSection">
                            <label>Tu Nombre: </label>
                            <div>
                                <input type="text" name="user_name"/>
                            </div>
                        </div>
                        <div className="formSection">
                            <label>Tu Email: </label>
                            <div>
                                <input type="email" name="user_email"/>
                            </div>
                        </div>
                        <div className="formSection">
                            <label>Mensaje: </label>
                            <div>
                                <textarea name="message"/>
                            </div>
                        </div>
                        <input type="submit" value="Enviar" className="btn"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contac