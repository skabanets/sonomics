import React from "react";

import { CustomLink, Divider } from "../../components";

import { serviceLinks, routes } from "../../constants";

export const Services = () => {
  return (
    <section className="bg-secondaryBgColor py-[80px]">
      <div className="container flex flex-row justify-between">
        <h2 className="w-[412px] pt-[4px]">What we can do for our clients</h2>
        <div className="flex w-[630px] flex-col gap-[25px]">
          {serviceLinks.map((link) => (
            <React.Fragment key={link.id}>
              <Divider />
              <CustomLink
                text={link.text}
                layout="justify-between"
                textColor="text-mainTextColor"
                iconColor="fill-mainTextColor"
                padding="px-[10px]"
              />
            </React.Fragment>
          ))}
          <Divider />
          <CustomLink
            link={routes.Services}
            text="More services"
            layout="justify-between"
            padding="px-[10px]"
          />
          <Divider />
        </div>
      </div>
    </section>
  );
};
