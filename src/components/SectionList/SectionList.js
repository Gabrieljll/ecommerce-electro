import React, { useEffect, useState } from "react"
import  Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom"
import { useInView } from "react-intersection-observer";
import "../../styles/animate.min.css"
import "./Section.css"

const imagenSection1 = "/images/section/electro2.jpg"


export const SectionList = () =>{

    const [ref, inView] = useInView({
        triggerOnce: true, // La animación solo se activa una vez
        threshold: 0.1, // Cambia según la parte visible que deseas
      });
    
      useEffect(() => {
        if (inView) {
          // La sección es visible, puedes agregar lógica adicional si es necesario
          console.log("lala")
        }
      }, [inView]);

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
            <div className='w-2/4 m-auto'>
                <div className="mt-20">
                <Slider {...settings}>
                    {data.map((d) => (
                    <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
                        <div className='h-40 xl:h-56 bg-transparent flex justify-center items-center rounded-t-xl'>
                        <img src={d.img} alt="" className="h-44 w-36"/>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-4 p-4">
                            <p className="text-xl font-semibold text-center">{d.name}</p>
                            <p className="text-center hidden lg:block">{d.review}</p>
                            <Link to={"/productos"} className='shadow-slate-300 text-base bg-bright-red text-vary-light-gray block w-16 h-min lg:w-max py-4 lg:px-12 rounded-full shadow-md'>Ver más</Link>
                        </div>
                    </div>
                    ))}
                </Slider>
                </div>
            </div>
        </section>

         <section className={`wrapper mt-4 flex gap-8 justify-center items-center pb-12 md:grid-cols-2 md:py-24 ${
          inView ? "animate__animated animate__fadeInUp" : ""
        }`}>

        <article className={`flex flex-col items-center text-center mb-8 md:flex-row md:items-start md:text-left ${
            inView ? "animate__animated animate__fadeInUp" : ""
          }`}>

            <img src="./images/section/389852.png" className="w-44 max-w-lg mb-4 md:mb-0 md:mr-4 hidden lg:block" />
            <div>
            <h1 className="text-center text-4xl font-bold text-very-dark-blue md:text-5xl mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.

            </h1>

            <p className="text-center text-dark-grayish-blue">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </p>
            </div>
            <img src="./images/section/389852.png" className="transform scale-x-[-1] w-44 max-w-lg mt-4 md:mt-0 md:ml-4 hidden lg:block" />
        </article>

        </section>

            <section className="section animate__animated animate__fadeInUp">
                <div className="flex max-w-[1920px] h-min w-full m-auto py-5 px-4 relative group">
                    <div style={{ backgroundImage: `url(${imagenSection1})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
                        <div className="text-right font-principal sectionInformation shadow-sm shadow-bright-red/30 py-3 block text-4xl font-extrabold leading-none tracking-tight  sm:text-5xl lg:text-6xl dark:text-white">
                            <h1 className="text-white">Lorem ipsum dolor sit amet, </h1>
                            <h1 className="text-white">consectetur adipiscing elit.</h1>
                            <h6 className="text-white text-2xl mt-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                            <h6 className="text-white text-2xl">Lorem ipsum dolor sit amet</h6>
                            <div className="flex justify-center items-end">
                                <div className="shadow-slate-300 text-base button shadow-md hidden py-3 lg:block">
                                    <h6>Boton accion</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  




            <section id="atencionCliente" className="wrapper text-center py-24 grid gap-12 md:grid-cols-2 md:text-left">
                <article>
                    <h2 className="text-3xl font-bold text-very-dark-blue mb-6 md:text-4xl">What’s different about Manage?</h2>
                    <p className="text-dark-grayish-blue">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
                    <div className="flex justify-center">
                        <div className="shadow-slate-300 text-base text-vary-light-gray block w-max py-4 px-12 rounded-full shadow-md mt-16 bg-[#25D366]">
                            <h6>WhatApp</h6>
                        </div>
                    </div>
                </article>

                <div className="grid gap-12">
                    <article className="space-y-4 md:space-y-6">
                        <p className="bg-very-pale-red rounded-l-full font-bold flex items-center">
                            <span className="bg-bright-red text-white px-6 rounded-full py-2">
                                01
                            </span>
                            <span className="flex-1 p-2">
                                Track company-wide progress
                            </span>
                        </p>

                        <p className="text-dark-grayish-blue text-left">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>

                    </article>

                    <article className="space-y-4 md:space-y-6">
                        <p className="bg-very-pale-red rounded-l-full font-bold flex items-center">
                            <span className="bg-bright-red text-white px-6 rounded-full py-2">
                            02
                            </span>
                            <span className="flex-1 p-2">
                                Advanced built-in reports
                            </span>
                        </p>

                        <p className="text-dark-grayish-blue text-left">Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
                        </p>

                    </article>

                    <article className="space-y-4 md:space-y-6">
                        <p className="bg-very-pale-red rounded-l-full font-bold flex items-center">
                            <span className="bg-bright-red text-white px-6 rounded-full py-2">
                                03
                            </span>
                            <span className="flex-1 p-2">
                                Everything you need in one place
                            </span>
                        </p>

                        <p className="text-dark-grayish-blue text-left">Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
                        </p>
                    </article>
                </div>
            </section>
        </>
  )
}