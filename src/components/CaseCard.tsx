import { Link } from "react-router-dom";

import { CustomTitle } from "../components";

import { images } from "../assets";
import { CaseStudy } from "../types";

interface CaseCardProps {
  caseStudy: CaseStudy;
  containerStyles?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export const CaseCard = ({
  caseStudy,
  containerStyles = "w-[600px]",
  imageWidth = 600,
  imageHeight = 500,
}: CaseCardProps) => {
  const { casesImages } = images;

  return (
    <div className={`group h-auto ${containerStyles}`}>
      <Link to={caseStudy.link}>
        <div className="relative overflow-hidden rounded-[40px]">
          <img
            srcSet={`${casesImages[caseStudy.image]} 1x, ${casesImages[caseStudy.retinaImage]} 2x`}
            src={casesImages[caseStudy.image]}
            alt="Case study 1"
            width={imageWidth}
            height={imageHeight}
            loading="lazy"
            className="scale-on-hover"
            style={{ height: `${imageHeight}px` }}
          />
        </div>
        <div className="flex flex-col gap-[10px] pt-[20px]">
          <CustomTitle
            type="h3"
            wrapperStyles="flex flex items-center gap-[15px]"
            titleStyles="text-mainTextColor group-hover:text-themeAccentColor"
            iconColor="fill-mainTextColor group-hover:fill-themeAccentColor"
            text={caseStudy.name}
          />
          <p className="opacity-[0.6]">{caseStudy.description}</p>
        </div>
      </Link>
    </div>
  );
};
