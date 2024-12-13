import { Link } from "react-router-dom";

import { ContactForm, Icon } from "../../components";

import { contacts } from "../../constants";
import { images } from "../../assets";

export const LetsTalk = () => {
  const { commonImages } = images;

  return (
    <section className="bg-themeToggleBgColor py-[80px]">
      <div className="container flex flex-row justify-between">
        <ContactForm />
        <div className="w-[620px]">
          <div className="mb-[30px] mt-[28px] flex flex-col gap-[20px]">
            <p className="big-text">Our contacts</p>
            <ul className="flex gap-[30px]">
              <ul className="flex gap-[30px]">
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
                        className="group-hover:fill-themeAccentColor h-[15px] w-[15px] fill-accentRedColor transition"
                      />
                      <p className="bold-text group-hover:text-themeAccentColor">{text}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </ul>
          </div>
          <div className="relative w-full overflow-hidden rounded-[40px]">
            <img
              srcSet={`${commonImages.barcelona_1x} 1x, ${commonImages.barcelona_2x} 2x`}
              src={commonImages.barcelona_1x}
              alt="View of Barcelona"
              width={620}
              loading="lazy"
              className="h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
