import { Link } from "react-router-dom";

import { CustomTitle } from "../components";

import type { Industry } from "../types";
import { images } from "../assets";

interface IndustryCardProps {
  industry: Industry;
}

export const IndustryCard = ({ industry }: IndustryCardProps) => {
  const { industriesImages } = images;
  const { name, description, images: imgs } = industry;

  const icon = industriesImages[imgs.icon as keyof typeof industriesImages];
  const retinaIcon = industriesImages[imgs.retinaIcon as keyof typeof industriesImages];

  return (
    <Link to={industry.link} className="flex h-[346px] w-[340px] flex-col gap-[38px] p-[30px]">
      <img
        srcSet={`${icon} 1x, ${retinaIcon} 2x`}
        src={icon}
        alt={name}
        width={70}
        loading="lazy"
      />
      <div className="flex flex-col gap-[8px]">
        <CustomTitle
          type="h5"
          wrapperStyles="flex items-center justify-between"
          iconColor="fill-whiteTextColor"
          titleStyles="text-whiteTextColor"
          text={name}
        />
        <p className="small-text line-clamp-5 text-secondaryLightTextColor opacity-[0.6]">
          {description[0]}
        </p>
      </div>
    </Link>
  );
};
