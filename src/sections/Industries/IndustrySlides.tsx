import { motion } from "framer-motion";

import { IndustrySliderCard, ItemsMenu } from "../../components";

import { useDynamicDimensions, useItemsMenuNavigation } from "../../hooks";
import { industries, slideInWithFade } from "../../constants";
import type { CaseStudyMenuItem } from "../../types";

export const IndustrySlides = () => {
  const { slidePadding, slideHeight } = useDynamicDimensions();

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

  const industryOptions: CaseStudyMenuItem[] = industries.map((option) => ({
    id: option.name,
    name: option.name,
  }));

  const { currentIndex, handleMenuClick } = useItemsMenuNavigation({
    menuOptions: industryOptions,
  });

  return (
    <div className="relative">
      <ItemsMenu
        items={industryOptions}
        currentIndex={currentIndex}
        handleMenuClick={handleMenuClick}
        styles="sticky top-0 opacity-100 z-50"
      />
      {industries.map((industry, index) => {
        const slideBackgroundColor = getIndustrySliderBgColor(index);

        return (
          <section
            key={index}
            className={`h-dvh py-[${slidePadding}px] transition ${slideBackgroundColor}`}
            id={industry.name}
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
    </div>
  );
};
