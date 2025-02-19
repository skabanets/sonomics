import type { CaseStudyCardType, CaseStudyTypeMap } from "../types";

export const getCaseStudyType = <T extends CaseStudyCardType>(type: T): CaseStudyTypeMap[T] => {
  const map: CaseStudyTypeMap = {
    general: "generalPage",
    vertical: "hp",
    horizontal: "hpHorizontal",
  };
  return map[type];
};
