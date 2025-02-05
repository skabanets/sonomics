import { motion } from "framer-motion";

import { Button, ContactForm, Modal } from "../../components";

import { useModal } from "../../hooks";
import { slideInWithFade } from "../../constants";

export const OurServices = () => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  return (
    <>
      <motion.section
        className="our-services-bg pb-[516px] pt-[30px] md:py-[40px] lg:pb-[175px] lg:pt-[75px]"
        {...slideInWithFade}
      >
        <div className="container">
          <h6 className="mb-[10px] text-secondaryTextColor md:mb-[20px]">Our services</h6>
          <h1 className="mb-[20px] md:mb-[30px] lg:mb-[40px]">
            Pioneering <span className="text-accentYellowColor">IT Solutions</span> for the modern
            business
          </h1>
          <div className="flex flex-col gap-[10px] md:w-[490px] md:gap-[20px] lg:w-[570px] lg:gap-[30px]">
            <h3>
              At Sonomics, we are committed to transforming businesses through cutting-edge
              technologies and strategic innovation.
            </h3>
            <p className="big-text text-secondaryTextColor">
              Our mission is to help organizations thrive in the digital era by integrating advanced
              IT solutions tailored to their unique needs. We provide a comprehensive range of
              services, designed to enhance operational efficiency, optimize processes, and unlock
              new potential through artificial intelligence (AI) and cloud technologies.
            </p>
            <Button label="Contact us" onClick={toggleModal} />
          </div>
        </div>
      </motion.section>
      {isOpen && (
        <Modal {...{ toggleModal, handleClickOnBackdrop }}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};
