import { Link } from "react-router-dom"

export const ErrorScreen = ({error}) => {
    return (
        <div className="container my-5">
            {
                error
                ? error
                :   <>
                        <h2>Ups! La url solicitada no existe o no se encuentra disponible</h2>
                    </>
                 
            }
            <Link className="btn btn-primary" to={"/"}>Volver</Link>
        </div>
    )
}