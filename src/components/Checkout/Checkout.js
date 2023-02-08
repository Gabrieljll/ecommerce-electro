import { useState } from "react"
import { Navigate, Link} from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, writeBatch, documentId, query, getDocs, addDoc, doc, updateDoc, getDoc, where} from "firebase/firestore"

export const Checkout = () => {

    const { cart, totalCart, emptyCart} = useCartContext()
    const [values, setValues] = useState ( { 
        nombre: "",
        direccion:"" ,
        email:""
    })

    const [orderId, setOrderId] = useState(null)

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault()

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

        /* cart.forEach(prod =>{
            const docRef = doc(productosRef, prod.id)
            getDoc(docRef)
                .then(doc =>{
                    if (doc.data().stock - prod.cantidad > 0) {
                        updateDoc(docRef, {stock: doc.data().stock - prod.cantidad})
                    } else {
                        alert ("No hay stock disponible")
                    }
                })
        }) */
    }

    if (orderId){
        return (
            <div className="container my-5">
                <h2>Tu compra ha sido exitosa</h2>
                <hr/>
                <p>Tu código de orden es: {orderId}</p>
                <Link className="btn btn-primary" to="/">Volver</Link>
            </div>
        )
    }
    if ( cart.length === 0 ) {
        return <Navigate to="/" />
    }
    return (
        <div className="container m-5">
            <h2>Terminar Compra</h2>
            <hr />

        <form onSubmit={handleSubmit}>
            <input className="form-control my-2" type="text" name="nombre" onChange={handleInputChange} value={values.nombre} placeholder="Nombre" />
            <input className="form-control my-2" type="text" name="direccion" onChange={handleInputChange} value={values.direccion} placeholder="Dirección"/>
            <input className="form-control my-2" type="text" name="email" onChange={handleInputChange} value={values.email} placeholder="Email" />

            <button className="btn btn-primary">Enviar</button>
        </form>


        </div>
    )
}