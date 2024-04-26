import "./Slider.css";
import React, { useEffect, useState, useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Link } from "react-router-dom";
const image1 = "/images/nuevas_imgs/electro_repuestos.webp"
const image2 = "/images/nuevas_imgs/electrodomesticos_de_hogar.webp"
const image3 = "/images/nuevas_imgs/las_mejores_marcas.webp"
const image4 = "/images/nuevas_imgs/servicio_tecnico.webp"
const image5 = "/images/nuevas_imgs/atencion_personalizada.webp"

const image1_movil = "/images/nuevas_imgs/electro_repuestos_cuadrado.webp"
const image2_movil = "/images/nuevas_imgs/electrodomesticos_de_hogar_cuadrado.webp"
const image3_movil = "/images/nuevas_imgs/las_mejores_marcas_cuadrado.webp"
const image4_movil = "/images/nuevas_imgs/sevicio_tecnico_cuadrado.webp"
const image5_movil = "/images/nuevas_imgs/atencion_personalizada_cuadrado.webp"

export default function Slider() {
  const isMobile = window.innerWidth < 1030;
  const slidesPC = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
    { url: image5 }

  ];

  const slidesMovil = [
    { url: image1_movil },
    { url: image2_movil },
    { url: image3_movil },
    { url: image4_movil },
    { url: image5_movil }
  ];

  const slides = isMobile ? slidesMovil : slidesPC;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const chevronRightRef = useRef();

  useEffect(() => {
    const chevronRightElement = chevronRightRef.current;

    for (let i = 0; i < 3; i++) {
      if (chevronRightElement) {
        nextSlide();
      }
    }
  }, []);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 100);
  }, []);

  return ( 
  <div className = { `max-w-[1920px] ${isMobile ? 'h-[100vw]' : 'h-[950px]'} w-full m-auto pb-5 relative group transition-fade-up ${isActive ? 'active' : ''}` } >
    <div style = {
      {
        backgroundImage: `url(${slides[currentIndex].url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: isMobile ? '100vw' : '950px', // Altura específica para las imágenes de fondo
        transition: 'background-image 1s ease', // Solo transición de la imagen de fondo
      }
    }
    className = "w-full h-full object-cover duration-500" > {
      isMobile && ( <img src = { slides[currentIndex].url }
        alt = { `Slide ${currentIndex + 1}` }
        title = { `Slide ${currentIndex + 1}` }
        className = "w-full h-full object-fit"
        style = {
          {
            width: '100%', // Ajuste para dispositivos móviles
            height: '100%', // Esto asegura que la imagen tenga la altura completa en dispositivos móviles
            opacity: isActive ? 1 : 0,
            transition: 'opacity 0.1s ease'
          }
        }
        />
      )
    } 
    </div>
     <div className = 'hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' >
    <BsChevronCompactLeft onClick = { prevSlide } size = { 30 }/> 
    </div> 
    <div ref = { chevronRightRef }
    className = 'hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' >
    <BsChevronCompactRight onClick = { nextSlide } size = { 30 }/>
    </div >
        <div className = 'flex top-4 justify-center py-2' > {
        slides.map((slide, slideIndex) => ( 
            <div key = { slideIndex } onClick = { () => goToSlide(slideIndex) } className = 'text-2xl cursor-pointer' >
            <RxDotFilled />
            </div>
        ))
        }
        </div>
    </div>
  );
}