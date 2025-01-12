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

const CaseStudyDetails = () => {
  return (
    <>
      <CaseStudyHero />
      <CaseStudyOverview />
      <CaseStudyChallenges />
      <CaseStudyServices />
      <CaseStudyFunctionalModules />
      <CaseStudyTechnologies />
      <CaseStudyAchivements />
      <LetsTalk />
    </>
  );
};

export default CaseStudyDetails;
