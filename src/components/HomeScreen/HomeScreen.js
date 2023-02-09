import { Slider } from "../Slider/Slider"

export const HomeScreen = () => {
    return (
        <div className="home-screen">
            <div className="home-welcome">
                <Slider></Slider>
            </div>
            <div className="home-information">
                <h1>informacion de la natpotencia</h1>
            </div>
        </div>
    )
}