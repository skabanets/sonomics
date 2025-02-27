import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { CaseCard, CustomTitle } from "../../components";

import { slideInWithFade, caseStudies, routes } from "../../constants";
import { CaseStudy } from "../../types";

export const SuccessfulStories = () => {
  const cases = caseStudies.slice(0, 2);

  return (
    <section className="py-[100px]">
      <motion.div className="container flex flex-col gap-[60px]" {...slideInWithFade}>
        <div className="flex items-center justify-between">
          <h2>Successful stories</h2>
          <Link to={routes.CaseStudy} className="view-link">
            <CustomTitle
              type="h4"
              wrapperStyles="flex items-center gap-[10px]"
              iconColor="fill-themeAccentColor"
              titleStyles="text-themeAccentColor"
            />
          </Link>
        </div>
        <div className="flex flex-row gap-[80px]">
          {cases.map((caseStudy) => (
            <CaseCard key={caseStudy.id} caseStudy={caseStudy as CaseStudy} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
