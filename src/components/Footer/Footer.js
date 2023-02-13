import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'


import "./Footer.css"
export const Footer = () => {
    return (
        <div className="footer">
            <div className="divFooterText">
                <p className="p-footer social">¡Siguenos en redes!</p>
            </div>
            <div className="divFooterText divFooterSocialImgs">
                <BsFacebook className='socialImg' />  
                <BsInstagram className='socialImg' />  
            </div>    
            <div className="divFooterText">
                <p className="p-footer">Los productos pertenecen a Omnilife y Seytú</p>
            </div>

            <div className="divFooterText">
                <p className="p-footer">© 2023 Nat Potencia, todos los derechos reservados</p>
            </div>
            <div className="divFooterText divDev divFooterSocialImgs">
                <a href="https://github.com/Gabrieljll"><FaGithub className='socialImg' /> </a>
                <a href="https://www.linkedin.com/in/gabriel-leguizam%C3%B3n-910bb0182/"><FaLinkedin className='socialImg' /> </a>
            </div>
            
        </div>
    )
}