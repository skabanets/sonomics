import { Link } from "react-router-dom";

import { CaseCard, CustomTitle } from "../../components";

import { caseStudieStyles, caseStudies, routes } from "../../constants";
import { CaseStudy } from "../../types";

export const CaseStudies = () => {
  const styledCaseStudies = caseStudies.map((caseStudy, index) => ({
    ...caseStudy,
    styles: caseStudieStyles[index],
  }));

  const columns = [styledCaseStudies.slice(0, 2), styledCaseStudies.slice(2, 4)];

  return (
    <section className="pb-[100px] pt-[80px]">
      <div className="container flex flex-col gap-[60px]">
        <div className="flex items-center justify-between">
          <h2>Case studies</h2>
          <Link to={routes.CaseStudy} className="view-link">
            <CustomTitle
              type="h4"
              wrapperStyles="flex items-center gap-[10px]"
              iconColor="fill-accentRedColor"
              titleStyles="text-accentRedColor"
            />
          </Link>
        </div>
        <div className="flex gap-[40px]">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-[80px]">
              {column.map((caseStudy) => (
                <div className="w-[620px]" key={caseStudy.id}>
                  <CaseCard
                    caseStudy={caseStudy as CaseStudy}
                    containerStyles={caseStudy.styles.containerStyles}
                    imageWidth={caseStudy.styles.width}
                    imageHeight={caseStudy.styles.height}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
