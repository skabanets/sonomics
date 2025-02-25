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
import { ItemsMenu } from "../components";

import { caseStudies, routes } from "../constants";
import type { CaseStudyMenuItem } from "../types";
import { useItemsMenuNavigation } from "../hooks";

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
    pageTitle,
    overview,
    challenges,
    services,
    functionalModules,
    technologies,
    achievements,
    images,
  } = caseStudy;

  const rawOptions: (CaseStudyMenuItem | null)[] = [
    { id: "overview", name: "Overview" },
    { id: "challenges", name: "Challenges" },
    services ? { id: "services", name: "Services" } : null,
    functionalModules ? { id: "functional-modules", name: "Functional modules" } : null,
    { id: "technologies", name: "Technologies" },
    { id: "achievements", name: "Our achievements" },
  ];

  const caseStudyOptions: CaseStudyMenuItem[] = rawOptions.filter(
    (option): option is CaseStudyMenuItem => option !== null
  );

  const { currentIndex, handleMenuClick } = useItemsMenuNavigation({
    menuOptions: caseStudyOptions,
  });

  return (
    <>
      <CaseStudyHero title={pageTitle} />
      {
        <div>
          <ItemsMenu
            items={caseStudyOptions}
            currentIndex={currentIndex}
            handleMenuClick={handleMenuClick}
            styles="sticky top-0 opacity-100 z-50"
          />
          <CaseStudyOverview id="overview" overview={overview} sectionImages={images.main} />
          <CaseStudyChallenges id="challenges" challenges={challenges} />
          {services && <CaseStudyServices id="services" services={services} />}
          {functionalModules && (
            <CaseStudyFunctionalModules
              id="functional-modules"
              functionalModules={functionalModules}
            />
          )}
          <CaseStudyTechnologies id="technologies" technologies={technologies} />
          <CaseStudyAchievements
            id="achievements"
            achievements={achievements}
            sectionImages={images.vertical}
          />
        </div>
      }
      <LetsTalk />
    </>
  );
};

export default CaseStudyDetails;
