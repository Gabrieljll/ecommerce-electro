import {  CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { FaEdit } from "react-icons/fa"

import { Link } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { IoMdAdd, IoMdClose, IoMdRemove} from 'react-icons/io'
const CartView = () => {
    const {cart, total, clearCart, removeFromCart} = useContext(CartContext)
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
        
            <div className={`${cart.length>1 ? '' : 'h-screen'} w-full mt-16 lg:flex lg:justify-center lg:items-center`}>

                
                <div>
                <h1 className="text-center text-3xl font-bold text-very-dark-blue md:text-3xl mb-10">Productos en tu carrito</h1>
                <hr />
                {
                    cart.map(item => (
                        <div className="flex justify-center items-center gap-y-2 lg:h-[150px] h-[200px] px-5" key={item.id}>
                            <div className="flex items-center gap-x-16 py-12 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
                                <div className="w-full max-h-[100px] flex justify-center items-center gap-x-4">
                                    <div className="max-w-[80px] max-h-[150px] h-[100px]">
                                        <img className="self-start" src={item.image} alt="" />
                                    </div>
                                    <div className="text-xs md:text-lg w-64 max-w-[350px] font-bold gap-x-4">
                                        <h3>{item.title}</h3>                                
                                    </div>
                                    <div>
                                        <h5 className="text-xs lg:text-2xl">Precio/u: <span className="lg:text-xl font-bold">${item.price * item.amount}</span></h5>
                                    </div>
                                    <div className="">
                                        <h5 className="text-xs lg:text-2xl">Cantidad: <span className="lg:text-xl font-bold">{item.amount}</span></h5>
                                    </div>
                                    <div className="">
                                        <h5 className="text-xs lg:text-2xl">Total de producto: <span className="lg:text-xl font-bold">${`${parseFloat(item.price*item.amount).toFixed(2)}`}</span> </h5>
                                    </div>
                                     {/* remove icon */}
                                    <div onClick={() => removeFromCart(item.id)} className="lg:text-xl cursor-pointer">
                                        <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                    ))
                }
                </div>
                <div>
                    <h4 className="text-center text-2xl font-bold text-very-dark-blue md:text-2xl mb-10">Total: ${total}</h4>
                    <button className="" onClick={clearCart}>Vaciar Carrito</button>
                    <Link className="" to="/checkout">Terminar compra</Link>
                </div>
            </div>
    )
}

export default CartView