import { useState } from 'react'

const Contacto = () => {

    const [values, setValues] = useState(
        {
            nombre: '',
            email: '',
        }
    )

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        }
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="container my5">
                <input onChange={handleInputChange} value={values.nombre} name="nombre" type="text" className="form-control my-2" placeholder="Nombre" />
                <input onChange={handleInputChange} value={values.email} name="email" type="email" className="form-control my-2" placeholder="Email" />

                <button className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto