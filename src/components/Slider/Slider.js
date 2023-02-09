import "./Slider.css"
import HeroSlider, {Slide} from "hero-slider"
const image1 = "/images/slider/1.jpg"
const image2 = "/images/slider/2.jpg"
const image3 = "/images/slider/3.jpg"

export const Slider = () => {
    return (
        <HeroSlider
        slidingAnimation="left_to_right"
        orientation="vertical"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={nextSlide => console.log("onChange", nextSlide)}
        onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.33)",          
          width: "50%"
        }}
        settings={{
          slidingDuration: 250,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoplayDuration: 5000,
          width: "50%"
        }}
            >
            <Slide
                background={{
                    backgroundImageSrc: image1,
                    backgroundAttachment: "fixed",
                }}
            >
            </Slide>

            <Slide
                background={{
                    backgroundImageSrc: image2,
                    backgroundAttachment: "fixed",
                    width:"100%",
                }}
            >
            </Slide>

            <Slide
                background={{
                    backgroundImageSrc: image3,
                    backgroundAttachment: "fixed",
                    
                }}
            >
            </Slide>
        </HeroSlider>
    )
}