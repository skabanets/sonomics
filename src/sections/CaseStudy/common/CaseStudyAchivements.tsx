import { motion } from "framer-motion";

import { Button, ContactForm, Modal } from "../../../components";

import { slideInWithFade } from "../../../constants";
import { useModal } from "../../../hooks";
import { images } from "../../../assets";
import type { Achievements } from "../../../types";

interface CaseStudyAchivementsProps {
  achievements: Achievements;
}

export const CaseStudyAchivements = ({ achievements }: CaseStudyAchivementsProps) => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  const { items, image, retinaImage } = achievements;

  const {
    caseDetails: { achivementsImages },
  } = images;

  const img = achivementsImages[image as keyof typeof achivementsImages];
  const retinaImg = achivementsImages[retinaImage as keyof typeof achivementsImages];

  return (
    <>
      <section className="bg-blackBgColor py-[20px] pb-[80px]">
        <motion.div className="container" {...slideInWithFade}>
          <div className="mb-[60px] flex items-center justify-between">
            <h2 className="text-whiteTextColor">Our achievements</h2>
            <Button label="Let&#8217;s talk" width="w-[152px]" onClick={toggleModal} />
          </div>
          <div className="flex">
            <ul className="w-1/2 rounded-l-[40px] bg-accentYellowColor p-[60px] text-darkBgColor">
              {items.map(({ title, description }, index) => (
                <li
                  key={index}
                  className="border-t border-t-blackBgColor py-[30px] first:border-none first:pt-0 last:pb-0"
                >
                  <h3 className="mb-[10px]">{title}</h3>
                  <p className="big-text">{description}</p>
                </li>
              ))}
            </ul>
            <img
              srcSet={`${img} 1x, ${retinaImg} 2x`}
              src={img}
              alt="Achivement"
              width="640"
              height="890"
              className="w-1/2 rounded-r-[40px] object-cover"
              loading="lazy"
            />
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
