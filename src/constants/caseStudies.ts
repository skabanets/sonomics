import { routes } from "../constants";
import { decodeHTML } from "../helpers";

import type { CaseStudy } from "../types";

export const caseStudies: CaseStudy[] = [
  {
    id: "fintech-combination",
    link: routes.FintechСaseStudy,
    name: "Fintech transformation success",
    overview: {
      client:
        "A leading financial services company wanted to upgrade its platform to stay competitive.",
      technologies: "Java with Spring framework / Kafka / AWS services / Jira / GitHub / REST APIs",
      description:
        "Their business included online money transfers, digital payments, and offering working capital. They aimed to add advanced features, connect with external providers, and improve the user experience.",
      image: "fintech_overview_parallax_1x",
      retinaImage: "fintech_overview_parallax_2x",
    },
    challenges: [
      "Developing a flexible loan management system.",
      "Implementing a robust system for multi-provider IBAN account creation.",
      "Supporting currency exchange on user wallets with real-time processing.",
      "Enhancing card management features to ensure seamless functionality.",
      "Integrating these services with external providers while maintaining a high standard of security and user experience.",
      "Enabling fast, secure, and reliable money transfers, including wire transactions, SEPA, and Send Faster Payment.",
    ],
    services: {
      text: decodeHTML(
        "To address these challenges, Sonomics&nbsp;applied our End-to-End Application Development expertise, coupled with Requirement Analysis & Development Planning, Agile Methodologies, and Cloud Integration with Leading Providers. Here's how we delivered a comprehensive solution:"
      ),
      servicesData: [
        {
          name: "End-to-End Application Development",
          description:
            "Integrated functionalities to create and manage IBAN accounts, automate processes, and streamline user operations.",
          link: routes.EndToEndApplicationDevelopment,
          image: "end_to_end_1x",
          retinaImage: "end_to_end_2x",
        },
        {
          name: "Requirement Analysis & Development Planning",
          description:
            "Conducted in-depth stakeholder interviews and workshops to gather detailed requirements, ensuring alignment with business goals.",
          link: routes.RequirementAnalysisAndDevelopmentPlanning,
          image: "analysis_and_planning_1x",
          retinaImage: "analysis_and_planning_2x",
        },
        {
          name: "Agile Methodologies",
          description:
            "Leveraged Scrum, Kanban, and Hybrid Approaches for iterative and flexible development.",
          link: routes.AgileMethodologies,
          image: "agile_1x",
          retinaImage: "agile_2x",
        },
        {
          name: "Cloud Integration with Leading Providers",
          description: "Utilized AWS for cloud deployment, ensuring security and scalability.",
          link: routes.CloudIntegration,
          image: "cloud_1x",
          retinaImage: "cloud_2x",
        },
      ],
    },
    functionalModules: [
      {
        moduleName: "IBAN account creation",
        details: [
          "Automated multi-provider account creation tailored to client requirements.",
          "Streamlined onboarding process to improve efficiency.",
        ],
      },
      {
        moduleName: "Card Management",
        details: [
          "Delivered end-to-end card management functionalities, including activation, deactivation, and transaction tracking.",
          "Enhanced security with multi-factor authentication and fraud detection mechanisms.",
        ],
      },
      {
        moduleName: "Loan Management System",
        details: [
          "Designed a flexible loan system enabling users to apply for and manage loans directly through the platform.",
          "Implemented automated loan approval workflows and repayment tracking.",
        ],
      },
      {
        moduleName: "Money transfer (wire, SEPA, faster payments)",
        details: [
          "Developed a secure, high-performing system to process various types of money transfers.",
          "Integrated APIs for real-time transaction monitoring and reconciliation.",
        ],
      },
      {
        moduleName: "Currency exchange on user wallets",
        details: [
          "Built an intuitive currency exchange module allowing users to perform real-time transactions within their wallets.",
          "Ensured precise exchange rate calculations using external provider integrations and robust backend systems.",
        ],
      },
      {
        moduleName: "User Notifications and Alerts System",
        details: [
          "Implemented a comprehensive notification system for users, including email, SMS, and in-app alerts.",
          "Customizable notification preferences to improve user engagement and satisfaction.",
          "Real-time alerts for transaction status, account updates, and promotional offers.",
        ],
      },
    ],
    technologies: [
      {
        title: "Backend:",
        description: "Java with Spring framework for modular, scalable microservices.",
      },
      {
        title: "Message Queue:",
        description: "Kafka for reliable, asynchronous communication between services.",
      },
      {
        title: "Cloud Deployment:",
        description:
          "AWS services, including Lambda for serverless computing and secure, scalable infrastructure.",
      },
      {
        title: "Workflow Automation:",
        description: "Jira for agile project management and GitHub Actions for CI/CD pipelines.",
      },
      {
        title: "Backend:",
        description: "Java with Spring framework for modular, scalable microservices.",
      },
      {
        title: "Message Queue:",
        description: "Kafka for reliable, asynchronous communication between services.",
      },
      {
        title: "Cloud Deployment:",
        description:
          "AWS services, including Lambda for serverless computing and secure, scalable infrastructure.",
      },
      {
        title: "Workflow Automation:",
        description: "Jira for agile project management and GitHub Actions for CI/CD pipelines.",
      },
    ],
    achievements: [
      {
        title: "Improved productivity",
        description: "Automated IBAN account creation reduced processing times by 60%",
      },
      {
        title: "Increased revenue streams:",
        description:
          "The loan management system and currency exchange capabilities generated new revenue opportunities",
      },
      {
        title: "Enhanced UX:",
        description:
          "Real-time money transfers and currency exchange improved customer satisfaction",
      },
      {
        title: "Seamless integration",
        description:
          "Secure and reliable integration with external providers ensured smooth operation and scalability",
      },
      {
        title: "Future-ready platform",
        description:
          "Scalable architecture and modular design equipped the client for future growth and feature expansion",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    images: {
      main: {
        image: "fintech_main_1x",
        retinaImage: "fintech_main_2x",
      },
      vertical: {
        image: "fintech_vertical_1x",
        retinaImage: "fintech_vertical_2x",
      },
      generalPage: {
        image: "fintech_general_page_1x",
        retinaImage: "fintech_general_page_2x",
      },
      fullScreenBlock: {
        image: "fintech_full_screen_block_1x",
        retinaImage: "fintech_full_screen_block_2x",
      },
      hp: {
        image: "fintech_hp_1x",
        retinaImage: "fintech_hp_2x",
      },
      hpHorizontal: {
        image: "fintech_hp_horizontal_1x",
        retinaImage: "fintech_hp_horizontal_2x",
      },
    },
  },
  {
    id: "advancing-crypto-innovation",
    link: routes.CryptoCaseStudy,
    name: "Revolutionizing Crypto Services for Seamless User Experience",
    overview: {
      client:
        "A pioneering cryptocurrency company sought to expand its ecosystem by delivering innovative solutions for crypto transactions, lending, staking, and passive earning.",
      technologies:
        "Smart contracts / Java / Node.js / REST APIs / Advanced Security Protocols / decentralized databases",
      description:
        "Their vision was to create a user-friendly, secure platform with diverse income opportunities and seamless integration tools to support external platforms and scalability.",
      image: "fintech_overview_parallax_1x",
      retinaImage: "fintech_overview_parallax_2x",
    },
    challenges: [
      "Developing a solution to enable seamless transactions in both crypto and fiat currencies.",
      "Providing tools to allow external services to embed crypto purchasing and transaction functionalities.",
      "Catering to various user profiles with options like staking, lending, and passive earning.",
      "Addressing the need for robust security measures while ensuring compliance with global crypto regulations.",
    ],
    services: {
      text: "To address these challenges, we leveraged our End-to-End Application Development expertise alongside Comprehensive Requirement Analysis, Agile Development Methodologies, and Advanced Blockchain Integration. Here's how we delivered a robust solution:",
      servicesData: [
        {
          name: "End-to-End Application Development",
          description:
            "Designed and implemented functionalities for seamless crypto-fiat transactions, secure wallet management, and automated financial workflows.",
          link: routes.EndToEndApplicationDevelopment,
          image: "end_to_end_1x",
          retinaImage: "end_to_end_2x",
        },
        {
          name: "Comprehensive Requirement Analysis",
          description:
            "Conducted detailed client consultations and stakeholder workshops to align the platform's features with business objectives and user expectations.",
          link: routes.RequirementAnalysisAndDevelopmentPlanning,
          image: "analysis_and_planning_1x",
          retinaImage: "analysis_and_planning_2x",
        },
        {
          name: "Agile Development Methodologies",
          description:
            "Adopted Scrum and Hybrid Agile practices to ensure iterative, adaptable development that addressed evolving requirements.",
          link: routes.AgileMethodologies,
          image: "agile_1x",
          retinaImage: "agile_2x",
        },
        {
          name: "Cloud-Optimized Architecture",
          description:
            "Deployed the platform on AWS, ensuring high scalability, robust security, and reliable performance for all services.",
          link: routes.CloudIntegration,
          image: "cloud_1x",
          retinaImage: "cloud_2x",
        },
      ],
    },
    functionalModules: [
      {
        moduleName: "Crypto Purchase Integration",
        details: [
          "Lightweight APIs for third-party platforms to enable crypto transactions.",
          "Secure fiat-to-crypto conversion with multi-wallet support.",
        ],
      },
      {
        moduleName: "Lending System",
        details: [
          "Customizable loan products with flexible repayment options.",
          "Automated collateral management via on-chain assets.",
        ],
      },
      {
        moduleName: "Staking and Passive Earning",
        details: [
          "High-performance staking engine for instant fund accessibility.",
          "Diverse passive earning plans with competitive returns.",
        ],
      },
      {
        moduleName: "Exchange Features",
        details: [
          "Low-fee cryptocurrency exchanges with intuitive portfolio management tools.",
          "Advanced transaction tracking and reconciliation features.",
        ],
      },
      {
        moduleName: "Security and Compliance",
        details: [
          "Encrypted biometric onboarding for secure user verification.",
          "Built-in compliance mechanisms aligned with global cryptocurrency regulations.",
        ],
      },
    ],
    technologies: [
      {
        title: "Blockchain:",
        description: "Smart contracts for automated staking, lending, and passive earning systems.",
      },
      {
        title: "API Development:",
        description: "RESTful APIs enabling seamless external integrations.",
      },
      {
        title: "Advanced Security Protocols:",
        description: "Encryption and cryptographic measures to protect user data.",
      },
      {
        title: "Backend Architecture:",
        description: "Scalable, high-performance solutions built with Java and Node.js.",
      },
      {
        title: "Data Management:",
        description: "Secure, decentralized databases for transaction and user data.",
      },
    ],
    achievements: [
      {
        title: "Enhanced Ecosystem Expansion",
        description:
          "Enabled external platforms to integrate crypto purchasing features, driving transaction growth",
      },
      {
        title: "Improved User Retention",
        description:
          "Flexible loan structures, high-yield staking, and earning options attracted a wide user base",
      },
      {
        title: "Increased Earning Potential",
        description:
          "Delivered low-cost transactions and attractive earning mechanisms to maximize user benefits",
      },
      {
        title: "Robust Compliance and Security",
        description:
          "Adherence to global crypto regulations boosted user trust and platform credibility",
      },
      {
        title: "Future-Ready Scalability",
        description: "Implemented solutions primed for evolving user demands and market conditions",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    images: {
      main: {
        image: "crypto_main_1x",
        retinaImage: "crypto_main_2x",
      },
      vertical: {
        image: "fintech_vertical_1x",
        retinaImage: "fintech_vertical_2x",
      },
      generalPage: {
        image: "crypto_general_page_1x",
        retinaImage: "crypto_general_page_2x",
      },
      fullScreenBlock: {
        image: "crypto_full_screen_block_1x",
        retinaImage: "crypto_full_screen_block_2x",
      },
      hp: {
        image: "crypto_hp_1x",
        retinaImage: "crypto_hp_2x",
      },
      hpHorizontal: {
        image: "crypto_hp_horizontal_1x",
        retinaImage: "crypto_hp_horizontal_2x",
      },
    },
  },
  {
    id: "optimizing-media-research",
    link: routes.MediaResearchCaseStudy,
    name: "Optimizing Media Research",
    overview: {
      client:
        "Our client, a global leader in audience measurement and data analytics, focuses on refining the process of media consumption analysis to provide accurate insights.",
      technologies:
        "Apache Kafka / Spark / Hadoop / AWS / Google Cloud / MongoDB / Netezza / Oracle",
      description:
        "They specialize in collecting data on what content people engage with, who is watching it, and how they interact with various media channels. The goal is to deliver precise audience insights to clients, empowering advertisers and media planners to make informed decisions.",
      image: "fintech_overview_parallax_1x",
      retinaImage: "fintech_overview_parallax_2x",
    },
    challenges: [
      "The need to better track detailed audience data, such as demographics, viewing habits, and regional preferences.",
      "Efficiently managing vast amounts of data from multiple sources, including set-top boxes, streaming platforms, and mobile devices.",
      "Providing fast, up-to-date audience insights to support timely media planning and ad optimization.",
      "Leveraging artificial intelligence to enhance the accuracy of predictions and improve media behavior modeling.",
      "Strengthening relationships with clients by delivering tailored insights and improving customer support.",
    ],
    services: {
      text: "To address these challenges, we employed a comprehensive set of services, combining AI, machine learning, big data analytics, and CRM system integration. Here's how we delivered a sophisticated solution:",
      servicesData: [
        {
          name: "End-to-End Application Development",
          description:
            "We created a robust platform that integrates audience measurement, demographic profiling, and real-time analytics, enabling the client to track and analyze user behavior across a variety of media channels.",
          link: routes.EndToEndApplicationDevelopment,
          image: "end_to_end_1x",
          retinaImage: "end_to_end_2x",
        },
        {
          name: "Artificial Intelligence & Machine Learning",
          description:
            "We implemented machine learning algorithms to enhance predictive capabilities, enabling the client to forecast audience behavior, trends, and engagement. AI also assisted in refining audience segmentation, improving the precision of targeting and engagement metrics.",
          link: routes.ArtificialIntelligence,
          image: "ai_1x",
          retinaImage: "ai_2x",
        },
        {
          name: "Real-Time Data Processing",
          description:
            "We employed cloud-based solutions to handle real-time data processing, ensuring that audience insights were updated continuously, providing media planners and advertisers with up-to-the-minute information.",
          link: routes.CloudIntegration,
          image: "cloud_1x",
          retinaImage: "cloud_2x",
        },
        {
          name: "CRM Integration",
          description:
            "By integrating a CRM system, we enabled the client to personalize client interactions, improve service delivery, and track key performance metrics for client success. The CRM allowed for a more tailored approach in understanding and meeting client needs.",
          link: routes.OptimizeBusinessProcessesWithCRM,
          image: "crm_1x",
          retinaImage: "crm_2x",
        },
      ],
    },
    functionalModules: [
      {
        moduleName: "Audience Segmentation and Profiling",
        details: [
          "Using AI and machine learning, we created detailed audience segments based on demographics, viewing patterns, and engagement metrics, allowing the client to gain deeper insights into different viewer profiles.",
        ],
      },
      {
        moduleName: "Big Data Analytics Platform",
        details: [
          "We developed a scalable platform to process and analyze large volumes of data from multiple sources, providing the client with the tools to perform advanced analytics and reporting.",
        ],
      },
      {
        moduleName: "Real-Time Analytics Dashboard",
        details: [
          "A dynamic dashboard that displays live data on audience behavior, media consumption trends, and engagement metrics, empowering clients to make timely, data-driven decisions.",
        ],
      },
      {
        moduleName: "Predictive Modeling & AI Integration",
        details: [
          "Implemented AI-driven models that predict audience behavior, helping the client improve forecasting accuracy for media planning and content strategy.",
        ],
      },
      {
        moduleName: "CRM Integration for Enhanced Client Engagement",
        details: [
          "Integrated a CRM system that provided the client with actionable insights into their customer base, allowing for personalized marketing, better service delivery, and strengthened client relationships.",
        ],
      },
    ],
    technologies: [
      {
        title: "AI & Machine Learning:",
        description:
          "Deep learning algorithms and machine learning models for audience segmentation, trend forecasting, and predictive analytics.",
      },
      {
        title: "Big Data Technologies",
        description:
          "Apache Kafka for real-time data streaming, Spark for distributed data processing, and Hadoop for large-scale data analytics.",
      },
      {
        title: "CRM Tools:",
        description:
          "Salesforce integration for managing customer interactions, providing insights into client needs, and optimizing service delivery.",
      },
      {
        title: "Cloud-Based Real-Time Processing:",
        description:
          "AWS and Google Cloud for scalable, cloud-based data processing infrastructure that supports real-time analytics and data storage.",
      },
      {
        title: "Data Management:",
        description:
          "MongoDB, Netezza, and Oracle for secure data storage, fast retrieval, and seamless integration of both structured and unstructured data.",
      },
    ],
    achievements: [
      {
        title: "Improved Audience Insights",
        description:
          "AI-driven audience segmentation and big data analytics allowed the client to gain more precise insights into audience behavior, enhancing the effectiveness of media planning and ad targeting",
      },
      {
        title: "Real-Time Data Access",
        description:
          "The integration of real-time data processing enabled the client to provide up-to-the-minute audience insights, empowering media planners and advertisers to make timely decisions",
      },
      {
        title: "Enhanced Predictive Capabilities",
        description:
          "With machine learning models in place, the client was able to better predict audience behavior, providing actionable insights for content strategy and ad optimization",
      },
      {
        title: "Streamlined CRM Operations",
        description:
          "The CRM integration enhanced client engagement and allowed for more personalized service, leading to improved client satisfaction and stronger business relationships",
      },
      {
        title: "Scalable Solutions",
        description:
          "The cloud-optimized platform provided the scalability needed to handle growing datasets, ensuring the system could continue to support the client's expanding needs",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    images: {
      main: {
        image: "media_main_1x",
        retinaImage: "media_main_2x",
      },
      vertical: {
        image: "media_vertical_1x",
        retinaImage: "media_vertical_2x",
      },
      generalPage: {
        image: "media_general_page_1x",
        retinaImage: "media_general_page_2x",
      },
      fullScreenBlock: {
        image: "media_full_screen_block_1x",
        retinaImage: "media_full_screen_block_2x",
      },
      hp: {
        image: "media_hp_1x",
        retinaImage: "media_hp_2x",
      },
      hpHorizontal: {
        image: "media_hp_horizontal_1x",
        retinaImage: "media_hp_horizontal_2x",
      },
    },
  },
  {
    id: "pharmaceutical-distribution",
    link: routes.PharmaceuticalDistributionCaseStudy,
    name: "Driving Innovation in Pharmaceutical Distribution",
    overview: {
      client:
        "Our client is a global distributor specializing in pharmaceutical products, veterinary supplies, dietary supplements, and medical devices.",
      technologies:
        "Python (Django) / Ruby on Rails / Angular / TypeScript / MySQL / Redis / Azure / Terraform / Grafana / Selenium / Postman",
      description:
        "The company collaborates with manufacturers, healthcare providers, and government agencies to streamline supply chains and ensure the availability of high-quality healthcare products across diverse markets.",
      image: "fintech_overview_parallax_1x",
      retinaImage: "fintech_overview_parallax_2x",
    },
    challenges: [
      "Developing a comprehensive application to unify access to product catalogs, licensing services, and regulatory documentation.",
      "Automating tender processes and enhancing collaboration with distributors and suppliers.",
      "Ensuring scalability and adaptability for different user groups, including business partners and healthcare providers.",
      "Offering intuitive tools for product discovery and feedback while maintaining high security and regulatory compliance.",
    ],
    services: {
      text: "To address these challenges, we employed a comprehensive set of services, combining AI, machine learning, big data analytics, and CRM system integration. Here's how we delivered a sophisticated solution:",
      servicesData: [
        {
          name: "CRM and Communication Tools",
          description:
            "Deployed a CRM system tailored to manage relationships with distributors and suppliers effectively. Integrated real-time chat and feedback features to enhance communication across stakeholders.",
          link: routes.OptimizeBusinessProcessesWithCRM,
          image: "crm_1x",
          retinaImage: "crm_2x",
        },
      ],
    },
    technologies: [
      {
        title: "Backend:",
        description: "Python (Django), Ruby on Rails",
      },
      {
        title: "Frontend:",
        description: "Angular, TypeScript",
      },
      {
        title: "Databases:",
        description: "MySQL, Redis",
      },
      {
        title: "Cloud Services:",
        description: "Azure (Blob Storage, Virtual Machines), Terraform for infrastructure as code",
      },
      {
        title: "Monitoring and QA:",
        description: "Grafana, Selenium, Postman for API testing",
      },
    ],
    achievements: [
      {
        title: "Enhanced Accessibility",
        description:
          "Created a centralized hub for accessing product information, fostering better user experiences for diverse stakeholders",
      },
      {
        title: "Streamlined Operations",
        description:
          "Automated processes reduced bottlenecks in tender management and product updates, boosting efficiency",
      },
      {
        title: "Improved Collaboration",
        description:
          "Enabled real-time communication tools that facilitated seamless interaction between suppliers, distributors, and healthcare providers",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Delivered a platform that meets stringent industry regulations, including pharmacovigilance and product licensing standards",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    images: {
      main: {
        image: "fintech_main_1x",
        retinaImage: "fintech_main_2x",
      },
      vertical: {
        image: "fintech_vertical_1x",
        retinaImage: "fintech_vertical_2x",
      },
      generalPage: {
        image: "fintech_general_page_1x",
        retinaImage: "fintech_general_page_2x",
      },
      fullScreenBlock: {
        image: "fintech_full_screen_block_1x",
        retinaImage: "fintech_full_screen_block_2x",
      },
      hp: {
        image: "fintech_hp_1x",
        retinaImage: "fintech_hp_2x",
      },
      hpHorizontal: {
        image: "fintech_hp_horizontal_1x",
        retinaImage: "fintech_hp_horizontal_2x",
      },
    },
  },
  {
    id: "transforming-e-commerce",
    link: routes.TransformingECommerceCaseStudy,
    name: "Transforming E-Commerce with Advanced Technology",
    overview: {
      client:
        "A leading European manufacturer of personalized lifestyle products partnered with us to enhance their e-commerce platform.",
      technologies:
        "Java / JavaEE / JSF / PrimeFaces / AWS / PostgreSQL / Instana / Kibana / Jenkins / Maven / Git / SonarQube / REST / OpenAPI",
      description:
        "The client's goal was to modernize their system, improve operational efficiency, and deliver an exceptional shopping experience to a global customer base.",
      image: "fintech_overview_parallax_1x",
      retinaImage: "fintech_overview_parallax_2x",
    },
    challenges: [
      "Modernizing outdated code while ensuring system stability.",
      "Streamlining logistics through transportation APIs and enabling secure online transactions via card payment systems.",
      "Developing a robust CRM system to manage customer interactions effectively.",
      "Enhancing system performance to handle increasing traffic and transactions seamlessly.",
    ],
    technologies: [
      {
        title: "Programming Languages and Frameworks:",
        description: "Java, JavaEE, JSF, PrimeFaces.",
      },
      {
        title: "Cloud and Infrastructure:",
        description: "AWS (S3, EC2, RDS) for scalable and secure hosting.",
      },
      {
        title: "Database Management:",
        description: "PostgreSQL for robust data handling.",
      },
      {
        title: "Performance and Monitoring Tools:",
        description: "Instana, Kibana.",
      },
      {
        title: "Development Tools:",
        description: "Jenkins, Maven, Git, SonarQube for CI/CD and code quality assurance.",
      },
      {
        title: "API Standards:",
        description: "REST, OpenAPI/Swagger for seamless integrations.",
      },
    ],
    achievements: [
      {
        title: "System Modernization",
        description: "Successfully migrated legacy code to a modern, scalable architecture",
      },
      {
        title: "Enhanced Performance",
        description: "Reduced page load times and increased system reliability.",
      },
      {
        title: "Efficient Logistics",
        description:
          "Integrated APIs streamlined transportation processes, reducing delivery delays",
      },
      {
        title: "Secure Transactions",
        description: "Implemented payment gateways ensured compliance and boosted customer trust",
      },
      {
        title: "Improved Customer Engagement",
        description:
          "The CRM system enabled personalized interactions, driving higher retention and satisfaction",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    images: {
      main: {
        image: "fintech_main_1x",
        retinaImage: "fintech_main_2x",
      },
      vertical: {
        image: "fintech_vertical_1x",
        retinaImage: "fintech_vertical_2x",
      },
      generalPage: {
        image: "fintech_general_page_1x",
        retinaImage: "fintech_general_page_2x",
      },
      fullScreenBlock: {
        image: "fintech_full_screen_block_1x",
        retinaImage: "fintech_full_screen_block_2x",
      },
      hp: {
        image: "fintech_hp_1x",
        retinaImage: "fintech_hp_2x",
      },
      hpHorizontal: {
        image: "fintech_hp_horizontal_1x",
        retinaImage: "fintech_hp_horizontal_2x",
      },
    },
  },
  {
    id: "revolution-in-telecommunications",
    link: routes.RevolutionInTelecommunicationsCaseStudy,
    name: "Revolution in Telecommunications with ISP Platform",
    overview: {
      client:
        "A leading telecom company sought to develop a global platform enabling users to search, compare, and select Internet Service Providers (ISPs) worldwide.",
      technologies: "Java / Scala / React / AWS / MySQL",
      description:
        "The solution aimed to provide intuitive access to ISP services, empower users with comprehensive comparison tools, and drive informed decision-making.",
      image: "fintech_overview_parallax_1x",
      retinaImage: "fintech_overview_parallax_2x",
    },
    challenges: [
      "Designing a platform capable of handling high volumes of global users and real-time data interactions.",
      "Creating an intuitive interface with seamless navigation and comprehensive comparison features.",
      "Implementing dynamic price calculation for ISP services based on user preferences and geographic location.",
      "Coordinating a distributed team of 20+ professionals to ensure efficient development and timely delivery.",
    ],
    services: {
      servicesData: [
        {
          name: "End-to-End Application Development",
          description:
            "Designed and developed the platform, encompassing backend processing, front-end features, and integration of ISP pricing logic.",
          link: routes.EndToEndApplicationDevelopment,
          image: "end_to_end_1x",
          retinaImage: "end_to_end_2x",
        },
        {
          name: "AI & Big Data Analytics",
          description:
            "Implemented AI-driven models to enhance ISP comparison algorithms, offering personalized recommendations and dynamic pricing adjustments based on user behavior and regional data.",
          link: routes.ArtificialIntelligence,
          image: "ai_1x",
          retinaImage: "ai_2x",
        },
        {
          name: "Cloud Integration",
          description:
            "Leveraged AWS for scalable, secure, and high-performance hosting. Ensured 99.9% uptime and reliable global accessibility.",
          link: routes.CloudIntegration,
          image: "cloud_1x",
          retinaImage: "cloud_2x",
        },
      ],
    },
    functionalModules: [
      {
        moduleName: "Dynamic ISP Search and Comparison",
        details: [
          "Users can search for ISPs, compare services, and view tailored recommendations based on location and preferences.",
        ],
      },
      {
        moduleName: "Price Calculation Logic",
        details: ["Integrated robust pricing algorithms for accurate, real-time cost comparisons."],
      },
      {
        moduleName: "User-Friendly Interface",
        details: [
          "Developed a responsive, intuitive front-end using React and JavaScript to enhance accessibility and user satisfaction.",
        ],
      },
      {
        moduleName: "Performance Monitoring:",
        details: [
          "Real-time monitoring tools to ensure reliability and efficiency under varying user loads.",
        ],
      },
    ],
    technologies: [
      {
        title: "Programming Languages:",
        description: "Java, Scala, and React.",
      },
      {
        title: "Cloud Solutions:",
        description: "AWS for hosting and MySQL for database management.",
      },
      {
        title: "Big Data Tools:",
        description: "Utilized for processing large datasets and providing dynamic insights.",
      },
      {
        title: "AI & Machine Learning:",
        description: "Implemented to enhance ISP recommendations and improve user experience.",
      },
    ],
    achievements: [
      {
        title: "40% Faster Response Times",
        description:
          "Performance optimization reduced query response times, delivering real-time results",
      },
      {
        title: "Enhanced User Engagement",
        description:
          "Intuitive features and personalized recommendations drove a 30% increase in user satisfaction",
      },
      {
        title: "Global Scalability",
        description:
          "Platform successfully supported millions of users worldwide, enabling seamless ISP comparisons",
      },
      {
        title: "Improved Collaboration",
        description:
          "Efficient coordination within the distributed team ensured timely delivery and high-quality results",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    images: {
      main: {
        image: "fintech_main_1x",
        retinaImage: "fintech_main_2x",
      },
      vertical: {
        image: "fintech_vertical_1x",
        retinaImage: "fintech_vertical_2x",
      },
      generalPage: {
        image: "fintech_general_page_1x",
        retinaImage: "fintech_general_page_2x",
      },
      fullScreenBlock: {
        image: "fintech_full_screen_block_1x",
        retinaImage: "fintech_full_screen_block_2x",
      },
      hp: {
        image: "fintech_hp_1x",
        retinaImage: "fintech_hp_2x",
      },
      hpHorizontal: {
        image: "fintech_hp_horizontal_1x",
        retinaImage: "fintech_hp_horizontal_2x",
      },
    },
  },
];
