import { Slider } from "../../components";

import { caseStudies } from "../../constants";
import { CaseStudy } from "../../types";

export const Hero = () => {
  return (
    <section className="pt-[60px]">
      <div className="container flex gap-[80px]">
        <div className="flex w-[600px] flex-col gap-[22px] pt-[40px]">
          <h1>Empower your business with our leading IT solutions</h1>
          <h6 className="secondaryTextColor">
            Product Engineering, DevOps, Cloud, UI/UX, Quality Engineering, Mobile Development
          </h6>
        </div>
        <Slider slides={caseStudies as CaseStudy[]} />
      </div>
    </section>
  );
};