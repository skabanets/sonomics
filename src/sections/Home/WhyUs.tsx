import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import { slideInWithFade } from "../../constants";

export const WhyUs = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const whyUsAnimationProps = {
    ...slideInWithFade,
    transition: {
      ...slideInWithFade.transition,
      delay: 0.6,
    },
  };

  const animation = isTablet ? whyUsAnimationProps : slideInWithFade;

  return (
    <section className="py-[50px] md:py-[100px]">
      <motion.div className="container" {...animation}>
        <div className="flex w-full flex-col items-center justify-center gap-[10px] md:mx-auto md:w-[919px]">
          <h6 className="text-secondaryTextColor">Why Sonomics</h6>
          {isTablet ? (
            <h2 className="text-center">
              We&#8217;re not just about IT solutions — we&#8217;re about driving
              <span className="text-accentYellowColor">
                your business <br /> growth
              </span>
              , ensuring stability and <br /> fostering expertise
            </h2>
          ) : (
            <h2 className="text-center">
              We&#8217;re not just about IT <br />
              solutions — we&#8217;re about driving
              <span className="text-accentYellowColor">
                <br />
                your business growth
              </span>
              , ensuring stability and fostering expertise
            </h2>
          )}
        </div>
      </motion.div>
    </section>
  );
};
