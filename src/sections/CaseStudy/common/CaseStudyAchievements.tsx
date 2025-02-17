import { motion } from "framer-motion";

import { Button, ContactForm, Modal } from "../../../components";

import { slideInWithFade } from "../../../constants";
import { useModal } from "../../../hooks";
import { images } from "../../../assets";
import type { Achievements } from "../../../types";

interface CaseStudyAchivementsProps {
  achievements: Achievements;
}

export const CaseStudyAchievements = ({ achievements }: CaseStudyAchivementsProps) => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  const { items, image, retinaImage } = achievements;

  const {
    caseDetails: { achivementsImages },
  } = images;

  const img = achivementsImages[image as keyof typeof achivementsImages];
  const retinaImg = achivementsImages[retinaImage as keyof typeof achivementsImages];

  return (
    <>
      <section className="bg-blackBgColor py-[20px] pb-[50px] lg:pb-[80px]">
        <motion.div className="container" {...slideInWithFade}>
          <div className="mb-[30px] flex flex-col gap-y-[30px] md:mb-[40px] md:flex-row md:items-center md:justify-between lg:mb-[60px]">
            <h2 className="text-whiteTextColor">Our achievements</h2>
            <Button label="Let&#8217;s talk" className="w-[152px]" onClick={toggleModal} />
          </div>
          <div className="lg:flex">
            <ul className="rounded-t-[40px] bg-accentYellowColor p-[20px] text-darkBgColor md:p-[30px] lg:w-1/2 lg:rounded-l-[40px] lg:rounded-tr-none lg:p-[60px]">
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
              className="h-[360px] rounded-b-[40px] object-cover tablet:w-full md:h-[680px] lg:h-auto lg:w-1/2 lg:rounded-b-none lg:rounded-r-[40px]"
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
