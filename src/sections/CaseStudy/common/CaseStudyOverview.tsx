import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { images } from "../../../assets";
import { slideInWithFade } from "../../../constants";
import type { Overview, caseStudyImages } from "../../../types";

interface CaseStudyOverviewProps {
  id: string;
  overview: Overview;
  sectionImages: caseStudyImages;
}

export const CaseStudyOverview = ({ id, overview, sectionImages }: CaseStudyOverviewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const { client, technologies, description } = overview;
  const { casesImages } = images;

  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const image = isDesktop ? sectionImages.main.image : sectionImages.hpHorizontal.image;
  const retinaImage = isDesktop
    ? sectionImages.main.retinaImage
    : sectionImages.hpHorizontal.retinaImage;

  const img = casesImages[image as keyof typeof casesImages];
  const retinaImg = casesImages[retinaImage as keyof typeof casesImages];

  const overviewAnimationProps = {
    ...slideInWithFade,
    transition: {
      ...slideInWithFade.transition,
      delay: 0.6,
    },
  };

  return (
    <section className="bg-letsTalkBgColor pt-[50px] lg:pt-[80px]" id={id}>
      <motion.div className="container" {...overviewAnimationProps}>
        <div className="flex flex-col gap-[30px] md:flex-row md:justify-between">
          <div className="flex w-full flex-col gap-[30px] md:w-[320px] lg:w-[407px] lg:gap-[36px]">
            <div>
              <h3>Client</h3>
              <p className="small-text mt-[15px] text-secondaryTextColor">{client}</p>
            </div>
            <div>
              <h3>Technologies</h3>
              <p className="small-text mt-[15px] text-secondaryTextColor">{technologies}</p>
            </div>
          </div>
          <h3 className="w-full md:w-[360px] lg:w-[675px]">{description}</h3>
        </div>
        {isDesktop ? (
          <div className="relative mt-[80px] h-[500px] overflow-hidden rounded-[20px]" ref={ref}>
            <motion.img
              style={{ y }}
              srcSet={`${img} 1x, ${retinaImg} 2x`}
              src={img}
              alt="Parallax effect image showing a scenic background"
              width={1280}
              height={700}
              loading="lazy"
              className="absolute left-0 top-[-100px] h-[700px] w-[1280px] rounded-[20px] object-cover"
            />
          </div>
        ) : (
          <motion.img
            srcSet={`${img} 1x, ${retinaImg} 2x`}
            src={img}
            alt="Case study overview image"
            width={360}
            height={300}
            loading="lazy"
            className="mt-[50px] h-[300px] w-full rounded-[20px] object-cover"
          />
        )}
      </motion.div>
    </section>
  );
};
