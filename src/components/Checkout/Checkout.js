
import React, { useState, useContext } from "react"
import { Navigate, Link} from "react-router-dom"
import { db } from "../../firebase/config"
import { collection, writeBatch, documentId, query, getDocs, addDoc, where} from "firebase/firestore"
import { Formik } from "formik"
import * as Yup from 'yup'
import {CartContext} from '../../context/CartContext'
/* import { SiMercadopago } from "react-icons/si"; */
import axios from "axios";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'




const mercadoPagoButtonIMG= "/images/checkout/icons8-mercado-pago-144.png"
const mercadoPagoImg = "/images/hero/Mercado-Pago-Logo.png"
const telefonoRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = Yup.object().shape({
    nombre: Yup.string().min(4, 'Mínimo 4 caracteres').max(30, 'Máximo 30 caracteres').required('Este campo es requerido'),
    apellido: Yup.string().min(4, 'Mínimo 4 caracteres').max(30, 'Máximo 30 caracteres').required('Este campo es requerido'),
    direccion: Yup.string().min(8, 'Mínimo 8 caracteres').max(40, 'Máximo 40 caracteres').required('Este campo es requerido'),
    localidad: Yup.string().min(8, 'Mínimo 8 caracteres').max(40, 'Máximo 40 caracteres').required('Este campo es requerido'),
    telefono: Yup.string().matches(telefonoRegExp, 'El número de telefono no es válido').required('Este campo es requerido'),
    email: Yup.string().email('El email no es válido').required('Este campo es obligatorio')
})


export const Checkout = () => {
    const { cart, total, clearCart} = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [preferenceId, setPreferenceId] = useState(null);
    const [mostrarWallet, setMostrarWallet] = useState(false);
    const publicKey = process.env.REACT_APP_MP_PUBLIC_KEY;
    const urlBack = process.env.REACT_APP_URL_BACK;
    initMercadoPago(publicKey, {locale: "es-AR"});

    const createOrder = async(values) => {

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
    }

    if (orderId){
        return (
            <div className="container my-5 checkout-body">
                <h2>Tu compra ha sido exitosa</h2>
                <hr/>
                <p>Tu código de orden es: {orderId}</p>
                <Link className="btn btn-primary" to="/home">Volver</Link>
            </div>
        )
    }
    const volverAlInicio = () => {
        return <Navigate to="/home" />
    }

    if ( cart.length === 0 ) {
        volverAlInicio()
    }


    const createPreference = async () => {
        try {
          const response = await axios.post(urlBack+"/create_preference", {
            description: "Bananita contenta",
            price: 100,
            quantity: 1,
          });
    
          const { id } = response.data;
          return id;
        } catch (error) {
          console.log(error);
        }
      };
    
      const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
          setPreferenceId(id);
          setMostrarWallet(true);
        }
      };
    


    return (
            <div className="self-center w-full xl:w-auto flex justify-center items-center">
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
                    createOrder(values)
                }}
                validationSchema={schema}
            >
                {({
                    values, handleChange, handleSubmit, errors
                }) => (
                    
                    <div className="">
                        <form className="form-body w-full lg:flex lg:justify-evenly mt-16 lg:items-start mb-16 p-6" onSubmit={handleSubmit}>
                            <div className="font-principal lg:flex lg:flex-col gap-y-2 h-auto lg:h-[640px] lg:w-max border-b p-4 items-start">
                                <div className="sticky font-bold font-principal text-xl">
                                    <h1>¡Estás a un paso de terminar!</h1>
                                    <h1> Por favor completa con tus datos de contacto para notificarte luego de la compra </h1>
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
                                                {errors.direccion && <p>{errors.direccion}</p>}
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
                            </div>
                            
                            <div className=" xl:m-0 text-center justify-center flex flex-col p-4">
                                {/* Texto sobre mercado pago */}
                                <div className="font-principal flex flex-col justify-center items-center text-center">
                                    <h1 className="text-xl">Queremos garantizar seguridad por lo que ofrecemos</h1>
                                    <h1 className="text-xl"><strong>Mercado Pago</strong> como intermediario para realizar la compra</h1>
                                    <h1 className="text-xl">De esta forma elegis cualquiera de sus medios de pago</h1>
                                    <img className="w-[300px] xl:w-[500px]" src={mercadoPagoImg} alt="" />
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    {/* <button className="btn btn-primary" type="submit">Realizar pago</button> */}
                                    <div className="">
                                        {!mostrarWallet ? (
                                            <div className="py-4 flex flex-col justify-center items-center mb-6 w-[250px] bg-green-500 cursor-pointer text-white rounded-xl" onClick={handleBuy}>
                                            <p className="text-xl">Realizar pago</p>
                                            </div>
                                        ) : (
                                            <Wallet initialization={{ preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />
                                        )}
                                    </div>
                                    <div className="cursor-pointer py-4 bg-red-500 rounded-xl w-[250px] text-white flex justify-center items-center text-xl">
                                        <p>Cancelar</p>
                                    </div>
                                    {/* <Link className="btn btn-danger" to="/home">Cancelar</Link> */}
                                </div>
                            </div>
                        </form>

                    </div>
                )}
            </Formik>
            </div>

    )
}