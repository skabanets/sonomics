import { routes } from "./routes";
import type { Industry } from "../types";

export const industries: Industry[] = [
  {
    name: "Fintech",
    description: [
      "We specialize in providing engineering services across all areas of financial services and capital markets, offering tailored solutions to meet complex business needs.",
      "Our expertise, backed by CFA certifications, enables us to deliver innovative strategies and insights to clients, including banks, exchanges, investment firms.",
    ],
    technologies: {
      title: "Technologies we use in Fintech",
      description:
        "Our technology stack includes advanced programming languages, robust databases, and blockchain solutions that enhance security and operational eﬃciency.",
    },
    services: {
      title: "Services we provide",
      description:
        "We deliver application development, API integration, and regulatory compliance consulting to ensure our clients operate eﬀectively in the financial sector.",
    },
    caseStudy: {
      title: "Fintech Transformation Success",
      description:
        "A leading financial services company wanted to upgrade its platform to stay competitive",
      link: routes.FintechСaseStudy,
    },
    images: {
      image: "fintech_industries_page_1x",
      retinaImage: "fintech_industries_page_2x",
      icon: "fintech_icon_1x",
      retinaIcon: "fintech_icon_2x",
    },
  },
  {
    name: "E-commerce",
    description: [
      "We assist retailers in exploring innovative strategies to deeply engage consumers, enhance product offerings, and foster long-term customer loyalty.",
      "Our approach is centered on understanding consumer behavior and leveraging data-driven insights to create personalized experiences that resonate with customers.",
    ],
    technologies: {
      title: "Technologies we use in E-commerce",
      description:
        "Our solutions leverage cloud infrastructure, AI-driven recommendation engines, and CRM systems to optimize the retail experience and drive growth.",
    },
    services: {
      title: "Services we provide",
      description:
        "We oﬀer platform modernization, customer experience design, and analytics solutions that provide actionable insights for retailers.",
    },
    caseStudy: {
      title: "Transforming E-commerce",
      description:
        "A leading European manufacturer partnered with us to enhance their E-commerce platform",
      link: routes.TransformingECommerceCaseStudy,
    },
    images: {
      image: "ecommerce_industries_page_1x",
      retinaImage: "ecommerce_industries_page_2x",
      icon: "ecommerce_icon_1x",
      retinaIcon: "ecommerce_icon_2x",
    },
  },
  {
    name: "Crypto",
    description: [
      "We provide comprehensive engineering services for clients in the cryptocurrency space, including exchanges, digital wallets, and blockchain-based platforms.",
      "Our solutions are tailored to meet the unique needs of the digital asset ecosystem, ensuring secure, scalable, and efficient systems.",
    ],
    technologies: {
      title: "Technologies we use in Crypto",
      description:
        "Our approach incorporates blockchain technologies and secure cryptographic protocols to enhance transaction safety and transparency.",
    },
    services: {
      title: "Services we provide",
      description:
        "We specialize in platform development for exchanges, security audits, and market analysis tools to empower our clients in the cryptocurrency market.",
    },
    caseStudy: {
      title: "Advancing Crypto Innovation",
      description:
        "A crypto company aimed to expand its ecosystem with solutions for transactions, lending, and staking",
      link: routes.CryptoCaseStudy,
    },
    images: {
      image: "crypto_industries_page_1x",
      retinaImage: "crypto_industries_page_2x",
      icon: "crypto_icon_1x",
      retinaIcon: "crypto_icon_2x",
    },
  },
  {
    name: "Healthcare",
    description: [
      "We implement advanced solutions in healthcare to improve patient outcomes, optimize care processes and drive innovation in medical practices.",
      "Our approach addresses key challenges in the industry, including data privacy and integration of emerging technologies into existing systems.",
    ],
    technologies: {
      title: "Technologies we use in Healthcare",
      description:
        "Our solutions feature AI for predictive analytics, secure cloud services, and data encryption to protect patient information.",
    },
    services: {
      title: "Services we provide",
      description:
        "We focus on system integration, data analytics solutions, and compliance consulting to support healthcare providers in delivering superior care.",
    },
    caseStudy: {
      title: "Pharmaceutical distribution",
      description: "Our client is a distributor of pharmaceutical products and medical supplies",
      link: routes.PharmaceuticalDistributionCaseStudy,
    },
    images: {
      image: "fintech_industries_page_1x",
      retinaImage: "fintech_industries_page_2x",
      icon: "",
      retinaIcon: "",
    },
  },
  {
    name: "Telecommunications",
    description: [
      "We empower telecommunications companies as they transition into technology companies by creating intelligent connectivity solutions that are future-ready.",
      "Our focus is on designing AI-driven products and interconnected systems that adapt to the digital landscape and promote new use cases.",
    ],
    technologies: {
      title: "Technologies we use in Telecommunications",
      description:
        "We integrate advanced technologies, including AI and machine learning, to ensure our solutions meet the dynamic needs of the industry. These technologies enable seamless connectivity and real-time data processing, vital for enhancing service delivery.",
    },
    services: {
      title: "Services we provide",
      description:
        "Our services encompass end-to-end solution development, system integration, and consulting to support our clients in their digital transformation journeys.",
    },
    caseStudy: {
      title: "Revolution in Telecommunications",
      description:
        "A telecom company aimed to create a global platform for users to search, compare, and select ISPs worldwide",
      link: routes.RevolutionInTelecommunicationsCaseStudy,
    },
    images: {
      image: "telecom_industries_page_1x",
      retinaImage: "telecom_industries_page_2x",
    },
  },
  {
    name: "Media Research",
    description: [
      "In the rapidly evolving landscape of digital media, we blend advanced technology with in-depth industry insights to deliver innovative solutions across various sectors.",
      "We are dedicated to optimizing content distribution, maximizing reach, and boosting audience engagement through a combination of strategic planning.",
    ],
    technologies: {
      title: "Technologies we use in Media Research",
      description:
        "Our solutions utilize big data analytics, machine learning algorithms, and modern content management systems that streamline operations and improve user experience.",
    },
    services: {
      title: "Services we provide",
      description:
        "We oﬀer tailored content strategy development, platform creation, and analytics solutions that help media organizations thrive in a competitive environment.",
    },
    caseStudy: {
      title: "Optimizing Media Research",
      description:
        "A global leader in audience measurement, specializing in media analysis for insights",
      link: routes.MediaResearchCaseStudy,
    },
    images: {
      image: "media_industries_page_1x",
      retinaImage: "media_industries_page_2x",
    },
  },
];
