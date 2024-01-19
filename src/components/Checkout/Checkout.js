
import { useState, useContext } from "react"
import { Navigate, Link} from "react-router-dom"
import { db } from "../../firebase/config"
import { collection, writeBatch, documentId, query, getDocs, addDoc, where} from "firebase/firestore"
import { Formik } from "formik"
import * as Yup from 'yup'
import {CartContext} from '../../context/CartContext'
import { SiMercadopago } from "react-icons/si";


const mercadoPagoImg = "/images/hero/Mercado-Pago-Logo.png"
const telefonoRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = Yup.object().shape({
    nombre: Yup.string().min(4, 'Mínimo 4 caracteres').max(30, 'Máximo 30 caracteres').required('Este campo es requerido'),
    apellido: Yup.string().min(4, 'Mínimo 4 caracteres').max(30, 'Máximo 30 caracteres').required('Este campo es requerido'),
    telefono: Yup.string().matches(telefonoRegExp, 'El número de telefono no es válido').required('Este campo es requerido'),
    direccion: Yup.string().min(8, 'Mínimo 8 caracteres').max(40, 'Máximo 40 caracteres').required('Este campo es requerido'),
    email: Yup.string().email('El email no es válido').required('Este campo es obligatorio')
})


export const Checkout = () => {

    const { cart, total, clearCart} = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)

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


    return (
        <div >
            <Formik
                initialValues={{
                    nombre: '',
                    apellido: '',
                    telefono: '',
                    direccion: '',
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
                            <div className="font-principal flex flex-col gap-y-2 h-[450px] lg:h-[640px] lg:w-max overflow-y-auto overflow-x-hidden border-b">
                                <div className="font-bold">
                                    <h2>¡Estás a un paso de terminar!</h2>
                                    <h2> Por favor completa con tus datos para notificarte luego de la compra </h2>
                                </div>
                                <div>
                                    <div className="divInput">
                                        <label className="labelInput" htmlFor="nombre">Nombre:</label>
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
                                            <div className="divInputError">
                                                {errors.nombre && <p>{errors.nombre}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divInput">
                                        <label className="labelInput" htmlFor="apellido">Apellido:</label>
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
                                            <div className="divInputError">
                                                {errors.apellido && <p>{errors.apellido}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divInput">
                                        <label className="labelInput" htmlFor="telefono">Telefono:</label>
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
                                            <div className="divInputError">
                                                {errors.telefono && <p>{errors.telefono}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divInput">
                                        <label className="labelInput" htmlFor="direccion">Direccion:</label>
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
                                            <div className="divInputError">
                                                {errors.direccion && <p>{errors.direccion}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divInput">
                                        <label className="labelInput" htmlFor="email">Email:</label>
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
                                            <div className="divInputError">
                                                {errors.email && <p>{errors.email}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8 xl:m-0 text-center  justify-center flex flex-col items-center self-center">
                                {/* Texto sobre mercado pago */}
                                <div className="font-principal flex flex-col justify-center items-center text-center">
                                    <h1 className="text-xl">Queremos garantizar seguridad por lo que ofrecemos</h1>
                                    <h1 className="text-xl"><strong>Mercado Pago</strong> como intermediario para realizar la compra</h1>
                                    <h1 className="text-xl">De esta forma elegis cualquiera de sus medios de pago</h1>
                                    <img className="w-[500px]" src={mercadoPagoImg} alt="" />
                                </div>
                                <div>
                                    {/* <button className="btn btn-primary" type="submit">Realizar pago</button> */}
                                    <p className="" >Realizar pago</p>
                                    <p>Cancelar</p>
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