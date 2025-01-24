import { routes } from "./routes";
import { Service } from "../types";

export const services: Service[] = [
  {
    id: "end-to-end-application-development",
    name: "End-to-end application development",
    title: "End-to-end application development",
    link: routes.EndToEndApplicationDevelopment,
    features: [
      "Custom software development tailored to your business goals",
      "Mobile and web application development",
      "Maintenance and support for legacy systems",
      "Ongoing updates and feature enhancements to keep your software relevant",
    ],
    hero: {
      image: "end_to_end_1x",
      retinaImage: "end_to_end_2x",
      text: [
        "At Sonomics, we provide comprehensive End-to-End Application Development services, managing the entire software lifecycle — from concept and planning to deployment and ongoing support. Whether you need to create an application from scratch or enhance an existing product, our team of experienced developers, designers, and engineers is here to bring your vision to life.",
        "We ensure your software aligns with business goals, adheres to the latest industry standards, and delivers exceptional user experiences across platforms.",
      ],
    },
    offers: {
      sectionTitle: "What we offer",
      image: "end_to_end_offers_1x",
      retinaImage: "end_to_end_offers_2x",
      offersList: [
        {
          offerName: "Custom software development",
          details: [
            "Tailored solutions designed specifically for your business needs, ensuring optimal performance, functionality, and scalability.",
          ],
        },
        {
          offerName: "Mobile and web application development",
          details: [
            "Cross-platform and platform-specific applications that are responsive, high-performing, and user-friendly for web and mobile ecosystems.",
          ],
        },
        {
          offerName: "Legacy system modernization",
          details: [
            "We enhance and maintain existing systems to meet modern standards, improving functionality, speed, and user experience.",
          ],
        },
        {
          offerName: "Ongoing updates and feature enhancements",
          details: [
            "Continuous support and iterative improvements to keep your application relevant, secure, and competitive.",
          ],
        },
      ],
    },
    whyChooseSonomics: {
      sectionTitle: "Why choose Sonomics",
      items: [
        {
          title: "End-to-end cloud expertise",
          description:
            "We handle every phase, from planning and development to post-launch support.",
          image: "end_to_end_item1_1x",
          retinaImage: "end_to_end_item1_2x",
        },
        {
          title: "Scalable and Future-Ready Solutions",
          description:
            "Applications built for long-term growth, capable of scaling alongside your business needs.",
          image: "end_to_end_item2_1x",
          retinaImage: "end_to_end_item2_2x",
        },
        {
          title: "User-centric design",
          description:
            "We prioritize usability, ensuring exceptional experiences for customers and internal teams.",
          image: "end_to_end_item3_1x",
          retinaImage: "end_to_end_item3_2x",
        },
        {
          title: "Reliable performance",
          description:
            "Optimized applications that deliver speed, stability, and efficiency across platforms.",
          image: "end_to_end_item4_1x",
          retinaImage: "end_to_end_item4_2x",
        },
      ],
    },
    caseStudyId: "fintech-combination",
    expertise: {
      text: "With our end-to-end development approach, you gain a trusted partner who ensures every stage of the development process is executed with precision, efficiency, and reliability",
      accentWords: ["gain a trusted partner"],
    },
    technologies: {
      sectionTitle: "Technologies we use",
      cards: [
        {
          technologyTitle: "Mobile and web development:",
          technologyProperties: [
            {
              name: "Frontend:",
              text: "React, Angular, Vue.js — frameworks for building interactive, user-friendly interfaces with seamless navigation.",
            },
            {
              name: "Backend:",
              text: ".NET, Java, Go (Golang) — robust backend solutions that ensure scalability, performance, and secure data processing.",
            },
          ],
        },
        {
          technologyTitle: "Legacy system support and modernization:",
          technologyProperties: [
            {
              name: "We upgrade and maintain systems",
              text: "built on PHP, Java, and JavaScript, optimizing codebases for improved efficiency and extending their lifecycle.",
            },
          ],
        },
        {
          technologyTitle: "Cloud platforms for deployment and scaling:",
          technologyProperties: [
            {
              name: "AWS, Google Cloud Platform (GCP), Microsoft Azure",
              text: "built on PHP, Java, and JavaScript, optimizing codebases for improved efficiency and extending their lifecycle.",
            },
          ],
        },
        {
          technologyTitle: "Full-Stack Integration:",
          technologyProperties: [
            {
              name: "Combining frontend, backend, and cloud infrastructure",
              text: "for seamless workflows and modern applications.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "artificial-intelligence",
    name: "Artificial Intelligence (AI)",
    title: "Transform your business with artificial intelligence (AI)",
    link: routes.ArtificialIntelligence,
    features: [
      "Leverage machine learning for predictive analytics",
      "Automate repetitive processes to free up resources",
      "Enhance decision-making through AI-driven insights",
      "Implement AI-powered chatbots to streamline customer service",
    ],
    hero: {
      image: "ai_1x",
      retinaImage: "ai_2x",
      text: [
        "In today’s fast-paced and competitive market, Artificial Intelligence (AI) is a game-changer for businesses looking to innovate, scale, and maintain an edge. At Sonomics, we specialize in seamlessly integrating AI into your existing business framework to deliver measurable improvements in efficiency, decision-making, and customer satisfaction.",
        "Whether it’s automating repetitive tasks, analyzing large datasets for actionable insights, or enhancing customer engagement with AI-powered solutions, our expert team will tailor the right AI technologies to drive your business performance to the next level.",
      ],
    },
    offers: {
      sectionTitle: "What we offer",
      image: "ai_offers_1x",
      retinaImage: "ai_offers_2x",
      offersList: [
        {
          offerName: "Predictive analytics with machine learning",
          details: [
            "Harness the power of Machine Learning models to forecast trends, identify patterns, and make data-driven decisions, enabling you to stay ahead of the curve.",
          ],
        },
        {
          offerName: "Process automation to improve efficiency",
          details: [
            "Automate routine, repetitive processes using Robotic Process Automation (RPA) to reduce operational costs, minimize human errors, and free up resources for high-value tasks.",
          ],
        },
        {
          offerName: "AI-powered chatbots for enhanced customer service",
          details: [
            "Implement intelligent chatbots that leverage Natural Language Processing (NLP) to provide 24/7 customer support, resolve inquiries quickly, and improve user satisfaction.",
          ],
        },
        {
          offerName: "AI-driven insights for better decision-making",
          details: [
            "Analyze complex datasets to generate actionable business insights, optimize strategies, and empower faster, more informed decisions.",
          ],
        },
      ],
    },
    whyChooseSonomics: {
      sectionTitle: "Why choose Sonomics for AI integration",
      items: [
        {
          title: "Customized AI solutions",
          description:
            "Tailored strategies and AI tools designed specifically for your business goals and industry challenges.",
          image: "ai_item1_1x",
          retinaImage: "ai_item1_2x",
        },
        {
          title: "Improved Operational Efficiency",
          description: "Automate manual processes, reducing costs and maximizing productivity.",
          image: "ai_item2_1x",
          retinaImage: "ai_item2_2x",
        },
        {
          title: "Data-driven insights",
          description:
            "Leverage AI to uncover hidden opportunities, optimize performance, and improve decision-making accuracy.",
          image: "ai_item3_1x",
          retinaImage: "ai_item3_2x",
        },
        {
          title: "Enhanced Customer Engagement",
          description:
            "Intelligent chatbots and personalized solutions that create seamless, satisfying user experiences.",
          image: "ai_item4_1x",
          retinaImage: "ai_item4_2x",
        },
        {
          title: "Scalable and future-ready artificial intelligence",
          description: "Systems designed to adapt and scale alongside your business as it evolves.",
          image: "ai_item5_1x",
          retinaImage: "ai_item5_2x",
        },
      ],
    },
    caseStudyId: "fintech-combination",
    expertise: {
      text: "By integrating AI into your operations, we help you scale faster, improve accuracy, and create sustainable competitive advantages, all while reducing operational overhead",
      accentWords: ["we help", "create sustainable competitive advantages"],
    },
    technologies: {
      sectionTitle: "Technologies we use",
      cards: [
        {
          technologyTitle: "Machine learning models:",
          technologyProperties: [
            {
              name: "Tools and Frameworks:",
              text: "TensorFlow, PyTorch — enabling the creation of predictive models that uncover trends and deliver accurate forecasts.",
            },
            {
              name: "Applications:",
              text: "Forecasting demand, analyzing customer behavior, and optimizing supply chains.",
            },
          ],
        },
        {
          technologyTitle: "AI-Powered Chatbots:",
          technologyProperties: [
            {
              name: "Frameworks:",
              text: "Dialogflow, Rasa — NLP-driven solutions for intelligent, real-time customer support and conversational experiences.",
            },
            {
              name: "Applications:",
              text: "Reducing response time, automating FAQs, and improving engagement with minimal human intervention.",
            },
          ],
        },
        {
          technologyTitle: "Robotic process automation (RPA):",
          technologyProperties: [
            {
              name: "Platforms:",
              text: "Automation using tools like UiPath and Blue Prism to streamline workflows and automate repetitive processes.",
            },
            {
              name: "Applications:",
              text: "Data entry, document processing, invoice handling, and reporting.",
            },
          ],
        },
        {
          technologyTitle: "Big Data & AI-Driven Insights:",
          technologyProperties: [
            {
              name: "Tools:",
              text: "Hadoop, Apache Spark, and BigQuery for handling and analyzing large-scale datasets to identify trends and drive business decisions.",
            },
            {
              name: "Applications:",
              text: "Real-time analytics, data mining, and advanced reporting for enhanced decision-making.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "demo-version",
    name: "Deliverables in two weeks: experience our demo version",
    title: "Deliverables in two weeks: experience our demo version",
    link: routes.DemoVersion,
    features: [
      "Quick turnaround demo to showcase immediate value",
      "Real-time feedback and customization based on your needs",
      "Pilot projects to test and validate ideas before full-scale implementation",
    ],
    hero: {
      image: "demo_version_1x",
      retinaImage: "demo_version_2x",
      text: [
        "That’s why we offer a fully functional demo version of your software solution within just two weeks. This gives you the opportunity to see, test, and experience how our systems can revolutionize your workflows before committing to a full-scale implementation.",
        "Our rapid delivery model ensures you gain valuable insights, immediate impact, and the confidence to move forward with your digital transformation goals.",
      ],
      boldText:
        "At Sonomics, we recognize the importance of demonstrating tangible results early in the project lifecycle.",
    },
    offers: {
      sectionTitle: "What we offer",
      image: "demo_version_offers_1x",
      retinaImage: "demo_version_offers_2x",
      offersList: [
        {
          offerName: "Quick turnaround prototypes to demonstrate value",
          details: [
            "Receive a demo version of your solution that showcases core functionality, user experience, and potential benefits—all within a short timeline.",
          ],
        },
        {
          offerName: "Real-time feedback and continuous iteration",
          details: [
            "Share your feedback as you explore the demo, allowing us to make real-time adjustments and customizations based on your unique requirements.",
          ],
        },
        {
          offerName: "Pilot projects for testing and validation",
          details: [
            "Launch pilot projects to validate concepts, mitigate risks, and test ideas before scaling to full production. This approach helps ensure alignment with your business objectives.",
          ],
        },
        {
          offerName: "Efficient collaboration for fast results",
          details: [
            "We use agile methodologies and iterative processes to deliver a reliable demo that reflects your vision and business needs.",
          ],
        },
      ],
    },
    whyChooseSonomics: {
      sectionTitle: "Why choose Sonomics for rapid prototyping",
      items: [
        {
          title: "Speed and efficiency",
          description:
            "Get a tangible prototype delivered in just two weeks to see early results and quick value.",
          image: "demo_version_item1_1x",
          retinaImage: "demo_version_item1_2x",
        },
        {
          title: "Iterative improvements",
          description:
            "We prioritize your feedback to refine and customize the demo based on real user needs and insights.",
          image: "demo_version_item2_1x",
          retinaImage: "demo_version_item2_2x",
        },
        {
          title: "Risk reduction",
          description:
            "Validate concepts and test ideas in a controlled environment before committing to full-scale implementation.",
          image: "demo_version_item3_1x",
          retinaImage: "demo_version_item3_2x",
        },
        {
          title: "Cost-effective approach",
          description:
            "Save time and resources by focusing on core functionalities first and scaling later.",
          image: "demo_version_item4_1x",
          retinaImage: "demo_version_item4_2x",
        },
        {
          title: "Seamless cloud integration",
          description:
            "Deploy your demo version on leading cloud platforms for performance, scalability, and reliability.",
          image: "demo_version_item5_1x",
          retinaImage: "demo_version_item5_2x",
        },
      ],
    },
    caseStudyId: "fintech-combination",
    expertise: {
      text: "By delivering a working demo early in the process, we minimize uncertainty and set the stage for seamless development, ensuring you feel confident in your investment and our approach",
      accentWords: ["delivering a working demo", "ensuring you feel confident"],
    },
    technologies: {
      sectionTitle: "Technological highlights",
      cards: [
        {
          technologyTitle: "Rapid prototyping for web and mobile applications:",
          technologyProperties: [
            {
              name: "Frameworks:",
              text: "React Native, Flutter, Node.js — enabling the rapid development of cross-platform prototypes that run smoothly on web and mobile.",
            },
            {
              name: "Benefits:",
              text: "Faster delivery, reduced development costs, and enhanced scalability for future enhancements.",
            },
          ],
        },
        {
          technologyTitle: "Continuous integration & continuous delivery (CI/CD):",
          technologyProperties: [
            {
              name: "Tools:",
              text: "Jenkins, GitLab CI, and GitHub Actions for automating testing, deployment, and integration.",
            },
            {
              name: "Benefits:",
              text: "Real-time testing and updates to ensure prototypes remain stable, functional, and aligned with feedback.",
            },
          ],
        },
        {
          technologyTitle: "Automated testing for precision and quality:",
          technologyProperties: [
            {
              name: "Tools:",
              text: "Selenium, Cypress, and Jest — ensuring the demo version performs flawlessly under real-world conditions.",
            },
            {
              name: "Benefits:",
              text: "Early bug detection, optimized performance, and consistent quality.",
            },
          ],
        },
        {
          technologyTitle: "Cloud Deployment for Speed and Reliability:",
          technologyProperties: [
            {
              name: "Platforms",
              text: "AWS Lambda, Azure Functions, and Firebase for swift, serverless deployment.",
            },
            {
              name: "Benefits:",
              text: "Scalability, minimal infrastructure costs, and fast deployment with reduced overhead.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "requirement-analysis-and-development-planning",
    name: "Requirement analysis & development planning",
    title: "Requirement analysis & development planning",
    link: routes.RequirementAnalysisAndDevelopmentPlanning,
    features: [
      "Custom software development tailored to your business goals",
      "Mobile and web application development",
      "Maintenance and support for legacy systems",
      "Ongoing updates and feature enhancements to keep your software relevant",
    ],
    hero: {
      image: "analysis_and_planning_1x",
      retinaImage: "analysis_and_planning_2x",
      text: [
        "We dedicate time to thorough requirement analysis and strategic development planning. By working closely with stakeholders, we ensure that every detail aligns with your goals, challenges, and long-term vision.",
        "Our structured planning process provides you with a tailored roadmap to success—ensuring smooth execution, predictable results, and on-time delivery.",
      ],
      boldText:
        "At Sonomics, we know that every successful project begins with a clear and comprehensive understanding of your business needs.",
    },
    offers: {
      sectionTitle: "Technology-driven planning",
      image: "analysis_and_planning_offers_1x",
      retinaImage: "analysis_and_planning_offers_2x",
      offersList: [
        {
          offerName: "Data-driven requirement analysis",
          details: [
            "Tools: Tableau, Power BI, and Google Data Studio for data visualization and in-depth analysis of business challenges.",
            "Benefits: Identifies trends, gaps, and opportunities to help prioritize business requirements effectively.",
          ],
        },
        {
          offerName: "System architecture design for scalability",
          details: [
            "Tools: Docker, Kubernetes, and Terraform for designing flexible and scalable infrastructure.",
            "Benefits: Ensures systems can scale seamlessly, deploy efficiently, and remain resilient under high demand.",
          ],
        },
        {
          offerName: "Agile project management tools for collaboration",
          details: [
            "Tools: Jira, Trello, Asana, and Monday.com for project planning, task management, and progress tracking.",
            "Benefits: Enhances transparency, fosters team collaboration, and keeps projects aligned with evolving priorities.",
          ],
        },
        {
          offerName: "Continuous communication and feedback integration",
          details: [
            "Tools: Miro, Figma, and Lucidchart for creating visual workflows, diagrams, and collaborative wireframes.",
            "Benefits: Ensures all stakeholders remain aligned and have a clear understanding of project goals and deliverables.",
          ],
        },
      ],
    },
    whyChooseSonomics: {
      sectionTitle: "Why choose Sonomics for requirement analysis & planning",
      items: [
        {
          title: "Strategic Clarity",
          description:
            "A structured, transparent process that eliminates guesswork and provides a clear roadmap to success.",
          image: "analysis_and_planning_item1_1x",
          retinaImage: "analysis_and_planning_item1_2x",
        },
        {
          title: "Client-Centric Approach",
          description:
            "We collaborate with stakeholders to ensure all requirements reflect your unique business priorities.",
          image: "analysis_and_planning_item2_1x",
          retinaImage: "analysis_and_planning_item2_2x",
        },
        {
          title: "Risk Mitigation",
          description:
            "Thorough analysis and meticulous planning help identify risks early and mitigate them before they impact the project.",
          image: "analysis_and_planning_item3_1x",
          retinaImage: "analysis_and_planning_item3_2x",
        },
        {
          title: "Scalable Architecture",
          description:
            "Our deployment plans ensure systems remain adaptable, future-ready, and capable of handling business growth.",
          image: "analysis_and_planning_item4_1x",
          retinaImage: "analysis_and_planning_item4_2x",
        },
        {
          title: "Timely Delivery",
          description:
            "Agile milestones and real-time tracking ensure projects remain on schedule without compromising quality.",
          image: "analysis_and_planning_item5_1x",
          retinaImage: "analysis_and_planning_item5_2x",
        },
      ],
    },
    caseStudyId: "fintech-combination",
    approachAndAdvantages: {
      sectionTitle: "Our approach to requirement analysis & planning",
      items: [
        {
          name: "In-depth business requirements analysis",
          description: [
            "We work collaboratively with your team to identify and document key business requirements, processes, and challenges.",
            "Through stakeholder interviews, workshops, and data analysis, we uncover pain points and align technical solutions with your operational needs.",
          ],
          icon: "advantage-1",
        },
        {
          name: "Detailed Project Scope Definition",
          description: [
            "We create a clear project scope that outlines deliverables, priorities, and constraints.",
            "This detailed scope eliminates ambiguities, ensures alignment, and establishes a solid foundation for efficient execution.",
          ],
          icon: "advantage-2",
        },
        {
          name: "Tailored system architecture and deployment plans",
          description: [
            "Our team designs customized system architectures and deployment strategies that address scalability, performance, and security.",
            "We prioritize future-proofing your system to support growth and adaptability.",
          ],
          icon: "advantage-3",
        },
        {
          name: "Transparent Timelines and Agile Milestones",
          description: [
            "Using agile methodologies, we establish milestones with well-defined timelines, ensuring full visibility and accountability at every phase.",
            "Regular progress updates and feedback loops allow us to adapt quickly to changes while maintaining project momentum.",
          ],
          icon: "advantage-4",
        },
      ],
    },
  },
  {
    id: "agile-methodologies",
    name: "Agile methodologies: scrum, kanban, and hybrid Approaches",
    title: "Agile methodologies: scrum, kanban, and hybrid approaches",
    link: routes.AgileMethodologies,
    features: [
      "Leverage machine learning for predictive analytics",
      "Automate repetitive processes to free up resources",
      "Enhance decision-making through AI-driven insights",
      "Implement AI-powered chatbots to streamline customer service",
    ],
    hero: {
      image: "agile_1x",
      retinaImage: "agile_2x",
      text: [
        "At Sonomics, we embrace Agile project management methodologies to deliver software solutions with speed, flexibility, and precision. By leveraging Scrum, Kanban, and Hybrid approaches, we ensure that our processes are tailored to meet the unique demands of your business, resulting in adaptable and client-focused solutions.",
      ],
    },
    offers: {
      sectionTitle: "Our agile methodologies",
      image: "agile_offers_1x",
      retinaImage: "agile_offers_2x",
      offersList: [
        {
          offerName: "Scrum for Iterative Development",
          details: [
            "The Scrum framework divides your project into short, time-boxed iterations known as sprints (usually 2–4 weeks).",
            "At the end of each sprint, we deliver a tangible output, ensuring continuous progress and alignment with your expectations.",
          ],
          keyBenefits: [
            "Regular feedback loops to refine features and stay aligned with business priorities.",
            "Defined roles and responsibilities (Scrum Master, Product Owner, Development Team) for organized execution.",
            "Transparency and accountability through daily stand-ups, sprint reviews, and retrospectives.",
          ],
        },
        {
          offerName: "Kanban for Continuous Delivery",
          details: [
            "Kanban focuses on real-time task visualization and managing workflow efficiently using boards.",
            "By breaking down tasks into manageable units and limiting work-in-progress (WIP), we ensure a smooth and flexible development cycle.",
          ],
          keyBenefits: [
            "Continuous improvement with flexibility to adjust priorities in real time.",
            "Streamlined workflows that identify and eliminate bottlenecks.",
            "Enhanced visibility for all stakeholders through visual task boards.",
          ],
        },
        {
          offerName: "Pilot projects for testing and validation",
          details: [
            "For projects that require both iterative sprints and flexible task handling, we combine the best of Scrum and Kanban into a Hybrid methodology.",
            "This approach is tailored to your project's unique scope, priorities, and timelines.",
          ],
          keyBenefits: [
            "Scalability to meet evolving project demands.",
            "Customization of workflows to balance structure and agility.",
            "Integration of automated pipelines to ensure continuous delivery and quality assurance.",
          ],
        },
        {
          offerName: "Efficient collaboration for fast results",
          details: [
            "We use agile methodologies and iterative processes to deliver a reliable demo that reflects your vision and business needs.",
          ],
        },
      ],
    },
    whyChooseSonomics: {
      sectionTitle: "Why Sonomics excels with agile methodologies",
      items: [
        {
          title: "Adaptive development",
          description:
            "We tailor Agile frameworks to suit your specific project requirements, ensuring optimal efficiency and flexibility.",
          image: "agile_item1_1x",
          retinaImage: "agile_item1_2x",
        },
        {
          title: "Faster time-to-market",
          description:
            "Incremental delivery and real-time collaboration allow us to bring features to life faster.",
          image: "agile_item2_1x",
          retinaImage: "agile_item2_2x",
        },
        {
          title: "Enhanced collaboration",
          description:
            "Regular communication, feedback loops, and task visibility keep stakeholders engaged and aligned.",
          image: "agile_item3_1x",
          retinaImage: "agile_item3_2x",
        },
        {
          title: "Continuous improvement",
          description:
            "Agile's iterative nature ensures ongoing evaluation and improvement of processes and deliverables.",
          image: "agile_item4_1x",
          retinaImage: "agile_item4_2x",
        },
        {
          title: "Scalable solutions",
          description:
            "Whether your business requires structured sprints, flexible workflows, or a hybrid blend, our Agile processes adapt to your growth and evolving goals.",
          image: "agile_item5_1x",
          retinaImage: "agile_item5_2x",
        },
      ],
    },
    caseStudyId: "fintech-combination",
    expertise: {
      text: "Whether you need a highly-structured iterative approach, a flexible task-driven workflow, or a customized blend of both, Sonomics has the expertise to align agile methodologies with your goals",
      accentWords: ["highly-structured iterative", "flexible", "has the expertise"],
    },
    technologies: {
      sectionTitle: "Technologies powering our agile frameworks",
      description:
        "To implement and optimize Agile methodologies, we leverage industry-leading tools and technologies that ensure transparency, collaboration, and efficiency:",
      cards: [
        {
          technologyTitle: "Scrum Workflow Management:",
          technologyProperties: [
            {
              name: "Tools:",
              text: "Jira, Azure Boards, and ClickUp for managing sprints, backlogs, and user stories.",
            },
            {
              name: "Benefits:",
              text: "Provides clear visibility into progress, sprint timelines, and deliverables while facilitating regular sprint reviews and retrospectives.",
            },
          ],
        },
        {
          technologyTitle: "Kanban Workflows for Flexibility:",
          technologyProperties: [
            {
              name: "Tools:",
              text: "Trello, Azure DevOps, and Asana for visualizing workflows and managing tasks.",
            },
            {
              name: "Benefits:",
              text: "Enhances real-time collaboration and enables quick adjustments to evolving requirements.",
            },
          ],
        },
        {
          technologyTitle: "Hybrid Development with Automation:",
          technologyProperties: [
            {
              name: "Tools:",
              text: "GitHub Actions, CircleCI, and GitLab CI/CD for seamless integration and delivery pipelines.",
            },
            {
              name: "Benefits:",
              text: "Ensures automated testing, deployment, and continuous delivery with minimized downtime.",
            },
          ],
        },
        {
          technologyTitle: "Communication and Progress Tracking:",
          technologyProperties: [
            {
              name: "Tools:",
              text: "Slack, Microsoft Teams, and Zoom for real-time communication.",
            },
            {
              name: "Benefits:",
              text: "Keeps stakeholders aligned with project goals through transparent updates and collaborative discussions.",
            },
          ],
        },
      ],
    },
    approachAndAdvantages: {
      sectionTitle: "Our approach to requirement analysis & planning",
      items: [
        {
          description: "Deliver incremental features quickly and efficiently.",
          icon: "advantage-1",
        },
        {
          description: "Foster continuous communication and collaboration with stakeholders.",
          icon: "advantage-2",
        },
        {
          description: "Accommodate evolving requirements and market changes.",
          icon: "advantage-3",
        },
        {
          description: "Improve product quality through iterative development and feedback.",
          icon: "advantage-4",
        },
      ],
    },
  },
  {
    id: "optimize-business-processes-with-crm",
    name: "Optimize business processes with tailored systems (CRM)",
    title: "Optimize business processes with tailored systems (CRM)",
    link: routes.OptimizeBusinessProcessesWithCRM,
    features: [
      "Quick turnaround demo to showcase immediate value",
      "Real-time feedback and customization based on your needs",
      "Pilot projects to test and validate ideas before full-scale implementation",
    ],
    hero: {
      image: "crm_1x",
      retinaImage: "crm_2x",
      text: [
        "At Sonomics, we specialize in designing and implementing tailored systems that optimize your internal processes, break down communication silos, and enhance collaboration across all departments. From front-line staff to senior executives, our solutions ensure that every team member operates within an integrated, highly efficient system.",
        "By conducting a thorough assessment of your current operations, we identify pain points, inefficiencies, and opportunities for process improvement. We don’t believe in one-size-fits-all solutions—our bespoke systems are tailored to align with your unique goals, workflows, and organizational needs.",
      ],
      boldText:
        "In today’s fast-paced business environment, efficiency and seamless communication are the cornerstones of success.",
    },
    offers: {
      sectionTitle: "How we optimize your business processes",
      image: "crm_offers_1x",
      retinaImage: "crm_offers_2x",
      offersList: [
        {
          offerName: "Customized business process management (BPM) systems",
          details: [
            "We design and implement custom BPM systems to ensure your business processes are optimized, standardized, and aligned with your objectives.",
            "Whether it’s automating workflows, reducing redundancies, or enhancing visibility, our systems drive measurable improvements in efficiency and productivity.",
          ],
        },
        {
          offerName: "Seamless cross-department communication",
          details: [
            "We integrate tools and technologies that foster clear communication across all teams and departments.",
            "By breaking down silos, our systems promote collaboration, ensuring that everyone in your organization is on the same page.",
          ],
        },
        {
          offerName: "Workflow automation to reduce bottlenecks",
          details: [
            "Using advanced workflow automation tools, we eliminate manual, repetitive processes that waste time and resources.",
            "Automating key workflows ensures faster execution, improved accuracy, and reduced bottlenecks in critical operations.",
          ],
        },
        {
          offerName: "Integration with existing systems",
          details: [
            "Our tailored systems seamlessly integrate with your existing infrastructure, ensuring compatibility and enhanced functionality.",
            "By connecting disparate systems, we synchronize data, processes, and workflows to create a cohesive operational environment.",
          ],
        },
      ],
    },
    whyChooseSonomics: {
      sectionTitle: "Why choose Sonomics for business process optimization",
      items: [
        {
          title: "Tailored approach",
          description:
            "We create systems specifically designed to meet your business goals and operational requirements.",
          image: "crm_item1_1x",
          retinaImage: "crm_item1_2x",
        },
        {
          title: "Data-driven insights",
          description:
            "We analyze your processes to identify gaps and inefficiencies, delivering solutions that drive measurable results.",
          image: "crm_item2_1x",
          retinaImage: "crm_item2_2x",
        },
        {
          title: "Seamless integration",
          description:
            "Our experts ensure compatibility with your existing tools and systems for a unified workflow.",
          image: "crm_item3_1x",
          retinaImage: "crm_item3_2x",
        },
        {
          title: "Expertise you can trust",
          description:
            "Backed by years of experience and industry-leading tools, we optimize processes to help you stay ahead of the competition.",
          image: "crm_item4_1x",
          retinaImage: "crm_item4_2x",
        },
        {
          title: "Sustainable results",
          description:
            "Our solutions are scalable, adaptable, and future-ready, ensuring your business is positioned for long-term success.",
          image: "crm_item5_1x",
          retinaImage: "crm_item5_2x",
        },
      ],
    },
    caseStudyId: "fintech-combination",
    technologies: {
      sectionTitle: "Technologies that power our tailored systems",
      description:
        "To deliver optimized business processes, we leverage a range of robust tools and technologies:",
      cards: [
        {
          technologyTitle: "Business process management (BPM) systems:",
          technologyProperties: [
            {
              name: "Platforms:",
              text: "Camunda and Appian",
            },
            {
              name: "Benefits:",
              text: [
                "Streamline workflows and standardize processes.",
                "Enhance visibility into task progress and performance.",
                "Automate repetitive tasks to reduce operational costs.",
              ],
            },
          ],
        },
        {
          technologyTitle: "Cross-department communication tools:",
          technologyProperties: [
            {
              name: "Platforms:",
              text: "Slack APIs, Zapier, and Microsoft Power Automate",
            },
            {
              name: "Benefits:",
              text: [
                "Enable seamless communication and collaboration between teams.",
                "Automate notifications, task assignments, and follow-ups.",
                "Improve response times with integrated communication channels.",
              ],
            },
          ],
        },
        {
          technologyTitle: "Workflow automation solutions:",
          technologyProperties: [
            {
              name: "Platforms:",
              text: "UiPath and Nintex",
            },
            {
              name: "Benefits:",
              text: [
                "Eliminate manual processes with rule-based automation workflows.",
                "Increase operational speed and accuracy.",
                "Monitor workflows with built-in reporting tools.",
              ],
            },
          ],
        },
        {
          technologyTitle: "Data Synchronization and Integration:",
          technologyProperties: [
            {
              name: "Technologies:",
              text: "REST APIs and GraphQL",
            },
            {
              name: "Benefits:",
              text: [
                "Synchronize data between multiple systems for a unified view.",
                "Reduce bottlenecks caused by disconnected platforms.",
                "Improve system performance and reduce latency in data exchanges.",
              ],
            },
          ],
        },
      ],
    },
    approachAndAdvantages: {
      sectionTitle: "The benefits of tailored business systems",
      items: [
        {
          name: "Improved productivity",
          description:
            "Streamlined workflows and automated processes allow employees to focus on high-value tasks.",
          icon: "advantage-1",
        },
        {
          name: "Elimination of redundancies:",
          description:
            "By identifying inefficiencies, we eliminate duplicative efforts and optimize resource utilization.",
          icon: "advantage-2",
        },
        {
          name: "Enhanced collaboration",
          description:
            "Integrated systems promote seamless communication and teamwork across departments.",
          icon: "advantage-5",
        },
        {
          name: "Real-time insights",
          description:
            "Our solutions provide real-time visibility into operations, enabling data-driven decisions and better oversight.",
          icon: "advantage-4",
        },
        {
          name: "Scalable systems",
          description:
            "Whether you’re a growing startup or an established enterprise, our systems are designed to scale with your business needs.",
          icon: "advantage-3",
        },
      ],
    },
  },
  {
    id: "cloud-integration",
    name: "Cloud integration with leading providers",
    title: "Cloud integration with leading providers",
    link: routes.CloudIntegration,
    features: [
      "Custom software development tailored to your business goals",
      "Mobile and web application development",
      "Maintenance and support for legacy systems",
      "Ongoing updates and feature enhancements to keep your software relevant",
    ],
    hero: {
      image: "cloud_1x",
      retinaImage: "cloud_2x",
      text: [
        "At Sonomics, we specialize in helping organizations seamlessly migrate to the cloud and optimize their cloud environments for security, scalability, and cost-efficiency.",
        "Whether you’re taking your first step into the cloud or enhancing an existing setup, our team of cloud experts ensures you unlock the full potential of cloud services from leading providers such as AWS (Amazon Web Services), Microsoft Azure, and Google Cloud Platform (GCP).",
      ],
      boldText:
        "In today’s digital landscape, cloud technology is at the heart of modern business operations.",
    },
    offers: {
      sectionTitle: "Our cloud integration services",
      image: "cloud_offers_1x",
      retinaImage: "cloud_offers_2x",
      offersList: [
        {
          offerName: "Cloud migration and infrastructure setup",
          details: [
            "Seamlessly migrate your on-premise systems, applications, and workloads to the cloud with minimal disruption.",
            "Design and set up a robust cloud infrastructure tailored to your unique business needs and performance goals.",
            "Conduct comprehensive assessments to determine the right cloud provider and architecture for your organization.",
          ],
        },
        {
          offerName: "Security, monitoring, and disaster recovery planning",
          details: [
            "Implement end-to-end security protocols to safeguard your cloud infrastructure, applications, and sensitive data.",
            "Set up proactive monitoring solutions to detect, analyze, and resolve issues in real time, ensuring system reliability.",
            "Develop a comprehensive disaster recovery strategy to minimize downtime, protect against data loss, and ensure business continuity.",
          ],
        },
        {
          offerName: "Hybrid cloud and on-premise integrations",
          details: [
            "Integrate cloud services with your existing on-premise infrastructure for a seamless hybrid cloud experience.",
            "Ensure compatibility, smooth data flow, and efficient communication between on-premise and cloud environments.",
          ],
        },
        {
          offerName: "Cost-effective cloud resource management",
          details: [
            "Optimize your cloud resources to ensure you get the best performance at the lowest possible cost.",
            "Utilize tools for serverless computing and auto-scaling to align cloud resource usage with actual demand, minimizing waste.",
            "Monitor and manage cloud spending with detailed insights to maximize ROI.",
          ],
        },
      ],
    },
    whyChooseSonomics: {
      sectionTitle: "Why choose Sonomics for cloud integration",
      items: [
        {
          title: "End-to-end cloud expertise",
          description:
            "From strategy and planning to deployment and optimization, we handle every aspect of cloud integration.",
          image: "cloud_item1_1x",
          retinaImage: "cloud_item1_2x",
        },
        {
          title: "Tailored solutions",
          description:
            "We customize cloud architectures to align with your business goals, ensuring maximum performance and efficiency.",
          image: "cloud_item2_1x",
          retinaImage: "cloud_item2_2x",
        },
        {
          title: "Security-centric approach",
          description:
            "Our focus on cloud security ensures your data and systems remain protected at all times.",
          image: "cloud_item3_1x",
          retinaImage: "cloud_item3_2x",
        },
        {
          title: "Cost-effective solutions",
          description:
            "Through strategic resource management and optimization, we help you reduce cloud expenses while maximizing value.",
          image: "cloud_item4_1x",
          retinaImage: "cloud_item4_2x",
        },
        {
          title: "Reliable performance",
          description:
            "Our solutions guarantee high uptime, scalability, and availability, empowering you to meet growing demands.",
          image: "cloud_item5_1x",
          retinaImage: "cloud_item5_2x",
        },
      ],
    },
    caseStudyId: "fintech-combination",
    expertise: {
      text: "From migration and infrastructure setup to ongoing monitoring and cost optimization, we deliver cloud solutions that empower your business with a significant reduction in IT overhead",
      accentWords: ["From migration", "deliver cloud solutions"],
    },
    technologies: {
      sectionTitle: "Technologies powering our cloud solutions",
      description:
        "We leverage industry-leading tools and platforms to deliver secure, efficient, and future-ready cloud solutions:",
      cards: [
        {
          technologyTitle: "Cloud Platforms:",
          technologyProperties: [
            {
              name: "AWS (Amazon Web Services):",
              text: "scalable cloud solutions with services like EC2, S3, and AWS Lambda for serverless computing.",
            },
            {
              name: "Microsoft Azure:",
              text: "robust infrastructure for enterprise-grade applications, featuring tools like Azure Virtual Machines and Azure Kubernetes Service (AKS).",
            },
            {
              name: "Google Cloud Platform (GCP):",
              text: "high-performance solutions with services like Google Compute Engine and Google Kubernetes Engine (GKE).",
            },
          ],
        },
        {
          technologyTitle: "Monitoring and disaster recovery:",
          technologyProperties: [
            {
              name: "AWS cloudWatch:",
              text: "real-time monitoring and performance insights for AWS-based infrastructure.",
            },
            {
              name: "Azure monitor:",
              text: "comprehensive monitoring and diagnostics for Azure systems.",
            },
            {
              name: "Google stackdriver:",
              text: "unified logging, monitoring, and error reporting for Google Cloud environments.",
            },
          ],
        },
        {
          technologyTitle: "Cost optimization and resource management:",
          technologyProperties: [
            {
              name: "Serverless computing:",
              text: "utilize tools like AWS Lambda, Azure Functions, and Google Cloud Functions to reduce resource costs and improve efficiency.",
            },
            {
              name: "Container orchestration:",
              text: "implement Kubernetes and Docker to manage containerized applications with ease, enabling scalability and flexibility.",
            },
          ],
        },
      ],
    },
    approachAndAdvantages: {
      sectionTitle: "Key benefits of cloud integration",
      items: [
        {
          name: "Scalability and flexibility",
          description:
            "Scale resources up or down as your business needs evolve, ensuring maximum agility.",
          icon: "advantage-1",
        },
        {
          name: "Reduced IT costs",
          description:
            "Eliminate costly hardware investments and maintenance with a pay-as-you-go cloud model.",
          icon: "advantage-2",
        },
        {
          name: "Enhanced security",
          description:
            "Implement enterprise-grade security measures to protect against cyber threats and data breaches.",
          icon: "advantage-5",
        },
        {
          name: "High availability and uptime",
          description:
            "Benefit from cloud providers’ robust infrastructure to ensure uninterrupted business operations.",
          icon: "advantage-4",
        },
        {
          name: "Seamless collaboration",
          description:
            "Enable remote teams to collaborate effectively with secure access to cloud-based tools and applications.",
          icon: "advantage-3",
        },
      ],
    },
  },
];
