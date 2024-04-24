import React, { useEffect } from "react"
import  Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link, useNavigate, Navigate} from "react-router-dom"
import { useInView } from "react-intersection-observer";
import "../../styles/animate.min.css"
import "./Section.css"
import { AiOutlineShoppingCart } from "react-icons/ai";

const imagenSection1 = "/images/nuevas_imgs/buscas_renovar_tu_casa.png"
const imagenSection1Mobile = "/images/nuevas_imgs/buscas_renovar_tu_casa_cuadrado.png"


export const SectionList = () =>{
    const navigate = useNavigate();
    const isMobile = window.innerWidth < 1000;
    const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
      
      const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

      const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

      const [ref4, inView4] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

      const [ref5, inView5] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };


      const data = [
        {
          name: `Cocinas`,
          img: `/images/nuevas_imgs/categorias/Cocinas.png`,
        },
        {
          name: `Termotanques`,
          img: `/images/nuevas_imgs/categorias/Termotanques.png`,
        },
        {
          name: `Calefones`,
          img: `/images/nuevas_imgs/categorias/Calefones.png`,
        },
        {
          name: `Estufas`,
          img: `/images/nuevas_imgs/categorias/Estufas.png`,
        },
        {
          name: `Anafes`,
          img: `/images/nuevas_imgs/categorias/Anafes.png`,
        },
        {
            name: `Lavarropas`,
            img: `/images/nuevas_imgs/categorias/Lavarropas.png`,
        }
        
      ];

      const navigateToShop = () => {
        navigate("/productos")
      }

      const navigateToContact = () => {
        navigate("/contactenos")
      }

      const navigateToWsp = () => {
        window.open(process.env.REACT_APP_URL_WSP, "_blank")
      }
      
    return (
        <>
        <section id="nosotros">
            <div ref={ref1} className={`lg:w-3/5 w-4/5 m-auto transition-fade-up ${inView1 ? "active" : ""}`}>
                <div className="mt-20">
                    <div className="flex justify-center h-[45px]">
                        <h1 className="text-4xl font-[Arimo-Bold]">Categorías</h1>
                    </div>
                <Slider {...settings}>
                    {data.map((d) => (
                    <div key={d.name} className="bg-white lg:h-[450px] h-[350px] text-black rounded-xl md:w-full lg:w-1/3">
                        <div className='h-40 xl:h-56 bg-transparent flex justify-center items-center rounded-t-xl'>
                            <img src={d.img} alt="" className="h-28 w-32 xl:h-48 xl:w-48"/>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-4 p-4">
                            <p className="text-md xl:text-xl text-center ">{d.name}</p>
                            <Link to={"/productos"} className='shadow-slate-300 md:text-base text-[10px] bg-[#ae322e] text-vary-light-gray block w-24 text-center h-min lg:w-max py-3 lg:px-12 rounded-full shadow-md uppercase font-bold font-[Arimo-Regular]'>Ver productos</Link>
                        </div>
                    </div>
                    ))}
                </Slider>
                </div>
            </div>
        </section>

         <section ref={ref2} className={`w-[100%] overflow-hidden mt-16 md:mt-4 flex gap-8 justify-center items-center pb-12 md:grid-cols-2 md:py-24 transition-fade-up ${
          inView2 ? "active" : ""
        }`}>
            <article ref={ref3} className={`flex flex-col items-center text-center mb-8 md:flex-row md:items-start md:text-left transition-fade-up ${
                inView3 ? "active" : ""
            }`}>

                <img src="./images/section/hand.png" className="w-44 max-w-lg scale-x-[-1] mb-4 md:mb-0 md:mr-4 hidden lg:block" />
                <div>
                    <h1 className="text-center text-3xl font-bold text-[#ae322e] md:text-5xl mb-4 uppercase">Una vida dedicada al servicio</h1>

                    <h2 className="text-center text-black text-lg md:text-[23px]">CJRepuestos nace con la idea de ofrecer al minorista y al consumidor final el mejor servicio, en el momento preciso, y al mejor precio. Con más de treinta y cinco años en la industria, nuestra trayectoria y nuestros clientes avalan el camino que nos ha traído hasta este lugar, apuntando siempre a ser el socio de confianza del técnico y el minorista, y colaborando a mantener en las mejores condiciones el hogar de todos los argentinos con nuestros electrodomésticos y repuestos.
                    </h2>
                </div>
                <img src="./images/section/hand.png" className="transform w-44 max-w-lg mt-4 md:mt-0 md:ml-4 hidden lg:block" />
            </article>
        </section>

        <section ref={ref4} className={`section transition-fade-up ${inView4 ? "active" : ""}`}>
                <div className="h-[100%]  m-auto py-5 relative group">
                    <div className="flex justify-center items-center">
                        <img onClick={navigateToWsp} className="bg-cover group-hover:scale-105 transition duration-300" src={`${isMobile ? imagenSection1Mobile : imagenSection1 }`} alt="" />
                    </div>
                </div>
            </section>  




            <section ref={ref5} id="atencionCliente" className={`wrapper text-center py-24 grid gap-12 md:grid-cols-2 md:text-left transition-fade-up ${inView5 ? "active" : ""}`}>
                <article>
                    
                        <div className="flex items-center justify-center text-center">
                            <h1 className="text-2xl font-bold text-[#ae322e] mb-6 md:text-4xl uppercase">Consulta gratis para tus electrodomésticos y repuestos.</h1>

                        </div>
                        <div className="flex items-center justify-center text-center">
                            <p className="text-black font-medium text-lg md:text-[23px]">Envianos un mensaje y obtené un diagnóstico sin cargo de parte de nuestro staff técnico.
                            </p>

                        </div>
                    
                    <div className="flex justify-evenly mb-10 xl:mb-0 cursor-pointer">
                        <div className="flex flex-col  items-center justify-center">
                            <div onClick={navigateToContact} className="flex justify-center mt-10 xl:mt-20">
                                <img className="max-w-[50%]" src="./images/section/Mail_400.png" alt="" />
                            </div>
                            <div className="shadow-slate-300 text-base text-center text-black block w-max mt-2 bg-[#ae322e] rounded shadow-xl">
                                <p className="text-white p-2 text-2xl uppercase font-[Arimo-Regular]">Mail</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center cursor-pointer">
                            <div onClick={navigateToWsp} className="flex justify-center mt-10 xl:mt-20">
                                <img className="max-w-[50%]" src="./images/section/Wsp_400.png" alt="" />
                            </div>                        
                            <div className="shadow-slate-300 text-base text-vary-light-gray block w-max mt-2 bg-[#ae322e] rounded shadow-xl">
                            <h1 className="text-white p-2 text-2xl uppercase font-[Arimo-Regular]">Whatsapp</h1>
                            </div>
                        </div>
                    </div>
                </article>

                <div className="grid gap-12">
                    <article className="space-y-4 md:space-y-6">
                        <div className="font-medium flex items-center justify-center">
                            <div className="bg-[#ae322e] rounded shadow-xl">
                                <span className="flex-1 text-center">
                                    <h1 className="text-white p-2 text-2xl md:text-3xl font-[Arimo-Regular]">Logística a todo el país.</h1>
                                </span>
                            </div>
                        </div>

                        <p className="text-lg md:text-[23px] text-center">Trabajamos con proveedores logísticos de primera línea.
                        Consulte envíos a su región, costos y descuentos especiales por cantidad de electrodomésticos o repuestos.</p>

                    </article>

                    <article className="space-y-4 md:space-y-6">
                    <div className="font-medium flex items-center justify-center">
                            <div className="bg-[#ae322e] rounded shadow-xl">
                                <span className="flex-1 text-center">
                                    <h1 className="text-white p-2 text-2xl md:text-3xl font-[Arimo-Regular]">Venta mayorista y minorista</h1>
                                </span>
                            </div>
                        </div>

                        <p className="text-lg md:text-[23px] text-center">Atención especializada al técnico/service que busca 
                            abastecer su stock. Consulte por promociones y descuentos según cantidad.
                        </p>

                    </article>

                    <article className="space-y-4 md:space-y-6">
                    <div className="font-medium flex items-center justify-center">
                            <div className="bg-[#ae322e] rounded shadow-xl">
                                <span className="flex-1 text-center">
                                    <h1 className="text-white p-2 text-2xl md:text-3xl font-[Arimo-Regular]">Servicio de ventas al público</h1>
                                </span>
                            </div>
                        </div>

                        <p className=" text-lg md:text-[23px] text-center">Consulte por electrodomésticos nuevos, reacondicionados 
                            y usados al mejor precio
                        </p>
                    </article>
                </div>
            </section>
        </>
  )
}