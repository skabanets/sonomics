import { Link } from "react-router-dom";

import { CustomTitle } from "../components";

import { images } from "../assets";
import { CaseStudy } from "../types";

interface CaseCardProps {
  caseStudy: CaseStudy;
}

export const CaseCard = ({ caseStudy }: CaseCardProps) => {
  const { casesImages } = images;
  console.log(casesImages);

  return (
    <li className="group w-[600px]">
      <Link to={caseStudy.link}>
        <div className="relative overflow-hidden rounded-[40px] bg-[#D9D9D9]">
          <img
            srcSet={`${casesImages[caseStudy.image]} 1x, ${casesImages[caseStudy.retinaImage]} 2x`}
            src={casesImages[caseStudy.image]}
            alt="Case study 1"
            width="600"
            height="500"
            loading="lazy"
            className="scale-on-hover"
          />
        </div>
        <div className="flex flex-col gap-[10px] pt-[20px]">
          <CustomTitle
            type="h3"
            wrapperStyles="flex flex items-center gap-[15px]"
            text="Case study name"
          />
          <p className="opacity-[0.6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore
          </p>
        </div>
      </Link>
    </li>
  );
};
