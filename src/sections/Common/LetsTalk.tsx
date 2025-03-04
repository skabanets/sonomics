import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { ContactForm, Icon } from "../../components";

import { slideInWithFade, contacts } from "../../constants";
import { images } from "../../assets";

export const LetsTalk = () => {
  const { commonImages } = images;

  return (
    <section className="bg-letsTalkBgColor py-[50px] lg:py-[80px]">
      <motion.div
        className="container flex flex-col lg:flex-row lg:justify-between"
        {...slideInWithFade}
      >
        <ContactForm />
        <div className="w-full lg:w-[620px]">
          <div className="mb-[30px] mt-[30px] flex flex-col gap-[20px] lg:mt-[28px]">
            <p className="big-text">Our contacts</p>
            <ul className="flex flex-col gap-[30px] lg:flex-row">
              {contacts.map(({ id, href, text, target, rel }) => (
                <li key={id}>
                  <Link
                    to={href}
                    className="group flex items-center gap-[10px]"
                    target={target}
                    rel={rel}
                  >
                    <Icon
                      id={id}
                      className="h-[15px] w-[15px] fill-accentRedColor transition group-hover:fill-themeAccentColor group-focus-visible:fill-themeAccentColor"
                    />
                    <p className="bold-text group-hover:text-themeAccentColor group-focus-visible:text-themeAccentColor">
                      {text}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full overflow-hidden rounded-[20px] md:rounded-[40px]">
            <img
              srcSet={`${commonImages.barcelona_1x} 1x, ${commonImages.barcelona_2x} 2x`}
              src={commonImages.barcelona_1x}
              alt="View of Barcelona"
              width={620}
              loading="lazy"
              className="h-[210px] w-full object-cover md:h-[420px] lg:w-[620px]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
