import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import { CaseCard, CustomTitle } from "../../components";

import { slideInWithFade, caseStudieStyles, caseStudies, routes } from "../../constants";
import { CaseStudy, CaseStudyCardType } from "../../types";

export const CaseStudies = () => {
  const styledCaseStudies = caseStudies.map((caseStudy, index) => ({
    ...caseStudy,
    styles: caseStudieStyles[index],
    type: (index === 0 || index === 3 ? "vertical" : "horizontal") as CaseStudyCardType,
  }));

  const columns = [styledCaseStudies.slice(0, 2), styledCaseStudies.slice(2, 4)];

  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <section className="py-[50px] md:py-[100px]">
      <div className="container flex flex-col gap-[30px] md:gap-[60px]">
        <motion.div className="flex items-center justify-between" {...slideInWithFade}>
          <h2>Case studies</h2>
          <Link to={routes.CaseStudy} className="view-link">
            <CustomTitle
              type="h5"
              wrapperStyles="flex items-center gap-[10px]"
              iconColor="fill-accentRedColor"
              titleStyles="text-accentRedColor"
            />
          </Link>
        </motion.div>
        <div className="flex gap-[40px]">
          {isTablet &&
            columns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-[80px]">
                {column.map((caseStudy) => (
                  <motion.div className="w-[620px]" key={caseStudy.id} {...slideInWithFade}>
                    <CaseCard
                      caseStudy={caseStudy as CaseStudy}
                      type={caseStudy.type}
                      containerStyles={caseStudy.styles.containerStyles}
                      imageWidth={caseStudy.styles.width}
                      imageHeight={caseStudy.styles.height}
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          {!isTablet && (
            <div className="flex flex-col gap-[40px]">
              {styledCaseStudies.slice(0, 4).map((caseStudy) => (
                <motion.div className="w-full" key={caseStudy.id} {...slideInWithFade}>
                  <CaseCard
                    caseStudy={caseStudy as CaseStudy}
                    type="general"
                    containerStyles="w-full"
                    imageWidth={360}
                    imageHeight={300}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
