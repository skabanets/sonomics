import {
  LetsTalk,
  OurCoreServices,
  OurServices,
  WhyChooseUs,
  ServicesCaseStudy,
} from "../sections";

import { caseStudies } from "../constants";
import type { CaseStudy } from "../types";

const Services = () => {
  return (
    <>
      <OurServices />
      <OurCoreServices />
      <WhyChooseUs />
      <ServicesCaseStudy caseStudy={caseStudies[0] as CaseStudy} />
      <LetsTalk />
    </>
  );
};

export default Services;
