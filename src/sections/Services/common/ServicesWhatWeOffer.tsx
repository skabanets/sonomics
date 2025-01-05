import { motion } from "framer-motion";

import { Accordion, Button, ContactForm, Modal } from "../../../components";

import { slideInWithFade } from "../../../constants";
import { useModal } from "../../../hooks";
import { images } from "../../../assets";
import type { Offers } from "../../../types";

interface ServicesWhatWeOfferProps {
  offers: Offers;
}

export const ServicesWhatWeOffer = ({ offers }: ServicesWhatWeOfferProps) => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  const { sectionTitle, image, retinaImage, offersList } = offers;
  const {
    servicesDetails: { offersImages },
  } = images;

  const img = offersImages[image as keyof typeof offersImages];
  const retinaImg = offersImages[retinaImage as keyof typeof offersImages];

  return (
    <>
      <section className="bg-letsTalkBgColor py-[80px]">
        <motion.div className="container">
          <div className="flex items-center justify-between" {...slideInWithFade}>
            <h2>{sectionTitle}</h2>
            <Button label="Let's discuss your project" width="w-auto" onClick={toggleModal} />
          </div>
          <div className="flex items-start justify-between pt-[40px]">
            <img
              srcSet={`${img} 1x, ${retinaImg} 2x`}
              src={img}
              alt={sectionTitle}
              width={530}
              height={510}
              loading="lazy"
              className="h-[510px] rounded-[15px] object-cover"
            />
            <Accordion offersList={offersList} />
          </div>
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
