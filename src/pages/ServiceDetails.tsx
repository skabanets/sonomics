import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  LetsTalk,
  ServicesApproachAndAdvantages,
  ServicesCaseStudy,
  ServicesExpertise,
  ServicesHero,
  ServicesTechnologies,
  ServicesWhatWeOffer,
  ServicesWhyChooseSonomics,
} from "../sections";

import { caseStudies, routes, services } from "../constants";
import type { CaseStudy } from "../types";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services.find((service) => service.id === id);

  useEffect(() => {
    if (!service) {
      navigate(`${routes.Services}`);
    }
  }, [service, navigate]);

  if (!service) return null;

  const caseStudyData = caseStudies.find(
    (caseStudy) => String(caseStudy.id) === String(service.caseStudyId)
  );

  const case1 =
    id === routes.EndToEndApplicationDevelopment.slice(10) ||
    id === routes.ArtificialIntelligence.slice(10) ||
    id === routes.DemoVersion.slice(10);
  const case2 =
    id === routes.RequirementAnalysisAndDevelopmentPlanning.slice(10) ||
    id === routes.AgileMethodologies.slice(10);
  const case3 =
    id === routes.OptimizeBusinessProcessesWithCRM.slice(10) ||
    id === routes.CloudIntegration.slice(10);

  return (
    <>
      <ServicesHero title={service.title} hero={service.hero} />
      {case1 && service.expertise && service.technologies && (
        <>
          <ServicesWhatWeOffer offers={service.offers} />
          <ServicesExpertise expertise={service.expertise} />
          <ServicesTechnologies technologies={service.technologies} id={service.id} />
        </>
      )}
      {case2 && service.approachAndAdvantages && (
        <>
          <ServicesApproachAndAdvantages
            approachAndAdvantages={service.approachAndAdvantages}
            id={service.id}
          />
          {service.expertise && <ServicesExpertise expertise={service.expertise} />}
          <ServicesWhatWeOffer offers={service.offers} />
          {service.technologies && (
            <ServicesTechnologies technologies={service.technologies} id={service.id} />
          )}
        </>
      )}
      {case3 && service.approachAndAdvantages && service.technologies && (
        <>
          {service.expertise && <ServicesExpertise expertise={service.expertise} />}
          <ServicesWhatWeOffer offers={service.offers} />
          <ServicesApproachAndAdvantages
            approachAndAdvantages={service.approachAndAdvantages}
            id={service.id}
          />
          <ServicesTechnologies technologies={service.technologies} id={service.id} />
        </>
      )}
      <ServicesWhyChooseSonomics items={service.whyChooseSonomics} />
      {caseStudyData && <ServicesCaseStudy caseStudy={caseStudyData as CaseStudy} />}
      <LetsTalk />
    </>
  );
};

export default ServiceDetails;
