import { Link as LinkScroll   } from 'react-scroll'
import { Link, useNavigate } from 'react-router-dom'
import "./Footer.css"
export const Footer = () => {
    const navigate = useNavigate()
    const urlWsp = process.env.REACT_APP_URL_WSP
    const logoImg = "/images/Logo_blanco.webp"
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
    <footer className="bg-slate-950 border-t-0 py-5">
    <section className="wrapper overflow-visible grid gap-12 justify-center items-center footer-area md:footer-area-md md:grid-cols-3 md:justify-items-center">

        <nav className="grid gap-y-4 h-min justify-center text-center text-white w-full md:w-max md:grid-cols-2 lg:grid-cols-3">
            <Link to="/home" title="Home | CJRepuestos" onClick={scrollToTop}> <h1 className="text-md font-[ArchivoBlack-Regular] text-slate-50 ">Inicio</h1></Link>
            <Link to="/productos" title="Productos | CJRepuestos" onClick={scrollToTop}><h1 className="text-md font-[ArchivoBlack-Regular] text-slate-50 ">Tienda</h1></Link>
            <div className="text-md font-[ArchivoBlack-Regular] text-white">
                <h1 className="text-md font-[ArchivoBlack-Regular] text-white">Horario de atención:</h1>
                <p className="font-[Arimo-Regular] text-sm">Lunes a Viernes de 9 a 18hs</p>
                <p className="font-[Arimo-Regular] text-sm">Sábados de 9 a 12hs*</p>
            
            </div>
            <Link to="/contactenos"><h1 className="text-md font-[ArchivoBlack-Regular] text-white">Contacto</h1></Link>
            <div>
                <h1 className="text-md font-[ArchivoBlack-Regular] text-white">Atención al Cliente:</h1>
                <p className="font-[Arimo-Regular] text-sm"> +54 1134890403</p>
                <p className="font-[Arimo-Regular] text-sm">jcejas.repuestos@gmail.com</p>                
            </div>
            <Link to={urlWsp} target="_blank"><h1 className="text-md font-[ArchivoBlack-Regular] text-white">WhatsApp</h1></Link>
        </nav>

        <div className="flex flex-wrap gap-4 justify-center w-full md:justify-center">
        <a href="#" title="Facebook | CJRepuestos">
            <img onClick={() => redirectToHomeAndScroll("home")} src="./images/footer/icon-facebook.svg" alt="Facebook" title="Facebook" className="w-8" />
        </a>
        <a href="#" title='Twitter | CJRepuestos'>
            <img onClick={() => redirectToHomeAndScroll("home")} src="./images/footer/icon-twitter.svg" alt='Twitter' title='Twitter' className="w-8" />
        </a>
        <a href="#" title="Instagram | CJRepuestos">
            <img onClick={() => redirectToHomeAndScroll("home")} src="./images/footer/icon-instagram.svg" alt='Instagram' title="Instagram" className="w-8" />
        </a>
        </div>

        <Link to="home" title="Home | CJRepuestos" onClick={scrollToTop} className="flex justify-center md:justify-end">
            {/* <p className="font-extrabold text-white text-6xl">LOGO</p> */}
            <img className="w-[70%] md:w-[100%]" src={logoImg} alt="Logo cjrepuestos Footer" title='Logo CJRepuestos Nav'/>
        </Link>

        <p className="text-slate-500 text-center md:text-right md:col-span-2 lg:col-span-3 text-sm md:text-base">
        Desarrollado por <Link className="text-slate-400 underline" to="https://www.linkedin.com/in/gabriel-leguizam%C3%B3n-910bb0182/" title="Gabriel Leguizamón">Gabriel Leguizamón | Desarrollador Web.</Link> Todos los derechos reservados 2024.
        </p>
    </section>
    </footer>


    )
}