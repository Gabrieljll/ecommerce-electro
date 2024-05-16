import { Link } from "react-router-dom"
import "./WhatsAppButton.css"
export const WhatsAppButton = () => {
    const urlWsp = process.env.REACT_APP_URL_WSP
    return (
        <div className="fixed bottom-16 right-5 bg-green-500 rounded-full w-[45px] h-[45px] z-50">
            <Link to={urlWsp} target="_blank" title="Boton WhatsApp" className="flex justify-center items-center w-full h-full cursor-pointer">
                <img src="/images/gif/wsp.png" title="Cargando cjrepuestos" className='size-8' alt="Cargando..." />
            </Link>
        </div>
    )
}