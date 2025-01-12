import { motion } from "framer-motion";

import { Button, ContactForm, Modal } from "../../../components";

import { slideInWithFade } from "../../../constants";
import { useModal } from "../../../hooks";
import { images } from "../../../assets";

const items = [
  {
    id: 1,
    title: "Improved productivity",
    description: "Automated IBAN account creation reduced processing times by 60%",
  },
  {
    id: 2,
    title: "Increased revenue streams:",
    description:
      "The loan management system and currency exchange capabilities generated new revenue opportunities",
  },
  {
    id: 3,
    title: "Enhanced UX:",
    description: "Real-time money transfers and currency exchange improved customer satisfaction",
  },
  {
    id: 4,
    title: "Seamless integration",
    description:
      "Secure and reliable integration with external providers ensured smooth operation and scalability",
  },
  {
    id: 5,
    title: "Future-ready platform",
    description:
      "Scalable architecture and modular design equipped the client for future growth and feature expansion",
  },
];

export const CaseStudyAchivements = () => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  const {
    caseDetails: { achivementsImages },
  } = images;
  const image = achivementsImages.case_achivements_item1_desk_1x;
  const retinaImage = achivementsImages.case_achivements_item1_desk_2x;

  return (
    <>
      <section className="bg-blackBgColor py-[20px] pb-[80px]">
        <motion.div className="container" {...slideInWithFade}>
          <div className="mb-[60px] flex items-center justify-between">
            <h2 className="text-whiteTextColor">Our achievements</h2>
            <Button label="Let&#8217;s talk" width="w-[152px]" onClick={toggleModal} />
          </div>
          <div className="flex">
            <ul className="w-1/2 rounded-l-[40px] bg-accentYellowColor p-[60px] text-darkBgColor">
              {items.map(({ id, title, description }) => (
                <li
                  key={id}
                  className="border-t border-t-blackBgColor py-[30px] first:border-none first:pt-0 last:pb-0"
                >
                  <h3 className="mb-[10px]">{title}</h3>
                  <p className="big-text">{description}</p>
                </li>
              ))}
            </ul>
            <img
              srcSet={`${image} 1x, ${retinaImage} 2x`}
              src={image}
              alt="Achivement"
              width="640"
              height="890"
              className="w-1/2 rounded-r-[40px] object-cover"
            />
          </div>
        </motion.div>
      </section>
      {isOpen && (
        <Modal {...{ toggleModal, handleClickOnBackdrop }}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};
