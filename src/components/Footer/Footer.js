import { Link as LinkScroll   } from 'react-scroll'
import { Link, useNavigate } from 'react-router-dom'
import "./Footer.css"
export const Footer = () => {
    const navigate = useNavigate()
    const urlWsp = process.env.REACT_APP_URL_WSP
    const logoImg = "/images/Logo_CJ_final.png"
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Hace que el desplazamiento sea suave
        });
      };


      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth",
            });
           
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
    <footer className="bg-black py-5">
    <section className="wrapper grid gap-12 justify-center items-center footer-area md:footer-area-md md:grid-cols-3 md:justify-items-center">

        <nav className="grid gap-y-4 h-min justify-center text-center text-white w-full md:w-full md:grid-cols-2 lg:grid-cols-3">
            <Link to="home"  onClick={scrollToTop}> <h1 className="text-md font-[ArchivoBlack-Regular] text-white ">Inicio</h1></Link>
            <Link to="productos" onClick={scrollToTop}><h1 className="text-md font-[ArchivoBlack-Regular] text-white ">Tienda</h1></Link>
            <LinkScroll onClick={() => redirectToHomeAndScroll("nosotros")} duration={500}><h1 className="text-md font-[ArchivoBlack-Regular] text-white">Sobre Nosotros</h1></LinkScroll>
            <Link to="/contactenos"><h1 className="text-md font-[ArchivoBlack-Regular] text-white">Contacto</h1></Link>
            <LinkScroll onClick={() => redirectToHomeAndScroll("atencionCliente")} duration={500}><h1 className="text-md font-[ArchivoBlack-Regular] text-white">Atención al Cliente</h1></LinkScroll>
            <Link to={urlWsp} target="_blank"><h1 className="text-md font-[ArchivoBlack-Regular] text-white">WhatsApp</h1></Link>
        </nav>

        <div className="flex flex-wrap gap-4 justify-center w-full md:justify-center">
        <a href="#">
            <img onClick={() => redirectToHomeAndScroll("home")} src="./images/footer/icon-facebook.svg" className="w-8" />
        </a>
        <a href="#">
            <img onClick={() => redirectToHomeAndScroll("home")} src="./images/footer/icon-twitter.svg" className="w-8" />
        </a>
        <a href="#">
            <img onClick={() => redirectToHomeAndScroll("home")} src="./images/footer/icon-instagram.svg" className="w-8" />
        </a>
        </div>

        <Link to="home"  onClick={scrollToTop} className="flex justify-center md:justify-end">
            {/* <p className="font-extrabold text-white text-6xl">LOGO</p> */}
            <img className="w-[100%]" src={logoImg} alt="" />
        </Link>

        <p className="text-dark-grayish-blue text-center md:text-right md:col-span-2 lg:col-span-3">
        Copyright 2023. All Rights Reserved
        </p>
    </section>
    </footer>


    )
}