import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { CustomTitle, Divider } from "../../components";

import { services, routes, slideInWithFade } from "../../constants";

export const Services = () => {
  const servicesLinks = services.slice(0, 3);

  return (
    <section className="bg-secondaryBgColor py-[80px]">
      <motion.div className="container flex flex-row justify-between" {...slideInWithFade}>
        <h2 className="w-[412px] pt-[4px]">What we can do for our clients</h2>
        <div className="flex w-[630px] flex-col gap-[25px]">
          {servicesLinks.map((service) => (
            <React.Fragment key={service.id}>
              <Divider />
              <Link to={service.link} className="group">
                <CustomTitle
                  type="h4"
                  wrapperStyles="flex items-center justify-between px-[10px] group-hover:px-[20px] transition group-focus-visible:px-[20px]"
                  titleStyles="group-hover:text-accentYellowColor group-focus-visible:text-accentYellowColor"
                  iconColor="fill-mainTextColor group-hover:fill-accentYellowColor group-focus-visible:fill-accentYellowColor"
                  text={service.name}
                />
              </Link>
            </React.Fragment>
          ))}
          <Divider />
          <Link to={routes.Services} className="group">
            <CustomTitle
              type="h4"
              wrapperStyles="flex items-center justify-between px-[10px] group-hover:px-[20px] transition group-focus-visible:px-[20px]"
              titleStyles="text-accentRedColor group-hover:text-accentYellowColor group-focus-visible:text-accentYellowColor"
              iconColor="fill-accentRedColor group-hover:fill-accentYellowColor group-focus-visible:fill-accentYellowColor"
              text="More services"
            />
          </Link>
          <Divider />
        </div>
      </motion.div>
    </section>
  );
};
