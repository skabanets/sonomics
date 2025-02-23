import { motion } from "framer-motion";

import { Button, ContactForm, Modal } from "../../../components";

import { slideInWithFade } from "../../../constants";
import { useModal } from "../../../hooks";
import { images } from "../../../assets";
import type { OrdinaryItem, caseStudyImage } from "../../../types";

interface CaseStudyAchivementsProps {
  id: string;
  achievements: OrdinaryItem[];
  sectionImages: caseStudyImage;
}

export const CaseStudyAchievements = ({
  id,
  achievements,
  sectionImages,
}: CaseStudyAchivementsProps) => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  const { casesImages } = images;

  const img = casesImages[sectionImages.image as keyof typeof casesImages];
  const retinaImg = casesImages[sectionImages.retinaImage as keyof typeof casesImages];

  return (
    <>
      <section className="bg-blackBgColor pb-[50px] pt-[80px] lg:pb-[80px]" id={id}>
        <motion.div className="container" {...slideInWithFade}>
          <div className="mb-[30px] flex flex-col gap-y-[30px] md:mb-[40px] md:flex-row md:items-center md:justify-between lg:mb-[60px]">
            <h2 className="text-whiteTextColor">Our achievements</h2>
            <Button label="Let&#8217;s talk" className="w-[152px]" onClick={toggleModal} />
          </div>
          <div className="lg:flex">
            <ul className="rounded-t-[40px] bg-accentYellowColor p-[20px] text-darkBgColor md:p-[30px] lg:w-1/2 lg:rounded-l-[40px] lg:rounded-tr-none lg:p-[60px]">
              {achievements.map(({ title, description }, index) => (
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
