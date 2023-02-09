//import HeroSlider, {Slide} from "hero-slider/dist/HeroSlider"
import HeroSlider, {Slide} from "hero-slider"
const image1 = "../../../public/images/slider/1.jpg"
const image2 = "../../../public/images/slider/2.jpg"

export const Slider = () => {
    return (
        <HeroSlider
            slidingAnimation="left_to_right"
            orientation="horizontal"
            initialSlide={1}
            onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChage", previousSlide, nextSlide)}
            onChange={nextSlide => console.log("onChange", nextSlide)}
            onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
            style={{ 
                backgroundColor: "rgba(0,0,0,0.33)"
            }}
            settings= {{
                slidingDuration: 250,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: true,
                autoPlayDuration: 5000,
                height: "20vh"
            }}
            >
            <Slide
                background={{
                    backgroundImage: image1,
                    backgroundAttachment: "fixed"
                }}
            >
            </Slide>

            <Slide
                background={{
                    backgroundImage: image2,
                    backgroundAttachment: "fixed"
                }}
            >
            </Slide>

            <Slide
                background={{
                    backgroundImage: image1,
                    backgroundAttachment: "fixed"
                }}
            >
            </Slide>
        </HeroSlider>
    )
}