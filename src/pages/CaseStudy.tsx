import { ClientSuccessStories, LetsTalk } from "../sections";

import { caseStudies } from "../constants";
import type { CaseStudy as CaseStudyType } from "../types";

const CaseStudy = () => {
  return (
    <>
      <ClientSuccessStories cases={caseStudies as CaseStudyType[]} />
      <LetsTalk />
    </>
  );
};

export default CaseStudy;
