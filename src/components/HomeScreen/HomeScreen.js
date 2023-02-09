import { Slider } from "../Slider/Slider"
import "./HomeScreen.css"
export const HomeScreen = () => {
    return (
        <div>
            <div className="divSlider">
                <Slider />
            </div>
            <div className="home-information">
                <h1>informacion de natpotencia</h1>
            </div>
        </div>
    )
}