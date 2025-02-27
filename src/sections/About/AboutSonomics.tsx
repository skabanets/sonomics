import { motion } from "framer-motion";

import { slideInWithFade } from "../../constants";

export const AboutSonomics = () => {
  return (
    <section className="pb-[20px] pt-[30px] md:pb-[50px] md:pt-[60px] lg:pb-[80px] lg:pt-[100px]">
      <motion.div className="container" {...slideInWithFade}>
        <h6 className="mb-[10px] text-secondaryTextColor md:mb-[20px]">About Sonomics</h6>
        <h1>
          We&#8217;re <span className="text-themeAccentColor transition"> driving </span> your
          <span className="text-themeAccentColor transition"> business</span> growth, ensuring
          stability and fostering expertise
        </h1>
      </motion.div>
    </section>
  );
};
