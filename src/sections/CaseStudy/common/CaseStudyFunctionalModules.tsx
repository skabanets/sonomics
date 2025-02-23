import { motion } from "framer-motion";

import { Button, ContactForm, FunctionalModuleCard, Modal } from "../../../components";

import { useModal } from "../../../hooks";
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
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  return (
    <>
      <section className="bg-letsTalkBgColor py-[80px]" id={id}>
        <motion.div className="container" {...slideInWithFade}>
          <div className="flex items-center justify-between">
            <h2>Functional Modules Delivered</h2>
            <Button
              label="Let&#8217;s discuss your project"
              className="w-auto"
              onClick={toggleModal}
            />
          </div>
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
      {isOpen && (
        <Modal {...{ toggleModal, handleClickOnBackdrop }}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};
