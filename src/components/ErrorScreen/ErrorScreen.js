import { Link } from "react-router-dom"

export const ErrorScreen = ({error, logged}) => {
    return (
        <div className="container my-5">
            {
                error
                ? <h2>{error}</h2>
                :   <>
                        <h2>Ups! La url solicitada no existe o no se encuentra disponible</h2>
                    </>
                 
            }
            {
                logged
                ? <Link className="btn btn-primary" to={"/"}>Volver</Link>
                : <Link className="btn btn-primary" to={"/login"}>Login</Link>
            }
                
            
        </div>
    )
}