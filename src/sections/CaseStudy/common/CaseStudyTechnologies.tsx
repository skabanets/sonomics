import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { SliderWithThumb } from "../../../components";

import { useBreakpointValue } from "../../../hooks";
import { slideInWithFade } from "../../../constants";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

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
  const [translateValue, setTranslateValue] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const [isTransition, setIsTransition] = useState(true);

  const nodeRef = useRef(null);

  const cardWidth = 320;
  const gap = 40;
  const containerWidth = useBreakpointValue([1280, 736, 355]);
  const itemsCount = items.length;

  useEffect(() => {
    const calculatedTotalWidth = itemsCount * cardWidth + (itemsCount - 1) * gap;
    setTotalWidth(calculatedTotalWidth);
  }, [itemsCount, cardWidth, gap]);
  const maxTranslateValue = Math.max(totalWidth - containerWidth, 0);

  const handleSliderChange = ({
    translateValue,
  }: {
    translateValue: number;
    totalWidth: number;
  }) => {
    setTranslateValue(translateValue);
  };

  const handleDrag = (_e: DraggableEvent, data: DraggableData) => {
    setIsTransition(false);
    const newTranslateValue = Math.min(
      Math.max(translateValue - data.deltaX, 0),
      maxTranslateValue
    );
    setTranslateValue(newTranslateValue);
    setTimeout(() => setIsTransition(true), 100);
  };

  return (
    <section className="overflow-hidden bg-blackBgColor py-[80px]">
      <motion.div className="container" {...slideInWithFade}>
        <h2 className="mb-[60px] text-whiteTextColor">Technologies used</h2>
        <Draggable
          nodeRef={nodeRef}
          axis="x"
          bounds={{
            left: -maxTranslateValue,
            right: 0,
          }}
          position={{ x: -translateValue, y: 0 }}
          onDrag={handleDrag}
        >
          <ul
            ref={nodeRef}
            className="mb-[40px] flex cursor-grab gap-[40px] transition"
            style={{
              width: totalWidth,
              transition: !isTransition ? "none" : "transform 0.15s ease-in",
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
        </Draggable>
        <SliderWithThumb
          {...{
            itemsCount,
            containerWidth,
            cardWidth,
            gap,
            sliderValues: { translateValue, totalWidth },
            onChange: handleSliderChange,
          }}
        />
      </motion.div>
    </section>
  );
};
