import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { IndustrySliderCard } from "../../components";

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

  const smoothScrollToSection = () => {
    if (sectionRef.current) {
      setScrollState(true);
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleMenuClick = (index: number) => {
    setCurrentIndex(index);
    smoothScrollToSection();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const { top: sectionTop, bottom: sectionBottom } = sectionRef.current.getBoundingClientRect();

      if (sectionTop <= 0 && currentIndex < industries.length - 1) {
        smoothScrollToSection();
      } else if (sectionTop > 0 || (currentIndex === industries.length - 1 && sectionBottom >= 0)) {
        setScrollState(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentIndex]);

  useEffect(() => {
    let isScrolling = false; // Флаг для контроля прокрутки
    const scrollDelay = 2000; // Задержка между переходами (800ms)

    const disableScroll = () => {
      document.body.style.overflow = "hidden"; // Отключаем скролл
    };

    const enableScroll = () => {
      document.body.style.overflow = ""; // Включаем скролл
    };

    const handleWheel = (e: WheelEvent) => {
      if (!scrollState) {
        if (currentIndex === industries.length - 1 && e.deltaY < 0 && sectionRef.current) {
          smoothScrollToSection();
          return;
        }
        return;
      }

      if (isScrolling) {
        e.preventDefault(); // Блокируем лишний скролл
        return;
      }

      isScrolling = true; // Устанавливаем флаг

      // Отключаем скролл на средних элементах
      if (currentIndex > 0 && currentIndex < industries.length - 1) {
        disableScroll();
      }

      if (e.deltaY > 0 && currentIndex < industries.length - 1) {
        e.preventDefault();
        setCurrentIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        e.preventDefault();
        setCurrentIndex((prev) => prev - 1);
      }

      // Включаем скролл после завершения перехода
      setTimeout(() => {
        isScrolling = false;
        if (currentIndex === 0 || currentIndex === industries.length - 1) {
          enableScroll(); // Возвращаем скролл только на крайних элементах
        }
      }, scrollDelay);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      enableScroll();
    };
  }, [currentIndex, scrollState]);

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

  console.log(currentIndex);

  return (
    <section className="h-[calc(100dvh+10px)]">
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

        <div className={`py-[${slidePadding}px] transition ${slideBackgroundColor}`}>
          <div className={`container relative flex flex-col`}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
              style={{ height: `${slideHeight}px` }}
              className="h-lg:max-h-[1000px]"
            >
              <IndustrySliderCard industry={industries[currentIndex]} index={currentIndex} />
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
                        ? `${currentIndex === 3 ? "bg-whiteTextColor" : "bg-mainTextColor"} h-[35px] w-[9px] rounded-[70px]`
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
