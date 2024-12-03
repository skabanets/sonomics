import { CustomLink, IndustryCard } from "../../components";

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
          <div className="flex h-[317px] w-[200px] items-center justify-center rounded-[20px] bg-darkBgColor p-[30px]">
            <CustomLink
              link={routes.Industries}
              layout="gap"
              textColor="text-whiteTextColor"
              iconColor="fill-whiteTextColor"
            />
          </div>
        </ul>
      </div>
    </section>
  );
};
