import { CartWidget } from '../CartWidget/CartWidget'
import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkScroll   } from 'react-scroll'
import { SidebarContext } from '../../context/SidebarContext'
import { CartContext } from '../../context/CartContext'

import {BsBag} from 'react-icons/bs'

export const Navbar = () =>{

    
    const {isOpen, setIsOpen} = useContext(SidebarContext)
    const {itemAmount} = useContext(CartContext)
    
    return (
            
        <div className="font-principal">
            <header className="shadow-lg z-100 w-full bg-gray-800">

                <nav className="wrapper h-20 xl:w-screen flex items-center justify-between overflow-visible">

                    <Link to="/home" className="">
                        {/* <img src="./images/logo.svg" className="w-full" /> */}
                        <p className="font-extrabold text-white text-6xl">LOGO</p>
                    </Link>

                    <input type="checkbox" id="menu" className="peer hidden" />

                    <label htmlFor="menu" className="ml-auto bg-open-menu text-white w-7 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 lg:hidden"></label>

                    <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform z-40 lg:static lg:bg-none lg:translate-x-0">

                        <ul className="absolute inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold text-dark-blue lg:text-white shadow-2xl lg:w-max lg:bg-transparent lg:p-0 lg:grid-flow-col lg:static text-xl">

                            <li>
                                <Link className="" to="/home">Inicio</Link>
                            </li>

                            <li>
                                <Link to="/productos">Tienda</Link>
                            </li>

                            <li>
                                <LinkScroll to="nosotros" smooth={true} duration={500}>Sobre Nosotros</LinkScroll>
                            </li>

                            <li>
                                <LinkScroll to="atencionCliente" smooth={true} duration={500}>Atención al Cliente</LinkScroll>
                            </li>

                            <li>
                                <Link to="/contactenos">Contáctenos</Link>
                            </li>


                        </ul>

                    </div>

                    
                    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative max-w-[50px]">
                        <BsBag className="text-2xl text-white" />
                        <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                            {itemAmount}
                        </div>
                    </div>
                   
                </nav>

            </header>
        </div>
  )
}