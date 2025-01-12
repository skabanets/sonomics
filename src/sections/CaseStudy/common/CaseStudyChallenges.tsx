import { motion } from "framer-motion";

import { Button, ContactForm, Modal } from "../../../components";

import { useModal } from "../../../hooks";
import { caseStudyColors, slideInWithFade } from "../../../constants";

export const CaseStudyChallenges = () => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  const challenges = [
    "Developing a flexible loan management system.",
    "Implementing a robust system for multi-provider IBAN account creation.",
    "Supporting currency exchange on user wallets with real-time processing.",
    "Enhancing card management features to ensure seamless functionality.",
    "Integrating these services with external providers while maintaining a high standard of security and user experience.",
    "Enabling fast, secure, and reliable money transfers, including wire transactions, SEPA, and Send Faster Payment.",
  ];

  return (
    <>
      <section className="bg-letsTalkBgColor py-[80px]">
        <motion.div className="container flex justify-between" {...slideInWithFade}>
          <div className="flex flex-col gap-[40px]">
            <h2>Challenges</h2>
            <Button label="Let’s talk" width="w-[152px]" onClick={toggleModal} />
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
