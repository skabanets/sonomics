import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { CaseCard, CustomTitle } from "../../components";

import { slideInWithFade, caseStudies, routes } from "../../constants";
import type { CaseStudy } from "../../types";

export const SuccessfulStories = () => {
  const cases = caseStudies.slice(0, 2);
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const imagePropertiesMap = {
    desktop: { containerStyles: "w-[600px]", imageWidth: 600, imageHeight: 500 },
    tablet: { containerStyles: "w-full", imageWidth: 704, imageHeight: 500 },
    mobile: { containerStyles: "w-full", imageWidth: 360, imageHeight: 300 },
  };

  const imageProperties = isDesktop
    ? imagePropertiesMap.desktop
    : isTablet
      ? imagePropertiesMap.tablet
      : imagePropertiesMap.mobile;

  return (
    <section className="py-[50px] lg:py-[100px]">
      <motion.div className="container flex flex-col gap-[30px] lg:gap-[60px]" {...slideInWithFade}>
        <div className="flex items-center justify-between">
          <h2>{isTablet ? "Successful Stories" : "Case Studies"}</h2>
          <Link to={routes.CaseStudy} className="view-link">
            <CustomTitle
              type="h5"
              wrapperStyles="flex items-center gap-[10px]"
              iconColor="fill-themeAccentColor"
              titleStyles="text-themeAccentColor"
            />
          </Link>
        </div>
        <div className="flex flex-col items-start gap-[40px] md:items-center lg:flex-row lg:items-start lg:gap-[80px]">
          {cases.map((caseStudy) => (
            <CaseCard key={caseStudy.id} caseStudy={caseStudy as CaseStudy} {...imageProperties} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
