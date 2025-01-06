import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { CustomTitle, IndustryCard } from "../../components";

import {
  slideInWithFade,
  industries,
  routes,
  industriesContainerVariants,
  cardVariants,
} from "../../constants";
import { Industry } from "../../types";

export const Industries = () => {
  return (
    <section className="bg-blackBgColor py-[60px]">
      <motion.div className="container space-y-12" {...slideInWithFade}>
        <h2 className="text-whiteTextColor">Industries</h2>
        <motion.ul
          className="flex flex-row gap-5"
          variants={industriesContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {industries.map((industry) => (
            <motion.li
              key={industry.id}
              variants={cardVariants}
              className="rounded-[20px] border border-solid border-transparent bg-darkBgColor transition hover:border-accentYellowColor focus-visible:border-accentYellowColor"
              tabIndex={0}
            >
              <IndustryCard industry={industry as Industry} />
            </motion.li>
          ))}
          <motion.li
            variants={cardVariants}
            className="rounded-[20px] border border-solid border-transparent bg-darkBgColor transition hover:border-accentYellowColor focus-visible:border-accentYellowColor"
            tabIndex={0}
          >
            <Link
              to={routes.Industries}
              className="flex h-[346px] w-[200px] items-center justify-center"
            >
              <CustomTitle
                type="h4"
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
