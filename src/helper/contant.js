import PLANET_CARD_HERO from "@/assets/images/Portfolio/Planet/PlanetCardHero.png";
import EDTECH_CARD_HERO from "@/assets/images/Portfolio/Nextgen/EdtechCardHero.png";
import FIANANCE_1 from "@/assets/images/Portfolio/finance1.png";
import HEALTHCARE from "@/assets/images/Portfolio/healthCare.png";
import ECOM1 from "@/assets/images/Portfolio/ecom1.png";
import ENTER from "@/assets/images/Portfolio/enter.png";
import DkarePrimaryImage from "@/assets/images/Portfolio/D-kare/D_HOME.webp";
import Dkare2 from "@/assets/images/Portfolio/D-kare/D2.png";
import N1 from "@/assets/images/Portfolio/Nextgen/n1.png";
import N2 from "@/assets/images/Portfolio/Nextgen/n2.png";
import N3 from "@/assets/images/Portfolio/Nextgen/n3.png";
import N4 from "@/assets/images/Portfolio/Nextgen/n4.png";
import N5 from "@/assets/images/Portfolio/Nextgen/n5.png";
import PLANETPRIMARY from "@/assets/images/Portfolio/Planet/P_Home.png";
import PLANET1 from "@/assets/images/Portfolio/Planet/P1.png";
import PLANET2 from "@/assets/images/Portfolio/Planet/P2.png";
import PLANET3 from "@/assets/images/Portfolio/Planet/P3.png";
import PLANET4 from "@/assets/images/Portfolio/Planet/P4.png";
import GROUP3 from "@/assets/images/Portfolio/Bossalabs/Group3.png";
import GROUP4 from "@/assets/images/Portfolio/Bossalabs/Group4.png";
import GROUP5 from "@/assets/images/Portfolio/Bossalabs/Group5.png";

import HOME_BANNER from "@/assets/images/banner-3-scaled.png";
import PHYSIO1 from "@/assets/images/Portfolio/physio-cafe/P1.png";
import PHYSIO2 from "@/assets/images/Portfolio/physio-cafe/P2.png";
import PHYSIO3 from "@/assets/images/Portfolio/physio-cafe/P3.png";
import PHYSIO4 from "@/assets/images/Portfolio/physio-cafe/P4.png";
import PHYSIO5 from "@/assets/images/Portfolio/physio-cafe/P5.png";

