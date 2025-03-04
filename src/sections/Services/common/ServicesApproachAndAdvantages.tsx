import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { Icon } from "../../../components";

import {
  cardVariants,
  industriesContainerVariants,
  routes,
  slideInWithFade,
} from "../../../constants";
import type { ApproachAndAdvantages } from "../../../types";

interface ServicesApproachAndAdvantagesProps {
  approachAndAdvantages: ApproachAndAdvantages;
  id: string;
}

export const ServicesApproachAndAdvantages = ({
  approachAndAdvantages,
  id,
}: ServicesApproachAndAdvantagesProps) => {
  const { sectionTitle, items } = approachAndAdvantages;

  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const case1 = id === routes.RequirementAnalysisAndDevelopmentPlanning.slice(10);
  const case2 = id === routes.AgileMethodologies.slice(10);
  const case3 =
    id === routes.OptimizeBusinessProcessesWithCRM.slice(10) ||
    id === routes.CloudIntegration.slice(10);

  if (case1) {
    return (
      <section className="pb-[50px] lg:py-[100px]">
        <motion.div
          className="container flex-row lg:flex-col lg:justify-between"
          {...slideInWithFade}
        >
          <h2 className="mb-[40px] w-full lg:w-[430px]">{sectionTitle}</h2>
          <motion.ul
            className="flex flex-col gap-[30px] md:grid md:grid-cols-2 lg:gap-[40px]"
            {...(isTablet
              ? {
                  variants: industriesContainerVariants,
                  initial: "hidden",
                  whileInView: "show",
                  viewport: { once: true, amount: 0.3 },
                }
              : {})}
          >
            {items.map((item, index) => (
              <motion.li key={index} variants={cardVariants}>
                <div className="flex h-[390px] w-full flex-col items-start gap-[30px] rounded-bl-[20px] rounded-br-[20px] border-t-2 border-solid border-themeAccentColor bg-letsTalkBgColor px-[30px] py-[40px] transition md:w-[337px] lg:w-[370px]">
                  <div className="flex items-center gap-[20px]">
                    <Icon
                      id={item.icon}
                      className="size-[50px] fill-themeAccentColor stroke-themeAccentColor"
                    />
                    <h5 className="w-[240px]">{item.name}</h5>
                  </div>
                  {typeof item.description !== "string" && (
                    <ul className="flex flex-col gap-[10px]">
                      {item.description.map((text, index) => (
                        <li key={index}>
                          <p className="small-text text-secondaryTextColor">{text}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>
    );
  }

  if (case2) {
    return (
      <section>
        <motion.div className="container flex flex-col gap-[50px]" {...slideInWithFade}>
          <h2>{sectionTitle}</h2>
          <motion.ul
            className="flex flex-col gap-[30px] md:flex-row md:flex-wrap lg:flex-nowrap"
            {...(isTablet
              ? {
                  variants: industriesContainerVariants,
                  initial: "hidden",
                  whileInView: "show",
                  viewport: { once: true, amount: 0.3 },
                }
              : {})}
          >
            {items.map((item, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                className="flex h-[260px] w-full flex-col items-start gap-[20px] rounded-bl-[20px] rounded-br-[20px] border-t-2 border-solid border-themeAccentColor bg-letsTalkBgColor px-[30px] pt-[40px] transition md:w-[337px] lg:w-[300px]"
              >
                <Icon
                  id={item.icon}
                  className="size-[60px] fill-themeAccentColor stroke-themeAccentColor"
                />
                <p className="big-text">{item.description}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>
    );
  }

  if (case3) {
    return (
      <section className="py-[50px] lg:py-[100px]">
        <motion.div
          className="container relative flex flex-col gap-[50px] lg:flex-row lg:justify-end"
          {...slideInWithFade}
        >
          <h2 className="relative top-0 w-[269px] lg:absolute lg:left-[80px]">{sectionTitle}</h2>
          <motion.ul
            className="lg:grid-card-container lg:flex-end flex flex-col gap-[30px] md:flex-row md:flex-wrap lg:ml-auto lg:w-[1170px]"
            {...(isTablet
              ? {
                  variants: industriesContainerVariants,
                  initial: "hidden",
                  whileInView: "show",
                  viewport: { once: true, amount: 0.3 },
                }
              : {})}
          >
            {isDesktop && <li className="w-[370px]"></li>}
            {items.map((item, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                className={`flex h-[310px] w-full flex-col items-start gap-[30px] rounded-bl-[20px] rounded-br-[20px] border-t-2 border-solid border-themeAccentColor bg-letsTalkBgColor px-[30px] py-[40px] transition md:w-[337px] lg:w-[370px] ${isDesktop ? `item-${index + 1}` : `item-${index}`}`}
              >
                <Icon
                  id={item.icon}
                  className="size-[60px] fill-themeAccentColor stroke-themeAccentColor"
                />
                <div className="flex flex-col gap-[10px]">
                  <h4>{item.name}</h4>
                  <p className="small-text text-secondaryTextColor">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>
    );
  }

  return null;
};
