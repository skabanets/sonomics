import React from "react";
import { Link } from "react-router-dom";

import { CustomTitle, Divider } from "../../components";

import { serviceLinks, routes } from "../../constants";

export const Services = () => {
  return (
    <section className="bg-secondaryBgColor py-[80px]">
      <div className="container flex flex-row justify-between">
        <h2 className="w-[412px] pt-[4px]">What we can do for our clients</h2>
        <div className="flex w-[630px] flex-col gap-[25px]">
          {serviceLinks.map((service) => (
            <React.Fragment key={service.id}>
              <Divider />
              <Link to={service.link}>
                <CustomTitle
                  type="h4"
                  wrapperStyles="flex items-center justify-between px-[10px]"
                  text={service.text}
                />
              </Link>
            </React.Fragment>
          ))}
          <Divider />
          <Link to={routes.Services}>
            <CustomTitle
              type="h4"
              wrapperStyles="flex items-center justify-between px-[10px]"
              titleStyles="text-accentRedColor"
              iconColor="fill-accentRedColor"
              text="More services"
            />
          </Link>
          <Divider />
        </div>
      </div>
    </section>
  );
};
