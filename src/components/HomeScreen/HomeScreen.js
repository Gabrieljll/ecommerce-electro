import "./HomeScreen.css";
import React, { lazy, Suspense } from 'react';
import { Loader } from "../Loader/Loader";
import { WhatsAppButton } from "../WhatsAppButton/WhatsAppButton";

const LazySlider = lazy(() => import("../Slider/Slider"));
const LazySectionList = lazy(() => import("../SectionList/SectionList"));

export const HomeScreen = () => {
    return (
        <div>
            <div className="divSlider">
                <Suspense fallback={<Loader />}>
                    <LazySlider />
                </Suspense>
            </div>
            <Suspense fallback={<Loader />}>
            <WhatsAppButton />
                <LazySectionList />
            </Suspense>

        </div>
    )
}
