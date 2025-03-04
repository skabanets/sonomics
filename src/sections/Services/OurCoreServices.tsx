import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { Icon, ServiceCard } from "../../components";

import { services, slideInWithFade } from "../../constants";
import type { Service } from "../../types";

export const OurCoreServices = () => {
  const [activeSlide, setActiveSlide] = useState<Service | null>(services[0]);
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const handleSwiper = (swiper: any) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="bg-secondaryBgColor pt-[50px] lg:pt-[100px]">
      <motion.div className="container flex flex-col" {...slideInWithFade}>
        <div className="flex items-center justify-between">
          <h2>Our core services</h2>
          {isTablet && (
            <div className="flex gap-[20px]">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className={`group flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-solid transition ${isBeginning ? "cursor-not-allowed border-disabledBtnColor bg-formFieldBgColor" : "border-darkBorderColor bg-navMenuBgColor hover:border-themeAccentColor focus-visible:border-themeAccentColor"}`}
                aria-label="Previous slide"
                disabled={isBeginning}
              >
                <Icon
                  id="arrow-left-bold"
                  className={`h-[15px] w-[15px] transition ${isBeginning ? "fill-disabledBtnColor" : "fill-inverseColor group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"}`}
                />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className={`group flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-solid transition ${isEnd ? "cursor-not-allowed border-disabledBtnColor bg-formFieldBgColor" : "border-darkBorderColor bg-navMenuBgColor hover:border-themeAccentColor focus-visible:border-themeAccentColor"}`}
                aria-label="Next slide"
                disabled={isEnd}
              >
                <Icon
                  id="arrow-right-bold"
                  className={`h-[15px] w-[15px] transition ${isEnd ? "fill-disabledBtnColor" : "fill-inverseColor group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"}`}
                />
              </button>
            </div>
          )}
        </div>
        <div className="relative mt-[30px] border-b border-solid border-mainTextColor pb-[120px] md:pb-[49px] lg:mt-[60px] lg:pb-[89px]">
          <div className="flex overflow-hidden">
            <Swiper
              modules={[Navigation]}
              spaceBetween={isDesktop ? 40 : 20}
              slidesPerView="auto"
              slidesPerGroup={isDesktop ? 2 : 1}
              loop={false}
              onSwiper={(swiper) => handleSwiper(swiper)}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
                setActiveSlide(services[swiper.realIndex]);
              }}
            >
              {services.map((service) => (
                <SwiperSlide
                  key={service.id}
                  className="h-[436px] w-full rounded-[10px] border border-solid border-darkBorderColor bg-navMenuBgColor p-[30px] transition hover:bg-secondaryBgColor focus-visible:bg-secondaryBgColor md:h-[444px] md:w-[342px] lg:h-[436px] lg:w-[400px]"
                  tabIndex={0}
                >
                  <ServiceCard service={service} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {activeSlide && !isTablet && (
            <div className="absolute bottom-[50px] z-50 flex w-full items-center justify-between">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className={`group flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-solid transition ${isBeginning ? "cursor-not-allowed border-disabledBtnColor bg-formFieldBgColor" : "border-darkBorderColor bg-navMenuBgColor hover:border-themeAccentColor focus-visible:border-themeAccentColor"}`}
                aria-label="Previous slide"
                disabled={isBeginning}
              >
                <Icon
                  id="arrow-left-bold"
                  className={`h-[15px] w-[15px] transition ${isBeginning ? "fill-disabledBtnColor" : "fill-inverseColor group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"}`}
                />
              </button>
              <div className="flex gap-[5px]">
                {services.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`h-[3px] transition ${
                      services.indexOf(activeSlide) === index
                        ? "w-[15px] rounded-[70px] bg-mainTextColor"
                        : "w-[3px] rounded-full bg-secondaryLightTextColor"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className={`group flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-solid transition ${isEnd ? "cursor-not-allowed border-disabledBtnColor bg-formFieldBgColor" : "border-darkBorderColor bg-navMenuBgColor hover:border-themeAccentColor focus-visible:border-themeAccentColor"}`}
                aria-label="Next slide"
                disabled={isEnd}
              >
                <Icon
                  id="arrow-right-bold"
                  className={`h-[15px] w-[15px] transition ${isEnd ? "fill-disabledBtnColor" : "fill-inverseColor group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"}`}
                />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};
