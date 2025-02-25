import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { routes, slideInWithFade } from "../../../constants";
import { highlightText } from "../../../helpers";
import type { Expertise } from "../../../types";

interface ServiceExpertiseProps {
  expertise: Expertise;
}

export const ServicesExpertise = ({ expertise }: ServiceExpertiseProps) => {
  const { id } = useParams();

  return (
    <section
      className={`${id === routes.CloudIntegration.slice(10) ? "md:pt-[40px]" : "md:pt-[50px] lg:pt-[100px]"} py-[50px] md:pb-[50px] lg:pb-[100px]`}
    >
      <motion.div className="container" {...slideInWithFade}>
        <h2 className="text-center md:mx-auto md:max-w-[700px] lg:max-w-[920px]">
          {highlightText(expertise.text, expertise.accentWords)}
        </h2>
      </motion.div>
    </section>
  );
};
