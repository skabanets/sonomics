import { motion } from "framer-motion";

import { Icon } from "../../../components";

import {
  cardVariants,
  industriesContainerVariants,
  routes,
  slideInWithFade,
} from "../../../constants";
import { ApproachAndAdvantages } from "../../../types";

interface ServicesApproachAndAdvantagesProps {
  approachAndAdvantages: ApproachAndAdvantages;
  id: string;
}

export const ServicesApproachAndAdvantages = ({
  approachAndAdvantages,
  id,
}: ServicesApproachAndAdvantagesProps) => {
  const { sectionTitle, items } = approachAndAdvantages;

  const case1 = id === routes.RequirementAnalysisAndDevelopmentPlanning.slice(10);
  const case2 = id === routes.AgileMethodologies.slice(10);
  const case3 =
    id === routes.OptimizeBusinessProcessesWithCRM.slice(10) ||
    id === routes.CloudIntegration.slice(10);

  if (case1) {
    return (
      <section className="py-[100px]">
        <motion.div className="container flex justify-between" {...slideInWithFade}>
          <h2 className="w-[430px]">{sectionTitle}</h2>
          <motion.ul
            className="grid grid-cols-2 gap-[40px]"
            variants={industriesContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {items.map((item, index) => (
              <motion.li key={index} variants={cardVariants}>
                <div className="flex h-[390px] w-[370px] flex-col items-start gap-[30px] rounded-bl-[20px] rounded-br-[20px] border-t-2 border-solid border-themeAccentColor bg-letsTalkBgColor px-[30px] py-[40px] transition">
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
        <motion.div className="container flex flex-col gap-[40px]" {...slideInWithFade}>
          <h2>{sectionTitle}</h2>
          <motion.ul
            className="flex justify-between"
            variants={industriesContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {items.map((item, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                className="flex h-[260px] w-[300px] flex-col items-start gap-[20px] rounded-bl-[20px] rounded-br-[20px] border-t-2 border-solid border-themeAccentColor bg-letsTalkBgColor px-[30px] pt-[40px] transition"
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
      <section className="py-[100px]">
        <motion.div className="container relative flex justify-end" {...slideInWithFade}>
          <h2 className="absolute left-[80px] top-0 w-[269px]">{sectionTitle}</h2>
          <motion.ul
            className="grid-card-container"
            variants={industriesContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <li className="empty-cell"></li>
            {items.map((item, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                className={`flex h-[310px] w-[370px] flex-col items-start gap-[30px] rounded-bl-[20px] rounded-br-[20px] border-t-2 border-solid border-themeAccentColor bg-letsTalkBgColor px-[30px] py-[40px] transition item-${index + 1}`}
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
