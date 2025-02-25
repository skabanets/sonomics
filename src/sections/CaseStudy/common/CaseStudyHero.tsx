import { motion } from "framer-motion";

import { BackLink } from "../../../components";

import { routes, slideInWithFade } from "../../../constants";
import { highlightText } from "../../../helpers";
import type { pageTitle } from "../../../types";

interface CaseStudyHeroProps {
  title: pageTitle;
}

export const CaseStudyHero = ({ title }: CaseStudyHeroProps) => {
  return (
    <section className="pb-[50px] pt-[30px] md:py-[50px] lg:py-[55px]">
      <motion.div className="container" {...slideInWithFade}>
        <BackLink to={routes.CaseStudy} label="Back to case studies" className="mb-[20px]" />
        <h1 className="lg:max-w-[1090px]">{highlightText(title.text, title.accentWords)}</h1>
      </motion.div>
    </section>
  );
};
