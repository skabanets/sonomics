import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  CaseStudyChallenges,
  CaseStudyHero,
  CaseStudyTechnologies,
  CaseStudyAchivements,
  CaseStudyFunctionalModules,
  CaseStudyOverview,
  CaseStudyServices,
  LetsTalk,
} from "../sections";

import { caseStudies, routes } from "../constants";

const CaseStudyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const caseStudy = caseStudies.find((caseStudy) => caseStudy.id === id);

  useEffect(() => {
    if (!caseStudy) {
      navigate(`${routes.CaseStudy}`);
    }
  }, [caseStudy, navigate]);

  if (!caseStudy) return null;

  const {
    name,
    heroImages,
    overview,
    challenges,
    services,
    functionalModules,
    technologies,
    achievements,
  } = caseStudy;

  return (
    <>
      <CaseStudyHero title={name} sectionImages={heroImages} />
      <CaseStudyOverview overview={overview} />
      <CaseStudyChallenges challenges={challenges} />
      {services && <CaseStudyServices services={services} />}
      {functionalModules && <CaseStudyFunctionalModules functionalModules={functionalModules} />}
      <CaseStudyTechnologies technologies={technologies} />
      <CaseStudyAchivements achievements={achievements} />
      <LetsTalk />
    </>
  );
};

export default CaseStudyDetails;
