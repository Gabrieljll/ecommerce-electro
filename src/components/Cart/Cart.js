/* import {  useCartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { FaEdit } from "react-icons/fa"

import { Link } from "react-router-dom"
import "./Cart.css"
import { useEffect, useState } from "react"

import { EditProduct } from "../EditProduct/EditProduct"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
const Cart = () => {
    const {cart, emptyCart, totalCart, removeItem} = useCartContext()
    const [itemEdit, setItemEdit] = useState(null)
    const [cantidad, setCantidad] = useState(1)
    const [max, setMax] = useState(0)

    useEffect( () => {
        if(itemEdit){
            const docRef = doc(db, "productos", itemEdit.id)
            getDoc(docRef)
            .then( (doc) => {
                setMax(doc.data().stock)
            })
            setCantidad(itemEdit.cantidad)
        }

    },[itemEdit, cart])

    if (cart.length === 0){
        return (
            <>
            <div className="container my-5 cart-body">
                <h2>Tu carrito está vacío</h2>
                <hr />
                <Link to="/productos" className="btn btn-primary">Volver</Link>
            </div>
            </> 
        )
    }

    return (
        
            <div className="container my-5 cart-body">
                {
                    itemEdit && <EditProduct itemEdit={itemEdit} setItemEdit={setItemEdit} cantidad={cantidad} setCantidad={setCantidad} max={max} setMax={setMax}/>
                }
                <h2>Tu compra</h2>
                <hr />
                {
                    cart.map(item => (
                        <div className="divItem" key={item.id}>
                            <div className="divCartDetails">
                                <h3>{item.name}</h3>
                                <h5>Precio: ${item.price * item.cantidad}</h5>
                            </div>
                            <div className="divOptionsButtons">
                                <h5 className="quantity">Cantidad: {item.cantidad}</h5>
                                <button type="checkbox" onClick={() => setItemEdit(item)} className="btn btn-outline-info optionsButtons"><FaEdit /></button>
                                <button onClick={() => removeItem(item.id)} className="btn btn-outline-danger optionsButtons"><FaTrashAlt /></button>
                            </div>
                        </div>
                    ))
                }
                
                <h4>Total: ${totalCart()}</h4>
                <button className="btn btn-danger emptyCart" onClick={emptyCart}>Vaciar Carrito</button>
                <Link className="btn btn-success mx-2" to="/checkout">Terminar compra</Link>
            </div>
    )
}

export default Cart
 */