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
  const isMobile = window.innerWidth < 1050;

  const slidesPC = [
    { url: image1, text: 'Repuestos para Electrodomésticos Tu solución rápida y confiable para mantener tus aparatos en funcionamiento' },
    { url: image2, text: 'Texto relacionado con electrodomésticos de hogar' },
    { url: image3, text: 'Texto relacionado con las mejores marcas' },
    { url: image4, text: 'Texto relacionado con el servicio técnico' },
    { url: image5, text: 'Texto relacionado con la atención personalizada' },
  ];

  const slidesMovil = [
    { url: image1_movil, text: 'Texto relacionado con electro repuestos' },
    { url: image2_movil, text: 'Texto relacionado con electrodomésticos de hogar' },
    { url: image3_movil, text: 'Texto relacionado con las mejores marcas' },
    { url: image4_movil, text: 'Texto relacionado con el servicio técnico' },
    { url: image5_movil, text: 'Texto relacionado con la atención personalizada' },
  ];

  const slides = isMobile ? slidesMovil : slidesPC;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 9000 }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="text-container">
            <Suspense fallback={<Loader />}>
                <div 
                    className={`w-full ${isMobile ? 'h-[100vw]' : 'h-full'} object-cover duration-500 d-flex justify-center text-center`}
                    style={{
                    backgroundImage: `url(${slide.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: isMobile ? '100vw' : '950px',
                    transition: 'background-image 1s ease',
                    marginBottom: '50px',
                    }}>

{/*                     <div className="top-[32%] left-[12%] relative">
                        <h1 className="h1-slider  text-left text-3xl font-bold text-[#96322f] md:text-[85px] mb-4 le uppercase">ELECTRO REPUESTOS</h1>
                        <div className="mt-20 w-[25%]">
                            <p className="font-[Arimo-Regular] text-center leading-5 text-3xl text-[#3d3939] md:text-5xl mb-4">{slide.text}</p>
                        </div>
                    </div> */}
                    

                    
                    
                </div>

            </Suspense>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}