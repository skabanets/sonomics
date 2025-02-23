import { useCallback, useEffect, useState } from "react";
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

  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handleMenuClick = (index: number) => {
    setCurrentIndex(index);
    const sectionId = caseStudyOptions[index].id;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight;
    let newIndex = currentIndex;

    caseStudyOptions.forEach((option, index) => {
      const element = document.getElementById(option.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementHeight = rect.height;
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

        if (visibleHeight >= elementHeight * 0.3) {
          newIndex = index;
        }
      }
    });

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  }, [caseStudyOptions, currentIndex]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <CaseStudyHero title={name} />
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
