import React, { useEffect } from "react"
import  Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom"
import { useInView } from "react-intersection-observer";
import "../../styles/animate.min.css"
import "./Section.css"
import { AiOutlineShoppingCart } from "react-icons/ai";

const imagenSection1 = "/images/section/electro2.png"


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
        },
        {
          name: `Lorem ipsum`,
          img: `/images/iconSlider/extract-svgrepo-com.svg`,
        },
        {
          name: `Lorem ipsum`,
          img: `/images/iconSlider/fan-svgrepo-com.svg`,
        },
        {
          name: `Lorem ipsum`,
          img: `/images/iconSlider/hair-dryer-svgrepo-com.svg`,
        },
        {
          name: `Lorem ipsum`,
          img: `/images/iconSlider/kettle-svgrepo-com.svg`,
        },
        {
            name: `Lorem ipsum`,
            img: `/images/iconSlider/vacuum-cleaner-svgrepo-com.svg`,
        }
        
      ];

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
                            <img src={d.img} alt="" className="h-44 w-36"/>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-4 p-4">
                            <p className="text-xl text-center ">{d.name}</p>
                            <Link to={"/productos"} className='shadow-slate-300 lg:text-base text-[10px] bg-[#ae322e] text-vary-light-gray block w-24 text-center h-min lg:w-max py-4 lg:px-12 rounded-full shadow-md uppercase font-bold font-[Arimo-Regular]'>Ver productos</Link>
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
                    <h1 className="text-center text-4xl font-bold text-[#ae322e] md:text-5xl mb-4 uppercase">Una vida dedicada al servicio</h1>

                    <p className="text-center text-black font-medium text-[23px]">CJ Repuestos nace con la idea de ofrecer al minorista y al consumidor final el mejor servicio, en el momento preciso, y al mejor precio. Con más de treinta y cinco años en la industria, nuestra trayectoria y nuestros clientes avalan el camino que nos ha traído hasta este lugar, apuntando siempre a ser el socio de confianza del técnico y el minorista, y colaborando a mantener en las mejores condiciones el hogar de todos los argentinos
                    </p>
                </div>
                <img src="./images/section/hand.png" className="transform w-44 max-w-lg mt-4 md:mt-0 md:ml-4 hidden lg:block" />
            </article>
        </section>

        <section ref={ref4} className={`section transition-fade-up ${inView4 ? "active" : ""}`}>
                <div className="flex h-[100%] w-full m-auto py-5 relative group">
                    <div style={{ backgroundImage: `url(${imagenSection1})` }} className='flex justify-evenly w-[100%] h-[625px] bg-center bg-cover duration-500'>
                            <div className="flex w-[60%] h-[625px] pb-10 justify-center items-end">
                                <Link to={"/productos"} className="shadow-slate-300 text-base button shadow-md py-3 flex justify-start items-center tracking-tight">
                                    <h6>Consultar Outlet </h6>
                                    <AiOutlineShoppingCart className="text-4xl" />
                                </Link>
                            </div>
                            <div className="w-[40%] h-[625px] bg-center bg-cover duration-500">

                            </div>
                    </div>
                </div>
            </section>  




            <section ref={ref5} id="atencionCliente" className={`wrapper text-center py-24 grid gap-12 md:grid-cols-2 md:text-left transition-fade-up ${inView5 ? "active" : ""}`}>
                <article>
                    
                        <div className="flex items-center justify-center text-center">
                            <h1 className="text-3xl font-bold text-[#ae322e] mb-6 md:text-4xl uppercase">Consulta gratis para tus electrodomésticos.</h1>

                        </div>
                        <div className="flex items-center justify-center text-center">
                            <p className="text-black font-medium text-[23px]">Envianos un mensaje y obtené un diagnóstico sin cargo de parte de nuestro staff técnico.
                            </p>

                        </div>
                    
                    <div className="flex justify-evenly mb-10 xl:mb-0">
                        <div className="flex flex-col  items-center justify-center">
                            <div className="flex justify-center mt-10 xl:mt-20">
                                <img className="max-w-[50%]" src="./images/section/Mail_400.png" alt="" />
                            </div>
                            <div className="shadow-slate-300 text-base text-center text-black block w-max mt-2 bg-[#ae322e] rounded shadow-xl">
                                <p className="text-white p-2 text-2xl uppercase font-[Arimo-Regular]">Mail</p>
                            </div>
                        </div>
                        <div className="flex flex-col  items-center justify-center">
                            <div className="flex justify-center mt-10 xl:mt-20">
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
                                    <h1 className="text-white p-2 text-3xl font-[Arimo-Regular]">Logística a todo el país.</h1>
                                </span>
                            </div>
                        </div>

                        <p className="text-[23px] text-center">Trabajamos con proveedores logísticos de primera línea.
                        Consulte envíos a su región, costos y descuentos especiales por cantidad.</p>

                    </article>

                    <article className="space-y-4 md:space-y-6">
                    <div className="font-medium flex items-center justify-center">
                            <div className="bg-[#ae322e] rounded shadow-xl">
                                <span className="flex-1 text-center">
                                    <h1 className="text-white p-2 text-3xl font-[Arimo-Regular]">Venta mayorista y minorista</h1>
                                </span>
                            </div>
                        </div>

                        <p className="text-[23px] text-center">Atención especializada al técnico/service que busca 
                            abastecer su stock. Consulte por promociones y descuentos según cantidad.
                        </p>

                    </article>

                    <article className="space-y-4 md:space-y-6">
                    <div className="font-medium flex items-center justify-center">
                            <div className="bg-[#ae322e] rounded shadow-xl">
                                <span className="flex-1 text-center">
                                    <h1 className="text-white p-2 text-3xl font-[Arimo-Regular]">Servicio de ventas al público</h1>
                                </span>
                            </div>
                        </div>

                        <p className="text-[23px] text-center">Consulte por electrodomésticos nuevos, reacondicionados 
                            y usados al mejor precio
                        </p>
                    </article>
                </div>
            </section>
        </>
  )
}