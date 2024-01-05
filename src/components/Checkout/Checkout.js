/* import "./Checkout.css"
import { useState } from "react"
import { Navigate, Link} from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, writeBatch, documentId, query, getDocs, addDoc, where} from "firebase/firestore"
import { Formik } from "formik"
import * as Yup from 'yup'

const telefonoRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = Yup.object().shape({
    nombre: Yup.string().min(4, 'Mínimo 4 caracteres').max(30, 'Máximo 30 caracteres').required('Este campo es requerido'),
    apellido: Yup.string().min(4, 'Mínimo 4 caracteres').max(30, 'Máximo 30 caracteres').required('Este campo es requerido'),
    telefono: Yup.string().matches(telefonoRegExp, 'El número de telefono no es válido').required('Este campo es requerido'),
    direccion: Yup.string().min(8, 'Mínimo 8 caracteres').max(40, 'Máximo 40 caracteres').required('Este campo es requerido'),
    email: Yup.string().email('El email no es válido').required('Este campo es obligatorio')
})

export const Checkout = () => {

    const { cart, totalCart, emptyCart} = useCartContext()
    const [orderId, setOrderId] = useState(null)

    const createOrder = async(values) => {

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart()
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
                            emptyCart()
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
        <div className="container my-5 checkout-body">
            <h2>Terminar Compra</h2>
            <hr />

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
                    <div className="checkout-form-items">
                                                <div className="items">
                        {
                            cart.map(item => (
                                <div className="divItem divItem-checkout" key={item.id}>
                                    
                                        <div>
                                            <h3>{item.name}</h3>
                                        </div>
                                        <div>
                                            <h4 className="quantity">Cantidad: {item.cantidad}</h4>
                                        </div>
                                        <div>
                                            <h4>Precio: ${item.price * item.cantidad}</h4>
                                        </div>
                                    </div>
                            ))
                        }
                        <div className="divTotal">
                            <h4>Total: ${totalCart()}</h4>
                        </div>
                        </div>
                        <form className="form-body" onSubmit={handleSubmit}>
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
                            <div className="divFormButtons">
                                <button className="btn btn-primary" type="submit">Comprar</button>
                                <Link className="btn btn-danger" to="/home">Cancelar</Link>
                            </div>
                        </form>

                    </div>
                )}
            </Formik>


        </div>
    )
} */