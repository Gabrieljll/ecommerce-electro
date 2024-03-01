import {  CartContext } from "../../context/CartContext"

import "./CartView.css"
import { Link } from "react-router-dom"
import React, {  useState, useContext, useEffect } from "react"
import { IoMdClose} from 'react-icons/io'
import { GoVerified } from "react-icons/go";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useInView } from "react-intersection-observer";

const Finish = () => {
    const {cart, total, clearCart, removeFromCart} = useContext(CartContext)

    const emptyCartImage = "/images/hero/taxi-shopping-cart.png"

    
    useEffect(() => {
        window.scrollTo(0, 0);
        clearCart()
      }, []); 

    const [FinishRef1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
      
      const [FinishRef2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });



    if (cart.length === 0){
        return (
            
            <div ref={FinishRef1} className={`w-full h-screen flex flex-col items-center mt-40 cart-transition-fade-up ${inView1 ? "active" : ""}`}>
                <div className="text-center text-4xl font-bold text-black md:text-5xl mb-10">
                    <h1 className="font-[Arimo-Regular]">¡Gracias por tu compra!</h1>
                </div>
                <div className="mb-12 lg:p-0 pl-6 pr-6 font-[Arial-Regular] text-xl">
                    <p>Te estaremos notificando sobre tu compra a tu correo electrónico</p>
                    <p>También consideraremos contactarnos mediante WhatsApp</p>
                </div>
                <hr />
                <div>
                    <Link className="xl:w-full w-[250px] h-[70px] bg-white border-2 border-[#850400] py-4 px-8  my-4 flex p-4 justify-between items-center text-primary font-medium mb-2" to="/productos "><span className="text-xl font-bold text-[#850400] font-[Arimo-Regular]">Explorar productos </span> <AiOutlineShoppingCart className="self-center text-4xl" /></Link>
                </div>
            </div>
            
        )
    }


}

export default Finish