import { motion } from "framer-motion";

import { slideInWithFade } from "../../constants";

export const AboutSonomics = () => {
  return (
    <section className="pb-[80px] pt-[100px]">
      <motion.div className="container" {...slideInWithFade}>
        <h6 className="mb-[20px] text-secondaryTextColor">About Sonomics</h6>
        <h1>
          We're <span className="text-accentYellowColor"> driving </span> your
          <span className="text-accentYellowColor"> business</span> growth, ensuring stability and
          fostering expertise.
        </h1>
      </motion.div>
    </section>
  );
};
