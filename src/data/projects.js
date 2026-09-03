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
    techs: ["Shopify", "Liquid", "JavaScript", "Tailwind CSS", "AlpineJS"],
    links: [
      { url: "https://oddpieces.com/", name: "Live site", type: "external" },
    ],
    caseStudy: {
      problem:
        "Odd Pieces needed a Shopify storefront that matched their story-driven brand—custom gifting flows, mobile-first UX, and performance that could scale as they expanded into 600+ retail locations.",
      approach: [
        "Built custom Liquid sections for product storytelling and gift messaging",
        "Implemented interactive JavaScript features for puzzle discovery and add-to-cart flows",
        "Optimized theme assets and lazy-loading for fast mobile checkout",
        "Collaborated on UX patterns that translate the in-store mystery experience online",
      ],
      results: [
        "600+ US retail stores carrying the brand",
        "280k+ puzzlers in the community",
        "Custom Shopify theme supporting complex product narratives",
        "Mobile-optimized checkout and gifting experience",
      ],
      gallery: ["/images/ShopifyGiftingPage.png"],
      role: "Front-End / Shopify Developer",
      duration: "Ongoing freelance",
    },
  },
  {
    id: "agent84",
    name: "Agent84",
    thumbnailUrl: "/images/agent84.png",
    thumbnailAlt: "Agent84 Shopify storefront — premium activewear and seasonal drops",
    description:
      "Premium activewear Shopify store with seasonal drops, shop-the-look bundles, fabric education, and multi-currency checkout for leggings, bras, and lifestyle apparel.",
    metric: "Seasonal drops · shop-the-look merchandising",
    featured: false,
    v3Only: true,
    category: "Shopify",
    techs: ["Shopify", "Liquid", "JavaScript", "HTML5", "CSS3", "Shopify 2.0", "Custom Theme"],
    links: [{ url: "https://agent84.com/", name: "Live site", type: "external" }],
    caseStudy: {
      problem:
        "Agent84 needed a Shopify storefront that could merchandize seasonal drops, shoppable lookbooks, and coordinated sets—without losing a premium, editorial feel from homepage through checkout.",
      approach: [
        "Built custom Liquid sections for campaign landings, two-column heroes, and drop-specific carousels",
        "Implemented shoppable galleries with product hotspots and a Complete the look bundle modal",
        "Designed collection merchandising with illustrated category tiles, filters, and bestseller carousels",
        "Polished cart UX with free-shipping progress, cross-sells, and shipping protection",
      ],
      results: [
        "Seasonal drop and campaign landing pages with shoppable photography",
        "Shop-the-look bundling and cart cross-sell merchandising",
        "Collection pages with illustrated category navigation",
        "Premium cart drawer with free-shipping threshold and protection",
      ],
      gallery: [
        {
          src: "/images/agent84-homepage.jpg",
          alt: "Agent84 homepage — two-column New Arrivals hero with shop CTA",
        },
        {
          src: "/images/agent84-matcha-latte.jpg",
          alt: "Matcha Latte campaign landing with lifestyle hero and Shop Now button",
        },
        {
          src: "/images/agent84-bestsellers.png",
          alt: "Bestsellers collection with illustrated category tiles for Leggings, Tops, Bottoms, and Accessories",
        },
        {
          src: "/images/agent84-bestsellers-carousel.jpg",
          alt: "Bestsellers carousel with image-masked heading and Hot now product badge",
        },
        {
          src: "/images/agent84-latest-obsessions.jpg",
          alt: "Latest Obsessions gallery with shoppable hotspot and Lift Short product popup",
        },
        {
          src: "/images/agent84-shoppable-gallery.jpg",
          alt: "Shoppable lookbook with Click hotspots, Get the Look buttons, and product quick view",
        },
        {
          src: "/images/agent84-complete-the-look.jpg",
          alt: "Complete the look bundle modal with size selectors and Add to cart",
        },
        {
          src: "/images/agent84-cart.jpg",
          alt: "Cart drawer with free shipping progress, pairs-great-with upsell, and checkout",
        },
      ],
      role: "Front-End / Shopify Developer",
      duration: "Freelance",
    },
  },
  {
    id: "ember-collective",
    name: "Ember Collective",
    thumbnailUrl: "/images/ember-collective.jpg",
    thumbnailAlt: "Ember Collective Shopify storefront — handmade porcelain and home goods",
    description:
      "Artisan home and tabletop e-commerce for handcrafted porcelain, textiles, and lighting—formerly The Bright Angle—with collection-driven navigation and trade program flows.",
    metric: "Handcrafted home goods · trade program",
    featured: false,
    v3Only: true,
    category: "Shopify",
    techs: ["Shopify", "Liquid", "JavaScript", "HTML5", "CSS3", "Shopify 2.0", "Custom Theme"],
    links: [{ url: "https://embercollective.com/", name: "Live site", type: "external" }],
  },
  {
    id: "blossomdale",
    name: "Blossomdale",
    thumbnailUrl: "/images/blossomdale.png",
    thumbnailAlt: "Blossomdale Shopify storefront — plant nursery and garden e-commerce",
    description:
      "Plant nursery Shopify store with growing-zone personalization, seasonal shipping, and a broad catalog spanning edibles, houseplants, landscape plants, seeds, and farm-grown honey.",
    metric: "Growing-zone personalization · seasonal shipping",
    featured: false,
    v3Only: true,
    category: "Shopify",
    techs: ["Shopify", "Liquid", "JavaScript", "HTML5", "CSS3", "Shopify 2.0", "Custom Theme"],
    links: [{ url: "https://blossomdale.com/", name: "Live site", type: "external" }],
  },
  {
    id: "skivys",
    name: "SKiVYS Femme",
    thumbnailUrl: "/images/skivys.jpg",
    thumbnailAlt: "SKiVYS Femme Shopify storefront — lounge and sleepwear e-commerce",
    description:
      "Feminine lounge and sleepwear Shopify brand featuring built-in Femme Fit support, collection-based merchandising, pre-order flows, and size-inclusive goddess gowns and slip dresses.",
    metric: "Built-in Femme Fit · pre-order flows",
    featured: false,
    v3Only: true,
    category: "Shopify",
    techs: ["Shopify", "Liquid", "JavaScript", "HTML5", "CSS3", "Shopify 2.0", "Custom Theme"],
    links: [{ url: "https://skivys.com/", name: "Live site", type: "external" }],
  },
  {
    id: "caredocs",
    name: "CareDocs System",
    thumbnailUrl: "/images/CareDocs.png",
    thumbnailAlt: "CareDocs login — facility administration and care management platform",
    description:
      "All-in-one facility operations, staff management, and billing system for healthcare operations—web and mobile with real-time data sync.",
    metric: "Cross-platform healthcare ops",
    featured: true,
    category: "React",
    techs: [
      "React",
      "React Native",
      "TypeScript",
      "Next.js",
      "TanStack Query",
      "Zustand",
      "Expo",
      "NativeWind",
    ],
    links: [],
    caseStudy: {
      problem:
        "Healthcare facilities needed a unified platform to manage staff scheduling, facility operations, and billing—replacing fragmented tools with one reliable system across web and mobile.",
      approach: [
        "Architected a React / Next.js web app with React Native mobile clients via Expo",
        "Implemented TanStack Query and Zustand for predictable server state and offline-friendly UX",
        "Built role-based dashboards for operations, staff, and billing workflows",
        "Integrated REST APIs for third-party healthcare and billing systems",
      ],
      results: [
        "Unified facility ops, staff management, and billing in one platform",
        "Cross-platform delivery with shared TypeScript business logic",
        "Real-time data sync between web and mobile clients",
        "Reduced manual handoffs between operations and finance teams",
      ],
      gallery: ["/images/CareDocs.png"],
      role: "Full-Stack Developer",
      duration: "Multi-month engagement",
    },
  },
  {
    id: "thehopehouse-admin",
    name: "TheHopeHouse Admin",
    thumbnailUrl: "/images/TheHopeHouse.png",
    thumbnailAlt: "TheHopeHouse login — finance dashboard and user management platform",
    description:
      "Centralized finance dashboard and user management system with Laravel backend, Dockerized deployment, and Redis caching.",
    metric: "Finance & user management hub",
    featured: true,
    category: "Full-stack",
    techs: ["React", "Next.js", "TypeScript", "Laravel", "MariaDB", "Docker", "Redis"],
    links: [],
    caseStudy: {
      problem:
        "TheHopeHouse required a secure admin hub to centralize financial reporting and user management—consolidating scattered spreadsheets and legacy tools into one auditable system.",
      approach: [
        "Built a Next.js admin dashboard with TypeScript for type-safe finance views",
        "Developed Laravel API endpoints for user management, reporting, and permissions",
        "Dockerized the stack for consistent staging and production deployments",
        "Added Redis caching for frequently accessed dashboard aggregates",
      ],
      results: [
        "Single source of truth for finance and user administration",
        "Role-based access control for sensitive financial data",
        "Faster dashboard loads via Redis-backed caching",
        "Reliable Docker-based deployment pipeline",
      ],
      gallery: ["/images/TheHopeHouse.png"],
      role: "Full-Stack Developer",
      duration: "Multi-month engagement",
    },
  },
  {
    id: "timeoff-management",
    name: "TimeOff Management",
    thumbnailUrl: "/images/timeoff.png",
    thumbnailAlt:
      "timeoff.hr dashboard overview — leave balances, monthly calendar, and recent approved requests",
    description:
      "Multi-tenant leave management: a company signs itself up, people request and approve leave, remaining days stay live, and one company cannot see another’s data.",
    metric: "Multi-tenant PTO · live balances · RLS",
    featured: true,
    category: "Full-stack",
    techs: [
      "Next.js",
      "NextAuth.js",
      "React",
      "TailwindCSS",
      "shadcn/ui",
      "TanStack Query",
      "Supabase",
      "PostgreSQL",
    ],
    links: [
      {
        url: "https://timeoff-delta.vercel.app/auth/signin",
        name: "Live site",
        type: "external",
      },
      { url: "https://github.com/Kayl06/timeoff", name: "GitHub", type: "github" },
    ],
    caseStudy: {
      problem:
        "Teams needed a shared PTO system that could serve multiple companies without leaking data—spreadsheets and single-tenant tools did not scale.",
      approach: [
        "Built a Next.js 14 App Router app in a Turborepo with shadcn/ui and Tailwind for calendars, requests, and balances",
        "Used NextAuth credentials (optional Google) for login; tenant APIs mint a short-lived JWT scoped to company_id",
        "Modeled multi-tenant data in Supabase Postgres with Row Level Security so one company cannot see another’s records",
        "Shipped request/approve flows, live remaining-day balances, a team calendar, and email invites",
      ],
      results: [
        "Company self-signup with isolated tenant data",
        "Leave request and approval flows with live remaining balances",
        "Personal and team calendar views of who is out and when",
        "Invite-by-email onboarding; deployed on Vercel + Supabase",
      ],
      gallery: [
        {
          src: "/images/timeoff.png",
          alt: "Dashboard overview with leave balances, September calendar, and recent requests",
        },
        {
          src: "/images/timeoff-requests.png",
          alt: "Requests table with vacation and sick leave rows, status filters, and export",
        },
        {
          src: "/images/timeoff-calendar.png",
          alt: "Leave calendar month view with color-coded sick and vacation bars",
        },
        {
          src: "/images/timeoff-submit.png",
          alt: "Submit leave request modal with leave type, dates, half-day toggle, and reason",
        },
        {
          src: "/images/timeoff-invite.png",
          alt: "Invite teammates modal for adding coworkers by work email",
        },
      ],
      role: "Full-Stack Developer",
      duration: "Personal / open-source",
    },
  },
  {
    id: "recovery-calculators",
    name: "Recovery Calculators",
    thumbnailUrl: "/images/alcohol-withdrawal-calc.png",
    thumbnailAlt: "Recovery Calculators — alcohol withdrawal severity screening tool",
    description:
      "Resource for the addiction recovery community featuring the PAWSS scale for complicated alcohol withdrawal screening, plus education on medical calculators and recovery terminology.",
    metric: "Clinical PAWSS screening tool",
    featured: false,
    category: "React",
    techs: ["Next.js", "React", "TailwindCSS", "WordPress", "JavaScript"],
    links: [
      { url: "https://alcoholwithdrawalcalc.com/", name: "Live site", type: "external" },
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
      { url: "https://figma-to-react-murex.vercel.app/", name: "Live site", type: "external" },
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
      { url: "https://only-sweater.vercel.app/", name: "Live site", type: "external" },
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
        name: "Live site",
        type: "external",
      },
    ],
  },
];

export function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id) ?? null;
}

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
    description:
      "Multi-tenant leave management: companies self-signup, request and approve leave, and keep remaining days live—with isolated tenant data.",
  },
  {
    name: "Recovery Calculators",
    description:
      "Addiction recovery resource featuring the PAWSS alcohol withdrawal severity scale.",
  },
];
