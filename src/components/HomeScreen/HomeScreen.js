import { Slider } from "../Slider/Slider"
import { SectionList } from "../SectionList/SectionList"
import "./HomeScreen.css"
import React from "react"


export const HomeScreen = () => {
    return (
        <div>
            <div className="divSlider">
                <Slider />
            </div>
                <SectionList />
{/*             <div className="home-information">
                
            </div> */}
        </div>
    )
}