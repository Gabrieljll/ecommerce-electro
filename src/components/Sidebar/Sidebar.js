import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'

import {SidebarContext} from '../../context/SidebarContext'

import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'
const Sidebar = () =>{

    const {isOpen, handleClose} = useContext(SidebarContext)
    const {cart, clearCart, total, itemAmount} = useContext(CartContext)

    return <div className={`${ isOpen ? 'right-0' : '-right-full'} overflow-y-auto 2xl:overflow-y-hidden w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}>
        
        <div className="flex items-center justify-between py-6 border-b">
            <div className="uppercase text-sm font-[Arimo-Bold]">
                Carrito ({itemAmount})
            </div>
            {/* icon */}
            <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
                <IoMdArrowForward className="text-2xl" />
            </div>
        </div>
        <div className="flex flex-col gap-y-2 h-[450px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
            { cart.map(item => {
                return <CartItem item ={item} key={item.id} />
            }) }
        </div>
        <div className="flex flex-col gap-y-1 mt-4">
            <div className="flex w-full justify-between items-center">
                {/* total */}
                <div className="uppercase font-semibold">
                    <span className="mr-2 font-[Arimo-Bold]">Total:</span> $ {parseFloat(total).toFixed(2)}
                </div>
                {/* clear cart icon */}
                <div onClick={()=>clearCart()} className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
                    <FiTrash2 />
                </div>
            </div>
            <Link to="/cart" onClick={handleClose} title="Carrito | CJRepuestos" className="bg-white border-[1.5px] border-[#850400] flex p-4 justify-center items-center text-primary w-full font-[Arimo-Bold] text-[#850400]">Ver Carrito</Link>
            <Link to="/checkout" title="Checkout | CJRepuestos" onClick={handleClose} className="flex p-4 justify-center items-center text-white w-full font-[Arimo-Bold] bg-[#850400]">Finalizar Compra</Link>
        </div>
    </div>
}

export default Sidebar;