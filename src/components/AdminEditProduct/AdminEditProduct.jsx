import { useState } from 'react'
import { Formik } from "formik"
import * as Yup from 'yup'
import { ProductContext } from "../../context/ProductContext"
import { useParams } from "react-router-dom"
import React, { useContext, useRef, useEffect } from "react"

export const AdminStockView = () => {
/*     const { products } = useContext(ProductContext)
    const { id } = useParams()

    const product = products.find((item) => {
        return item.id === parseInt(id);
    })

    const {title, price, description, image} = product;
 */
    const schema = Yup.object().shape({
        nombre: Yup.string().min(4, 'Mínimo 4 caracteres').max(24, 'Máximo 30 caracteres').required('Este campo es requerido'),
        descripcion: Yup.string().min(8, 'Mínimo 4 caracteres').max(124, 'Máximo 30 caracteres').required('Este campo es requerido'),
        imagen: Yup.mixed()
        .test('fileFormat', 'Formato de archivo no válido. Solo se permiten archivos JPG o JPEG.', (value) => {
        // Validar el formato de archivo
        return value && ['image/jpeg', 'image/jpg'].includes(value.type);
    })
    .required('Este campo es obligatorio'),
        categoria: Yup.string().min(4, 'Mínimo 4 caracteres').max(40, 'Máximo 40 caracteres').required('Este campo es requerido'),
        precio: Yup.number().integer('El stock debe ser un número entero').required('Este campo es obligatorio'),
        stock: Yup.number().integer('El stock debe ser un número entero').required('Este campo es obligatorio'),
    })


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


        <div className="self-center w-full xl:w-auto flex justify-center items-center animate__animated animate__fadeIn">
        <Formik
            className="mt-8 xl:m-0 text-center flex flex-col items-center justify-center self-center w-[350px] xl:w-max p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-200"
            initialValues={{
                nombre: '',
                apellido: '',
                direccion: '',
                localidad: '',
                telefono: '',
                email: ''
            }}
            onSubmit={(values) => {
                console(values)
            }}
            validationSchema={schema}
        >
            {({
                values, handleChange, handleSubmit, errors , isValid
            }) => {
                const requiredFields = ["nombre", "apellido", "direccion", "localidad", "telefono", "email"];
                const requiredFieldsFilled = requiredFields.every((field) => values[field] !== "");

      
                return (
                <div className="">
                    <form className="form-body w-full lg:flex lg:justify-center mt-16 lg:items-start mb-16 p-6 fade-in" onSubmit={handleSubmit}>
                        <div className="font-principal lg:flex lg:flex-col gap-y-2 h-auto lg:h-[640px] lg:w-max border-b p-4 items-center fade-in">
                                <div className="sticky font-bold font-principal text-xl">
                                    <h1>Editar Producto: name </h1>
                                </div>
                                <div className="flex flex-col lg:flex-row justify-around items-center">
                                    <div className="mx-1 divInput">
                                        <label className="labelInput font-bold" htmlFor="nombre">Nombre de Producto</label>
                                        <div className="divInput-inputError">
                                            <input
                                                className="form-control my-2"
                                                onChange={handleChange}
                                                id="nombre"
                                                type="text"
                                                name="nombre"
                                                value={values.nombre}
                                                placeholder="Tu nombre"
                                            />
                                            <div className="divInputError text-red-500">
                                                {errors.nombre && <p>{errors.nombre}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-1 divInput">
                                        <label className="labelInput font-bold" htmlFor="apellido">Precio</label>
                                        <div className="divInput-inputError">
                                            <input
                                                className="form-control my-2"
                                                onChange={handleChange}
                                                type="text"
                                                id="apellido"
                                                name="apellido"
                                                value={values.apellido}
                                                placeholder="Tu apellido"
                                            />
                                            <div className="divInputError text-red-500">
                                                {errors.apellido && <p>{errors.apellido}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row justify-around items-center">
                                    <div className="mx-1 divInput">
                                        <label className="labelInput font-bold" htmlFor="localidad">Descripción</label>
                                        <div className="divInput-inputError">
                                            <input
                                                className="form-control my-2"
                                                onChange={handleChange}
                                                type="text"
                                                id="localidad"
                                                name="localidad"
                                                value={values.localidad}
                                                placeholder="Ej: San Miguel"
                                            />
                                            <div className="divInputError text-red-500">
                                                {errors.localidad && <p>{errors.localidad}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-1 divInput">
                                        <label className="labelInput font-bold" htmlFor="direccion">Imagen (JPG o JPEG)</label>
                                        <div className="divInput-inputError">
                                            <input
                                                className="form-control my-2"
                                                onChange={(event) => {
                                                    handleChange(event);
                                                    // Aquí, puedes hacer algo específico si necesitas manipular el archivo seleccionado.
                                                }}
                                                type="file"
                                                id="imagen"
                                                name="imagen"
                                                accept=".jpg, .jpeg"
                                            />
                                            <div className="divInputError text-red-500">
                                                {errors.imagen && <p>{errors.imagen }</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row justify-around items-center">
                                    <div className="mx-1 divInput">
                                        <label className="labelInput font-bold" htmlFor="telefono">Categoría</label>
                                        <div className="divInput-inputError">
                                            <input
                                                className="form-control my-2"
                                                onChange={handleChange}
                                                type="number"
                                                id="telefono"
                                                name="telefono"
                                                value={values.telefono}
                                                placeholder="Ej: 1111111111"
                                            />
                                            <div className="divInputError text-red-500">
                                                {errors.telefono && <p>{errors.telefono}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-1 divInput">
                                        <label className="labelInput font-bold" htmlFor="email">Stock</label>
                                        <div className="divInput-inputError">
                                            <input
                                                className="form-control my-2"
                                                onChange={handleChange}
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={values.email}
                                                placeholder="Ej: jhon@ejemplo.com"
                                            />
                                            <div className="divInputError text-red-500">
                                                {errors.email && <p>{errors.email}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`py-4 flex flex-col justify-center xl:mx-0 mx-auto items-center mb-6 w-[250px] ${
                                                isValid && requiredFieldsFilled
                                                ? "bg-green-500 cursor-pointer enabled"
                                                : "bg-gray-400 disabled"
                                            } text-white rounded-xl`} type="submit" onClick={handleSubmit}>
                                            <p className="text-xl">Continuar a pagar</p>
                                </div>
                        </div>
                    </form>

                </div>
                )
            }}
        </Formik>
        </div>






/*         <div>
            <form onSubmit={handleSubmit} className="container my5">
                <input onChange={handleInputChange} value={values.nombre} name="nombre" type="text" className="form-control my-2" placeholder="Nombre" />
                <input onChange={handleInputChange} value={values.cantidadAgregada} name="cantidadAgregada" type="number" className="form-control my-2" placeholder="Cantidad del producto por agregar" />

                <button className="btn btn-primary">Enviar</button>
            </form>
        </div> */
    )
}