export const case_study_data = [
  {
    name: "Fitness",
    details: {
      img: PLANET_CARD_HERO,
      alt: "planet card hero",
      tag: "Fitness",
      title: "Elevent your fitness game-planet fitness",
      tech_tag: ["Android", "iOS", "Node", "React"],
      pathname: "planet",
      description:
        "Planet Fitness is the perfect fitness ally for your wellness journey. Track your heart rate, sleep patterns, and stress levels with ease. Get personalized workout plans tailored to your goals and preferences. Monitor your nutrition and calorie intake effortlessly",
    },
    isSelected: true,
  },

  {
    name: "Entertainment",
    details: {
      img: ENTER,
      alt: "enter",
      tag: "Entertainment",
      title: "A Smart Cutting board with live classes firmware",
      tech_tag: ["Android", "iOS", "Node", "React"],
      pathname: "bossalabs",
      description:
        "Planet Fitness is the perfect fitness ally for your wellness journey. Track your heart rate, sleep patterns, and stress levels with ease. Get personalized workout plans tailored to your goals and preferences. Monitor your nutrition and calorie intake effortlessly.",
    },
    isSelected: false,
  },
  {
    name: "Ed-tech",
    details: {
      img: EDTECH_CARD_HERO,
      alt: "edtech card hero",
      tag: "Ed-tech",
      title: "Level up your coding skills with nextgen tutorial",
      tech_tag: ["Android", "iOS", "Node", "React"],
      pathname: "nextgen",
      description:
        "Nextgen Tutorial is an innovative freemium educational website, dedicated to providing a comprehensive and interactive platform for learning coding and web development",
    },
    isSelected: false,
  },
  {
    name: "E-commerce",
    details: {
      img: ECOM1,
      alt: "ecom1",
      tag: "E-commerce",
      title: "Nourish your life naturally - D-kare",
      tech_tag: ["Android", "iOS", "Node", "React"],
      pathname: "d-kare",
      description:
        "D-Kare is a prominent herbal e-commerce online store, renowned for its diverse range of unadulterated juices, flavorful drinks, wellness products, beauty products, hair care, herbal oils, and other offerings",
    },
    isSelected: false,
  },
  // {
  //   name: "Finance",
  //   details: {
  //     img: FIANANCE_1,
  //     alt: "finance1",
  //     tag: "Finance",
  //     title: "Nourish your life naturally - D-kare",
  //     tech_tag: ["Android", "iOS", "Node", "React"],
  //     pathname: "d-kare",
  //     description:
  //       "D-Kare is a prominent herbal e-commerce online store, renowned for its diverse range of unadulterated juices, flavorful drinks, wellness products, beauty products, hair care, herbal oils, and other offerings",
  //   },
  //   isSelected: false,
  // },

  {
    name: "Healthcare & Wellness",
    details: {
      img: HEALTHCARE,
      alt: "healthcare",
      tag: "Healthcare & Wellness",
      title: "Nourish your life naturally - D-kare",
      tech_tag: ["Android", "iOS", "Node", "React"],
      pathname: "physiocafe",
      description:
        "D-Kare is a prominent herbal e-commerce online store, renowned for its diverse range of unadulterated juices, flavorful drinks, wellness products, beauty products, hair care, herbal oils, and other offerings",
    },
    isSelected: false,
  },
];

