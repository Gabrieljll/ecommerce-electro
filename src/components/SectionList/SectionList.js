import React, { useEffect } from "react"
import  Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom"
import { useInView } from "react-intersection-observer";
import "../../styles/animate.min.css"
import "./Section.css"
import { AiOutlineShoppingCart } from "react-icons/ai";

const imagenSection1 = "/images/section/electro2.jpg"


export const SectionList = () =>{

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
          name: `Lorem ipsum`,
          img: `/images/iconSlider/earphones-svgrepo-com.svg`,
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
        },
        {
          name: `Lorem ipsum`,
          img: `/images/iconSlider/extract-svgrepo-com.svg`,
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
        },
        {
          name: `Lorem ipsum`,
          img: `/images/iconSlider/fan-svgrepo-com.svg`,
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
        },
        {
          name: `Lorem ipsum`,
          img: `/images/iconSlider/hair-dryer-svgrepo-com.svg`,
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
        },
        {
          name: `Lorem ipsum`,
          img: `/images/iconSlider/kettle-svgrepo-com.svg`,
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
        },
        {
            name: `Lorem ipsum`,
            img: `/images/iconSlider/vacuum-cleaner-svgrepo-com.svg`,
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
        }
        
      ];

    return (
        <>
        <section id="nosotros">
            <div ref={ref1} className={`lg:w-3/5 w-4/5 m-auto transition-fade-up ${inView1 ? "active" : ""}`}>
                <div className="mt-20">
                <Slider {...settings}>
                    {data.map((d) => (
                    <div key={d.name} className="bg-white lg:h-[450px] h-[350px] text-black rounded-xl md:w-full lg:w-1/3">
                        <div className='h-40 xl:h-56 bg-transparent flex justify-center items-center rounded-t-xl'>
                            <img src={d.img} alt="" className="h-44 w-36"/>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-4 p-4">
                            <p className="text-xl font-semibold text-center">{d.name}</p>
                            <p className="text-center hidden lg:block">{d.review}</p>
                            <Link to={"/productos"} className='shadow-slate-300 lg:text-base text-[10px] bg-[#ae322e] text-vary-light-gray block w-24 text-center h-min lg:w-max py-4 lg:px-12 rounded-full shadow-md uppercase font-bold'>Ver productos</Link>
                        </div>
                    </div>
                    ))}
                </Slider>
                </div>
            </div>
        </section>

         <section ref={ref2} className={`w-[100%] overflow-hidden mt-4 flex gap-8 justify-center items-center pb-12 md:grid-cols-2 md:py-24 transition-fade-up ${
          inView2 ? "active" : ""
        }`}>
            <article ref={ref3} className={`flex flex-col items-center text-center mb-8 md:flex-row md:items-start md:text-left transition-fade-up ${
                inView3 ? "active" : ""
            }`}>

                <img src="./images/section/hand.png" className="w-44 max-w-lg scale-x-[-1] mb-4 md:mb-0 md:mr-4 hidden lg:block" />
                <div>
                    <h1 className="text-center text-4xl font-bold text-[#ae322e] md:text-5xl mb-4 uppercase">Una vida dedicada al servicio</h1>

                    <p className="text-center text-black font-medium text-[23px]">Cj Repuestos nace con la idea de ofrecer al minorista y al consumidor final el mejor servicio, en el momento preciso, y al mejor precio. Con más de treinta y cinco años en la industria, nuestra trayectoria y nuestros clientes avalan el camino que nos ha traído hasta este lugar, apuntando siempre a ser el socio de confianza del técnico y el minorista, y colaborando a mantener en las mejores condiciones el hogar de todos los argentinos
                    </p>
                </div>
                <img src="./images/section/hand.png" className="transform w-44 max-w-lg mt-4 md:mt-0 md:ml-4 hidden lg:block" />
            </article>
        </section>

        <section ref={ref4} className={`section transition-fade-up ${inView4 ? "active" : ""}`}>
                <div className="flex max-w-[1920px] h-min w-full m-auto py-5 relative group">
                    <div style={{ backgroundImage: `url(${imagenSection1})` }} className='w-full h-full bg-center bg-cover duration-500'>
                        <div className="text-right font-principal sectionInformation shadow-sm shadow-bright-red/30 py-3 block text-4xl font-extrabold leading-none tracking-tight  sm:text-5xl lg:text-6xl dark:text-white">
                            <h1 className="text-white">¿Buscas renovar tu casa?</h1>
                            <h6 className="text-white text-2xl mt-7">Consulte por nuestro servicio de venta de outlet, con productos totalmente</h6>
                            <h6 className="text-white text-2xl mb-10">nuevos de primera línea al precio más bajo del mercado, según disponibilidad.</h6>
                            <div className="flex justify-center items-end">
                                <Link to={"/productos"} className="shadow-slate-300 text-base button shadow-md py-3 flex justify-center items-center tracking-tight">
                                    <h6>Consultar Outlet </h6>
                                    <AiOutlineShoppingCart className="text-4xl" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  




            <section ref={ref5} id="atencionCliente" className={`wrapper text-center py-24 grid gap-12 md:grid-cols-2 md:text-left transition-fade-up ${inView5 ? "active" : ""}`}>
                <article>
                    
                        <div className="flex items-center justify-center text-center">
                            <h2 className="text-3xl font-bold text-[#ae322e] mb-6 md:text-3xl uppercase">Consulta gratis para tus electrodomésticos.</h2>

                        </div>
                        <div className="flex items-center justify-center text-center">
                            <p className="text-black font-medium text-[23px]">Envianos un mensaje y obtené un diagnóstico sin cargo de parte de nuestro staff técnico.
                            </p>

                        </div>
                    
                    <div className="flex justify-evenly">
                        <div className="flex flex-col  items-center justify-center">
                            <div className="flex justify-center mt-20">
                                <img className="max-w-[50%]" src="./images/section/Mail_400.png" alt="" />
                            </div>
                            <div className="shadow-slate-300 text-base text-center text-black block w-max mt-2 bg-[#ae322e] rounded shadow-xl">
                                <h1 className="text-white p-2 text-2xl uppercase">Mail</h1>
                            </div>
                        </div>
                        <div className="flex flex-col  items-center justify-center">
                            <div className="flex justify-center mt-20">
                                <img className="max-w-[50%]" src="./images/section/Wsp_400.png" alt="" />
                            </div>                        
                            <div className="shadow-slate-300 text-base text-vary-light-gray block w-max mt-2 bg-[#ae322e] rounded shadow-xl">
                            <h1 className="text-white p-2 text-2xl uppercase">Whatsapp</h1>
                            </div>
                        </div>
                    </div>
                </article>

                <div className="grid gap-12">
                    <article className="space-y-4 md:space-y-6">
                        <div className="font-medium flex items-center justify-center">
                            <div className="bg-[#ae322e] rounded shadow-xl">
                                <span className="flex-1 text-center">
                                    <h1 className="text-white p-2 text-2xl">Logística a todo el país.</h1>
                                </span>
                            </div>
                        </div>

                        <p className="text-black font-medium text-[23px] text-center">Trabajamos con proveedores logísticos de primera línea.
                        Consulte envíos a su región, costos y descuentos especiales por cantidad.</p>

                    </article>

                    <article className="space-y-4 md:space-y-6">
                    <div className="font-medium flex items-center justify-center">
                            <div className="bg-[#ae322e] rounded shadow-xl">
                                <span className="flex-1 text-center">
                                    <h1 className="text-white p-2 text-2xl">Venta mayorista y minorista</h1>
                                </span>
                            </div>
                        </div>

                        <p className="text-black font-medium text-[23px] text-center">Atención especializada al técnico/service que busca 
                            abastecer su stock. Consulte por promociones y descuentos según cantidad.
                        </p>

                    </article>

                    <article className="space-y-4 md:space-y-6">
                    <div className="font-medium flex items-center justify-center">
                            <div className="bg-[#ae322e] rounded shadow-xl">
                                <span className="flex-1 text-center">
                                    <h1 className="text-white p-2 text-2xl">Servicio de ventas al público</h1>
                                </span>
                            </div>
                        </div>

                        <p className="text-black font-medium text-[23px] text-center">Consulte por electrodomésticos nuevos, reacondicionados 
                            y usados al mejor precio
                        </p>
                    </article>
                </div>
            </section>
        </>
  )
}