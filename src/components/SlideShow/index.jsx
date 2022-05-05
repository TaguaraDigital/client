import { useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import {
  HeroImage,
  HeroInfo,
  HeroSection,
  HeroSlide,
  HeroSlider,
  Next,
  Prev,
  SlideButtons,
  SocialMedia,
  SocialIconLink,
} from "../layout/Hero/HeroStyles";

const SlideShow = ({ slides, id }) => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const nextSlide = () => {
    if (slideshow.current.children.length > 0) {
      const firstSlide = slideshow.current.children[0];
      slideshow.current.style.transition = `1s linear all`;
      slideshow.current.style.transform = `translateX(-100%)`;

      const transition = () => {
        slideshow.current.style.transition = `none`;
        slideshow.current.style.transform = `translateX(0)`;

        slideshow.current.appendChild(firstSlide);
        slideshow.current.removeEventListener("transitionend", transition);
      };

      slideshow.current.addEventListener("transitionend", transition);
    }
  };

  const prevSlide = () => {
    if (slideshow.current.children.length > 0) {
      const lastSlide =
        slideshow.current.children[slideshow.current.children.length - 1];

      slideshow.current.insertBefore(lastSlide, slideshow.current.firstChild);
      slideshow.current.style.transition = "none";
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `1s linear all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    intervaloSlideshow.current = setInterval(() => {
      nextSlide();
    }, 5000);

    slideshow.current.addEventListener("mouseenter", () => {
      clearInterval(intervaloSlideshow.current);
    });

    slideshow.current.addEventListener("mouseleave", () => {
      intervaloSlideshow.current = setInterval(() => {
        nextSlide();
      }, 5000);
    });
    return () => {
      clearInterval(intervaloSlideshow.current);
    };
  }, []);

  return (
    <HeroSection id={id}>
      <HeroSlider ref={slideshow}>
        {slides.map((slide, i) => {
          return (
            <HeroSlide key={i}>
              <div>
                <HeroImage src={slide.image} alt={slide.alt} />
              </div>
              <HeroInfo side={slide.side}>
                <p>{slide.title}</p>
                {i > 0 && (
                  <SocialMedia side={slide.side}>
                    <SocialIconLink
                      href="https://www.facebook.com/SaintdeVenezuela/"
                      target="_blank"
                      aria-label="Facebook"
                    >
                      <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink
                      href="https://twitter.com/saintve"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Twitter"
                    >
                      <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink
                      href="https://www.instagram.com/saintve/"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </SocialIconLink>{" "}
                  </SocialMedia>
                )}
              </HeroInfo>
            </HeroSlide>
          );
        })}
      </HeroSlider>
      <SlideButtons>
        <Prev onClick={prevSlide} />
        <Next onClick={nextSlide} />
      </SlideButtons>
    </HeroSection>
  );
};

export default SlideShow;