export const caseStudy_list = [
  {
    brand: "d-kare",

    hero: {
      title: "NOURISH YOUR LIFE, NATURALLY - D KARE",
      description:
        "D-Kare is a prominent herbal e-commerce online store, renowned for its diverse range of unadulterated juices, flavorful drinks, wellness products, beauty products, hair care, herbal oils, and other offerings.",
      industry_type: "Wellness",
      img: DkarePrimaryImage,
    },
    backStory: {
      id: 1,
      title: "Backstory",
      img: Dkare2,
      description: [
        "With a growing customer base and changing market trends, D-Kare embraced digital transformation to reach a wider audience and offer a convenient shopping experience.",
        "The software development project aimed to align their e-commerce platform with their mission of promoting balance and wellness through natural products. Agile methodologies and collaboration were key to success.",
      ],
    },
    challange: {
      id: 2,
      title: "Challange",
      img: Dkare2,
      description: [
        "The lack of online accessibility may have hindered D-Kare's ability to keep up with changing market trends and consumer preferences, potentially affecting their competitiveness in the industry.",
        "The absence of an online presence limited their reach, making it challenging to tap into a broader customer base beyond their local markets.",
      ],
    },
    solution: {
      id: 3,
      title: "Solution",
      img: Dkare2,
      description: [
        "To address the growing customer base and changing market trends, D-Kare adopted digital transformation, creating a user-friendly e-commerce platform.",
        "Agile methodologies and collaboration ensured successful development, aligning with their mission of promoting balance and wellness through natural products. The platform integrated with existing systems, prioritized data security, and embraced customer feedback for continuous improvement.",
      ],
    },
    result: {
      id: 4,
      title: "Result",
      img: Dkare2,
      description: [
        "35% increase in website traffic within the first three months of its launch.",
        "50% increase in new customer registrations compared to the same period in the previous year.",
        "60% increase in online sales, demonstrating the platform's effectiveness in converting website visitors into paying customers.",
        "30% increase in brand searches and mentions on social media",
        "As a result of the platform's success, D-Kare's overall revenue witnessed a significant surge of 45% in the first year of its implementation.",
      ],
    },
  },
  {
    brand: "nextgen",
    hero: {
      title: "LEVEL UP YOUR CODING SKILLS WITH NEXTGEN TUTORIAL!",
      description:
        "Nextgen Tutorial is an innovative freemium educational website, dedicated to providing a comprehensive and interactive platform for learning coding and web development.",
      industry_type: "Online Learning Platform",
      img: N1,
    },
    backStory: {
      id: 1,
      title: "Backstory",
      img: N2,
      description: [
        "Nextgen Tutorial was developed to address the growing demand for accessible and practical coding education. The goal was to create an innovative platform that caters to learners of all levels, from beginners to experts, and empowers them with the knowledge and skills needed in the dynamic world of web development.",
        "Nextgen Tutorial aims to democratize coding education and provide learners with a seamless and enriching learning experience in the field of web development.",
      ],
    },
    challange: {
      id: 2,
      title: "Challange",
      img: N3,
      description: [
        "Prevously Nextgen tutorial primarily operated as a traditional brick-and-mortar educational institute. Learners were limited to physical classrooms, and access to courses was restricted to the local area.",
        "The learning experience lacked flexibility, as fixed schedules and limited course offerings constrained learners' choices.",
      ],
    },
    solution: {
      id: 3,
      title: "Solution",
      img: N4,
      description: [
        "Nextgen Tutorial addressed the limitations of traditional education by implementing an innovative e-learning platform.",
        "Learners now have access to a flexible, global, and personalized learning experience, breaking free from the constraints of physical classrooms and fixed schedules.",
      ],
    },
    result: {
      id: 4,
      title: "Result",
      img: N5,
      description: [
        "42% increase in user engagement",
        "28% more time spending on an average on the platform.",
        "6% growth in its user base",
        "Reached over 50 countries, with a 67% increase in international learners",
      ],
    },
  },
  {
    brand: "planet",
    hero: {
      title: "ELEVATE YOUR FITNESS GAME - PLANET FITNESS",
      description:
        "Planet Fitness is the perfect fitness ally for your wellness journey. Track your heart rate, sleep patterns, and stress levels with ease. Get personalized workout plans tailored to your goals and preferences. Monitor your nutrition and calorie intake effortlessly.",
      industry_type: "Health & Fitness",
      img: PLANETPRIMARY,
    },
    homeBanner: {
      image: HOME_BANNER,
    },
    backStory: {
      id: 1,
      title: "Backstory",
      img: PLANET1,
      description: [
        "Creating Planet Fitness presented formidable hurdles, including integrating advanced biometric tracking, ensuring data privacy, personalizing workout plans, fostering user engagement, and constantly iterating based on user feedback.",
        "Yet, the team's unwavering dedication and shared commitment led to the successful launch of an app that revolutionized fitness and wellness.",
      ],
    },
    challange: {
      id: 2,
      title: "Challange",
      img: PLANET2,
      description: [
        "The user lacks real-time monitoring of their physical activity and health metrics, making it challenging to track progress and set achievable goals.",
        "Additionally, without access to personalized workout plans and community support, the user might struggle to stay motivated and maintain a consistent fitness regimen.",
      ],
    },
    solution: {
      id: 3,
      title: "Solution",
      img: PLANET3,
      description: [
        "Planet Fitness app addressed real-time monitoring limitations with advanced fitness tracking, wearable device integration. Users accessed accurate metrics, tracked progress, set goals, and made data-driven decisions.",
        "Seamless compatibility enhanced user experience, fostering motivation and commitment to health goals.",
      ],
    },
    result: {
      id: 4,
      title: "Result",
      img: PLANET4,
      description: [
        "13% decrease in resting heart rate",
        "22% improvement in sleep quality",
        "62% of app users reported achieving their fitness goals",
        "Users engaged in challenges and social interactions within the app, leading to a 40% increase in user retention over the past year.",
      ],
    },
  },
  {
    brand: "bossalabs",
    hero: {
      title: "ELEVATE YOUR FITNESS GAME - PLANET FITNESS",
      description:
        "Planet Fitness is the perfect fitness ally for your wellness journey. Track your heart rate, sleep patterns, and stress levels with ease. Get personalized workout plans tailored to your goals and preferences. Monitor your nutrition and calorie intake effortlessly.",
      industry_type: "Entertainment",
      img: GROUP3,
    },
    backStory: {
      id: 1,
      title: "Backstory",
      img: GROUP4,
      description: [
        "Creating Planet Fitness presented formidable hurdles, including integrating advanced biometric tracking, ensuring data privacy, personalizing workout plans, fostering user engagement, and constantly iterating based on user feedback.",
        "Yet, the team's unwavering dedication and shared commitment led to the successful launch of an app that revolutionized fitness and wellness.",
      ],
    },
    challange: {
      id: 2,
      title: "Challange",
      img: GROUP5,
      description: [
        "The user lacks real-time monitoring of their physical activity and health metrics, making it challenging to track progress and set achievable goals.",
        "Additionally, without access to personalized workout plans and community support, the user might struggle to stay motivated and maintain a consistent fitness regimen.",
      ],
    },
    solution: {
      id: 3,
      title: "Solution",
      img: GROUP3,
      description: [
        "Planet Fitness app addressed real-time monitoring limitations with advanced fitness tracking, wearable device integration. Users accessed accurate metrics, tracked progress, set goals, and made data-driven decisions.",
        "Seamless compatibility enhanced user experience, fostering motivation and commitment to health goals.",
      ],
    },
    result: {
      id: 4,
      title: "Result",
      img: GROUP4,
      description: [
        "13% decrease in resting heart rate",
        "22% improvement in sleep quality",
        "62% of app users reported achieving their fitness goals",
        "Users engaged in challenges and social interactions within the app, leading to a 40% increase in user retention over the past year.",
      ],
    },
  },
  {
    brand: "physiocafe",
    hero: {
      title: "NOURISH YOUR LIFE, NATURALLY - D KARE",
      description:
        "D-Kare is a prominent herbal e-commerce online store, renowned for its diverse range of unadulterated juices, flavorful drinks, wellness products, beauty products, hair care, herbal oils, and other offerings.",
      industry_type: "Wellness",
      img: PHYSIO5,
    },
    backStory: {
      id: 1,
      title: "Backstory",
      img: PHYSIO1,
      description: [
        "With a growing customer base and changing market trends, D-Kare embraced digital transformation to reach a wider audience and offer a convenient shopping experience.",
        "The software development project aimed to align their e-commerce platform with their mission of promoting balance and wellness through natural products. Agile methodologies and collaboration were key to success.",
      ],
    },
    challange: {
      id: 2,
      title: "Challange",
      img: PHYSIO2,
      description: [
        "The lack of online accessibility may have hindered D-Kare's ability to keep up with changing market trends and consumer preferences, potentially affecting their competitiveness in the industry.",
        "The absence of an online presence limited their reach, making it challenging to tap into a broader customer base beyond their local markets.",
      ],
    },
    solution: {
      id: 3,
      title: "Solution",
      img: PHYSIO3,
      description: [
        "To address the growing customer base and changing market trends, D-Kare adopted digital transformation, creating a user-friendly e-commerce platform.",
        "Agile methodologies and collaboration ensured successful development, aligning with their mission of promoting balance and wellness through natural products. The platform integrated with existing systems, prioritized data security, and embraced customer feedback for continuous improvement.",
      ],
    },
    result: {
      id: 4,
      title: "Result",
      img: PHYSIO4,
      description: [
        "35% increase in website traffic within the first three months of its launch.",
        "50% increase in new customer registrations compared to the same period in the previous year.",
        "60% increase in online sales, demonstrating the platform's effectiveness in converting website visitors into paying customers.",
        "30% increase in brand searches and mentions on social media",
        "As a result of the platform's success, D-Kare's overall revenue witnessed a significant surge of 45% in the first year of its implementation.",
      ],
    },
  },
];
