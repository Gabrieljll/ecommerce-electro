import { CartWidget } from '../CartWidget/CartWidget'
import React, {useContext, useEffect} from 'react'
import { Link, useNavigate   } from 'react-router-dom'
import { Link as LinkScroll   } from 'react-scroll'
import { SidebarContext } from '../../context/SidebarContext'
import { CartContext } from '../../context/CartContext'

import {BsBag} from 'react-icons/bs'

import { IoCart } from "react-icons/io5";

export const Navbar = () =>{
    const logoImg = "/images/Logo_CJ_final.png"
    
    const {isOpen, setIsOpen} = useContext(SidebarContext)
    const {itemAmount} = useContext(CartContext)
    const navigate  = useNavigate();

    const closeMenu = () => {
        const checkbox = document.getElementById("menu");
        if (checkbox) {
            checkbox.checked = false;
        }
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth",
            });
            closeMenu();
        }
    };

    const redirectToHomeAndScroll = (sectionId) => {
        // Redirige a la vista "/home"
        navigate('/home');

        // Espera a que React Router termine de redirigir antes de hacer scroll
        setTimeout(() => {
            scrollToSection(sectionId);
        }, 0);
    };
    return (
            
        <div className="font-principal">
            <header className="shadow-lg z-100 w-full bg-white border-b">

                <nav className="wrapper h-20 xl:w-screen flex items-center justify-between overflow-visible">

                    <Link to="/home" className="">
                        {/* <img src="./images/logo.svg" className="w-full" /> */}
                        <img className="w-[50%]" src={logoImg} alt="Logo CJRepuestos Nav" title='Logo CJRepuestos Nav' />
                    </Link>

                    <input type="checkbox" id="menu" className="peer hidden" />

                    <label htmlFor="menu" className="bg-open-menu text-white w-7 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 lg:hidden"></label>

                    <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform z-40 lg:static lg:bg-none lg:translate-x-0">
                    <ul className="absolute inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold text-black shadow-2xl lg:w-max lg:text-2xl lg:bg-transparent lg:p-0 lg:grid-flow-col lg:static text-xl font-[Arimo-Regular]">
                    <li>
                        <Link to="/home" onClick={closeMenu}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/productos" onClick={closeMenu}>
                            Tienda
                        </Link>
                    </li>
                    <li>
                        <span className="cursor-pointer" onClick={() => redirectToHomeAndScroll("nosotros")}>
                            Sobre Nosotros
                        </span>
                    </li>
                    <li>
                        <span className="cursor-pointer" onClick={() => redirectToHomeAndScroll("atencionCliente")}>
                            Atención al Cliente
                        </span>
                    </li>
                    <li>
                        <Link className="cursor-pointer" to="/contactenos" onClick={closeMenu}>
                            Contáctenos
                        </Link>
                    </li>
                </ul>
                    </div>

                    
                    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative max-w-[50px]">
                        <BsBag className="text-2xl " />
                        <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                            {itemAmount}
                        </div>
                    </div>
                   
                </nav>

            </header>
        </div>
  )
}