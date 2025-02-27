import { motion } from "framer-motion";

import { slideInWithFade } from "../../constants";

export const IndustryHero = () => {
  return (
    <section className="pb-[40px] pt-[60px]">
      <motion.div className="container" {...slideInWithFade}>
        <h1 className="max-w-[1200px]">
          We deliver <span className="text-themeAccentColor transition">real value</span> to clients
          because of our knowledge of the industries in which they operate
        </h1>
      </motion.div>
    </section>
  );
};
