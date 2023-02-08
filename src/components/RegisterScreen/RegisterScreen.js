import "./RegisterScreen.css"
import { useLoginContext } from "../../context/LoginContext"
import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"

export const RegisterScreen = () => {
    const {user, loading, register} = useLoginContext()

    const {values, handleInputChange} = useForm({
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)
    }
    return (
        <div className="login-screen">
            <div className="login">
                <h2>Register</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input type="email" className="form-control my-2" value={values.email} onChange={handleInputChange}
                    name="email" />
                    <input type="password" className="form-control my-2" value={values.password} onChange={handleInputChange} name="password" />
                    <button className="btn btn-primary" disabled={loading}>Registrar</button>
                    {user.error && <p className="error">{user.error}</p>}
                </form>
                <Link to="/login">Ya estoy registrado</Link>
            </div>
        </div>
    )
}

