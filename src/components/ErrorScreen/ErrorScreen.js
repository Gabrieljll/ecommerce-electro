import { useState } from "react";
import { Link } from "react-router-dom"
import { Loader } from "../Loader/Loader";

export const ErrorScreen = ({error, logged}) => {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 1000);

    return (
        <div className="container my-5">
            {
                loading
                    ? <Loader />
                    : error
                        ?   <h2>{error}</h2>
                        :   <>
                                <h2>Ups! La url solicitada no existe o no se encuentra disponible</h2>
                            </>
                 
            }
            {
                loading
                    ? <></>
                    : logged
                        ?   <Link className="btn btn-primary" to={"/productos"}>Volver</Link>
                        :   <Link className="btn btn-primary" to={"/login"}>Login</Link>
            }
                
            
        </div>
    )
}