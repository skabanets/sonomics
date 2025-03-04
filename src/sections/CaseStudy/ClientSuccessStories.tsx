import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { CaseCard } from "../../components";

import { slideInWithFade } from "../../constants";
import type { CaseStudy } from "../../types";

export interface ClientSuccessStorieProps {
  cases: CaseStudy[];
}

export const ClientSuccessStories = ({ cases }: ClientSuccessStorieProps) => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const imagePropertiesMap = {
    desktop: { containerStyles: "w-[600px]", imageWidth: 600, imageHeight: 500 },
    tablet: { containerStyles: "w-[332px]", imageWidth: 332, imageHeight: 300 },
    mobile: { containerStyles: "w-full", imageWidth: 360, imageHeight: 300 },
  };

  const imageProperties = isDesktop
    ? imagePropertiesMap.desktop
    : isTablet
      ? imagePropertiesMap.tablet
      : imagePropertiesMap.mobile;

  return (
    <section className="py-[30px] lg:pb-[100px] lg:pt-[80px]">
      <motion.div className="container" {...slideInWithFade}>
        <h1>Client success stories</h1>
        <ul className="mt-[30px] flex flex-col flex-wrap gap-[40px] md:flex-row md:justify-between lg:mt-[80px] lg:gap-y-[60px]">
          {cases.map((caseStudy) => (
            <motion.li key={caseStudy.id} {...slideInWithFade}>
              <CaseCard caseStudy={caseStudy as CaseStudy} {...imageProperties} />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};
