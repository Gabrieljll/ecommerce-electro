import "./SliderImages.css";
import React, { useEffect, useState, useRef, MutableRefObject, lazy, Suspense } from 'react';

import { Loader } from "../Loader/Loader";

export default function SliderImages( {imgs, flagIsMobile} ) {

  return ( 
    <Suspense fallback={<Loader />}>
        < div className="w-full h-full object-cover duration-500"
        style={{
        backgroundImage: `url(${imgs.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: flagIsMobile ? '100vw' : '950px',
        transition: 'background-image 1s ease',
        }}>
        </div>
    </Suspense> 
  );
}