import React ,{Suspense} from 'react';
import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Loader } from "../Loader/Loader";

const image1 = "/images/nuevas_imgs/electro_repuestos.webp";
const image2 = "/images/nuevas_imgs/electrodomesticos_de_hogar.webp";
const image3 = "/images/nuevas_imgs/las_mejores_marcas.webp";
const image4 = "/images/nuevas_imgs/servicio_tecnico.webp";
const image5 = "/images/nuevas_imgs/atencion_personalizada.webp";

const image1_movil = "/images/nuevas_imgs/electro_repuestos_cuadrado.webp";
const image2_movil = "/images/nuevas_imgs/electrodomesticos_de_hogar_cuadrado.webp";
const image3_movil = "/images/nuevas_imgs/las_mejores_marcas_cuadrado.webp";
const image4_movil = "/images/nuevas_imgs/sevicio_tecnico_cuadrado.webp";
const image5_movil = "/images/nuevas_imgs/atencion_personalizada_cuadrado.webp";

export default function Slider() {
  const isMobile = window.innerWidth < 1024;
  const isNotebook = window.innerWidth < 1370 && window.innerWidth > 1024
  const slidesPC = [
    { url: image1, title:'Electro Repuestos', text: `Repuestos para Electrodomésticos\nTu solución rápida y confiable para mantener\ntus aparatos en funcionamiento\n\n¡Contáctanos!`, cellContact: '+54 011 34890403', mailContact: 'jcejas.repuestos@gmail.com' },
    { url: image2, title:'Electro Repuestos', text: 'Texto relacionado con electrodomésticos de hogar', cellContact: '+54 011 34890403', mailContact: 'jcejas.repuestos@gmail.com' },
    { url: image3, title:'Electro Repuestos', text: 'Texto relacionado con las mejores marcas', cellContact: '+54 011 34890403', mailContact: 'jcejas.repuestos@gmail.com' },
    { url: image4, title:'Electro Repuestos', text: 'Texto relacionado con el servicio técnico', cellContact: '+54 011 34890403', mailContact: 'jcejas.repuestos@gmail.com' },
    { url: image5, title:'Electro Repuestos', text: 'Texto relacionado con la atención personalizada', cellContact: '+54 011 34890403', mailContact: 'jcejas.repuestos@gmail.com' },
  ];

  const slidesMovil = [
    { url: image1_movil, title:'Electro Repuestos', text: `Repuestos para Electrodomésticos\nTu solución rápida y confiable para mantener\ntus aparatos en funcionamiento\n\n¡Contáctanos!`, cellContact: '+54 011 34890403', mailContact: 'jcejas.repuestos@gmail.com' },
    { url: image2_movil, title:'Electro Repuestos', text: 'Texto relacionado con electrodomésticos de hogar', cellContact: '+54 011 34890403', mailContact: 'jcejas.repuestos@gmail.com' },
    { url: image3_movil, title:'Electro Repuestos', text: 'Texto relacionado con las mejores marcas', cellContact: '+54 011 34890403', mailContact: 'jcejas.repuestos@gmail.com' },
    { url: image4_movil, title:'Electro Repuestos', text: 'Texto relacionado con el servicio técnico', cellContact: '+54 011 34890403', mailContact: 'jcejas.repuestos@gmail.com' },
    { url: image5_movil, title:'Electro Repuestos', text: 'Texto relacionado con la atención personalizada', cellContact: '+54 011 34890403', mailContact: 'jcejas.repuestos@gmail.com' },
  ];

  const slides = isMobile ? slidesMovil : slidesPC;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 90000 }}
      className={isNotebook ? '!static' : 'relative'}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} >
          <div className="text-container">
            <Suspense fallback={<Loader />}>
                <div 
                    className={`w-full ${isNotebook ? 'h-max' : isMobile ? 'h-[100vw]' : 'h-full'} object-cover duration-500 flex flex-col justify-center text-center`}
                    style={{
                    backgroundImage: `url(${slide.url})`,
                    backgroundSize: isNotebook ? 'contain' : 'cover',
                    backgroundPosition: isNotebook ? 'top':'center',
                    backgroundRepeat: 'no-repeat',
                    height: isMobile ? '100vw' : '950px',
                    transition: 'background-image 1s ease',
                    }}>

                   {/*  {isMobile 
                    ?<>
                        <div className="flex justify-center w-full pt-28">
                            <div className="w-[55%]">
                                <h1 className="h1-slider-mobile w-max text-2xl font-bold text-[#96322f] md:text-[85px] uppercase">{slide.title}</h1>
                                <div className="mt-12 w-[100%] leading-10">
                                    <pre className="font-[Arimo-Regular] text-center md:leading-normal text-sm text-[#3d3939] md:text-4xl mb-4">{slide.text}</pre>
                                </div>
                                <div className='flex flex-col justify-evenly w-[100%] pt-5'>
                                        <div className="leading-10">
                                            <pre className="font-[Arimo-Regular] font-bold text-center text-xs text-[#000000] md:text-2xl mb-3">{slide.cellContact}</pre>
                                        </div>
                                        <div className="leading-10 pl-[3rem]">
                                            <pre className="font-[Arimo-Regular] font-bold text-center text-xs text-[#000000] md:text-2xl mb-6">{slide.mailContact}</pre>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                        </div>
                    </> 
                    
                    :<>
                        <div className="flex justify-center w-full pt-28">
                            <div className="w-[75%]">
                                <h1 className="h1-slider w-max text-3xl font-bold text-[#96322f] md:text-[85px] mb-4 uppercase">{slide.title}</h1>
                                <div className="mt-20 w-[60%] leading-10">
                                    <pre className="font-[Arimo-Regular] text-center md:leading-normal text-3xl text-[#3d3939] md:text-4xl mb-4">{slide.text}</pre>
                                </div>
                                <div className='flex justify-evenly w-[60%] pt-5'>
                                    <div className="mt-15 leading-10">
                                        <pre className="font-[Arimo-Regular] font-bold text-center text-3xl text-[#000000] md:text-2xl mb-4">{slide.cellContact}</pre>
                                    </div>
                                    <div className="mt-15 leading-10">
                                        <pre className="font-[Arimo-Regular] font-bold text-center text-xl text-[#000000] md:text-2xl mb-4">{slide.mailContact}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                        </div>
                    </>                    
                    
                    
                    
                    } */}


                    
                    
                </div>

            </Suspense>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}