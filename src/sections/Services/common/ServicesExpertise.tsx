import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { routes, slideInWithFade } from "../../../constants";
import type { Expertise } from "../../../types";

interface ServiceExpertiseProps {
  expertise: Expertise;
}

export const ServicesExpertise = ({ expertise }: ServiceExpertiseProps) => {
  const { id } = useParams();

  const renderHighlightedText = (text: string, accentWords: string[]) => {
    const regex = new RegExp(`(${accentWords.join("|")})`, "gi");

    return text.split(regex).map((part, index) =>
      accentWords.includes(part) ? (
        <span key={index} className="text-accentYellowColor">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section
      className={`${id === routes.CloudIntegration.slice(10) ? "md:pt-[40px]" : "md:pt-[100px]"} py-[50px] md:pb-[100px]`}
    >
      <motion.div className="container" {...slideInWithFade}>
        <h2 className="text-center md:mx-auto md:max-w-[920px]">
          {renderHighlightedText(expertise.text, expertise.accentWords)}
        </h2>
      </motion.div>
    </section>
  );
};
