import { Button, ContactForm, Modal } from "../../../components";

import { useModal, useTheme } from "../../../hooks";
import { slideInWithFade, ThemeMode } from "../../../constants";
import type { WhyChooseSonomics } from "../../../types";
import { images } from "../../../assets";

interface ServicesWhyChooseSonomicsProps {
  content: WhyChooseSonomics;
}

export const ServicesWhyChooseSonomics = ({ content }: ServicesWhyChooseSonomicsProps) => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();
  const { theme } = useTheme();

  const {
    servicesDetails: { whyChooseSonomics },
  } = images;
  const { sectionTitle, items } = content;

  return (
    <>
      <section className="py-[100px]">
        <div className="container" {...slideInWithFade}>
          <div className="mb-[40px] flex items-center justify-between">
            <h2 className="max-w-[852px] font-black leading-[58px]">{sectionTitle}</h2>
            <Button label="Let's discuss your project" width="w-[300px]" onClick={toggleModal} />
          </div>
          <ul className="ml-[-10px] flex flex-wrap gap-[50px]">
            {items.map((item, index) => {
              const img = whyChooseSonomics[item.image as keyof typeof whyChooseSonomics];
              const retinaImg =
                whyChooseSonomics[item.retinaImage as keyof typeof whyChooseSonomics];
              return (
                <li
                  key={index}
                  className="flex w-[620px] rounded-[40px] bg-letsTalkBgColor transition"
                >
                  <img
                    srcSet={`${img} 1x, ${retinaImg} 2x`}
                    src={img}
                    alt={sectionTitle}
                    width="286"
                    height="301"
                    className={`rounded-l-[40px] bg-letsTalkBgColor object-cover ${theme === ThemeMode.LIGHT ? "brightness-[90%]" : ""}`}
                  />
                  <div className="flex flex-col justify-center gap-[10px] p-[30px]">
                    {" "}
                    <h5>{item.title}</h5>
                    <p className="small-text text-secondaryTextColor">{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      {isOpen && (
        <Modal {...{ toggleModal, handleClickOnBackdrop }}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};
