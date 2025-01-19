import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import { Icon, ServiceCard } from "../../components";

import { services, slideInWithFade } from "../../constants";

export const OurCoreServices = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiper = (swiper: any) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="bg-secondaryBgColor pt-[100px]">
      <motion.div className="container flex flex-col" {...slideInWithFade}>
        <div className="flex items-center justify-between">
          <h2>Our core services</h2>
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
        </div>
        <div className="border-b border-solid border-mainTextColor pb-[89px]">
          <div className="mt-[60px] flex overflow-hidden">
            <Swiper
              modules={[Navigation]}
              spaceBetween={40}
              slidesPerView="auto"
              slidesPerGroup={2}
              loop={false}
              onSwiper={(swiper) => handleSwiper(swiper)}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
            >
              {services.map((service) => (
                <SwiperSlide
                  key={service.id}
                  className="h-[436px] w-[400px] rounded-[10px] border border-solid border-darkBorderColor bg-navMenuBgColor p-[30px] transition hover:bg-secondaryBgColor focus-visible:bg-secondaryBgColor"
                  tabIndex={0}
                >
                  <ServiceCard service={service} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
