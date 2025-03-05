import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import { FunctionalModuleCard, Icon } from "../../../components";

import { cardVariants, industriesContainerVariants, slideInWithFade } from "../../../constants";
import type { FunctionalModule } from "../../../types";

interface CaseStudyFunctionalModulesProps {
  id: string;
  functionalModules: FunctionalModule[];
}

export const CaseStudyFunctionalModules = ({
  id,
  functionalModules,
}: CaseStudyFunctionalModulesProps) => {
  const [activeSlide, setActiveSlide] = useState<FunctionalModule | null>(functionalModules[0]);
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const handleSwiper = (swiper: any) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="bg-letsTalkBgColor pb-[120px] pt-[50px] md:py-[50px] lg:py-[80px]" id={id}>
      <motion.div className="container" {...slideInWithFade}>
        <h2>Functional Modules Delivered</h2>
        {isTablet ? (
          <motion.ul
            className="mt-[30px] flex flex-wrap gap-[25px] lg:mt-[40px]"
            variants={industriesContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {functionalModules.map((module, index) => (
              <motion.li key={index} variants={cardVariants}>
                <FunctionalModuleCard module={module as FunctionalModule} />
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <div className="relative mt-[30px] flex">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              slidesPerGroup={1}
              loop={false}
              onSwiper={(swiper) => handleSwiper(swiper)}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
                setActiveSlide(functionalModules[swiper.realIndex]);
              }}
            >
              {functionalModules.map((module) => (
                <SwiperSlide key={module.moduleName} tabIndex={0}>
                  <FunctionalModuleCard module={module as FunctionalModule} />
                </SwiperSlide>
              ))}
            </Swiper>
            {activeSlide && !isTablet && (
              <div className="absolute bottom-[-70px] z-50 flex w-full items-center justify-between">
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
                  {functionalModules.map((slide, index) => (
                    <div
                      key={slide.moduleName}
                      className={`h-[3px] transition ${
                        functionalModules.indexOf(activeSlide) === index
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
        )}
      </motion.div>
    </section>
  );
};
