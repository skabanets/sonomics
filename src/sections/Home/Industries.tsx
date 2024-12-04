import { Link } from "react-router-dom";
import { CustomTitle, IndustryCard } from "../../components";

import { industries, routes } from "../../constants";

export const Industries = () => {
  return (
    <section className="bg-blackBgColor py-[60px]">
      <div className="container space-y-12">
        <h2 className="text-whiteTextColor">Industries</h2>
        <ul className="flex flex-row gap-5">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
          <li className="rounded-[20px] border border-transparent bg-darkBgColor transition hover:border-accentYellowColor">
            <Link
              to={routes.Industries}
              className="flex h-[317px] w-[200px] items-center justify-center"
            >
              <CustomTitle
                type="h4"
                wrapperStyles="flex items-center gap-[10px]"
                iconColor="fill-whiteTextColor"
                titleStyles="text-whiteTextColor"
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
