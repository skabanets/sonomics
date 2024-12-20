import { motion } from "framer-motion";

import { ServiceCard } from "../../components";

import { services, slideInWithFade } from "../../constants";

export const OurCoreServices = () => {
  return (
    <section className="bg-secondaryBgColor pt-[90px]">
      <motion.div className="container flex flex-col" {...slideInWithFade}>
        <h2>Our core services</h2>
        <ul className="mt-[60px] flex gap-[30px] border-b border-solid border-mainTextColor pb-[89px]">
          {services.map((service) => (
            <li key={service.id}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};
