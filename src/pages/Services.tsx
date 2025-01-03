import {
  LetsTalk,
  OurCoreServices,
  OurServices,
  WhyChooseUs,
  ServicesCaseStudy,
} from "../sections";

import { caseStudies } from "../constants";

const Services = () => {
  const { name, link, description, bgImage1x, bgImage2x } = caseStudies[0];
  return (
    <>
      <OurServices />
      <OurCoreServices />
      <WhyChooseUs />
      <ServicesCaseStudy {...{ name, description, link, bgImage1x, bgImage2x }} />
      <LetsTalk />
    </>
  );
};

export default Services;
