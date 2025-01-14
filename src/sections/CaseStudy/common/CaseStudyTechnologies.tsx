import { useState } from "react";
import { motion } from "framer-motion";

import { SliderWithThumb } from "../../../components";

import { useBreakpointValue } from "../../../hooks";
import { slideInWithFade } from "../../../constants";

const items = [
  {
    id: 1,
    title: "Backend:",
    description: "Java with Spring framework for modular, scalable microservices.",
  },
  {
    id: 2,
    title: "Message Queue:",
    description: "Kafka for reliable, asynchronous communication between services.",
  },
  {
    id: 3,
    title: "Cloud Deployment:",
    description:
      "AWS services, including Lambda for serverless computing and secure, scalable infrastructure.",
  },
  {
    id: 4,
    title: "Workflow Automation:",
    description: "Jira for agile project management and GitHub Actions for CI/CD pipelines.",
  },
  {
    id: 5,
    title: "Backend:",
    description: "Java with Spring framework for modular, scalable microservices.",
  },
  {
    id: 6,
    title: "Message Queue:",
    description: "Kafka for reliable, asynchronous communication between services.",
  },
  {
    id: 7,
    title: "Cloud Deployment:",
    description:
      "AWS services, including Lambda for serverless computing and secure, scalable infrastructure.",
  },
  {
    id: 8,
    title: "Workflow Automation:",
    description: "Jira for agile project management and GitHub Actions for CI/CD pipelines.",
  },
];

export const CaseStudyTechnologies = () => {
  const [sliderValues, setSliderValues] = useState({ translateValue: 0, totalWidth: 0 });

  const cardWidth = 320;
  const gap = 40;
  const containerWidth = useBreakpointValue([1280, 736, 355]);
  const itemsCount = items.length;

  const totalWidth = itemsCount * cardWidth + (itemsCount - 1) * gap;

  const handleSliderChange = (values: { translateValue: number; totalWidth: number }) => {
    setSliderValues(values);
  };

  return (
    <section className="overflow-hidden bg-blackBgColor py-[80px]">
      <motion.div className="container" {...slideInWithFade}>
        <h2 className="mb-[60px] text-whiteTextColor">Technologies used</h2>
        <ul
          className="mb-[40px] flex gap-[40px] transition"
          style={{
            width: sliderValues.totalWidth || totalWidth,
            transform: `translateX(-${sliderValues.translateValue}px)`,
          }}
        >
          {items.map(({ id, title, description }) => (
            <li
              key={id}
              className="w-[320px] rounded-b-[20px] border-t-[5px] border-t-accentYellowColor bg-darkBgColor p-[30px] transition"
            >
              <h4 className="mb-[20px] text-whiteTextColor">{title}</h4>
              <p className="small-text text-secondaryLightTextColor">{description}</p>
            </li>
          ))}
        </ul>
        <SliderWithThumb
          {...{ itemsCount, containerWidth, cardWidth, gap, onChange: handleSliderChange }}
        />
      </motion.div>
    </section>
  );
};
