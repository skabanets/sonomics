import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { CustomTitle, Divider } from "../../components";

import { routes, slideInWithFade } from "../../constants";

export const Services = () => {
  const services = [
    { name: "End-to-End Application Development", link: routes.EndToEndApplicationDevelopment },
    { name: "Artificial Intelligence (AI) Integration", link: routes.ArtificialIntelligence },
    { name: "Agile Methodologies", link: routes.AgileMethodologies },
  ];

  return (
    <section className="bg-secondaryBgColor py-[50px] md:py-[80px]">
      <motion.div
        className="container flex flex-col gap-[40px] md:flex-row md:justify-between md:gap-0"
        {...slideInWithFade}
      >
        <h2 className="md:w-[412px] md:pt-[4px]">What we can do for our clients</h2>
        <div className="flex w-full flex-col gap-[24px] md:w-[630px]">
          {services.map((service, index) => (
            <React.Fragment key={index}>
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
