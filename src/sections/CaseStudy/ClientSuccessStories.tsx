import { motion } from "framer-motion";

import { CaseCard } from "../../components";

import { slideInWithFade } from "../../constants";
import type { CaseStudy } from "../../types";

export interface ClientSuccessStorieProps {
  cases: CaseStudy[];
}

export const ClientSuccessStories = ({ cases }: ClientSuccessStorieProps) => {
  return (
    <section className="pb-[100px] pt-[80px]">
      <motion.div className="container" {...slideInWithFade}>
        <h1>Client success stories</h1>
        <ul className="mt-[80px] flex flex-wrap justify-between gap-y-[60px]">
          {cases.map((caseStudy) => (
            <motion.li key={caseStudy.id} {...slideInWithFade}>
              <CaseCard caseStudy={caseStudy as CaseStudy} />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};
