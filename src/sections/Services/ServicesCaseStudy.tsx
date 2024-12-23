import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import { CustomTitle } from "../../components";

import { routes, slideInWithFade } from "../../constants";

export const ServicesCaseStudy = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [backgroundPositionY, setBackgroundPositionY] = useState("0%");

  useEffect(() => {
    const unsubscribe = yOffset.on("change", (latest) => {
      setBackgroundPositionY(latest);
    });

    return () => unsubscribe();
  }, [yOffset]);

  return (
    <motion.section
      ref={ref}
      className="services-case-study-bg py-[120px]"
      style={{
        backgroundPosition: `center ${backgroundPositionY}`,
      }}
      {...slideInWithFade}
    >
      <div className="container">
        <h5 className="mb-[20px] text-whiteTextColor">Case study name</h5>
        <h2 className="mb-[20px] w-[600px] text-whiteTextColor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore
        </h2>
        <Link to={routes.CaseStudy} className="view-link inline-block w-[130px]">
          <CustomTitle
            text="Read more"
            type="h5"
            wrapperStyles="flex items-center gap-[10px] "
            iconColor="fill-accentRedColor"
            titleStyles="text-accentRedColor"
          />
        </Link>
      </div>
    </motion.section>
  );
};
