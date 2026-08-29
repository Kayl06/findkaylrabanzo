/** Resume page content — aligned with FRONTEND ENGINEER CV PDF */

export const RESUME_SUMMARY =
  "Skilled Senior Front-End Developer with 6+ years of experience building responsive, high-performance web and mobile apps using React, Next.js, and Tailwind CSS. Expert in converting Figma designs to pixel-perfect UIs, integrating REST APIs, and optimizing for speed and scalability in agile teams. Proven track record in e-commerce, dashboards, and cross-platform projects at Chykalophia, Playasia, and freelance clients.";

export const RESUME_HIGHLIGHTS = [
  "6+ years front-end & full-stack",
  "React · Next.js · TypeScript",
  "Figma → production UI",
  "E-commerce & Shopify",
  "REST API integration",
  "Agile / 2-week sprints",
];

export const RESUME_EXPERTISE = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Redux",
      "Zustand",
      "RTK Query",
      "TanStack Query",
      "Tailwind CSS",
      "ShadCN",
      "AlpineJS",
    ],
  },
  {
    title: "Tools & Platforms",
    items: ["Figma", "Vercel", "Git / GitHub", "VS Code", "Postman", "Docker"],
  },
  {
    title: "Other",
    items: ["REST API integration", "Responsive design", "Shopify Liquid", "Agile / Scrum"],
  },
];

export const RESUME_ADDITIONAL_SKILLS = [
  {
    title: "Front-end core",
    items: [
      "TypeScript",
      "React",
      "JavaScript (ES6+)",
      "AngularJS",
      "jQuery",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Testing & state",
    items: ["Playwright", "Jest", "Redux", "Zustand", "RTK Query", "TanStack Query", "Zod"],
  },
  {
    title: "Advanced UI & architecture",
    items: ["SaaS", "Microfrontends", "Drag-and-drop UIs", "Next.js", "Figma", "ShadCN"],
  },
  {
    title: "Backend & tools",
    items: [
      "Node.js",
      "Laravel",
      "AWS",
      "Docker",
      "REST API",
      "MySQL",
      "PostgreSQL",
      "Git",
      "Postman",
    ],
  },
];

export const RESUME_EXPERIENCE = [
  {
    company: "Chykalophia",
    role: "Senior Front-End Developer",
    period: "Feb 2024 – Present",
    current: true,
    bullets: [
      "Built high-quality, responsive websites and mobile apps for diverse clients using React, React Native, Expo, Zustand, and Tailwind CSS, following 2-week agile sprints.",
      "Converted Figma designs into fully responsive web pages and integrated REST / third-party APIs for seamless functionality.",
      "Maintained and enhanced apps with Laravel/React hybrids, AlpineJS, and Livewire, reducing bugs and improving performance.",
    ],
  },
  {
    company: "Freelancer",
    role: "Part-Time, E-Commerce & Full-Stack",
    period: "Jan 2023 – Present",
    current: false,
    bullets: [
      "Customized Shopify storefronts with Liquid templating and Tailwind CSS, optimizing UX and conversion for client businesses.",
      "Delivered front-end for mobile/web apps integrating APIs (KIPU, CollabMD, QuickBooks); deployed via AWS / Vercel.",
      "Transformed Figma prototypes into responsive React/Next.js sites across SaaS healthcare and operations projects.",
    ],
  },
  {
    company: "Playasia",
    role: "Full-Stack Web Developer",
    period: "May 2022 – April 2024",
    current: false,
    bullets: [
      "Planned, designed, and optimized front-end for e-commerce sites and admin panels—boosting speed, scalability, and user efficiency.",
      "Collaborated with product teams and CEOs to brainstorm and implement new UI features, fix bugs, and ship client-requested enhancements.",
      "Provided front-end technical support and proactively identified UX improvements via team channels.",
    ],
  },
  {
    company: "Dunbrae Subic Incorporated",
    role: "Full Stack Web Developer",
    period: "Oct 2020 – May 2022",
    current: false,
    bullets: [
      "Developed user-friendly front-end interfaces aligned with brand goals, migrating legacy systems to modern React designs.",
      "Implemented responsive web apps with API sync (e.g. 7-Eleven API), automating processes and enhancing accessibility.",
      "Collaborated on client web systems, resolving bugs and brainstorming features with leadership.",
      "Designed custom surveys/dashboards and integrated third-party APIs to streamline workflows.",
    ],
  },
  {
    company: "IDESS Interactive Technologies",
    role: "Junior Full Stack Web Developer",
    period: "July 2019 – Oct 2020",
    current: false,
    bullets: [
      "Analyzed requirements and built front-end for e-learning and websites, ensuring brand consistency and UI/UX excellence.",
      "Migrated legacy PHP and jQuery systems to modern design architectures with consistent UI/UX across online content.",
      "Developed synchronization modules between web and desktop applications, maintaining data integrity across platforms.",
    ],
  },
];

export const RESUME_EDUCATION = [
  {
    school: "Gordon College",
    degree: "Bachelor of Science in Information Technology",
    location: "Olongapo City, Philippines",
    period: "June 2015 – May 2019",
  },
  {
    school: "Gordon College",
    degree: "Associate in Computer Technology",
    location: "Olongapo City, Philippines",
    period: null,
  },
];

export const RESUME_PROJECTS = [
  {
    name: "CareDocs System",
    description:
      "All-in-one facility operations, staff management, and billing system.",
    techs: [
      "React",
      "React Native",
      "TypeScript",
      "Next.js",
      "NativeWind",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Expo",
    ],
    featured: true,
  },
  {
    name: "TheHopeHouse Admin",
    description: "Centralized finance dashboard and user management system.",
    techs: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "MariaDB",
      "Docker",
      "Redis",
    ],
    featured: true,
  },
  {
    name: "TimeOff Management",
    description:
      "Multi-tenant time-off platform for PTO requests, approvals, and leave balances.",
    techs: [
      "Next.js",
      "React",
      "TailwindCSS",
      "ShadCN",
      "TanStack Query",
      "Supabase",
      "PostgreSQL",
      "Multi-tenancy",
    ],
    featured: true,
  },
  {
    name: "Oddpieces",
    description:
      "A vibrant online puzzle shop built on Shopify, offering uniquely crafted jigsaw puzzles.",
    techs: ["Shopify", "Liquid", "CSS", "JavaScript", "Tailwind CSS", "AlpineJS"],
    featured: true,
  },
  {
    name: "findkaylrabanzo.vercel.app",
    description: "Personal portfolio built with Next.js and React.",
    techs: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Framer Motion"],
    featured: false,
  },
  {
    name: "Custom Template (React)",
    description: "HTML/CSS theme template built with React for design-to-code workflows.",
    techs: ["TypeScript", "React", "HTML", "CSS", "Next.js"],
    featured: false,
  },
];
