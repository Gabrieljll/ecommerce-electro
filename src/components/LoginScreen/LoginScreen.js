import "./LoginScreen.css"
import { useLoginContext } from "../../context/LoginContext"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import {useState} from "react"

import axios from "axios";

const LoginScreen = () => {
    const {user, loading} = useLoginContext()
    const navigate = useNavigate()
    const [nombre, setNombre] = useState("")
    const [password, setPassword] = useState("")
    const urlBack = process.env.REACT_APP_URL_BACK;
    const {values, handleInputChange} = useForm({
        nombre: "",
        password: ""
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(urlBack+"/login", {nombre, password})
        .then(res => console.log(res))
        .catch(err => console.log(err))
        navigate("/home")
    }
    return (
        <div className="login-screen">
            <div className="login">
                <h2>Login</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control my-2" value={values.nombre} onChange={handleInputChange}
                    name="nombre" />
                    <input type="password" className="form-control my-2" value={values.password} onChange={handleInputChange} name="password" />
                    <button className="btn btn-primary" disabled={loading}>Ingresar</button>
                    {user.error && <p className="error">{user.error}</p>}
                </form>
            </div>
        </div>
    )
}

export default LoginScreen
