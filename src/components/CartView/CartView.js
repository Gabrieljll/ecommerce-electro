import {  CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { FaEdit } from "react-icons/fa"

import { Link } from "react-router-dom"
import React, { useEffect, useState, useContext } from "react"
import { IoMdAdd, IoMdClose, IoMdRemove} from 'react-icons/io'
import { GoVerified } from "react-icons/go";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai"


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
        
            <div className={`${cart.length>1 ? '' : ''} w-full lg:flex lg:justify-evenly mt-16 lg:items-start mb-16`}>

                
                <div className="flex flex-col gap-y-2 h-[450px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
                    <h1 className="sticky top-0 z-10 bg-white flex justify-center items-center text-center text-2xl font-bold text-very-dark-blue md:text-3xl mb-10">
                        <span>Productos en tu carrito</span>
                        <BsCartCheck className="self-center text-4xl md:text-5xl" />
                    </h1>
                <hr />
                {
                    cart.map(item => (
                        <div className="flex justify-center items-center gap-y-2 lg:h-[150px] h-[200px] px-5" key={item.id}>
                            <div className="flex items-center gap-x-16 py-12 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
                                <div className="w-full max-h-[100px] flex justify-center items-center gap-x-4 ">
                                    <div className="max-w-[80px] max-h-[150px] h-[100px]">
                                        <img className="self-start" src={item.image} alt="" />
                                    </div>
                                    <div className="text-sm md:text-lg w-36 max-w-[350px] font-bold gap-x-4">
                                        <h3>{item.title}</h3>                                
                                    </div>
                                    <div>
                                        <div>
                                            <h5 className="text-sm lg:text-2xl">Precio/u: <span className="lg:text-xl font-bold">${item.price * item.amount}</span></h5>
                                        </div>
                                        <div className="">
                                            <h5 className="text-sm lg:text-2xl">Cantidad: <span className="lg:text-xl font-bold">{item.amount}</span></h5>
                                        </div>
                                        <div className="">
                                            <h5 className="text-sm lg:text-2xl">Total de producto: <span className="lg:text-xl font-bold">${`${parseFloat(item.price*item.amount).toFixed(2)}`}</span> </h5>
                                        </div>
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
                <div className="mt-8 md:m-0 text-center flex flex-col items-center self-center">
                    <h4 className="text-center text-2xl text-very-dark-blue md:text-4xl mb-2">
                        <span className="md:text-3xl">
                        Total:
                        </span>
                        <span className="md:text-2xl font-bold px-2">
                            ${total}
                        </span>
                    </h4>
                    {/* <button className="" onClick={clearCart}>Vaciar Carrito</button> */}
                    <Link className="md:w-full w-[250px] h-[70px] bg-gray-200 flex p-4 justify-between items-center text-primary font-medium mb-2" to="/productos "><span className="text-xl">Volver a la tienda </span> <AiOutlineShoppingCart className="self-center text-4xl" /></Link>
                    <Link className="md:w-full w-[250px] h-[70px] bg-gray-800 flex p-4 justify-between items-center text-white font-mediummb-6" to="/checkout">
                        <span className="text-xl">Terminar compra</span>
                        <GoVerified className="self-center text-3xl" /> 
                     </Link>
                </div>
            </div>
    )
}

export default CartView