import { routes } from "../constants";
import { decodeHTML } from "../helpers";

import type { CaseStudy } from "../types";

export const caseStudies: CaseStudy[] = [
  {
    id: "fintech-combination",
    link: routes.FintechСaseStudy,
    name: "Fintech Transformation Success",
    pageTitle: {
      text: "Fintech Transformation Success: A Case Study of Innovation",
      accentWords: ["Fintech Transformation"],
    },
    overview: {
      client:
        "A leading financial services company wanted to upgrade its platform to stay competitive.",
      technologies:
        "Java with Spring Framework / Kafka / AWS Services / REST APIs / Docker / Kubernetes / GraphQL / Terraform / OAuth 2.0 / ELK Stack",
      description:
        "The client's business focused on online money transfers, digital payments, and working capital solutions. They aimed to enhance platform scalability for future growth by adding advanced features, integrating with external providers, and improving the user experience.",
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
        "To address these challenges, Sonomics applied our End-to-End Application Development expertise, coupled with Requirement Analysis & Development Planning, Agile Methodologies, and Cloud Integration with Leading Providers. Here's how we delivered a comprehensive solution:"
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
            "Implemented Scrum, Kanban, and Hybrid Approaches for iterative and flexible development, enhancing responsiveness to change.",
          link: routes.AgileMethodologies,
          image: "agile_1x",
          retinaImage: "agile_2x",
        },
        {
          name: "Cloud Integration with Leading Providers",
          description:
            "Cloud Integration with Leading Providers: Utilized AWS for cloud deployment, ensuring security, scalability, and seamless integration with existing services.",
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
          "Real-time alerts for transaction status, account updates, and promotional offers.",
        ],
      },
    ],
    technologies: [
      {
        title: "Backend:",
        description:
          "Java with Spring framework, providing a robust and scalable foundation for financial applications.",
      },
      {
        title: "Messaging:",
        description:
          "Kafka, ensuring efficient, real-time asynchronous communication between microservices.",
      },
      {
        title: "Cloud Deployment:",
        description:
          " AWS, utilizing Lambda for serverless computing, EC2 for scalable infrastructure, and S3 for secure data storage.",
      },
      {
        title: "DevOps:",
        description:
          "Jira for agile project management, GitHub Actions for CI/CD pipelines, and Terraform for infrastructure as code.",
      },
      {
        title: "Integration:",
        description:
          "RESTful APIs for seamless third-party connectivity, WebSockets for real-time transaction updates, and OAuth for secure authentication.",
      },
      {
        title: "Analytics Tools:",
        description:
          "Prometheus and Grafana for real-time system monitoring and performance tracking.",
      },
      {
        title: "Security:",
        description:
          "HashiCorp Vault for secrets management and OWASP security principles for secure application development.",
      },
      {
        title: "Containerization:",
        description:
          "Docker for containerized applications and Kubernetes for efficient workload management and scaling.",
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
      "A leading financial services company wanted to upgrade its platform to stay competitive",
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
    name: "Advancing Crypto Innovation",
    pageTitle: {
      text: "Advancing Crypto Innovation: A Breakthrough in Digital Finance",
      accentWords: ["Crypto Innovation:"],
    },
    overview: {
      client:
        "A pioneering cryptocurrency company sought to expand its ecosystem by delivering innovative solutions for crypto transactions, lending, staking, and passive earning.",
      technologies:
        "Java / Node.js / React / AWS / Smart Contracts / REST APIs / Docker / Kubernetes / Terraform / Swagger / Blockchain / Security Protocols",
      description:
        "The goal was to create a secure, user-friendly platform with seamless crypto-fiat transactions, diverse earning opportunities, and advanced integration tools. The platform needed to support high scalability, automated financial processes, and effortless third-party integrations to enhance accessibility and adoption.",
      image: "fintech_overview_parallax_1x",
      retinaImage: "fintech_overview_parallax_2x",
    },
    challenges: [
      "Developing a solution to enable seamless transactions in both crypto and fiat currencies.",
      "Providing tools to allow external services to embed crypto purchasing and transaction functionalities.",
      "Catering to various user profiles with options like staking, lending, and passive earning.",
      "Implementing robust security measures to safeguard user funds and data.",
      "Optimizing the system to handle high transaction volumes.",
      "Reducing processing latency for real-time crypto operations.",
    ],
    services: {
      text: "To address these challenges, Sonomics applied our End-to-End Application Development expertise, alongside Blockchain Solutions, Agile Methodologies, and Cloud Integration with Leading Providers. Here’s how we delivered a robust solution:",
      servicesData: [
        {
          name: "End-to-End Application Development",
          description:
            "Designed and implemented functionalities for seamless crypto-fiat transactions and secure wallet management. Developed automated financial workflows to streamline user operations.",
          link: routes.EndToEndApplicationDevelopment,
          image: "end_to_end_1x",
          retinaImage: "end_to_end_2x",
        },
        {
          name: "Requirement Analysis & Development Planning",
          description:
            "Conducted stakeholder interviews and market research to define precise platform requirements. Ensured alignment with business goals and regulatory standards.",
          link: routes.RequirementAnalysisAndDevelopmentPlanning,
          image: "analysis_and_planning_1x",
          retinaImage: "analysis_and_planning_2x",
        },
        {
          name: "Agile Development Methodologies",
          description:
            "Applied iterative development strategies to accelerate time-to-market. Enabled continuous feedback loops for enhanced flexibility and improvement.",
          link: routes.AgileMethodologies,
          image: "agile_1x",
          retinaImage: "agile_2x",
        },
        {
          name: "Cloud-Optimized Architecture",
          description:
            "Deployed the platform on AWS, ensuring high scalability and 99.9% uptime. Enabled robust security and optimized performance for seamless global access.",
          link: routes.CloudIntegration,
          image: "cloud_1x",
          retinaImage: "cloud_2x",
        },
      ],
    },
    functionalModules: [
      {
        moduleName: "Crypto Purchase",
        details: [
          "Developed lightweight APIs for third-party platforms to integrate crypto transactions.",
          "Implemented secure fiat-to-crypto conversion with multi-wallet support.",
        ],
      },
      {
        moduleName: "Collateral Management",
        details: [
          "Designed customizable loan products with flexible repayment options.",
          "Automated collateral management using on-chain asset verification.",
        ],
      },
      {
        moduleName: "Staking & Passive Income",
        details: [
          "Built a high-performance staking engine ensuring instant fund accessibility.",
          "Integrated diverse earning plans with competitive returns and automated payouts.",
        ],
      },
      {
        moduleName: "Transaction Tracking",
        details: [
          "Developed a low-fee cryptocurrency exchange with intuitive portfolio management.",
          "Implemented real-time transaction tracking and reconciliation tools.",
        ],
      },
      {
        moduleName: "Security & Compliance",
        details: [
          "Integrated encrypted biometric onboarding for secure user verification.",
          "Built-in compliance mechanisms ensuring adherence to global cryptocurrency regulations.",
        ],
      },
      {
        moduleName: "Digital Asset Management",
        details: [
          "Enabled seamless minting, trading, and storage of NFTs on multiple blockchains.",
          "Developed smart contract-based royalty mechanisms for creators and investors.",
        ],
      },
    ],
    technologies: [
      {
        title: "Backend:",
        description: "Java and Node.js for high-performance, scalable logic.",
      },
      {
        title: "Frontend:",
        description: "React for an intuitive and responsive user interface.",
      },
      {
        title: "Blockchain:",
        description: "Smart contracts enabling secure staking, lending, and passive earning.",
      },
      {
        title: "Cloud Deployment:",
        description: "AWS for hosting and database management.",
      },
      {
        title: "Security:",
        description: "Advanced encryption and cryptographic protocols for user data protection.",
      },
      {
        title: "DevOps:",
        description:
          "Docker, Kubernetes, and T erraform for eﬃcient CI/CD and cloud infrastructure.",
      },
      {
        title: "Data & Analytics:",
        description: "Real-time monitoring, AI-driven insights.",
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
      "A pioneering cryptocurrency company sought to expand its ecosystem by delivering innovative solutions for crypto transactions, lending, staking, and passive earning",
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
    pageTitle: {
      text: "Optimizing Media Research: A Data-Driven Approach to Insights",
      accentWords: ["Media Research:"],
    },
    overview: {
      client:
        "Our client, a global leader in audience measurement and data analytics, focuses on refining the process of media consumption analysis to provide accurate insights.",
      technologies:
        "Scala / Python / AWS / Apache Kafka / Spark / MongoDB / Salesforce / Google Cloud / Machine Learning / Data Analytics",
      description:
        "Client is specialised in collecting data on what content people engage with, who is watching it, and how they interact with various media channels. The goal is to deliver precise audience insights to clients, empowering advertisers and media planners to make informed decisions.",
      image: "fintech_overview_parallax_1x",
      retinaImage: "fintech_overview_parallax_2x",
    },
    challenges: [
      "The need to better track detailed audience data, such as demographics, viewing habits, and regional preferences.",
      "Efficiently managing vast amounts of data from multiple sources, including set-top boxes, streaming platforms, and mobile devices.",
      "Providing fast, up-to-date audience insights to support timely media planning and ad optimization.",
      "Leveraging artificial intelligence to enhance the accuracy of predictions and improve media behavior modeling.",
      "Strengthening relationships with clients by delivering tailored insights and improving customer support.",
      "Enabling personalized communication and engagement strategies based on client data.",
    ],
    services: {
      text: "To address these challenges, we employed a comprehensive set of services, combining AI, machine learning, big data analytics, and CRM system integration. Here’s how we delivered a sophisticated solution:",
      servicesData: [
        {
          name: "End-to-End Application Development",
          description:
            "Created a robust platform that integrates audience measurement, demographic profiling, and real-time analytics. Enabled the client to track and analyze user behavior across various media channels.",
          link: routes.EndToEndApplicationDevelopment,
          image: "end_to_end_1x",
          retinaImage: "end_to_end_2x",
        },
        {
          name: "Artificial Intelligence & Machine Learning",
          description:
            "Implemented machine learning algorithms to enhance predictive capabilities and forecast audience behavior. Improved audience segmentation, precision targeting, and engagement metrics.",
          link: routes.ArtificialIntelligence,
          image: "ai_1x",
          retinaImage: "ai_2x",
        },
        {
          name: "Real-Time Data Processing",
          description:
            "Employed cloud-based solutions to handle real-time data processing, ensuring continuous updates to audience insights. Provided media planners and advertisers with up-to-the-minute information for strategic decision-making.",
          link: routes.CloudIntegration,
          image: "cloud_1x",
          retinaImage: "cloud_2x",
        },
        {
          name: "CRM Integration",
          description:
            "Integrated a CRM system to personalize client interactions and improve service delivery. Enabled tracking of key performance metrics for client success and engagement.",
          link: routes.OptimizeBusinessProcessesWithCRM,
          image: "crm_1x",
          retinaImage: "crm_2x",
        },
      ],
    },
    functionalModules: [
      {
        moduleName: "Audience Segmentation",
        details: [
          "Created detailed audience segments based on demographics, viewing patterns, and engagement metrics.",
          "Allowed the client to gain deeper insights into diﬀerent viewer profiles.",
        ],
      },
      {
        moduleName: "Big Data Analytics Platform",
        details: [
          "Developed a scalable platform for processing and analyzing large volumes of data from multiple sources.",
          "Provided tools for advanced analytics and reporting to support client needs.",
        ],
      },
      {
        moduleName: "Real-Time Analytics Dashboard",
        details: [
          "A dynamic dashboard displaying live data on audience behavior, media consumption trends, and engagement metrics.",
          "Empowered clients to make timely, data-driven decisions.",
        ],
      },
      {
        moduleName: "Predictive Modeling",
        details: [
          "Implemented AI-driven models that predict audience behavior and improve forecasting accuracy.",
          "Enhanced media planning and content strategy through data-driven insights.",
        ],
      },
      {
        moduleName: "CRM Integration",
        details: [
          "Integrated a CRM system that provided actionable insights into the customer base.",
          "Enabled personalized marketing and better service delivery to strengthen client relationships.",
        ],
      },
      {
        moduleName: "Automated Reporting",
        details: [
          "Developed an automated reporting system with customizable dashboards and scheduled reports.",
          "Provided data-driven recommendations to optimize content strategy and audience targeting.",
        ],
      },
    ],
    technologies: [
      {
        title: "AI & Machine Learning:",
        description:
          "Deep learning algorithms for audience segmentation, trend forecasting, and predictive analytics.",
      },
      {
        title: "Big Data Technologies:",
        description:
          "Apache Kafka for real-time data streaming, Spark for distributed data processing, and Hadoop for large-scale data analytics.",
      },
      {
        title: "CRM Tools:",
        description:
          "Salesforce integration for managing customer interactions and optimizing service delivery.",
      },
      {
        title: "Cloud:",
        description:
          "AWS and Google Cloud for scalable infrastructure supporting real-time analytics.",
      },
      {
        title: "Data Management:",
        description:
          "MongoDB, Netezza, and Oracle for secure data storage and seamless integration of structured and unstructured data.",
      },
      {
        title: "Data Visualization:",
        description:
          "Tableau and Power BI for creating interactive dashboards and visualizations, enabling clients to easily interpret audience insights and trends.",
      },
      {
        title: "Microservices:",
        description:
          "Implementation of microservices for improved system modularity and easier integration of new features and updates.",
      },
      {
        title: "Containerization:",
        description:
          "Docker and Kubernetes for eﬃcient deployment, scaling, and management of applications in a cloud environment.",
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
      "Our client, a global leader in audience measurement and data analytics, focuses on refining the process of media consumption analysis to provide accurate insights",
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
    name: "Pharmaceutical Distribution",
    pageTitle: {
      text: "Pharmaceutical Distribution: Modernizing Supply Chains for Efficiency",
      accentWords: ["Pharmaceutical Distribution:"],
    },
    overview: {
      client:
        "Our client is a global distributor specializing in pharmaceutical products, veterinary supplies, dietary supplements, and medical devices.",
      technologies:
        "Python / Azure / Django / Angular / TypeScript / Ruby on Rails / MySQL / Redis / Terraform / Grafana / Selenium / Postman / Kubernetes / Elasticsearch",
      description:
        "The client aimed to modernize their digital infrastructure to improve supply chain eﬃciency, enhance regulatory compliance, and oﬀer seamless access to product catalogs, licensing services, and tender management tools. Their goal was to create a scalable, secure platform tailored to the needs of healthcare providers, business partners, and regulatory bodies.",
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
      text: "To address these challenges, we employed a comprehensive set of services, End-to-End Platform Development, Secure and Scalable Infrastructure and CRM system integration. Here's how we delivered a sophisticated solution:",
      servicesData: [
        {
          name: "End-to-End Platform Development",
          description:
            "Built an interactive application enabling seamless access to product catalogs, tender submission, and licensing management. Designed role-specific interfaces for healthcare providers.",
          link: routes.EndToEndApplicationDevelopment,
          image: "end_to_end_1x",
          retinaImage: "end_to_end_2x",
        },
        {
          name: "Secure and Scalable Infrastructure",
          description:
            "Implemented multi-layered security measures to protect sensitive pharmacovigilance and licensing data. Ensured cloud scalability to support a growing number of suppliers.",
          link: routes.CloudIntegration,
          image: "cloud_1x",
          retinaImage: "cloud_2x",
        },
        {
          name: "CRM and Communication Tools",
          description:
            "Integrated a custom CRM system to streamline distributor and supplier relationship management. Added real-time messaging and feedback mechanisms to enhance collaboration among stakeholders.",
          link: routes.OptimizeBusinessProcessesWithCRM,
          image: "crm_1x",
          retinaImage: "crm_2x",
        },
      ],
    },
    functionalModules: [
      {
        moduleName: "Automated Tender Management System",
        details: [
          "Implemented an AI-powered workflow to automate tender submissions, bid evaluations, and contract approvals.",
          "Reduced manual workload by streamlining document processing and compliance verification.",
        ],
      },
      {
        moduleName: "Scalable Supply Chain and Inventory Management",
        details: [
          "Developed an intelligent inventory tracking system to optimize stock management and prevent shortages.",
          "Integrated real-time analytics for demand forecasting and supplier performance evaluation.",
        ],
      },
      {
        moduleName: "Regulatory Compliance & Security Framework",
        details: [
          "Built-in compliance mechanisms to align with global pharmaceutical distribution regulations, including pharmacovigilance standards.",
          "Implemented robust encryption protocols to safeguard sensitive licensing and product data.",
        ],
      },
      {
        moduleName: "Advanced CRM & Communication System",
        details: [
          "Deployed a cloud-based CRM with automated tracking of distributor and supplier interactions.",
          "Integrated real-time chat and feedback tools to improve customer engagement and issue resolution.",
        ],
      },
      {
        moduleName: "Data Analytics & Reporting Dashboard",
        details: [
          "Created an interactive dashboard with key business intelligence insights.",
          "Provided real-time reporting on sales trends, supply chain performance, and regulatory compliance metrics.",
        ],
      },
      {
        moduleName: "AI-Driven Market Insights Module",
        details: [
          "Implemented machine learning models to analyze market trends and provide data-driven recommendations.",
          "Enabled predictive analytics to help stakeholders make informed business decisions.",
        ],
      },
    ],
    technologies: [
      {
        title: "Backend Development:",
        description:
          "Python / Ruby on Rails – for high-performance application logic and API services.",
      },
      {
        title: "Frontend Development:",
        description: "Angular / TypeScript – for building a responsive, user-friendly interface.",
      },
      {
        title: "Cloud Services:",
        description:
          "Azure (Blob Storage, Virtual Machines) / Terraform / Kubernetes – for scalable cloud hosting and infrastructure automation.",
      },
      {
        title: "Data Processing:",
        description:
          "MySQL / Redis / Elasticsearch – for fast, reliable data storage, caching, and search indexing.",
      },
      {
        title: "Security:",
        description:
          "Built-in encryption protocols – ensuring data privacy and compliance with pharmaceutical regulations.",
      },
      {
        title: "Quality Assurance:",
        description:
          "Grafana / Selenium / Postman – for real-time monitoring, automated testing, and API validation.",
      },
      {
        title: "DevOps:",
        description: "Jenkins / ArgoCD – for deployment automation, CI/CD, and release management.",
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
      {
        title: "Localization for Global Reach",
        description:
          "Supported multi-language capabilities and region-specific compliance features for international expansion",
      },
    ],
    description:
      "Our client is a global distributor specializing in pharmaceutical products, veterinary supplies, dietary supplements, and medical devices",
    images: {
      main: {
        image: "pharmaceutical_main_1x",
        retinaImage: "pharmaceutical_main_2x",
      },
      vertical: {
        image: "pharmaceutical_vertical_1x",
        retinaImage: "pharmaceutical_vertical_2x",
      },
      generalPage: {
        image: "pharmaceutical_general_page_1x",
        retinaImage: "pharmaceutical_general_page_2x",
      },
      fullScreenBlock: {
        image: "pharmaceutical_full_screen_block_1x",
        retinaImage: "pharmaceutical_full_screen_block_2x",
      },
      hp: {
        image: "pharmaceutical_hp_1x",
        retinaImage: "pharmaceutical_hp_2x",
      },
      hpHorizontal: {
        image: "pharmaceutical_hp_horizontal_1x",
        retinaImage: "pharmaceutical_hp_horizontal_2x",
      },
    },
  },
  {
    id: "transforming-e-commerce",
    link: routes.TransformingECommerceCaseStudy,
    name: "Transforming E-Commerce",
    pageTitle: {
      text: "Transforming E-Commerce: A Technology-Driven Evolution",
      accentWords: ["E-Commerce:"],
    },
    overview: {
      client:
        "Our client, a leading European manufacturer of personalized lifestyle products, partnered with us to modernize their e-commerce platform and enhance operational eﬃciency.",
      technologies:
        "Java / AWS / Apache Kafka / Angular / PostgreSQL / Instana / Kibana / Jenkins / SonarQube / REST API / OpenAPI / Machine Learning / Data Analytics",
      description:
        "The company specializes in oﬀering high-quality, customizable lifestyle products through an online marketplace. Their primary objective was to improve scalability, streamline backend processes, and integrate new functionalities to enhance the shopping experience for a global customer base.",
      image: "fintech_overview_parallax_1x",
      retinaImage: "fintech_overview_parallax_2x",
    },
    challenges: [
      "Updating Old Systems improving and rewriting outdated code while keeping the platform stable.",
      "Integrating APIs and Payment Gateways streamlining logistics and making sure transactions are secure and efficient.",
      "Implementing a CRM for Customer Management improving customer engagement and retention with a customized CRM system.",
      "Enhancing Scalability and Performance optimizing the infrastructure to handle increasing traffic and transaction volumes effectively.",
      "Ensuring Data Security and Compliance applying strong encryption and following industry regulations to protect user data.",
      "Improving User Experience redesigning the interface to make navigation easier, reduce loading times, and enhance accessibility.",
    ],
    services: {
      text: "To address these challenges, we provided a comprehensive set of solutions, combining cloud technologies, backend optimization, and customer experience enhancements:",
      servicesData: [
        {
          name: "End-to-End Platform Development",
          description:
            "Upgraded core system functionalities with modern, scalable architecture for enhanced performance and reliability.",
          link: routes.EndToEndApplicationDevelopment,
          image: "end_to_end_1x",
          retinaImage: "end_to_end_2x",
        },
        {
          name: "CRM System Implementation",
          description:
            "Designed a cloud-based CRM solution to enhance customer relationship management and streamline business processes effectively.",
          link: routes.OptimizeBusinessProcessesWithCRM,
          image: "crm_1x",
          retinaImage: "crm_2x",
        },
        {
          name: "Performance Optimization & Cloud Migration",
          description:
            "Improved system efficiency using scalable AWS cloud infrastructure to support growing business needs and demands.",
          link: routes.CloudIntegration,
          image: "cloud_1x",
          retinaImage: "cloud_2x",
        },
      ],
    },
    functionalModules: [
      {
        moduleName: "Modernized E-Commerce Architecture",
        details: [
          "Redesigned core infrastructure for enhanced scalability and maintainability.",
          "Optimized backend processes to reduce technical debt and improve performance.",
        ],
      },
      {
        moduleName: "Seamless Logistics & Payment Integration",
        details: [
          "Integrated transportation APIs for automated logistics and real-time delivery tracking.",
          "Implemented secure, PCI-compliant payment gateways, ensuring seamless and reliable transactions.",
        ],
      },
      {
        moduleName: "Customer Relationship Management System",
        details: [
          "Developed a cloud-based CRM platform to improve customer data management and engagement.",
          "Enhanced marketing and service quality using customer insights for personalized interactions.",
        ],
      },
      {
        moduleName: "Scalability & Performance Optimization",
        details: [
          "Conducted detailed performance analysis to identify and resolve system bottlenecks.",
          "Deployed AWS-based cloud solutions for high availability, scalability, and system reliability.",
        ],
      },
      {
        moduleName: "Automated Order Processing & Inventory Management",
        details: [
          "Implemented AI-driven automation for order validation, reducing manual workload.",
          "Developed an intelligent inventory tracking system to prevent stock shortages and optimize supply chain eﬃciency.",
        ],
      },
      {
        moduleName: "Personalized Shopping Experience",
        details: [
          "Integrated machine learning algorithms to provide personalized product recommendations.",
          "Enhanced customer engagement by optimizing search and filtering based on user preferences and behavior.",
        ],
      },
    ],
    technologies: [
      {
        title: "Languages:",
        description: "Java, Python, JavaEE, Angular, PrimeFaces.",
      },
      {
        title: "Cloud Infrastructure:",
        description: "AWS (S3, EC2, RDS) for scalable, secure platform hosting.",
      },
      {
        title: "Data Processing:",
        description: "Apache Kafka, Spark for real-time and distributed data processing.",
      },
      {
        title: "Database Management:",
        description: "PostgreSQL, MongoDB for reliable and eﬃcient data storage.",
      },
      {
        title: "Monitoring Tools:",
        description: "Instana, Kibana for real-time analytics and performance tracking.",
      },
      {
        title: "CI/CD Tools:",
        description:
          "Jenkins, Maven, Git, SonarQube for automated deployment and code quality control.",
      },
      {
        title: "API Standards:",
        description: "REST, OpenAPI/Swagger for seamless third-party service integrations.",
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
      "A leading European manufacturer of personalized lifestyle products partnered with us to enhance their e-commerce platform",
    images: {
      main: {
        image: "ecommerce_main_1x",
        retinaImage: "ecommerce_main_2x",
      },
      vertical: {
        image: "ecommerce_vertical_1x",
        retinaImage: "ecommerce_vertical_2x",
      },
      generalPage: {
        image: "ecommerce_general_page_1x",
        retinaImage: "ecommerce_general_page_2x",
      },
      fullScreenBlock: {
        image: "ecommerce_full_screen_block_1x",
        retinaImage: "ecommerce_full_screen_block_2x",
      },
      hp: {
        image: "ecommerce_hp_1x",
        retinaImage: "ecommerce_hp_2x",
      },
      hpHorizontal: {
        image: "ecommerce_hp_horizontal_1x",
        retinaImage: "ecommerce_hp_horizontal_2x",
      },
    },
  },
  {
    id: "revolution-in-telecommunications",
    link: routes.RevolutionInTelecommunicationsCaseStudy,
    name: "Revolution in Telecommunications",
    pageTitle: {
      text: "Revolution in Telecommunications: A New Era of Connectivity",
      accentWords: ["Telecommunications:"],
    },
    overview: {
      client:
        "A leading telecom company sought to develop a global platform enabling users to search, compare, and select Internet Service Providers (ISPs) worldwide.",
      technologies:
        "Java / Scala / React / AWS / MySQL / REST APIs / Docker / Kubernetes / Terraform / Swagger / AI & Machine Learning / Big Data Tools",
      description:
        "The solution aimed to provide intuitive access to ISP services by aggregating data from multiple providers, oﬀering a seamless way for users to search, compare, and select the best options based on their needs. The platform needed to support real-time service availability checks, detailed ISP profiling.",
      image: "fintech_overview_parallax_1x",
      retinaImage: "fintech_overview_parallax_2x",
    },
    challenges: [
      "Designing a platform capable of handling high volumes of global users and real-time data interactions.",
      "Creating an intuitive interface with seamless navigation and comprehensive comparison features.",
      "Implementing dynamic price calculation for ISP services based on user preferences and geographic location.",
      "Coordinating a distributed team of 20+ professionals to ensure eﬃcient development and timely delivery.",
      "Ensuring up-to-date and precise ISP data collection from multiple sources while avoiding inconsistencies.",
      "Implementing robust security measures to protect sensitive user data and ensuring compliance with regional regulations.",
    ],
    services: {
      text: "To address these challenges, Sonomics applied our End-to-End Application Development expertise, coupled with AI Solutions, Agile Methodologies, Cloud Integration, and Business Process Optimization. Here’s how we delivered a comprehensive solution:",
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
          name: "Artificial Intelligence",
          description:
            "Implemented AI-driven models to enhance ISP comparison algorithms, oﬀering personalized recommendations and dynamic pricing adjustments based on user behavior and regional data.",
          link: routes.ArtificialIntelligence,
          image: "ai_1x",
          retinaImage: "ai_2x",
        },
        {
          name: "Experience Our Demo Version",
          description:
            "Delivered a functional prototype within two weeks, allowing the client to test and refine key features early in development.",
          link: routes.DemoVersion,
          image: "demo_version_1x",
          retinaImage: "demo_version_2x",
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
        moduleName: "Price Calculation Logic",
        details: [
          "Implements robust pricing algorithms for real-time cost comparisons.",
          "Adjusts pricing dynamically based on user preferences and geographic location.",
        ],
      },
      {
        moduleName: "User-Friendly Interface",
        details: [
          "Developed with React and JavaScript for a seamless and responsive experience.",
          "Designed to enhance accessibility with intuitive navigation and interactive elements.",
        ],
      },
      {
        moduleName: "Performance Monitoring",
        details: [
          "Utilizes real-time tracking tools to ensure system reliability and eﬃciency.",
          "Implements proactive issue detection for smooth user interactions.",
        ],
      },
      {
        moduleName: "Dynamic ISP Search and Comparison",
        details: [
          "Enables users to search for ISPs and compare services based on key factors.",
          "Provides tailored recommendations using location-based filtering.",
        ],
      },
      {
        moduleName: "Automated Service Availability Checks",
        details: [
          "Verifies ISP coverage in real time based on the user’s location.",
          "Ensures accurate service options by integrating multiple data sources.",
        ],
      },
      {
        moduleName: "AI-Powered Personalized Recommendations",
        details: [
          "Analyzes user behavior and preferences to suggest the most suitable ISP plans.",
          "Adapts dynamically to market trends and user interaction patterns.",
        ],
      },
    ],
    technologies: [
      {
        title: "Backend:",
        description: "Java and Scala for scalable, high-performance application logic.",
      },
      {
        title: "Frontend:",
        description:
          "React, along with Redux for efficient state management and Websockets for real-time communication.",
      },
      {
        title: "Cloud Deployment:",
        description: "AWS for hosting and MySQL for database management.",
      },
      {
        title: "Big Data:",
        description: "Utilized for processing large datasets and providing dynamic insights.",
      },
      {
        title: "AI & Machine Learning:",
        description: "Implemented to enhance ISP recommendations and improve user experience.",
      },
      {
        title: "DevOps:",
        description:
          "Docker, Kubernetes, and T erraform for eﬃcient CI/CD and cloud infrastructure management.",
      },
      {
        title: "Microservices:",
        description:
          "Adopted to enable modular development and deployment of services, improving scalability and maintainability.",
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
      {
        title: "Higher Platform Uptime",
        description:
          "Achieved 99.9% uptime through AWS cloud infrastructure and proactive monitoring",
      },
    ],
    description:
      "A leading telecom company sought to develop a global platform enabling users to search, compare, and select Internet Service Providers (ISPs) worldwide",
    images: {
      main: {
        image: "telecom_main_1x",
        retinaImage: "telecom_main_2x",
      },
      vertical: {
        image: "telecom_vertical_1x",
        retinaImage: "telecom_vertical_2x",
      },
      generalPage: {
        image: "telecom_general_page_1x",
        retinaImage: "telecom_general_page_2x",
      },
      fullScreenBlock: {
        image: "telecom_full_screen_block_1x",
        retinaImage: "telecom_full_screen_block_2x",
      },
      hp: {
        image: "telecom_hp_1x",
        retinaImage: "telecom_hp_2x",
      },
      hpHorizontal: {
        image: "telecom_hp_horizontal_1x",
        retinaImage: "telecom_hp_horizontal_2x",
      },
    },
  },
];
