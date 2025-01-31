import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Icon } from "../components";

import { images } from "../assets";
import { CaseStudy } from "../types";
import "swiper/swiper-bundle.css";

interface SliderProps {
  slides: CaseStudy[];
}

export const Slider = ({ slides }: SliderProps) => {
  const [activeSlide, setActiveSlide] = useState<CaseStudy | null>(null);
  const swiperRef = useRef<any>(null);

  const { casesImages } = images;

  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      <div className="relative w-full overflow-hidden rounded-[20px] md:w-[600px] md:rounded-[40px]">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSlideChange={(swiper) => {
            const currentSlide = slides[swiper.realIndex];
            setActiveSlide(currentSlide);
          }}
          className="mySwiper"
          ref={swiperRef}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                srcSet={`${casesImages[slide.image]} 1x, ${casesImages[slide.retinaImage]} 2x`}
                src={casesImages[slide.image]}
                alt={slide.name}
                width={600}
                height={530}
                loading="lazy"
                className="h-[290px] w-full object-cover md:h-[530px] md:w-[600xp]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {activeSlide && (
          <div className="absolute bottom-0 z-50 flex h-[74px] w-full items-center justify-between overflow-hidden bg-gradient-to-b from-[rgba(0,0,0,0)] to-black px-[20px] pb-[20px] pt-[27px] md:h-[137px] md:px-[30px] md:pb-[33px] md:pt-[68px]">
            <Link to={activeSlide.link} className="group line-clamp-1 w-full md:w-[370px]">
              <h3 className="text-whiteTextColor transition group-hover:text-themeAccentColor group-focus-visible:text-themeAccentColor">
                {activeSlide.name}
              </h3>
            </Link>
            <div className="hidden items-center gap-[18px] md:flex">
              <button
                onClick={() => swiperRef.current?.swiper.slidePrev()}
                className="group flex h-[24px] w-[24px] items-center justify-center"
                aria-label="Previous slide"
              >
                <Icon
                  id="arrow-left"
                  className="h-[20px] w-[12px] fill-whiteTextColor transition group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"
                />
              </button>
              <div className="flex gap-[5px]">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`h-[3px] transition ${
                      slides.indexOf(activeSlide) === index
                        ? "w-[15px] rounded-[70px] bg-whiteTextColor"
                        : "w-[3px] rounded-full bg-[#EAE9EA]"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => swiperRef.current?.swiper.slideNext()}
                className="group flex h-[24px] w-[24px] items-center justify-center"
                aria-label="Next slide"
              >
                <Icon
                  id="arrow-right"
                  className="h-[20px] w-[12px] fill-whiteTextColor transition group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"
                />
              </button>
            </div>
          </div>
        )}
      </div>
      {activeSlide && !isTablet && (
        <div className="flex items-center justify-between pt-[10px]">
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="group flex h-[48px] w-[48px] items-center justify-center"
            aria-label="Previous slide"
          >
            <Icon
              id="arrow-left"
              className="h-[20px] w-[12px] fill-mainTextColor transition group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"
            />
          </button>
          <div className="flex gap-[5px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`h-[3px] transition ${
                  slides.indexOf(activeSlide) === index
                    ? "w-[15px] rounded-[70px] bg-mainTextColor"
                    : "w-[3px] rounded-full bg-secondaryLightTextColor"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="group flex h-[48px] w-[48px] items-center justify-center"
            aria-label="Next slide"
          >
            <Icon
              id="arrow-right"
              className="h-[20px] w-[12px] fill-mainTextColor transition group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"
            />
          </button>
        </div>
      )}
    </>
  );
};
