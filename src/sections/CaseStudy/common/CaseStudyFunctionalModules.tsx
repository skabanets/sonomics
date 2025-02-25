import { motion } from "framer-motion";

import { FunctionalModuleCard } from "../../../components";

import { cardVariants, industriesContainerVariants, slideInWithFade } from "../../../constants";
import type { FunctionalModule } from "../../../types";

interface CaseStudyFunctionalModulesProps {
  id: string;
  functionalModules: FunctionalModule[];
}

export const CaseStudyFunctionalModules = ({
  id,
  functionalModules,
}: CaseStudyFunctionalModulesProps) => {
  return (
    <section className="bg-letsTalkBgColor py-[80px]" id={id}>
      <motion.div className="container" {...slideInWithFade}>
        <h2>Functional Modules Delivered</h2>
        <motion.ul
          className="mt-[40px] flex flex-wrap gap-[25px]"
          variants={industriesContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {functionalModules.map((module, index) => (
            <motion.li key={index} variants={cardVariants}>
              <FunctionalModuleCard module={module as FunctionalModule} />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};
