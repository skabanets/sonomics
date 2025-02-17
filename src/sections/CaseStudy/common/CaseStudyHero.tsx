import { motion } from "framer-motion";

import { BackLink } from "../../../components";

import { routes, slideInWithFade } from "../../../constants";
import { images } from "../../../assets";
import type { HeroImage } from "../../../types";

interface CaseStudyHeroProps {
  title: string;
  sectionImages: HeroImage[];
}

export const CaseStudyHero = ({ title, sectionImages }: CaseStudyHeroProps) => {
  const {
    caseDetails: { heroImages },
  } = images;

  return (
    <section className="pb-[50px] pt-[30px] md:py-[50px] lg:py-[80px]">
      <motion.div className="container" {...slideInWithFade}>
        <BackLink to={routes.CaseStudy} label="Back to case studies" className="mb-[20px]" />
        <h1 className="mb-[20px] md:mb-[40px] lg:mb-[60px] lg:max-w-[1100px]">{title}</h1>
      </motion.div>
      <motion.ul className="full-hd-container flex gap-[40px]" {...slideInWithFade}>
        {sectionImages.map((item, index) => {
          const { image, retinaImage } = item;

          const img = heroImages[image as keyof typeof heroImages];
          const retinaImg = heroImages[retinaImage as keyof typeof heroImages];

          return (
            <li key={index} className="hidden first:block md:block md:w-1/3 md:even:mt-[4vw]">
              <img
                srcSet={`${img} 1x, ${retinaImg} 2x`}
                src={image}
                alt={`${title} image ${index + 1}`}
                width={400}
                height={210}
                className="w-full rounded-[20px] object-cover tablet:h-[160px] lg:aspect-[400/210]"
              />
            </li>
          );
        })}
      </motion.ul>
    </section>
  );
};
