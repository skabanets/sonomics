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
  const { name, description, link, image, retinaImage } = caseStudy;

  const { casesImages } = images;
  const img = casesImages[image as keyof typeof casesImages];
  const retinaImg = casesImages[retinaImage as keyof typeof casesImages];

  return (
    <div className={`group h-auto ${containerStyles}`} tabIndex={0}>
      <Link to={link}>
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[40px]">
          <img
            srcSet={`${img} 1x, ${retinaImg} 2x`}
            src={img}
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
            titleStyles="text-mainTextColor group-hover:text-themeAccentColor group-focus-visible:text-themeAccentColor line-clamp-1"
            iconColor="fill-mainTextColor group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"
            text={name}
          />
          <p className="opacity-[0.6]">{description}</p>
        </div>
      </Link>
    </div>
  );
};
