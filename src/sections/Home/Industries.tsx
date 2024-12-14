import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { CustomTitle, IndustryCard } from "../../components";

import { slideInWithFade, industries, routes } from "../../constants";

const industriesContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

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
              className="rounded-[20px] border border-solid border-transparent bg-darkBgColor transition hover:border-accentYellowColor"
            >
              <IndustryCard industry={industry} />
            </motion.li>
          ))}
          <motion.li
            variants={cardVariants}
            className="rounded-[20px] border border-transparent bg-darkBgColor transition hover:border-accentYellowColor"
          >
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
          </motion.li>
        </motion.ul>
      </motion.div>
    </section>
  );
};
