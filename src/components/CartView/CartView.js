import {  CartContext } from "../../context/CartContext"

import "./CartView.css"
import { Link } from "react-router-dom"
import React, {  useState, useContext, useEffect } from "react"
import { IoMdClose} from 'react-icons/io'
import { GoVerified } from "react-icons/go";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useInView } from "react-intersection-observer";

const CartView = () => {
    const {cart, total, clearCart, removeFromCart} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    const [max, setMax] = useState(0)

    const emptyCartImage = "/images/hero/taxi-shopping-cart.png"

    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 

    const [cartViewRef1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
      
      const [cartViewRef2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });



    if (cart.length === 0){
        return (
            
            <div ref={cartViewRef1} className={`w-full h-screen flex flex-col items-center mt-40 cart-transition-fade-up ${inView1 ? "active" : ""}`}>
                <div className="text-center text-4xl font-bold text-black md:text-5xl mb-10">
                    <h1 className="font-[Arimo-Regular]">¡Tu carrito está vacío!</h1>
                </div>
                <div className="mb-12 lg:p-0 pl-6 pr-6">
                    <img src={emptyCartImage} alt="https://icons8.com/illustrations/author/zD2oqC8lLBBA" title="Carrito Vacío" />
                </div>
                <hr />
                <div>
                    <Link className="xl:w-full w-[250px] h-[70px] bg-white border-2 border-[#850400] py-4 px-8  my-4 flex p-4 justify-between items-center text-primary font-medium mb-2" to="/productos" title="Productos | CJRepuestos"><span className="text-xl font-bold text-[#850400] font-[Arimo-Regular]">Explorar productos </span> <AiOutlineShoppingCart className="self-center text-4xl" /></Link>
                </div>
            </div>
            
        )
    }

    return (
        
            <div ref={cartViewRef2} className={`w-full lg:flex lg:justify-evenly mt-16 lg:items-start mb-16 p-6 cart-transition-fade-up ${inView2 ? "active" : ""}`}>

                
                <div className="flex flex-col gap-y-2 h-[450px] lg:h-[640px] lg:w-max overflow-y-auto overflow-x-hidden border-b bg-white border border-gray-200 rounded-lg shadow-xl">
                    <h1 className="sticky top-0 z-10 bg-white flex justify-center items-center text-center text-2xl font-bold text-black md:text-3xl pb-10">
                        <span className="font-[Arimo-Regular]" >Productos en tu carrito</span>
                        <BsCartCheck className="self-center text-4xl md:text-5xl" />
                    </h1>
                <hr />
                {
                    cart.map(item => (
                        <div className="flex justify-center items-center gap-y-2 lg:h-[150px] h-[200px] px-5" key={item.id}>
                            <div className="flex items-center gap-x-16 py-12 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
                                <div className="w-full max-h-[100px] flex justify-center items-center gap-x-4 ">
                                    <div className="max-w-[80px] max-h-[150px] h-[100px]">
                                        <img className="self-start" src={"data:image/jpeg;base64,"+item.imagen} alt="" />
                                    </div>
                                    <div className="text-sm md:text-lg w-36 max-w-[400px] lg:w-[500px] font-bold gap-x-4">
                                        <h3 className="font-[Arimo-Regular]">{item.nombre}</h3>                                
                                    </div>
                                    <div className="lg:w-[500px]">
                                        <div>
                                            <h5 className="text-sm lg:text-2xl font-[Arimo-Regular]">Precio/u: <span className="lg:text-xl font-bold font-[Arimo-Regular]">${item.precio * item.amount}</span></h5>
                                        </div>
                                        <div className="">
                                            <h5 className="text-sm lg:text-2xl font-[Arimo-Regular]">Cantidad: <span className="lg:text-xl font-bold font-[Arimo-Regular]">{item.amount}</span></h5>
                                        </div>
                                        <div className="">
                                            <h5 className="text-sm lg:text-2xl font-[Arimo-Regular]">Total de producto: <span className="lg:text-xl font-bold font-[Arimo-Regular]">${`${parseFloat(item.precio*item.amount).toFixed(2)}`}</span> </h5>
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

                <div className="self-center w-full xl:w-auto flex justify-center items-center">
                    <div className="mt-8 xl:m-0 text-center flex flex-col items-center justify-center self-center w-[350px] xl:w-max p-6 bg-white border border-gray-200 rounded-lg shadow-xl">
                        <h1 className="text-xl font-[Arimo-Regular]"><span className="">Resumen de la compra</span></h1>
                        <br />
                        <div className="flex justify-between items-center w-[100%] border-t">
                            <span className="text-center text-lg text-black xl:text-lg mb-2 font-[Arimo-Regular]">
                            Sub total:
                            </span>
                            <span className="text-center text-lg text-black xl:text-lg mb-2 font-[Arimo-Regular]">
                                ${total}
                            </span>
                        </div>
                        <div className="flex justify-between items-center w-[100%] border-t">
                            <span className="text-center text-lg text-black mb-2 font-[Arimo-Regular]">
                            Total:
                            </span>
                            <span className="text-center text-lg text-black mb-2 font-[Arimo-Regular]">
                                ${total}
                            </span>
                        </div>
                        
                        {/* <button className="" onClick={clearCart}>Vaciar Carrito</button> */}
                        <Link className="xl:w-full w-[250px] h-[70px] bg-[#850400] flex p-4 justify-between items-center text-white font-medium mb-6 mt-6" to="/checkout" title="Checkout | CJRepuestos">
                            <span className="text-xl font-[Arimo-Regular] text-white">Terminar compra</span>
                            <GoVerified className="self-center text-3xl" /> 
                        </Link>
                        <Link className="xl:w-full w-[250px] h-[70px] bg-white border-2 border-[#850400] flex p-4 justify-between items-center text-primary font-medium" to="/productos" title="Productos | CJRepuestos"><span className="text-xl font-[Arimo-Regular] text-[#850400]">Volver a la tienda </span> <AiOutlineShoppingCart className="self-center text-4xl" /></Link>
                        
                    </div>                    
                </div>
            </div>
    )
}

export default CartView