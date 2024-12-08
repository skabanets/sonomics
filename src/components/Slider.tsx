import { useRef, useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div className="relative w-[600px] overflow-hidden rounded-[40px]">
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
              loading="lazy"
              className="object-cover"
              style={{ height: `${530}px` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {activeSlide && (
        <div className="absolute bottom-0 z-50 flex h-[137px] w-full items-center justify-between overflow-hidden bg-gradient-to-b from-[rgba(0,0,0,0)] to-black px-[30px] pb-[33px] pt-[68px]">
          <Link to={activeSlide.link} className="group">
            <h3 className="text-white transition group-hover:text-navlinkActiveColor">
              {activeSlide.name}
            </h3>
          </Link>
          <div className="flex items-center gap-[22px]">
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="flex h-[24px] w-[24px] items-center justify-center"
            >
              <Icon id="arrow-left" className="h-[20px] w-[12px] fill-whiteTextColor" />
            </button>
            <div className="flex gap-[5px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`h-[3px] transition ${
                    slides.indexOf(activeSlide) === index
                      ? "w-[15px] rounded-[70px] bg-white"
                      : "w-[3px] rounded-full bg-[#EAE9EA]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="flex h-[24px] w-[24px] items-center justify-center"
            >
              <Icon id="arrow-right" className="h-[20px] w-[12px] fill-whiteTextColor" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
