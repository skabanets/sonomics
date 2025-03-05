import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { Button, ContactForm, Modal } from "../../../components";

import { useModal } from "../../../hooks";
import { caseStudyColors, slideInWithFade } from "../../../constants";

interface CaseStudyChallengesProps {
  id: string;
  challenges: string[];
}

export const CaseStudyChallenges = ({ id, challenges }: CaseStudyChallengesProps) => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  //  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  return (
    <>
      <section className="bg-letsTalkBgColor py-[50px] lg:py-[80px]" id={id}>
        <motion.div
          className="container flex flex-col gap-[30px] md:flex-row md:justify-between"
          {...slideInWithFade}
        >
          <div className="flex flex-col gap-[30px] lg:gap-[40px]">
            <h2>Challenges</h2>
            {isTablet && (
              <Button label="Get in Touch" className="w-[186px]" onClick={toggleModal} />
            )}
          </div>
          <ul className="flex w-[360px] flex-wrap gap-[20px] lg:w-[810px] lg:gap-x-[90px] lg:gap-y-[60px]">
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
