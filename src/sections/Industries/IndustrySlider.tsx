import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import throttle from "lodash.throttle";

import { IndustrySliderCard } from "../../components";

import { useDynamicDimensions } from "../../hooks";
import { industries, slideInWithFade } from "../../constants";

export const IndustrySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const { slidePadding, slideHeight } = useDynamicDimensions();
  const sectionRef = useRef<HTMLUListElement>(null);

  const industrySliderAnimationProps = {
    ...slideInWithFade,
    transition: {
      ...slideInWithFade.transition,
      delay: 0.6,
    },
  };

  const handleMenuClick = (index: number) => {
    if (isScrolling) return;

    setCurrentIndex(index);
    setIsScrolling(true);

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }
  };

  useEffect(() => {
    const throttledHandleWheel = throttle((e: WheelEvent) => {
      const section = sectionRef?.current?.getBoundingClientRect();
      const isElementAtTop = section!.top > -1 && section!.top < 1;

      if (isScrolling) return;

      const direction = e.deltaY > 0 ? 1 : -1;

      if (!isElementAtTop) {
        if (sectionRef.current) {
          sectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        return;
      }

      if (currentIndex + direction < 0 || currentIndex + direction >= industries.length) {
        return;
      }

      setIsScrolling(true);

      setCurrentIndex((prev) => prev + direction);

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }, 1000);

    const handleWheel = (e: WheelEvent) => {
      if (
        (currentIndex === 0 && e.deltaY < 0) ||
        (currentIndex === industries.length - 1 && e.deltaY > 0)
      )
        return;

      e.preventDefault();
      throttledHandleWheel(e);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      throttledHandleWheel.cancel();
    };
  }, [currentIndex, isScrolling]);

  const getIndustrySliderBgColor = (index: number) => {
    switch (index) {
      case 0:
        return "bg-letsTalkBgColor";
      case 1:
      case 5:
        return "bg-primaryBgColor";
      case 3:
        return "bg-darkBgColor";
      default:
        return "bg-themeToggleBgColor";
    }
  };
  const slideBackgroundColor = getIndustrySliderBgColor(currentIndex);

  return (
    <motion.section className="h-dvh" ref={sectionRef} {...industrySliderAnimationProps}>
      <div className="bg-secondaryBgColor">
        <ul className="container flex items-center gap-[20px]">
          {industries.map((industry, index) => (
            <li
              key={index}
              className={`bold-text h-[56px] cursor-pointer border-t-2 border-transparent px-[20px] py-[15px] ${
                currentIndex === index
                  ? "!border-themeAccentColor bg-navMenuBgColor"
                  : "text-secondaryTextColor"
              }`}
              onClick={() => handleMenuClick(index)}
            >
              {industry.name}
            </li>
          ))}
        </ul>
      </div>

      <div className={`py-[${slidePadding}px] transition ${slideBackgroundColor}`}>
        <div className={`container relative flex flex-col`}>
          <div
            key={currentIndex}
            style={{ height: `${slideHeight}px` }}
            className="h-lg:max-h-[1000px]"
          >
            <IndustrySliderCard industry={industries[currentIndex]} index={currentIndex} />
          </div>

          <ul className="absolute right-[-38px] top-1/2 flex translate-y-[-50%] flex-col gap-[15px]">
            {industries.map((industry, index) => (
              <li
                key={index}
                className="group relative cursor-pointer transition"
                onClick={() => handleMenuClick(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleMenuClick(index);
                  }
                }}
                tabIndex={0}
                aria-label={`Menu item: ${industry.name}`}
              >
                <span className="absolute right-[15px] top-1/2 translate-y-[-50%] whitespace-nowrap rounded-[10px] bg-navMenuBgColor px-[7px] py-[5px] text-mainTextColor opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                  {industry.name}
                </span>
                <div
                  className={`transition ${
                    currentIndex === index
                      ? `${currentIndex === 3 ? "bg-whiteTextColor" : "bg-mainTextColor"} h-[35px] w-[9px] rounded-[70px]`
                      : "h-[10px] w-[10px] rounded-full bg-secondaryLightTextColor group-hover:border group-hover:border-mainTextColor group-focus-visible:border group-focus-visible:border-mainTextColor"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};
