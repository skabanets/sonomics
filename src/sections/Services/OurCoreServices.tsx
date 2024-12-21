import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import { Icon, ServiceCard } from "../../components";

import { services, slideInWithFade } from "../../constants";

export const OurCoreServices = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section className="bg-secondaryBgColor pt-[100px]">
      <motion.div className="container flex flex-col" {...slideInWithFade}>
        <div className="flex items-center justify-between">
          <h2>Our core services</h2>
          <div className="flex gap-[20px]">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-sliderBtnBgColor border-darkBorderColor group flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-solid transition hover:border-themeAccentColor focus-visible:border-themeAccentColor"
              aria-label="Previous slide"
            >
              <Icon
                id="arrow-left-bold"
                className="fill-inverseColor h-[15px] w-[15px] transition group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"
              />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-sliderBtnBgColor border-darkBorderColor group flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-solid transition hover:border-themeAccentColor focus-visible:border-themeAccentColor"
              aria-label="Next slide"
            >
              <Icon
                id="arrow-right-bold"
                className="fill-inverseColor h-[15px] w-[15px] transition group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"
              />
            </button>
          </div>
        </div>
        <div className="border-b border-solid border-mainTextColor pb-[89px]">
          <div className="mr-[-80px] mt-[60px] flex overflow-hidden">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView="auto"
              slidesPerGroup={2}
              loop={false}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {services.map((service) => (
                <SwiperSlide
                  key={service.id}
                  className="border-darkBorderColor h-[436px] w-[390px] rounded-[10px] border border-solid bg-primaryBgColor p-[30px] transition last:mr-[80px] hover:bg-themeToggleBgColor focus-visible:bg-themeToggleBgColor"
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
