import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { industries, slideInWithFade } from "../../constants";
import { Industry } from "../../types";

export const IndustrySlider = () => {
  const [activeIndustry, setActiveIndustry] = useState<Industry>(industries[0]);
  const [scrollState, setScrollState] = useState<"default" | "stuck" | "unstuck">("default");
  const sectionRef = useRef<HTMLUListElement>(null);
  const activeNavStyles = "bold-text border-themeAccentColor border-t-2 bg-navMenuBgColor";

  const industrySliderAnimationProps = {
    ...slideInWithFade,
    transition: {
      ...slideInWithFade.transition,
      delay: 0.6,
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;

        if (sectionTop <= 0 && scrollState !== "stuck") {
          setScrollState("stuck");
        }

        if (sectionTop > 0 && scrollState === "stuck") {
          setScrollState("unstuck");
        }

        if (sectionTop < 0 && activeIndustry.name === industries[industries.length - 1].name) {
          setScrollState("unstuck");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollState, activeIndustry]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScrollBehavior = () => {
      const currentScrollY = window.scrollY;

      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;

        if (scrollState === "stuck" && activeIndustry.name === industries[0].name) {
          if (currentScrollY > lastScrollY) {
            window.scrollTo(0, lastScrollY);
          }
        } else if (
          scrollState === "stuck" &&
          activeIndustry.name === industries[industries.length - 1].name
        ) {
          if (sectionTop <= 0 && currentScrollY < lastScrollY) {
            window.scrollTo(0, lastScrollY);
          }
        } else if (
          scrollState === "stuck" &&
          activeIndustry.name !== industries[0].name &&
          activeIndustry.name !== industries[industries.length - 1].name
        ) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      }

      lastScrollY = window.scrollY;
    };

    const handleScroll = () => handleScrollBehavior();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    };
  }, [scrollState, activeIndustry, industries]);

  return (
    <section className="h-screen bg-secondaryBgColor">
      <motion.div className="container h-full" {...industrySliderAnimationProps}>
        <ul
          className={`transition ${
            scrollState === "stuck" ? "sticky top-0" : ""
          } flex items-center gap-[20px] bg-secondaryBgColor`}
          ref={sectionRef}
        >
          {industries.map((industry, index) => (
            <li
              key={index}
              className={`h-[56px] cursor-pointer px-[20px] py-[15px] transition ${
                activeIndustry?.name === industry.name ? activeNavStyles : "small-text"
              }`}
              onClick={() => setActiveIndustry(industry)}
            >
              {industry.name}
            </li>
          ))}
        </ul>
        <div className="relative flex h-full w-full flex-col justify-between py-[80px]">
          <motion.h2
            key={activeIndustry.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
          >
            {activeIndustry.name}
          </motion.h2>
          <div className="absolute right-[-38px] top-1/2 flex translate-y-[-50%] flex-col gap-[10px]">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative cursor-pointer transition"
                onClick={() => setActiveIndustry(industry)}
              >
                <span className="absolute right-[15px] top-1/2 translate-y-[-50%] whitespace-nowrap rounded-[10px] bg-navMenuBgColor px-[7px] py-[5px] text-mainTextColor opacity-0 transition group-hover:opacity-100">
                  {industry.name}
                </span>
                <div
                  className={`transition ${
                    industries.indexOf(activeIndustry) === index
                      ? "h-[35px] w-[9px] rounded-[70px] bg-darkBgColor"
                      : "h-[10px] w-[10px] rounded-full bg-secondaryLightTextColor hover:border hover:border-mainTextColor"
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
