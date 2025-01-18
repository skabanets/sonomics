import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { useDynamicDimensions } from "../../hooks";
import { industries, slideInWithFade } from "../../constants";

export const IndustrySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollState, setScrollState] = useState(false);
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
    setCurrentIndex(index);
    setScrollState(true);

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const { top: sectionTop, bottom: sectionBottom } = sectionRef.current.getBoundingClientRect();

      if (sectionTop <= 0 && currentIndex < industries.length - 1) {
        setScrollState(true);
        sectionRef.current.scrollIntoView({
          block: "start",
        });
      } else if (sectionTop > 0 || (currentIndex === industries.length - 1 && sectionBottom >= 0)) {
        setScrollState(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentIndex]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!scrollState) {
        if (currentIndex === industries.length - 1 && e.deltaY < 0 && sectionRef.current) {
          setScrollState(true);
          sectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          return;
        }
        return;
      }

      if (
        (currentIndex > 0 && currentIndex < industries.length - 1) ||
        (currentIndex === 0 && e.deltaY > 0) ||
        (currentIndex === industries.length - 1 && e.deltaY < 0)
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex, scrollState]);

  const getIndustrySliderBgColor = (index: number) => {
    switch (index) {
      case 1:
      case 5:
        return "bg-primaryBgColor";
      case 3:
        return "bg-darkBgColor";
      default:
        return "bg-secondaryBgColor";
    }
  };

  const slideBackgroundColor = getIndustrySliderBgColor(currentIndex);

  return (
    <section className={`h-[calc(100dvh+10px)]`}>
      <motion.div {...industrySliderAnimationProps}>
        <div className="bg-secondaryBgColor transition">
          <ul className="container flex items-center gap-[20px]" ref={sectionRef}>
            {industries.map((industry, index) => (
              <li
                key={index}
                className={`h-[56px] cursor-pointer px-[20px] py-[15px] ${
                  currentIndex === index
                    ? "bold-text border-t-2 border-themeAccentColor bg-navMenuBgColor"
                    : "small-text"
                }`}
                onClick={() => handleMenuClick(index)}
              >
                {industry.name}
              </li>
            ))}
          </ul>
        </div>

        <div className={`${slideBackgroundColor} py-[${slidePadding}px] transition`}>
          <div className={`container relative flex h-full w-full flex-col`}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
              className={`bg-yellow-200 h-[${slideHeight}px]`}
            >
              <h2>{scrollState ? "true" : "false"}</h2>
              <p>{industries[currentIndex].name}</p>
              <p>{slideHeight}</p>
              <p>{slidePadding}</p>
            </motion.div>

            <div className="absolute right-[-38px] top-1/2 flex translate-y-[-50%] flex-col gap-[15px]">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer transition"
                  onClick={() => handleMenuClick(index)}
                >
                  <span className="absolute right-[15px] top-1/2 translate-y-[-50%] whitespace-nowrap rounded-[10px] bg-navMenuBgColor px-[7px] py-[5px] text-mainTextColor opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                    {industry.name}
                  </span>
                  <div
                    className={`transition ${
                      currentIndex === index
                        ? `${currentIndex === 3 ? "bg-whiteTextColor" : "bg-darkBgColor"} h-[35px] w-[9px] rounded-[70px]`
                        : "h-[10px] w-[10px] rounded-full bg-secondaryLightTextColor group-hover:border group-hover:border-mainTextColor group-focus-visible:border group-focus-visible:border-mainTextColor"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
