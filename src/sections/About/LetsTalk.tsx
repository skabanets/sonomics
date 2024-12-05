import { Link } from "react-router-dom";

import { ContactForm, Icon } from "../../components";

import { images } from "../../assets";

export const LetsTalk = () => {
  const { commonImages } = images;

  return (
    <section className="bg-themeToggleBgColor py-[80px]">
      <div className="container flex flex-row justify-between">
        <div className="w-[536px]">
          <div>
            <h2>Let’s talk</h2>
            <p className="big-text mt-[10px]">Any question or remarks? Just write us a message!</p>
          </div>
          <ContactForm />
        </div>
        <div className="w-[619px]">
          <div className="mb-[30px] mt-[26px] flex flex-col gap-[15px]">
            <p className="big-text">Our contacts</p>
            <ul className="flex gap-[15px]">
              <li>
                <Link to="tel:+12345678990" className="flex items-center gap-[10px]">
                  <Icon id="phone" className="h-[13px] w-[13px] fill-accentRedColor" />
                  <h5>+1 234 567-89-90</h5>
                </Link>
              </li>
              <li>
                <Link to="mailto:info@sonomics.com" className="flex items-center gap-[10px]">
                  <Icon id="email" className="h-[14px] w-[15px] fill-accentRedColor" />
                  <h5>info@sonomics.com</h5>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.google.com/maps?q=Barcelona,+Spain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[10px]"
                >
                  <Icon id="location" className="h-[15px] w-[15px] fill-accentRedColor" />
                  <h5>Barcelona, Spain</h5>
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative w-full overflow-hidden rounded-[40px]">
            <img
              srcSet={`${commonImages.barcelona_1x} 1x, ${commonImages.barcelona_2x} 2x`}
              src={commonImages.barcelona_1x}
              alt="View of Barcelona"
              width={619}
              height={217}
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
