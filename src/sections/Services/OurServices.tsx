import { motion } from "framer-motion";

import { Button, ContactForm, Modal } from "../../components";

import { useModal } from "../../hooks";
import { slideInWithFade } from "../../constants";

export const OurServices = () => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  return (
    <>
      <motion.section className="our-services-bg pb-[175px] pt-[75px]" {...slideInWithFade}>
        <div className="container">
          <h6 className="mb-[20px] text-secondaryTextColor">Our services</h6>
          <h1 className="mb-[40px]">
            Pioneering <span className="text-accentYellowColor">IT Solutions</span> for the modern
            business
          </h1>
          <div className="flex w-[570px] flex-col gap-[30px]">
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
          <ContactForm />
        </Modal>
      )}
    </>
  );
};