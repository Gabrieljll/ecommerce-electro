
import React, { useState, useContext, useEffect } from 'react';
import { Navigate, Link, useNavigate } from "react-router-dom"
/* import { db } from "../../firebase/config"
import { collection, writeBatch, documentId, query, getDocs, addDoc, where} from "firebase/firestore" */
import { Formik } from "formik"
import * as Yup from 'yup'
import "./Checkout.css"
import "../../styles/animate.min.css"
import {CartContext} from '../../context/CartContext'





const telefonoRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = Yup.object().shape({
    nombre: Yup.string().min(4, 'Mínimo 4 caracteres').max(30, 'Máximo 30 caracteres').required('Este campo es requerido'),
    apellido: Yup.string().min(4, 'Mínimo 4 caracteres').max(30, 'Máximo 30 caracteres').required('Este campo es requerido'),
    direccion: Yup.string().min(8, 'Mínimo 8 caracteres').max(40, 'Máximo 40 caracteres').required('Este campo es requerido'),
    localidad: Yup.string().min(8, 'Mínimo 8 caracteres').max(40, 'Máximo 40 caracteres').required('Este campo es requerido'),
    telefono: Yup.string().matches(telefonoRegExp, 'Número no válido').required('Este campo es requerido'),
    email: Yup.string().email('El email no es válido').required('Este campo es obligatorio')
})


export const Checkout = () => {
    const { cart } = useContext(CartContext)
/*     const [orderId, setOrderId] = useState(null) */
    const navigate = useNavigate();



    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

/*     const createOrder = async(values) => {

        const orden = {
            cliente: values,
            items: cart,
            total: total
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")

        const outOfStock = []

        const itemsRef = query(productosRef, where(documentId(), 'in', cart.map(prod => prod.id)))

        const productos = await getDocs(itemsRef)

        productos.docs.forEach(doc => {
            const item = cart.find(item => item.id === doc.id)
            if(doc.data().stock >= item.cantidad){
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0){
            batch.commit()
                .then( () => {
                    addDoc(ordersRef, orden)
                        .then( (doc)=>{ 
                            setOrderId(doc.id)
                            clearCart()
                        })
                        .catch((error) => console.log(error))
                })
        } else {
            alert("Hay Items sin stock")
        }
    } */

/*     if (orderId){
        return (
            <div className="container my-5 checkout-body">
                <h2>Tu compra ha sido exitosa</h2>
                <hr/>
                <p>Tu código de orden es: {orderId}</p>
                <Link className="btn btn-primary" to="/home">Volver</Link>
            </div>
        )
    } */
    const volverAlInicio = () => {
        return <Navigate to="/home" />
    }

    if ( cart.length === 0 ) {
        volverAlInicio()
    }


    const continueToPay = async (values) => {

        // Guardar datos en localStorage
        try {
            // Filtrar solo los campos que deseas almacenar en localStorage
            const valuesToStore = {
                nombre: values.nombre,
                apellido: values.apellido,
                direccion: values.direccion,
                localidad: values.localidad,
                telefono: values.telefono,
                email: values.email,
            };

            localStorage.setItem("checkoutData", JSON.stringify(valuesToStore));
        } catch (error) {
            console.error("Error al guardar en localStorage:", error);
        }
        // Continuar con la lógica que necesitas, por ejemplo, enviar a la siguiente página
        navigate("/checkoutPayment");
    };
    


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
                    continueToPay(values)
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
                                        <p>¡Estás a un paso de terminar!</p>
                                        <p> Por favor completa con tus datos de contacto para notificarte luego de la compra </p>
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-around items-center">
                                        <div className="mx-1 divInput">
                                            <label className="labelInput font-bold" htmlFor="nombre">Nombre</label>
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
                                            <label className="labelInput font-bold" htmlFor="apellido">Apellido</label>
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
                                            <label className="labelInput font-bold" htmlFor="localidad">Localidad</label>
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
                                            <label className="labelInput font-bold" htmlFor="direccion">Direccion</label>
                                            <div className="divInput-inputError">
                                                <input
                                                    className="form-control my-2"
                                                    onChange={handleChange}
                                                    type="text"
                                                    id="direccion"
                                                    name="direccion"
                                                    value={values.direccion}
                                                    placeholder="Ej: Avenida Ejemplo 123"
                                                />
                                                <div className="divInputError text-red-500">
                                                    {errors.direccion && <p>{errors.direccion}</p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-around items-center">
                                        <div className="mx-1 divInput">
                                            <label className="labelInput font-bold" htmlFor="telefono">Telefono</label>
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
                                            <label className="labelInput font-bold" htmlFor="email">Email</label>
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
                                                    ? "bg-[#ae322e] cursor-pointer enabled"
                                                    : "bg-gray-400 disabled"
                                                } text-white rounded-xl`} type="submit" onClick={handleSubmit}>
                                                <p className="text-xl font-[Arimo-Regular]">Continuar a pagar</p>
                                    </div>
                            </div>
                        </form>

                    </div>
                    )
                }}
            </Formik>
            </div>

    )
}