import "./LoginScreen.css"
import { useLoginContext } from "../../context/LoginContext"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"

const LoginScreen = () => {
    const {login, user, loading, googleLogin} = useLoginContext()
    const navigate = useNavigate()
    const {values, handleInputChange} = useForm({
        email: "",
        password: ""
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
        navigate("/home")
    }
    return (
        <div className="login-screen">
            <div className="login">
                <h2>Login</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input type="email" className="form-control my-2" value={values.email} onChange={handleInputChange}
                    name="email" />
                    <input type="password" className="form-control my-2" value={values.password} onChange={handleInputChange} name="password" />
                    <button className="btn btn-primary" disabled={loading}>Ingresar</button>
                    {user.error && <p className="error">{user.error}</p>}
                </form>
                <button className="btn btn-primary" onClick={googleLogin}>Ingresar con Google</button>
                <Link to="/register">Registrarme</Link>
            </div>
        </div>
    )
}

export default LoginScreen
