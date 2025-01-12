import { motion } from "framer-motion";

import { slideInWithFade } from "../../constants";

const whyUsAnimationProps = {
  ...slideInWithFade,
  transition: {
    ...slideInWithFade.transition,
    delay: 0.6,
  },
};

export const WhyUs = () => {
  return (
    <section className="py-[100px]">
      <motion.div
        className="container flex max-w-[1035px] flex-col items-center justify-center gap-2.5"
        {...whyUsAnimationProps}
      >
        <h6 className="text-secondaryTextColor">Why Sonomics</h6>
        <h2 className="text-center">
          We&#8217;re not just about IT solutions — we&#8217;re about driving{" "}
          <span className="text-accentYellowColor">
            your business <br /> growth
          </span>
          , ensuring stability and <br /> fostering expertise
        </h2>
      </motion.div>
    </section>
  );
};
