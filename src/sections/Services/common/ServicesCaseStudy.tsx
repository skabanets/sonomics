import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { CustomTitle } from "../../../components";

import { slideInWithFade } from "../../../constants";
import { images } from "../../../assets";
import type { CaseStudy } from "../../../types";

interface ServicesCaseStudyProps {
  caseStudy: CaseStudy;
}

export const ServicesCaseStudy = ({ caseStudy }: ServicesCaseStudyProps) => {
  const { name, description, link, images: imgs } = caseStudy;
  const { casesImages } = images;
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const image = isDesktop ? imgs.fullScreenBlock.image : imgs.generalPage.image;
  const retinaImage = isDesktop ? imgs.fullScreenBlock.retinaImage : imgs.generalPage.retinaImage;

  const img = casesImages[image as keyof typeof casesImages];
  const retinaImg = casesImages[retinaImage as keyof typeof casesImages];

  return (
    <section
      className="bg-blackBgColor py-[50px] lg:py-[80px]"
      style={
        {
          "--services-case-study-bg-image1x": `url(${img})`,
          "--services-case-study-bg-image2x": `url(${retinaImg})`,
        } as React.CSSProperties
      }
    >
      <motion.div
        className="services-case-study container flex flex-col items-center gap-[15px]"
        {...slideInWithFade}
      >
        <h5 className="text-whiteTextColor">{name}</h5>
        <h2 className="max-w-[940px] text-center text-whiteTextColor">{description}</h2>
        <Link to={link} className="view-link inline-block before:bg-accentYellowColor">
          <CustomTitle
            text="Read more"
            type="h5"
            wrapperStyles="flex items-center gap-[10px] "
            iconColor="fill-accentYellowColor"
            titleStyles="text-accentYellowColor"
          />
        </Link>
      </motion.div>
    </section>
  );
};
