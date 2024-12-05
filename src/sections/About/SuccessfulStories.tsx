import { Link } from "react-router-dom";

import { CaseCard, CustomTitle } from "../../components";

import { caseStudies, routes } from "../../constants";
import { CaseStudy } from "../../types";

export const SuccessfulStories = () => {
  const cases = caseStudies.slice(0, 2);

  return (
    <section className="py-[100px]">
      <div className="container flex flex-col gap-[60px]">
        <div className="flex items-center justify-between">
          <h2>Successful stories</h2>
          <Link to={routes.CaseStudy} className="view-link">
            <CustomTitle
              type="h4"
              wrapperStyles="flex items-center gap-[10px]"
              iconColor="fill-accentRedColor"
              titleStyles="text-accentRedColor"
            />
          </Link>
        </div>
        <div className="flex flex-row gap-[80px]">
          {cases.map((caseStudy) => (
            <CaseCard key={caseStudy.id} caseStudy={caseStudy as CaseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
};
