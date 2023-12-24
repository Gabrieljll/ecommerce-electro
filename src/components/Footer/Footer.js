import { Link as LinkScroll   } from 'react-scroll'
import { Link } from 'react-router-dom'
import "./Footer.css"
export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Hace que el desplazamiento sea suave
        });
      };
    return (
    <footer className="bg-very-dark-blue py-24">
    <section className="wrapper grid gap-12 justify-center footer-area md:footer-area-md md:grid-cols-3 md:justify-items-center">

        <nav className="grid gap-y-4 justify-center text-white w-full md:w-full md:grid-cols-2 lg:grid-cols-3">
        <Link to="home"  onClick={scrollToTop}>Inicio</Link>
        <LinkScroll to="/productos">Tienda</LinkScroll>
        <LinkScroll to="nosotros" smooth={true} duration={500}>Sobre Nosotros</LinkScroll>
        <Link to="/contacto">Contacto</Link>
        <LinkScroll to="atencionCliente" smooth={true} duration={500}>Atención al Cliente</LinkScroll>
        </nav>

        <div className="flex flex-wrap gap-4 justify-center w-full md:justify-center">
        <a href="#">
            <img src="./images/footer/icon-facebook.svg" className="w-8" />
        </a>
        <a href="#">
            <img src="./images/footer/icon-twitter.svg" className="w-8" />
        </a>
        <a href="#">
            <img src="./images/footer/icon-instagram.svg" className="w-8" />
        </a>
        </div>

        <Link to="home"  onClick={scrollToTop} className="flex justify-center md:justify-end">
            <p className="font-extrabold text-white text-6xl">LOGO</p>
        </Link>

        <p className="text-dark-grayish-blue text-center md:text-right md:col-span-2 lg:col-span-3">
        Copyright 2023. All Rights Reserved
        </p>
    </section>
    </footer>


    )
}