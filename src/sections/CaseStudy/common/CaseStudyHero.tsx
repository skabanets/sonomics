import { motion } from "framer-motion";

import { BackLink } from "../../../components";

import { routes, slideInWithFade } from "../../../constants";
import type { pageTitle } from "../../../types";

interface CaseStudyHeroProps {
  title: pageTitle;
}

export const CaseStudyHero = ({ title }: CaseStudyHeroProps) => {
  const renderHighlightedText = (text: string, accentWords: string[]) => {
    const regex = new RegExp(`(${accentWords.join("|")})`, "gi");

    return text.split(regex).map((part, index) =>
      accentWords.includes(part) ? (
        <span key={index} className="text-themeAccentColor">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="pb-[50px] pt-[30px] md:py-[50px] lg:py-[55px]">
      <motion.div className="container" {...slideInWithFade}>
        <BackLink to={routes.CaseStudy} label="Back to case studies" className="mb-[20px]" />
        <h1 className="lg:max-w-[1090px]">
          {renderHighlightedText(title.text, title.accentWords)}
        </h1>
      </motion.div>
    </section>
  );
};
