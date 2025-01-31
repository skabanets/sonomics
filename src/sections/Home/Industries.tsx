import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { CustomTitle, IndustryCard } from "../../components";

import {
  slideInWithFade,
  routes,
  industriesContainerVariants,
  cardVariants,
  homeIndustries,
} from "../../constants";
import type { Industry } from "../../types";

export const Industries = () => {
  return (
    <section className="bg-blackBgColor py-[50px] md:py-[60px]">
      <motion.div className="container" {...slideInWithFade}>
        <h2 className="text-whiteTextColor">Industries</h2>
        <motion.ul
          className="mt-[40px] flex flex-col gap-[20px] md:flex-row"
          variants={industriesContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {homeIndustries.map((industry, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              className="rounded-[20px] border border-solid border-transparent bg-darkBgColor transition hover:border-accentYellowColor focus-visible:border-accentYellowColor"
              tabIndex={0}
            >
              <IndustryCard industry={industry as Industry} />
            </motion.li>
          ))}
          <motion.li
            variants={cardVariants}
            className="rounded-[15px] border border-solid border-transparent bg-darkBgColor transition hover:border-accentYellowColor focus-visible:border-accentYellowColor md:rounded-[20px]"
            tabIndex={0}
          >
            <Link
              to={routes.Industries}
              className="flex h-[80px] w-full items-center justify-center md:h-[346px] md:w-[200px]"
            >
              <CustomTitle
                type="h5"
                wrapperStyles="flex items-center gap-[10px]"
                iconColor="fill-whiteTextColor"
                titleStyles="text-whiteTextColor"
              />
            </Link>
          </motion.li>
        </motion.ul>
      </motion.div>
    </section>
  );
};
