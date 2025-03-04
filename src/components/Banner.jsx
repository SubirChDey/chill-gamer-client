import { useState, useEffect } from "react";
import img1 from "../../src/assets/slider1.webp";
import img2 from "../../src/assets/slider2.webp";
import img3 from "../../src/assets/slider3.webp";
import img4 from "../../src/assets/slider4.webp";
import Aos from "aos";

const images = [img1, img2, img3, img4];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

        useEffect(() => {
            Aos.init({
                duration: 1000,
                offset: 50,
                easing: "ease-in-out",
                delay: 100,
            });
        }, []);

    return (
        <div className="h-[200px] md:h-[500px]">
            <div data-aos="fade-up" className="carousel w-full data-aos">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`carousel-item relative w-full ${currentSlide === index ? "block" : "hidden"}`}
                    >
                        <img src={img} className="w-full object-cover" alt={`Slide ${index + 1}`} />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <button onClick={() => setCurrentSlide(index === 0 ? totalSlides - 1 : index - 1)} className="btn btn-circle">❮</button>
                            <button onClick={() => setCurrentSlide((index + 1) % totalSlides)} className="btn btn-circle">❯</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider