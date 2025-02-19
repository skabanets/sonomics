import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  CaseStudyChallenges,
  CaseStudyTechnologies,
  CaseStudyAchievements,
  CaseStudyFunctionalModules,
  CaseStudyOverview,
  CaseStudyServices,
  LetsTalk,
  CaseStudyHero,
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
    overview,
    challenges,
    services,
    functionalModules,
    technologies,
    achievements,
    images,
  } = caseStudy;

  return (
    <>
      <CaseStudyHero title={name} />
      <CaseStudyOverview overview={overview} sectionImages={images.main} />
      <CaseStudyChallenges challenges={challenges} />
      {services && <CaseStudyServices services={services} />}
      {functionalModules && <CaseStudyFunctionalModules functionalModules={functionalModules} />}
      <CaseStudyTechnologies technologies={technologies} />
      <CaseStudyAchievements achievements={achievements} sectionImages={images.vertical} />
      <LetsTalk />
    </>
  );
};

export default CaseStudyDetails;
