import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { SwiperRef } from "swiper/react";

import { Icon } from "../components";

import type { WhyChooseSonomicsItem } from "../types";

type SwiperItem = WhyChooseSonomicsItem | null;

interface CustomSwiperProps {
  items: SwiperItem[];
  images: Record<string, string>;
  animationProps: Variants;
  isWhyChooseSonomics: boolean;
}

export const CustomSwiper = ({
  items,
  images,
  animationProps,
  isWhyChooseSonomics,
}: CustomSwiperProps) => {
  const [activeSlide, setActiveSlide] = useState<SwiperItem>(null);
  const swiperRef = useRef<SwiperRef | null>(null);

  const itemContent = (item: SwiperItem) => {
    if (!item) return null;

    if (isWhyChooseSonomics)
      return (
        <div className="flex rounded-[40px] bg-letsTalkBgColor transition">
          <img
            srcSet={`${images[item.image]} 1x, ${images[item.retinaImage]} 2x`}
            src={images[item.image]}
            alt={item.title}
            width={120}
            height={190}
            loading="lazy"
            className="h-auto rounded-l-[40px] object-cover"
          />
          <div className="flex flex-col justify-center gap-[7px] px-[15px] py-[28px]">
            {" "}
            <h5>{item.title}</h5>
            <p className="small-text text-secondaryTextColor">{item.description}</p>
          </div>
        </div>
      );
  };

  return (
    <motion.div {...animationProps}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => {
          const currentSlide = items[swiper.realIndex];
          setActiveSlide(currentSlide);
        }}
        className="mb-[20px]"
        ref={swiperRef}
      >
        {items.map((item, index) => {
          return <SwiperSlide key={index}>{itemContent(item)}</SwiperSlide>;
        })}
      </Swiper>
      {activeSlide && (
        <div className="flex h-[50px] items-center justify-between">
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="group flex size-[50px] items-center justify-center rounded-[10px] border border-mainTextColor transition hover:border-themeAccentColor focus-visible:border-themeAccentColor"
            aria-label="Previous slide"
          >
            <Icon
              id="arrow-left"
              className="size-[15px] fill-mainTextColor transition group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"
            />
          </button>
          <div className="flex gap-[5px]">
            {items.map((_, index) => (
              <div
                key={index}
                className={`h-[3px] transition ${
                  items.indexOf(activeSlide) === index
                    ? "w-[15px] rounded-[70px] bg-mainTextColor"
                    : "w-[3px] rounded-full bg-secondaryLightTextColor"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="group flex size-[50px] items-center justify-center rounded-[10px] border border-mainTextColor transition hover:border-themeAccentColor focus-visible:border-themeAccentColor"
            aria-label="Next slide"
          >
            <Icon
              id="arrow-right"
              className="size-[15px] fill-mainTextColor transition group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"
            />
          </button>
        </div>
      )}
    </motion.div>
  );
};
