import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import { Icon, TechnologyCardItem } from "../../../components";

import { routes, slideInWithFade } from "../../../constants";
import type { Technologies, TechnologyCard } from "../../../types";

interface ServicesTechnologiesProps {
  technologies: Technologies;
  id: string;
}

export const ServicesTechnologies = ({ technologies, id }: ServicesTechnologiesProps) => {
  const { sectionTitle, cards, description } = technologies;

  const [activeSlide, setActiveSlide] = useState<TechnologyCard | null>(cards[0]);
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const getCardHeight = (id: string): string => {
    switch (id) {
      case routes.EndToEndApplicationDevelopment.slice(10):
        return "h-[340px]";
      case routes.OptimizeBusinessProcessesWithCRM.slice(10):
        return "h-[415px]";
      case routes.CloudIntegration.slice(10):
        return "h-[400px]";
      default:
        return "h-[345px]";
    }
  };

  const cardHeight = getCardHeight(id);
  const slidesPerView = isDesktop ? 3 : isTablet ? 2 : 1;

  const handleSwiper = (swiper: any) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="bg-blackBgColor pb-[130px] pt-[50px] md:py-[50px] lg:py-[80px]">
      <motion.div className="container" {...slideInWithFade}>
        <div className={`flex justify-between ${description ? "items-end" : "items-center"}`}>
          <div>
            <h2 className="text-whiteTextColor">{sectionTitle}</h2>
            {description && (
              <p className="big-text mt-[30px] w-full text-whiteTextColor lg:w-[622px]">
                {description}
              </p>
            )}
          </div>
          {isTablet && (
            <div className={`${!(isDesktop && cards.length <= 3) ? "flex gap-[20px]" : "hidden"}`}>
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className={`group flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-solid transition ${isBeginning ? "cursor-not-allowed border-grey600Color bg-secondaryDarkBgColor" : "border-whiteTextColor bg-darkBgColor hover:border-accentYellowColor focus-visible:border-accentYellowColor"}`}
                aria-label="Previous slide"
                disabled={isBeginning}
              >
                <Icon
                  id="arrow-left-bold"
                  className={`h-[15px] w-[15px] transition ${isBeginning ? "fill-grey600Color" : "fill-whiteTextColor group-hover:fill-accentYellowColor group-focus-visible:fill-accentYellowColor"}`}
                />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className={`group flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-solid transition ${isEnd ? "cursor-not-allowed border-grey600Color bg-secondaryDarkBgColor" : "border-whiteTextColor bg-darkBgColor hover:border-accentYellowColor focus-visible:border-accentYellowColor"}`}
                aria-label="Next slide"
                disabled={isEnd}
              >
                <Icon
                  id="arrow-right-bold"
                  className={`h-[15px] w-[15px] transition ${isEnd ? "fill-grey600Color" : "fill-whiteTextColor group-hover:fill-accentYellowColor group-focus-visible:fill-accentYellowColor"}`}
                />
              </button>
            </div>
          )}
        </div>
        <div className="relative mt-[60px] flex">
          <Swiper
            modules={[Navigation]}
            spaceBetween={isDesktop ? 40 : 20}
            slidesPerView={slidesPerView}
            slidesPerGroup={1}
            loop={false}
            onSwiper={(swiper) => handleSwiper(swiper)}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              setActiveSlide(cards[swiper.realIndex]);
            }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.technologyTitle} tabIndex={0}>
                <TechnologyCardItem card={card} cardHeight={cardHeight} />
              </SwiperSlide>
            ))}
          </Swiper>
          {activeSlide && !isTablet && (
            <div className="absolute bottom-[-80px] z-50 flex w-full items-center justify-between">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className={`group flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-solid transition ${isBeginning ? "cursor-not-allowed border-grey600Color bg-secondaryDarkBgColor" : "border-whiteTextColor bg-darkBgColor hover:border-accentYellowColor focus-visible:border-accentYellowColor"}`}
                aria-label="Previous slide"
                disabled={isBeginning}
              >
                <Icon
                  id="arrow-left-bold"
                  className={`h-[15px] w-[15px] transition ${isBeginning ? "fill-grey600Color" : "fill-whiteTextColor group-hover:fill-accentYellowColor group-focus-visible:fill-accentYellowColor"}`}
                />
              </button>
              <div className="flex gap-[5px]">
                {cards.map((slide, index) => (
                  <div
                    key={slide.technologyTitle}
                    className={`h-[3px] transition ${
                      cards.indexOf(activeSlide) === index
                        ? "w-[15px] rounded-[70px] bg-whiteTextColor"
                        : "w-[3px] rounded-full bg-secondaryLightTextColor"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className={`group flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-solid transition ${isEnd ? "cursor-not-allowed border-grey600Color bg-secondaryDarkBgColor" : "border-whiteTextColor bg-darkBgColor hover:border-accentYellowColor focus-visible:border-accentYellowColor"}`}
                aria-label="Next slide"
                disabled={isEnd}
              >
                <Icon
                  id="arrow-right-bold"
                  className={`h-[15px] w-[15px] transition ${isEnd ? "fill-grey600Color" : "fill-whiteTextColor group-hover:fill-accentYellowColor group-focus-visible:fill-accentYellowColor"}`}
                />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};
