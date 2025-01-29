import { motion } from "framer-motion";

import { Button, ContactForm, Modal } from "../../../components";

import { useModal } from "../../../hooks";
import { caseStudyColors, slideInWithFade } from "../../../constants";

interface CaseStudyChallengesProps {
  challenges: string[];
}

export const CaseStudyChallenges = ({ challenges }: CaseStudyChallengesProps) => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  return (
    <>
      <section className="bg-letsTalkBgColor py-[80px]">
        <motion.div className="container flex justify-between" {...slideInWithFade}>
          <div className="flex flex-col gap-[40px]">
            <h2>Challenges</h2>
            <Button label="Let&#8217;s talk" className="w-[152px]" onClick={toggleModal} />
          </div>
          <ul className="flex w-[810px] flex-wrap gap-x-[90px] gap-y-[60px]">
            {challenges.map((challenge, index) => {
              const itemBorderColor = `border-${caseStudyColors[Math.floor(index / 2) % caseStudyColors.length]}`;

              return (
                <motion.li
                  key={index}
                  className={`w-[360px] border-t-[3px] border-solid pt-[20px] ${itemBorderColor}`}
                  {...slideInWithFade}
                >
                  <h6>{challenge}</h6>
                </motion.li>
              );
            })}
          </ul>
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
