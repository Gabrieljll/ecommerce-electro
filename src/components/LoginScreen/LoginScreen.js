import { useState } from "react"
import "./LoginScreen.css"
import { useLoginContext } from "../../context/LoginContext"

const LoginScreen = () => {
    const {login, user} = useLoginContext()

    const [values, setValues] = useState( { 
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
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
                    <button className="btn btn-primary">Ingresar</button>
                    {user.error && <p className="error">{user.error}</p>}
                </form>
            </div>
        </div>
    )
}

export default LoginScreen
