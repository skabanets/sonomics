import { motion } from "framer-motion";

import { images } from "../../assets";
import { slideInWithFade, whyChooseUsPoints } from "../../constants";

export const WhyChooseUs = () => {
  const { whyChooseUsImages } = images;

  return (
    <section className="bg-secondaryBgColor py-[100px]">
      <motion.div className="container" {...slideInWithFade}>
        <h2 className="mb-[60px]">Why choose us</h2>
        <ul className="flex justify-between">
          {whyChooseUsPoints.map((item, index) => (
            <li key={index} className="w-[250px]">
              <img
                srcSet={`${whyChooseUsImages[item.images[0] as keyof typeof whyChooseUsImages]} 1x, ${whyChooseUsImages[item.images[1] as keyof typeof whyChooseUsImages]} 2x`}
                src={whyChooseUsImages[item.images[0] as keyof typeof whyChooseUsImages]}
                alt={item.title}
                width="200"
                height="200"
                loading="lazy"
                className="mb-[40px] h-[200px] object-cover"
              />
              <h4 className="mb-[10px]">{item.title}</h4>
              <p className="small-text text-secondaryTextColor">{item.description}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};
