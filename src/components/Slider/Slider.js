import "./Slider.css"
import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
const image1 = "/images/slider/reparacion-trabajador-mantenimiento-servicio_2.jpeg"
//const image2 = "/images/slider/pexels-adrienne-andersen-2254065_3.jpg"
const image2 = "/images/slider/batidora-batidora-electrica_2.jpg"
const image3 = "/images/slider/pexels-photomix-company-213162_2.jpg"

const image1_movil = "/images/slider/reparacion-trabajador-mantenimiento-servicio_movil.jpg"
//const image2_movil = "/images/slider/pexels-adrienne-andersen-2254065_movil.jpg"
const image2_movil = "/images/slider/batidora-batidora-electrica_movil.jpg"
const image3_movil = "/images/slider/pexels-photomix-company-213162_movil.jpg"

export const Slider = () => {
    const isMobile = window.innerWidth < 1000;
    const slidesPC = [
        {
          url: image1,
        },
        {
          url: image2,
        },
        {
          url: image3,
        }
      ];

      const slidesMovil = [
        {
          url: image1_movil,
        },
        {
          url: image2_movil,
        },
        {
          url: image3_movil,
        }
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
        }, 2000);
    
        return () => clearInterval(intervalId);
      }, [currentIndex]);


      return (
        <div className='max-w-[1920px] h-[600px] w-full m-auto pb-5 relative group'>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url}) ` }}
            className="w-full h-full bg-center bg-cover duration-500"
          >
            <div className="font-principal sliderInformation shadow-sm shadow-bright-red/30 py-3 block mb-4 text-4xl font-extrabold leading-none tracking-tight  sm:text-5xl lg:text-6xl dark:text-white">
                <h1 className="text-white">Lorem ipsum dolor sit amet, </h1>
                <h1 className="text-white">consectetur adipiscing elit.</h1>
                <h6 className="text-white text-2xl mt-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                <h6 className="text-white text-2xl">Lorem ipsum dolor sit amet</h6>
                <div className="flex mt-8 ml-auto justify-start items-end">
                    <div className="shadow-slate-300 text-base buttonAction shadow-md py-3 block">
                        <h6>Boton accion</h6>
                    </div>
                </div>
            </div>
          </div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      );
}