import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { Button, ContactForm, Modal } from "../../../components";

import { images } from "../../../assets";
import { useModal } from "../../../hooks";
import { slideInWithFade } from "../../../constants";
import type { Overview, caseStudyImage } from "../../../types";

interface CaseStudyOverviewProps {
  id: string;
  overview: Overview;
  sectionImages: caseStudyImage;
}

export const CaseStudyOverview = ({ id, overview, sectionImages }: CaseStudyOverviewProps) => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-125, 125]);

  const { client, technologies, description } = overview;
  const { casesImages } = images;

  const img = casesImages[sectionImages.image as keyof typeof casesImages];
  const retinaImg = casesImages[sectionImages.retinaImage as keyof typeof casesImages];

  const overviewAnimationProps = {
    ...slideInWithFade,
    transition: {
      ...slideInWithFade.transition,
      delay: 0.6,
    },
  };

  return (
    <>
      <section className="bg-letsTalkBgColor pt-[80px]" id={id}>
        <motion.div className="container" {...overviewAnimationProps}>
          <div className="flex justify-between">
            <div className="flex w-[407px] flex-col gap-[36px]">
              <div>
                <h3>Client</h3>
                <p className="small-text mt-[15px] text-secondaryTextColor">{client}</p>
              </div>
              <div>
                <h3>Technologies</h3>
                <p className="small-text mt-[15px] text-secondaryTextColor">{technologies}</p>
              </div>
            </div>
            <div className="flex w-[675px] flex-col gap-[40px]">
              <h3>{description}</h3>
              <Button label="Let&#8217;s talk" className="w-[152px]" onClick={toggleModal} />
            </div>
          </div>
          <div className="relative mt-[80px] h-[500px] overflow-hidden rounded-[20px]" ref={ref}>
            <motion.img
              style={{ y }}
              srcSet={`${img} 1x, ${retinaImg} 2x`}
              src={img}
              alt="Parallax effect image showing a scenic background"
              width={1280}
              height={750}
              loading="lazy"
              className="absolute left-0 top-[-125px] h-[750px] w-full object-cover"
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
