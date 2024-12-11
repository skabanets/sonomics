import { motion } from "framer-motion";

import { Divider } from "../../components";

import { sonomicsNumbers } from "../../constants";

export const SonomicsNumbers = () => {
  return (
    <section className="py-[100px]">
      <div className="container relative">
        <h2 className="sticky top-[100px] z-10 w-[300px] pt-[20px]">Sonomics in numbers</h2>
        <ul className="ml-auto mt-[-128px] w-[774px] overflow-hidden">
          {sonomicsNumbers.map(({ title, number }, index) => (
            <motion.li
              initial={{ opacity: 0, x: 500 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true, amount: 0.35 }}
              key={index}
              className="flex flex-wrap items-center justify-between gap-y-[4vh] pt-[4vh] first:pt-0"
            >
              <p className="text-[120px] font-medium leading-[156px] text-accentRedColor">
                {number}+
              </p>
              <h4 className="w-[490px]">{title}</h4>

              {index < sonomicsNumbers.length - 1 && <Divider />}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
