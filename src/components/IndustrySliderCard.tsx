import { Link } from "react-router-dom";

import { CustomTitle } from "../components";

import { images } from "../assets";
import type { Industry } from "../types";

interface IndustryProps {
  industry: Industry;
  index: number;
}

export const IndustrySliderCard = ({ industry, index }: IndustryProps) => {
  const { casesImages } = images;
  const { name, description, technologies, services, caseStudy, images: imgs } = industry;
  const img = casesImages[imgs.image as keyof typeof casesImages];
  const retinaImg = casesImages[imgs.retinaImage as keyof typeof casesImages];

  const getIndustrySliderCardBgColor = (index: number) => {
    switch (index) {
      case 0:
        return "bg-formFieldBgColor";
      case 2:
      case 4:
        return "bg-navMenuBgColor";
      case 3:
        return "bg-secondaryDarkBgColor";
      default:
        return "bg-letsTalkBgColor";
    }
  };
  const slideCardBackgroundColor = getIndustrySliderCardBgColor(index);

  return (
    <>
      <div
        className={`flex h-full flex-col justify-between gap-[30px] h-sm:gap-[20px] ${index === 3 ? "text-whiteTextColor" : ""}`}
      >
        <div className="flex justify-between">
          <div className="w-[590px]">
            <h2 className="mb-[28px] h-sm:mb-[24px]">{name}</h2>
            {description.map((item, index) => (
              <h6
                key={index}
                className="mb-[24px] last:m-0 h-sm:text-[18px] h-md:mb-[36px] h-lg:mb-[54px]"
              >
                {item}
              </h6>
            ))}
          </div>
          <div
            className={`w-[590px] rounded-b-[20px] border-t-[4px] border-t-themeAccentColor p-[40px] h-sm:py-[25px] ${slideCardBackgroundColor}`}
          >
            <h5 className="mb-[10px]">{technologies.title}</h5>
            <p className="small-text mb-[30px] h-sm:mb-[24px]">{technologies.description}</p>
            <h5 className="mb-[10px]">{services.title}</h5>
            <p className="small-text">{services.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-y-[25px] h-sm:gap-y-[20px] h-md:gap-y-[65px]">
          <img
            srcSet={`${img} 1x, ${retinaImg} 2x`}
            src={img}
            alt={name}
            height={319}
            width={625}
            loading="lazy"
            className="h-[30dvh] rounded-[20px] object-cover h-sm:h-[25dvhpx] h-md:max-h-[319px] h-lg:h-[33dvh] h-lg:max-h-[350px] h-lg:w-[62dvh] h-lg:max-w-[660px]"
          />
          <div className="flex w-[590px] flex-col items-start justify-center gap-[15px]">
            <h5>{caseStudy.title}</h5>
            <h2 className="text-[30px] leading-[36px] h-sm:text-[24px] h-sm:font-semibold">
              {caseStudy.description}
            </h2>
            <Link to={caseStudy.link} className="view-link before:bg-themeAccentColor">
              <CustomTitle
                text="Read more"
                type="h5"
                wrapperStyles="flex items-center gap-[10px] "
                iconColor="fill-themeAccentColor"
                titleStyles="text-themeAccentColor"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
