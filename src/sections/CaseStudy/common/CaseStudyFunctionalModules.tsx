import { motion } from "framer-motion";

import { Button, ContactForm, FunctionalModuleCard, Modal } from "../../../components";

import { useModal } from "../../../hooks";
import { cardVariants, industriesContainerVariants, slideInWithFade } from "../../../constants";

export const CaseStudyFunctionalModules = () => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  const modulesList = [
    {
      moduleName: "IBAN account creation",
      details: [
        "Automated multi-provider account creation tailored to client requirements.",
        "Streamlined onboarding process to improve efficiency.",
      ],
    },
    {
      moduleName: "Card Management",
      details: [
        "Delivered end-to-end card management functionalities, including activation, deactivation, and transaction tracking.",
        "Enhanced security with multi-factor authentication and fraud detection mechanisms.",
      ],
    },
    {
      moduleName: "Loan Management System",
      details: [
        "Designed a flexible loan system enabling users to apply for and manage loans directly through the platform.",
        "Implemented automated loan approval workflows and repayment tracking.",
      ],
    },
    {
      moduleName: "Money transfer (wire, SEPA, faster payments)",
      details: [
        "Developed a secure, high-performing system to process various types of money transfers.",
        "Integrated APIs for real-time transaction monitoring and reconciliation.",
      ],
    },
    {
      moduleName: "Currency exchange on user wallets",
      details: [
        "Built an intuitive currency exchange module allowing users to perform real-time transactions within their wallets.",
        "Ensured precise exchange rate calculations using external provider integrations and robust backend systems.",
      ],
    },
  ];

  return (
    <>
      <section className="bg-letsTalkBgColor py-[80px]">
        <motion.div className="container" {...slideInWithFade}>
          <div className="flex items-center justify-between">
            <h2>Functional Modules Delivered</h2>
            <Button label="Let's discuss your project" width="w-auto" onClick={toggleModal} />
          </div>
          <motion.ul
            className="mt-[40px] flex flex-wrap gap-[25px]"
            variants={industriesContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {modulesList.map((module, index) => (
              <motion.li key={index} variants={cardVariants}>
                <FunctionalModuleCard module={module} />
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
