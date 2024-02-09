import { useState } from 'react'

export const AdminStockView = () => {

    const [values, setValues] = useState(
        {
            nombre: '',
            cantidadAgregada: '',
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
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="container my5">
                <input onChange={handleInputChange} value={values.nombre} name="nombre" type="text" className="form-control my-2" placeholder="Nombre" />
                <input onChange={handleInputChange} value={values.cantidadAgregada} name="cantidadAgregada" type="number" className="form-control my-2" placeholder="Cantidad del producto por agregar" />

                <button className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

