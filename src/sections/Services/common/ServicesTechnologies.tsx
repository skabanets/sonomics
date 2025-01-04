import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import { Icon, TechnologyCardItem } from "../../../components";

import { routes, slideInWithFade } from "../../../constants";
import type { Technologies } from "../../../types";

interface ServicesTechnologiesProps {
  technologies: Technologies;
  id: string;
}

export const ServicesTechnologies = ({ technologies, id }: ServicesTechnologiesProps) => {
  const { sectionTitle, cards, description } = technologies;

  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const getCardHeight = (id: string): string => {
    switch (id) {
      case routes.EndToEndApplicationDevelopment.slice(10):
        return "h-[340px]";
      case routes.OptimizeBusinessProcessesWithCRM.slice(10):
        return "h-[415px]";
      case routes.CloudIntegration.slice(10):
        return "h-[455px]";
      default:
        return "h-[345px]";
    }
  };

  const cardHeight = getCardHeight(id);

  const handleSwiper = (swiper: any) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <motion.section className="bg-blackBgColor py-[80px]" {...slideInWithFade}>
      <div className="container">
        <div className={`flex justify-between ${description ? "items-end" : "items-center"}`}>
          <div>
            <h2>{sectionTitle}</h2>
            {description && <p className="big-text mt-[30px] w-[622px]">{description}</p>}
          </div>
          <div className={`${!(isDesktop && cards.length <= 3) ? "flex gap-[20px]" : "hidden"}`}>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className={`group flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-solid transition ${isBeginning ? "cursor-not-allowed border-disabledBtnColor bg-formFieldBgColor" : "border-darkBorderColor bg-sliderBgColor hover:border-themeAccentColor focus-visible:border-themeAccentColor"}`}
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
              className={`group flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-solid transition ${isEnd ? "cursor-not-allowed border-disabledBtnColor bg-formFieldBgColor" : "border-darkBorderColor bg-sliderBgColor hover:border-themeAccentColor focus-visible:border-themeAccentColor"}`}
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
        <div className="mt-[60px] flex overflow-hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={3}
            slidesPerGroup={1}
            loop={false}
            onSwiper={(swiper) => handleSwiper(swiper)}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.technologyTitle} tabIndex={0}>
                <TechnologyCardItem card={card} cardHeight={cardHeight} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};
