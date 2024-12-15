import { Link } from "react-router-dom";

import { CustomTitle } from "../components";

import { Industry } from "../types";
import { images } from "../assets";

interface IndustryCardProps {
  industry: Industry;
}

export const IndustryCard = ({ industry }: IndustryCardProps) => {
  const { industriesImages } = images;
  return (
    <Link to={industry.link} className="flex h-[346px] w-[340px] flex-col gap-[38px] p-[30px]">
      <img
        srcSet={`${industriesImages[industry.image]} 1x, ${industriesImages[industry.retinaImage]} 2x`}
        src={industriesImages[industry.image]}
        alt="Case study 1"
        width={70}
        loading="lazy"
      />
      <div className="flex flex-col gap-[8px]">
        <CustomTitle
          type="h5"
          wrapperStyles="flex items-center justify-between"
          iconColor="fill-whiteTextColor"
          titleStyles="text-whiteTextColor"
          text={industry.name}
        />
        <p className="small-text text-secondaryLightTextColor opacity-[0.6]">
          {industry.description}
        </p>
      </div>
    </Link>
  );
};
