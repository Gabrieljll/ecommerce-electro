import {  CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { FaEdit } from "react-icons/fa"

import { Link } from "react-router-dom"
import { useEffect, useState, useContext } from "react"

import { EditProduct } from "../EditProduct/EditProduct"

const CartView = () => {
    const {cart, total, clearCart, removeFromCart} = useContext(CartContext)
    const [itemEdit, setItemEdit] = useState(null)
    const [cantidad, setCantidad] = useState(1)
    const [max, setMax] = useState(0)

    const emptyCartImage = "/images/hero/taxi-shopping-cart.png"

    if (cart.length === 0){
        return (
            
            <div className="w-full h-screen flex flex-col items-center mt-40">
                <div className="text-center text-4xl font-bold text-very-dark-blue md:text-5xl mb-10">
                    <h1>¡Tu carrito está vacío!</h1>
                </div>
                <div className="mb-12 lg:p-0 pl-6 pr-6">
                    <img src={emptyCartImage} alt="https://icons8.com/illustrations/author/zD2oqC8lLBBA" />
                </div>
                <hr />
                <div>
                    <Link to="/productos" className="text-lg button shadow-xl py-4 flex justify-center items-center tracking-tight">Explorar productos</Link>
                </div>
            </div>
            
        )
    }

    return (
        
            <div className="">
                {
                    itemEdit && <EditProduct itemEdit={itemEdit} setItemEdit={setItemEdit} cantidad={cantidad} setCantidad={setCantidad} max={max} setMax={setMax}/>
                }
                <h2>Tu compra</h2>
                <hr />
                {
                    cart.map(item => (
                        <div className="" key={item.id}>
                            <div className="">
                                <h3>{item.title}</h3>
                                <h5>Precio: ${item.price * item.amount}</h5>
                            </div>
                            <div className="">
                                <h5 className="">Cantidad: {item.amount}</h5>
                                <button type="checkbox" onClick={() => setItemEdit(item)} className=""><FaEdit /></button>
                                <button onClick={() => removeFromCart(item.id)} className=""><FaTrashAlt /></button>
                            </div>
                        </div>
                    ))
                }
                
                <h4>Total: ${total}</h4>
                <button className="" onClick={clearCart}>Vaciar Carrito</button>
                <Link className="" to="/checkout">Terminar compra</Link>
            </div>
    )
}

export default CartView