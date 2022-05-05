import { useState, useRef, useEffect } from "react";
import {
  Next,
  Prev,
  SlideButtons,
  HeroSection,
  HeroSlide,
  HeroSlider,
  HeroImage,
} from "./HeroStyles";

const Hero = ({ slides, id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    timeout.current = setTimeout(nextSlide, 5000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrentSlide((current) => (current === length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrentSlide((current) => (current === 0 ? length - 1 : current - 1));
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <HeroSection id={id}>
        {slides.map((slide, i) => {
          return (
            <HeroSlide className="HeroSlide" key={i}>
              {i === currentSlide && (
                <HeroSlider className="HeroSlider" color={slide.color}>
                  <HeroImage src={slide.image} alt={slide.alt} />
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SlideButtons>
          <Prev onClick={prevSlide} />
          <Next onClick={nextSlide} />
        </SlideButtons>
      </HeroSection>
    </>
  );
};

export default Hero;
