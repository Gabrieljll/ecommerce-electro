import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Loader } from "../Loader/Loader";

export const ErrorScreen = ({error, logged}) => {
    const [loading, setLoading] = useState(true)
    const [contador, setContador] = useState(5)

    const navigate = useNavigate()
    setTimeout(() => {
        setLoading(false)
        redireccionar()
    }, 1000);

    useEffect( () => {
    },[contador])

    const redireccionar = () => {
        if(contador===0){
            navigate("/home")
        } else {
            console.log(contador)
            setTimeout(() => {
                setContador(contador-1)
            }, 1000)
        }
    }
    return (
        <div className="container my-5">
            {
                loading
                    ? <Loader />
                    :   <>
                        <h2>{error}</h2>
                        <h3> Puede dirigirse al inicio o espere y será redirigido en {contador}</h3>  
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