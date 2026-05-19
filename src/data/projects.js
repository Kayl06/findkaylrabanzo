export const PROJECT_FILTERS = ["All", "Shopify", "React", "Full-stack"];

export const PROJECTS = [
  {
    id: "odd-pieces",
    name: "Odd Pieces",
    thumbnailUrl: "/images/ShopifyGiftingPage.png",
    thumbnailAlt: "Odd Pieces Shopify storefront — mystery puzzle e-commerce",
    description:
      "E-commerce store for Odd Pieces mystery puzzles—story-driven jigsaw puzzles with hidden clues and secret endings. Built on Shopify with custom Liquid and JavaScript.",
    metric: "600+ US retail stores · 280k+ puzzlers",
    featured: true,
    category: "Shopify",
    techs: ["Shopify", "Liquid", "JavaScript", "HTML5", "CSS3"],
    links: [
      { url: "https://oddpieces.com/", name: "External", type: "external" },
    ],
  },
  {
    id: "recovery-calculators",
    name: "Recovery Calculators",
    thumbnailUrl: "/images/alcohol-withdrawal-calc.png",
    thumbnailAlt: "Recovery Calculators — alcohol withdrawal severity screening tool",
    description:
      "Resource for the addiction recovery community featuring the PAWSS scale for complicated alcohol withdrawal screening, plus education on medical calculators and recovery terminology.",
    metric: "Clinical PAWSS screening tool",
    featured: true,
    category: "React",
    techs: ["Next.js", "React", "TailwindCSS", "WordPress", "JavaScript"],
    links: [
      { url: "https://alcoholwithdrawalcalc.com/", name: "External", type: "external" },
    ],
  },
  {
    id: "pariserve",
    name: "PariServe Application",
    thumbnailUrl: "/images/pariserve.jpg",
    thumbnailAlt: "PariServe parish event scheduling mobile app",
    description:
      "Web and mobile event scheduler for St. Columban Parish built with Ionic—streamlines event planning and community engagement.",
    metric: "Parish community scheduling",
    featured: false,
    category: "Full-stack",
    techs: ["Ionic 3", "TypeScript", "PHP", "MySQL", "JavaScript"],
    links: [
      { url: "https://github.com/Kayl06/PariServe", name: "GitHub", type: "github" },
      {
        url: "https://drive.google.com/drive/folders/1ptN3ZT1l2IKfNGh7x28YB7ttMO6Vrzl0?usp=sharing",
        name: "External",
        type: "external",
      },
    ],
  },
  {
    id: "figma-to-react",
    name: "Figma to React Template",
    thumbnailUrl: "/images/my-work-2.png",
    thumbnailAlt: "React theme template converted from Figma designs",
    description:
      "Modern React and Tailwind theme template designed to streamline design-to-code workflows.",
    metric: null,
    featured: false,
    category: "React",
    techs: ["React", "TailwindCSS", "JavaScript", "HTML5", "CSS3"],
    links: [
      { url: "https://github.com/Kayl06/figma-to-react", name: "GitHub", type: "github" },
      { url: "https://figma-to-react-murex.vercel.app/", name: "External", type: "external" },
    ],
  },
  {
    id: "only-sweater",
    name: "Only Sweater",
    thumbnailUrl: "/images/my-work-3.png",
    thumbnailAlt: "Only Sweater e-commerce front-end built with React and TypeScript",
    description:
      "Sleek, responsive e-commerce front-end exploring product listing and cart UX with React and TypeScript.",
    metric: null,
    featured: false,
    category: "React",
    techs: ["React", "TypeScript", "TailwindCSS", "HTML5", "CSS3"],
    links: [
      { url: "https://github.com/Kayl06/only-sweater", name: "GitHub", type: "github" },
      { url: "https://only-sweater.vercel.app/", name: "External", type: "external" },
    ],
  },
  {
    id: "newshub",
    name: "NewsHub",
    thumbnailUrl: "/images/my-work-4.png",
    thumbnailAlt: "NewsHub news application with authentication",
    description:
      "News website with user login powered by React, Redux, and Laravel—with Dockerized local development.",
    metric: null,
    featured: false,
    category: "Full-stack",
    techs: ["React", "Laravel", "Redux", "MySQL", "Docker", "TailwindCSS"],
    links: [
      {
        url: "https://github.com/Kayl06/fedimarkaylrabanzo-react-news-app",
        name: "GitHub",
        type: "github",
      },
      {
        url: "https://fedimarkaylrabanzo-react-news-app.vercel.app",
        name: "External",
        type: "external",
      },
    ],
  },
];

export const RESUME_PROJECTS = [
  {
    name: "TheHopeHouse Admin",
    description: "Centralized Finance Dashboard and User Management System.",
  },
  {
    name: "Odd Pieces",
    description:
      "Shopify e-commerce store for mystery puzzles sold in 600+ US retail stores.",
  },
  {
    name: "findkaylrabanzo.vercel.app",
    description: "Personal website built with Next.js and React.",
  },
  {
    name: "Themes Template",
    description: "HTML/CSS theme template built with React.",
  },
  {
    name: "CareDocs System",
    description: "Facility operations, staff management, and billing system.",
  },
  {
    name: "TimeOff Management",
    description: "Open source time off management system.",
  },
  {
    name: "Recovery Calculators",
    description:
      "Addiction recovery resource featuring the PAWSS alcohol withdrawal severity scale.",
  },
];
