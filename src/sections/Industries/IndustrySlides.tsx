import { motion } from "framer-motion";

import { IndustrySliderCard } from "../../components";

import { useDynamicDimensions, useMenuVisibility } from "../../hooks";
import { industries, slideInWithFade } from "../../constants";

export const IndustrySlides = () => {
  const { isMenuVisible, sectionRefs, isUserScrolling, currentIndex, setCurrentIndex } =
    useMenuVisibility(industries.length);
  const { slidePadding, slideHeight } = useDynamicDimensions();

  const handleMenuClick = (index: number) => {
    isUserScrolling.current = true;

    setCurrentIndex(index);

    const targetSection = sectionRefs.current[index];
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        isUserScrolling.current = false;
      }, 1000);
    }
  };

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

  return (
    <div className="relative">
      {industries.map((industry, index) => {
        const slideBackgroundColor = getIndustrySliderBgColor(index);

        return (
          <section
            key={index}
            className={`h-dvh py-[${slidePadding}px] transition ${slideBackgroundColor}`}
            ref={(el) => {
              sectionRefs.current[index] = el as HTMLDivElement | null;
            }}
          >
            <motion.div
              {...slideInWithFade}
              className={`container relative flex flex-col h-lg:max-h-[1000px]`}
              style={{ height: `${slideHeight}px` }}
            >
              <IndustrySliderCard industry={industry} index={index} />
            </motion.div>
          </section>
        );
      })}

      {isMenuVisible && (
        <ul className="fixed right-[38px] top-1/2 flex translate-y-[-50%] flex-col gap-[15px]">
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
              <span
                className={`absolute right-[15px] top-1/2 translate-y-[-50%] whitespace-nowrap rounded-[10px] bg-navMenuBgColor px-[7px] py-[5px] text-mainTextColor transition group-hover:opacity-100 group-focus-visible:opacity-100 ${currentIndex === index ? "opacity-100" : "opacity-0"}`}
              >
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
      )}
    </div>
  );
};
