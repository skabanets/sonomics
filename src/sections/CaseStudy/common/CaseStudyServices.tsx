import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Button, ContactForm, CustomTitle, Modal } from "../../../components";

import { caseStudyColors, routes, services, slideInWithFade } from "../../../constants";
import { useModal } from "../../../hooks";
import { images } from "../../../assets";

export const CaseStudyServices = () => {
  const [isOpen, toggleModal, handleClickOnBackdrop] = useModal();

  const descriptions = [
    "Integrated functionalities to create and manage IBAN accounts, automate processes, and streamline user operations.",
    "Conducted in-depth stakeholder interviews and workshops to gather detailed requirements, ensuring alignment with business goals.",
    "Leveraged Scrum, Kanban, and Hybrid Approaches for iterative and flexible development.",
    "Utilized AWS for cloud deployment, ensuring security and scalability.",
  ];
  const links = [
    routes.EndToEndApplicationDevelopment,
    routes.RequirementAnalysisAndDevelopmentPlanning,
    routes.AgileMethodologies,
    routes.CloudIntegration,
  ];

  const items = [services[0], services[3], services[4], services[6]];
  const updatedItems = items.map((item, index) => {
    return {
      name: item.name,
      description: descriptions[index],
      link: links[index],
      image: item.hero.image,
      retinaImage: item.hero.retinaImage,
    };
  });

  const {
    servicesDetails: { heroImages },
  } = images;

  return (
    <>
      <section className="pb-[80px] pt-[100px]">
        <div className="container">
          <motion.div
            className="sticky top-[40px] mb-[30px] flex items-start justify-between"
            {...slideInWithFade}
          >
            <div className="max-w-[815px]">
              {" "}
              <h2 className="mb-[20px]">Services</h2>
              <h6>
                To address these challenges, Sonomics applied our End-to-End Application Development
                expertise, coupled with Requirement Analysis & Development Planning, Agile
                Methodologies, and Cloud Integration with Leading Providers. Here's how we delivered
                a comprehensive solution:
              </h6>
            </div>
            <Button
              label="Let&#8217;s discuss your project"
              width="w-[300px]"
              onClick={toggleModal}
            />
          </motion.div>
          <ul className="flex flex-col gap-[30px]">
            {updatedItems.map(({ name, description, link, image, retinaImage }, index) => {
              const itemBgColor = `bg-${caseStudyColors[index % caseStudyColors.length]}`;

              const img = heroImages[image as keyof typeof heroImages];
              const retinaImg = heroImages[retinaImage as keyof typeof heroImages];

              return (
                <li
                  key={index}
                  className={`sticky rounded-[20px] text-whiteTextColor ${itemBgColor}`}
                  style={{ top: `${105 + index * 15}px` }}
                >
                  <motion.div
                    className="flex justify-between p-[40px] pr-[50px]"
                    {...slideInWithFade}
                  >
                    <div className="max-w-[630px]">
                      <h3 className="mb-[20px]">{name}</h3>
                      <p className="mb-[20px] max-w-[450px]">{description}</p>
                      <Link to={link} className="view-link inline-block before:bg-whiteTextColor">
                        <CustomTitle
                          text="Read more"
                          type="h5"
                          wrapperStyles="flex items-center gap-[10px] "
                          iconColor="fill-whiteTextColor"
                          titleStyles="text-whiteTextColor"
                        />
                      </Link>
                    </div>
                    <img
                      srcSet={`${img} 1x, ${retinaImg} 2x`}
                      src={img}
                      alt={name}
                      width="492"
                      height="320"
                      className="h-[320px] rounded-[20px] object-cover"
                      loading="lazy"
                    />
                  </motion.div>
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
