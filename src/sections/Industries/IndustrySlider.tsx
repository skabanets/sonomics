import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { useDynamicDimensions } from "../../hooks";
import { industries, slideInWithFade } from "../../constants";

export const IndustrySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollState, setScrollState] = useState(false);
  const sectionRef = useRef<HTMLUListElement>(null);
  const { slideMargin, slideHeight } = useDynamicDimensions();

  console.log(slideMargin, slideHeight);

  const activeNavStyles = "bold-text border-themeAccentColor border-t-2 bg-navMenuBgColor";

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
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;

        if (sectionTop <= 0 && currentIndex !== industries.length - 1) {
          setScrollState(true);
          sectionRef.current.scrollIntoView({
            block: "start",
          });
        }

        if (sectionTop > 0) {
          setScrollState(false);
        }

        if (currentIndex === industries.length - 1 && sectionBottom >= 0) {
          setScrollState(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollState, currentIndex]);

  const blockScroll = (e: WheelEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (
        scrollState === true &&
        currentIndex !== 0 &&
        currentIndex &&
        currentIndex !== industries.length - 1
      ) {
        blockScroll(e);
      }

      if (scrollState === true && currentIndex === 0 && e.deltaY > 0) {
        blockScroll(e);
      }

      if (scrollState === true && currentIndex === industries.length - 1 && e.deltaY < 0) {
        blockScroll(e);
      }

      if (
        sectionRef.current &&
        scrollState === false &&
        currentIndex === industries.length - 1 &&
        e.deltaY < 0
      ) {
        setScrollState(true);
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex, scrollState]);

  console.log(currentIndex);

  const height = window.innerHeight;
  //className="h-screen bg-secondaryBgColor"

  return (
    <section className="bg-orange-300">
      <motion.div className="container h-[calc(100dvh+10px)]" {...industrySliderAnimationProps}>
        <ul className="flex items-center gap-[20px] bg-secondaryBgColor" ref={sectionRef}>
          {industries.map((industry, index) => (
            <li
              key={index}
              className={`h-[56px] cursor-pointer px-[20px] py-[15px] ${
                currentIndex === index ? activeNavStyles : "small-text"
              }`}
              onClick={() => handleMenuClick(index)}
            >
              {industry.name}
            </li>
          ))}
        </ul>

        <div className={`relative my-[${slideMargin}px] flex h-full w-full flex-col`}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
            className={`bg-yellow-300 h-[${slideHeight}px]`}
          >
            <h2>{scrollState ? "true" : "false"}</h2>
            <p>{industries[currentIndex].name}</p>
            <p>{slideHeight}</p>
            <p>{slideMargin}</p>
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
                      ? "h-[35px] w-[9px] rounded-[70px] bg-darkBgColor"
                      : "h-[10px] w-[10px] rounded-full bg-secondaryLightTextColor group-hover:border group-hover:border-mainTextColor group-focus-visible:border group-focus-visible:border-mainTextColor"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
