export const PROJECT_FILTERS = ["All", "Shopify", "React", "Full-stack"];

export const PROJECTS = [
  {
    id: "timeoff-management",
    name: "TimeOff Management",
    thumbnailUrl: "/images/timeoff.png",
    thumbnailAlt:
      "TimeOff dashboard overview with leave balances, monthly calendar, and recent approved requests",
    tagline: "Multi-tenant leave management with live balances and isolated tenant data.",
    description:
      "A multi-tenant leave management platform that allows organizations to manage employees, leave requests, approvals, and balances while keeping tenant data isolated.",
    metric: "Multi-tenant SaaS · Next.js · TypeScript · React · Supabase",
    featured: true,
    priority: 1,
    category: "Full-stack",
    role: "End-to-end product owner & full-stack engineer",
    privateSource: false,
    techs: [
      "Next.js",
      "TypeScript",
      "React",
      "Supabase",
      "PostgreSQL",
      "NextAuth.js",
      "Tailwind CSS",
      "TanStack Query",
    ],
    keyWork: [
      "Owned architecture, database schema, authentication, UI, workflows, and deployment",
      "Implemented Google SSO and session-scoped tenant APIs",
      "Enforced tenant isolation with Supabase Row Level Security",
      "Shipped request/approve flows with live remaining-day balances",
    ],
    relatedIds: ["thehopehouse-admin", "caredocs", "odd-pieces"],
    links: [
      {
        url: "https://timeoff-delta.vercel.app/auth/signin",
        name: "Live site",
        type: "external",
      },
      { url: "https://github.com/Kayl06/timeoff", name: "GitHub", type: "github" },
    ],
    caseStudy: {
      overview:
        "A multi-tenant leave management platform that allows organizations to manage employees, leave requests, approvals, and balances while keeping tenant data isolated.",
      problem:
        "Teams needed a shared PTO system that could serve multiple companies without leaking data. Spreadsheets and single-tenant tools did not scale.",
      role: "Owned the project end-to-end: architecture, database, authentication, UI/UX, workflows, integrations, and deployment.",
      whatIBuilt: [
        "Planned the application architecture for a multi-tenant SaaS product",
        "Designed the PostgreSQL schema in Supabase",
        "Implemented authentication, including Google SSO",
        "Implemented Supabase Row Level Security so one company cannot see another’s data",
        "Built the UI/UX and leave request, approval, calendar, and invite workflows",
        "Handled integrations and Vercel deployment",
      ],
      architecture: {
        label:
          "Next.js application talking to Supabase Auth and PostgreSQL, with Row Level Security isolating multi-tenant application data.",
        steps: [
          "Next.js",
          "Supabase Auth / PostgreSQL",
          "Row Level Security",
          "Multi-tenant application data",
        ],
      },
      challenges: [
        "Keeping tenant data isolated without leaking company identity across auth and API paths",
        "Making remaining-day balances stay live after approvals, rejections, and cancellations",
        "Binding leave actions to the authenticated session instead of client-supplied identity",
      ],
      implementation: [
        "Built a Next.js app with calendars, requests, balances, and invite flows",
        "Used NextAuth credentials and optional Google login; tenant APIs mint a short-lived JWT scoped to company_id",
        "Modeled multi-tenant data in Supabase Postgres with Row Level Security",
        "Shipped request/approve flows, live remaining-day balances, a team calendar, and email invites",
      ],
      results: [
        "Company self-signup with isolated tenant data",
        "Leave request and approval flows with live remaining balances",
        "Personal and team calendar views of who is out and when",
        "Invite-by-email onboarding, deployed on Vercel and Supabase",
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
      duration: "Personal / open-source",
    },
  },
  {
    id: "odd-pieces",
    name: "Odd Pieces",
    thumbnailUrl: "/images/ShopifyGiftingPage.png",
    thumbnailAlt: "Odd Pieces Shopify storefront showing the mystery puzzle gifting page",
    tagline: "Custom Shopify storefront for story-driven mystery puzzles.",
    description:
      "Custom Shopify storefront for Odd Pieces mystery puzzles—story-driven jigsaw puzzles with hidden clues and secret endings. Built with Liquid, JavaScript, and reusable Online Store 2.0 sections.",
    metric: "600+ US retail stores · 280k+ puzzlers",
    featured: true,
    priority: 2,
    category: "Shopify",
    role: "Front-End / Shopify Developer",
    privateSource: true,
    techs: ["Shopify", "Liquid", "JavaScript", "Online Store 2.0", "Tailwind CSS", "AlpineJS"],
    keyWork: [
      "Built custom Liquid sections for product storytelling and gift messaging",
      "Implemented interactive JavaScript for puzzle discovery and add-to-cart",
      "Optimized theme assets and lazy-loading for mobile checkout",
    ],
    relatedIds: ["agent84", "blossomdale", "skivys"],
    links: [{ url: "https://oddpieces.com/", name: "Live site", type: "external" }],
    caseStudy: {
      overview:
        "E-commerce storefront for Odd Pieces, a mystery-puzzle brand with story-driven jigsaw puzzles, hidden clues, and secret endings. The live store supports a brand carried in 600+ US retail stores with a community of 280k+ puzzlers.",
      problem:
        "Odd Pieces needed a Shopify storefront that matched their story-driven brand—custom gifting flows, mobile-first UX, and a theme that could carry complex product narratives rather than a generic catalog layout.",
      role: "Front-End / Shopify Developer. Implemented custom theme work, gifting UX, and storefront interactions.",
      whatIBuilt: [
        "Custom Liquid sections for product storytelling and gift messaging",
        "Interactive JavaScript features for puzzle discovery and add-to-cart flows",
        "Theme asset and lazy-loading work for faster mobile checkout",
        "UX patterns that translate the in-store mystery experience online",
      ],
      challenges: [
        "Expressing a narrative, clue-driven product in a standard Shopify catalog",
        "Keeping gifting and product discovery usable on mobile",
        "Balancing custom Liquid/JavaScript with theme maintainability",
      ],
      implementation: [
        "Custom Shopify storefront development using Liquid, JavaScript, and reusable Online Store 2.0 sections",
        "Gift messaging and product storytelling sections in Liquid",
        "Interactive discovery and add-to-cart behavior in JavaScript",
        "Image and asset loading tuned for mobile checkout",
      ],
      results: [
        "Custom Shopify theme supporting complex product narratives",
        "Mobile-oriented checkout and gifting experience",
        "Storefront in production for a brand with 600+ US retail locations and 280k+ puzzlers",
      ],
      gallery: [
        {
          src: "/images/ShopifyGiftingPage.png",
          alt: "Odd Pieces gifting page on the Shopify storefront",
        },
      ],
      duration: "Ongoing freelance",
    },
  },
  {
    id: "thehopehouse-admin",
    name: "TheHopeHouse",
    thumbnailUrl: "/images/TheHopeHouse.png",
    thumbnailAlt: "TheHopeHouse login screen for the internal finance and operations platform",
    tagline: "Internal platform that pulls multiple systems into one admin dashboard.",
    description:
      "Internal admin platform that brought finance, operations, and user management data from multiple systems into a centralized dashboard—built with Next.js, TypeScript, and Laravel REST APIs.",
    metric: "Internal platform · Next.js · Laravel APIs",
    featured: true,
    priority: 3,
    category: "Full-stack",
    role: "Full-Stack Developer",
    privateSource: true,
    techs: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "RTK Query",
      "Laravel",
      "MariaDB",
      "Redis",
      "Docker",
      "AWS",
    ],
    keyWork: [
      "Built authenticated finance, operations, and user-management dashboards",
      "Integrated Laravel REST APIs with RTK Query on the frontend",
      "Connected Kipu, CollaborateMD, QuickBooks, and Microsoft SSO",
      "Added Redis-backed aggregates and Dockerized AWS deployment",
    ],
    relatedIds: ["caredocs", "timeoff-management", "odd-pieces"],
    links: [],
    caseStudy: {
      overview:
        "A centralized internal platform for finance, operations, and user management. The application aggregated data from multiple systems so staff could work from one dashboard instead of scattered tools.",
      problem:
        "Finance reporting, user administration, and operational data lived across separate systems. The team needed a single authenticated admin hub that could pull those sources together.",
      role: "Full-Stack Developer. Built the Next.js admin UI, consumed Laravel REST APIs, and worked across authentication, integrations, caching, and deployment.",
      whatIBuilt: [
        "Next.js admin dashboard with TypeScript and Tailwind CSS",
        "Authenticated, role-based finance, operations, and user-management views",
        "Frontend data layer with Redux Toolkit and RTK Query against Laravel REST APIs",
        "Integrations with Kipu, CollaborateMD, QuickBooks, and Microsoft SSO",
        "Redis caching for frequently accessed dashboard aggregates",
        "Dockerized deployment on AWS",
      ],
      architecture: {
        label:
          "Next.js admin UI querying Laravel REST APIs, with MariaDB persistence, Redis caching, and third-party integrations behind authentication.",
        steps: [
          "Next.js / React",
          "Laravel REST APIs",
          "MariaDB + Redis",
          "Kipu · CollaborateMD · QuickBooks · Microsoft SSO",
        ],
      },
      challenges: [
        "Bringing data from multiple vendor systems into one internal UI",
        "Keeping authenticated, role-based views consistent across finance and user admin",
        "Making dashboard aggregates fast enough to use day to day",
      ],
      implementation: [
        "Built type-safe finance and operations views in Next.js and TypeScript",
        "Used RTK Query to fetch and cache Laravel API data in the admin UI",
        "Wired Microsoft SSO plus vendor APIs (Kipu, CollaborateMD, QuickBooks)",
        "Dockerized the stack and used Redis for frequently accessed aggregates",
      ],
      results: [
        "Single internal hub for finance, operations, and user administration",
        "Role-based access for sensitive financial and operational data",
        "Faster dashboard loads via Redis-backed aggregates",
        "Repeatable Docker-based deployment on AWS",
      ],
      gallery: [
        {
          src: "/images/TheHopeHouse.png",
          alt: "TheHopeHouse admin login for the finance and user management platform",
        },
      ],
      duration: "Multi-month engagement",
    },
  },
  {
    id: "caredocs",
    name: "CareDocs",
    thumbnailUrl: "/images/CareDocs.png",
    thumbnailAlt: "CareDocs login for the facility administration and care management platform",
    tagline: "Web and mobile workflows for facility, staff, and care operations.",
    description:
      "Facility operations product with web and mobile clients—staff and facility management, onboarding, resident records, tasks, billing, calendars, and medication administration.",
    metric: "React · React Native · TypeScript",
    featured: true,
    priority: 4,
    category: "React",
    role: "Full-Stack Developer",
    privateSource: true,
    techs: [
      "React",
      "React Native",
      "TypeScript",
      "Next.js",
      "Expo",
      "TanStack Query",
      "Zustand",
      "RTK Query",
      "Laravel APIs",
    ],
    keyWork: [
      "Built web and React Native clients with shared TypeScript models",
      "Implemented staff, facility, billing, calendar, and medication workflows",
      "Used TanStack Query, RTK Query, and Zustand for server and client state",
      "Integrated Laravel REST APIs across web and mobile",
    ],
    relatedIds: ["thehopehouse-admin", "timeoff-management"],
    links: [],
    caseStudy: {
      overview:
        "CareDocs is a facility operations product covering staff and facility management, onboarding, resident records, tasks, billing, calendars, and medication administration—delivered on web and mobile.",
      problem:
        "Healthcare facilities needed one system for operations, staffing, and billing instead of disconnected tools on web and mobile.",
      role: "Full-Stack Developer. Implemented product workflows across React web and React Native mobile clients, with TypeScript and Laravel APIs.",
      whatIBuilt: [
        "Modular web workflows in React / Next.js and TypeScript",
        "React Native mobile clients via Expo",
        "Staff and facility management, onboarding, resident records, tasks, billing, calendars, and medication administration",
        "Server state and client state with TanStack Query, RTK Query, and Zustand",
        "Laravel API integration for web and mobile",
      ],
      challenges: [
        "Sharing TypeScript business logic across web and mobile without duplicating workflows",
        "Keeping forms, records, and billing states predictable across clients",
        "Handling loading, validation, and API errors in operational UIs",
      ],
      implementation: [
        "Architected a React / Next.js web app with React Native mobile clients via Expo",
        "Used TanStack Query, RTK Query, and Zustand for server and client state",
        "Built role-based dashboards for operations, staff, and billing workflows",
        "Integrated REST APIs for healthcare and billing operations",
      ],
      results: [
        "Facility ops, staff management, billing, calendars, and medication workflows in one product",
        "Cross-platform delivery with shared TypeScript models",
        "Web and mobile clients talking to the same Laravel APIs",
      ],
      gallery: [
        {
          src: "/images/CareDocs.png",
          alt: "CareDocs login for facility administration and care management",
        },
      ],
      duration: "Multi-month engagement",
    },
  },
  {
    id: "agent84",
    name: "Agent84",
    thumbnailUrl: "/images/agent84.png",
    thumbnailAlt: "Agent84 Shopify storefront for premium activewear and seasonal drops",
    tagline: "Premium activewear storefront with seasonal drops and shop-the-look merchandising.",
    description:
      "Custom Shopify storefront for premium activewear—seasonal drops, shoppable lookbooks, bundle merchandising, and cart UX built with Liquid and JavaScript.",
    metric: "Seasonal drops · shop-the-look merchandising",
    featured: false,
    priority: 5,
    v3Only: true,
    category: "Shopify",
    role: "Front-End / Shopify Developer",
    privateSource: true,
    techs: ["Shopify", "Liquid", "JavaScript", "Online Store 2.0", "Custom Theme"],
    keyWork: [
      "Custom Liquid sections for campaign landings and drop carousels",
      "Shoppable galleries and a Complete the look bundle modal",
      "Cart drawer with free-shipping progress and cross-sells",
    ],
    relatedIds: ["odd-pieces", "skivys", "ember-collective"],
    links: [{ url: "https://agent84.com/", name: "Live site", type: "external" }],
    caseStudy: {
      overview:
        "Premium activewear Shopify store with seasonal drops, shop-the-look bundles, fabric education, and multi-currency checkout for leggings, bras, and lifestyle apparel.",
      problem:
        "Agent84 needed a Shopify storefront that could merchandize seasonal drops, shoppable lookbooks, and coordinated sets without losing a premium, editorial feel from homepage through checkout.",
      role: "Front-End / Shopify Developer. Implemented custom theme sections, merchandising UI, and cart interactions.",
      whatIBuilt: [
        "Custom Liquid sections for campaign landings, two-column heroes, and drop-specific carousels",
        "Shoppable galleries with product hotspots and a Complete the look bundle modal",
        "Collection merchandising with illustrated category tiles, filters, and bestseller carousels",
        "Cart UX with free-shipping progress, cross-sells, and shipping protection",
      ],
      challenges: [
        "Merchandising seasonal drops without a cluttered catalog",
        "Making shop-the-look bundles understandable on mobile",
        "Keeping editorial photography shoppable without slowing the theme",
      ],
      implementation: [
        "Custom Shopify storefront development using Liquid, JavaScript, and reusable Online Store 2.0 sections",
        "Campaign landing and carousel sections in Liquid",
        "Bundle modal and cart drawer interactions in JavaScript",
        "Collection filters and illustrated category navigation",
      ],
      results: [
        "Seasonal drop and campaign landing pages with shoppable photography",
        "Shop-the-look bundling and cart cross-sell merchandising",
        "Collection pages with illustrated category navigation",
        "Cart drawer with free-shipping threshold and protection",
      ],
      gallery: [
        {
          src: "/images/agent84-homepage.jpg",
          alt: "Agent84 homepage with two-column New Arrivals hero and shop CTA",
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
      duration: "Freelance",
    },
  },
  {
    id: "ember-collective",
    name: "Ember Collective",
    thumbnailUrl: "/images/ember-collective.jpg",
    thumbnailAlt: "Ember Collective Shopify storefront for handmade porcelain and home goods",
    tagline: "Artisan home goods storefront with collection-driven navigation and trade flows.",
    description:
      "Shopify storefront for handcrafted porcelain, textiles, and lighting—formerly The Bright Angle—with collection-driven navigation and trade program flows.",
    metric: "Handcrafted home goods · trade program",
    featured: false,
    priority: 6,
    v3Only: true,
    category: "Shopify",
    role: "Front-End / Shopify Developer",
    privateSource: true,
    techs: ["Shopify", "Liquid", "JavaScript", "Online Store 2.0", "Custom Theme"],
    keyWork: [
      "Collection-driven navigation for artisan product lines",
      "Trade program storefront flows",
      "Custom Shopify theme work in Liquid and JavaScript",
    ],
    relatedIds: ["odd-pieces", "blossomdale", "agent84"],
    links: [{ url: "https://embercollective.com/", name: "Live site", type: "external" }],
    caseStudy: {
      overview:
        "Artisan home and tabletop e-commerce for handcrafted porcelain, textiles, and lighting—formerly The Bright Angle—with collection-driven navigation and trade program flows.",
      problem:
        "The brand needed a Shopify storefront that could present handcrafted collections clearly and support trade customers alongside retail shoppers.",
      role: "Front-End / Shopify Developer.",
      whatIBuilt: [
        "Collection-driven navigation for porcelain, textiles, and lighting",
        "Trade program storefront flows",
        "Custom theme development with Liquid and JavaScript",
      ],
      implementation: [
        "Custom Shopify storefront development using Liquid, JavaScript, and reusable Online Store 2.0 sections",
      ],
      results: ["Production Shopify storefront with collection navigation and trade program flows"],
      gallery: [
        {
          src: "/images/ember-collective.jpg",
          alt: "Ember Collective Shopify storefront for handmade porcelain and home goods",
        },
      ],
      duration: "Freelance",
    },
  },
  {
    id: "blossomdale",
    name: "Blossomdale",
    thumbnailUrl: "/images/blossomdale.png",
    thumbnailAlt: "Blossomdale Shopify storefront for plant nursery and garden e-commerce",
    tagline: "Plant nursery storefront with growing-zone personalization and seasonal shipping.",
    description:
      "Plant nursery Shopify store with growing-zone personalization, seasonal shipping, and a catalog spanning edibles, houseplants, landscape plants, seeds, and farm-grown honey.",
    metric: "Growing-zone personalization · seasonal shipping",
    featured: false,
    priority: 7,
    v3Only: true,
    category: "Shopify",
    role: "Front-End / Shopify Developer",
    privateSource: true,
    techs: ["Shopify", "Liquid", "JavaScript", "Online Store 2.0", "Custom Theme"],
    keyWork: [
      "Growing-zone personalization on the storefront",
      "Seasonal shipping behavior for live plants",
      "Catalog merchandising across plants, seeds, and grocery items",
    ],
    relatedIds: ["odd-pieces", "ember-collective", "skivys"],
    links: [{ url: "https://blossomdale.com/", name: "Live site", type: "external" }],
    caseStudy: {
      overview:
        "Plant nursery Shopify store with growing-zone personalization, seasonal shipping, and a broad catalog spanning edibles, houseplants, landscape plants, seeds, and farm-grown honey.",
      problem:
        "A live-plant catalog needs more than a generic product grid—shoppers need zone-aware merchandising and shipping that respects growing seasons.",
      role: "Front-End / Shopify Developer.",
      whatIBuilt: [
        "Growing-zone personalization",
        "Seasonal shipping storefront behavior",
        "Catalog merchandising across a wide plant and grocery assortment",
      ],
      implementation: [
        "Custom Shopify storefront development using Liquid, JavaScript, and reusable Online Store 2.0 sections",
      ],
      results: [
        "Production storefront with growing-zone personalization and seasonal shipping",
      ],
      gallery: [
        {
          src: "/images/blossomdale.png",
          alt: "Blossomdale Shopify storefront for plant nursery and garden e-commerce",
        },
      ],
      duration: "Freelance",
    },
  },
  {
    id: "skivys",
    name: "SKiVYS Femme",
    thumbnailUrl: "/images/skivys.jpg",
    thumbnailAlt: "SKiVYS Femme Shopify storefront for lounge and sleepwear",
    tagline: "Lounge and sleepwear storefront with collection merchandising and pre-order flows.",
    description:
      "Feminine lounge and sleepwear Shopify brand featuring built-in Femme Fit support, collection-based merchandising, pre-order flows, and size-inclusive goddess gowns and slip dresses.",
    metric: "Built-in Femme Fit · pre-order flows",
    featured: false,
    priority: 8,
    v3Only: true,
    category: "Shopify",
    role: "Front-End / Shopify Developer",
    privateSource: true,
    techs: ["Shopify", "Liquid", "JavaScript", "Online Store 2.0", "Custom Theme"],
    keyWork: [
      "Collection-based merchandising for lounge and sleepwear",
      "Pre-order storefront flows",
      "Custom theme work around Femme Fit product presentation",
    ],
    relatedIds: ["agent84", "odd-pieces", "ember-collective"],
    links: [{ url: "https://skivys.com/", name: "Live site", type: "external" }],
    caseStudy: {
      overview:
        "Feminine lounge and sleepwear Shopify brand featuring built-in Femme Fit support, collection-based merchandising, pre-order flows, and size-inclusive goddess gowns and slip dresses.",
      problem:
        "The brand needed collection merchandising and pre-order behavior that matched a fit-focused sleepwear line rather than a generic apparel theme.",
      role: "Front-End / Shopify Developer.",
      whatIBuilt: [
        "Collection-based merchandising",
        "Pre-order storefront flows",
        "Custom theme presentation for Femme Fit product lines",
      ],
      implementation: [
        "Custom Shopify storefront development using Liquid, JavaScript, and reusable Online Store 2.0 sections",
      ],
      results: ["Production storefront with collection merchandising and pre-order flows"],
      gallery: [
        {
          src: "/images/skivys.jpg",
          alt: "SKiVYS Femme Shopify storefront for lounge and sleepwear",
        },
      ],
      duration: "Freelance",
    },
  },
  {
    id: "recovery-calculators",
    name: "Recovery Calculators",
    thumbnailUrl: "/images/alcohol-withdrawal-calc.png",
    thumbnailAlt: "Recovery Calculators alcohol withdrawal severity screening tool",
    tagline: "Recovery education site with a PAWSS alcohol withdrawal screening tool.",
    description:
      "Resource for the addiction recovery community featuring the PAWSS scale for complicated alcohol withdrawal screening, plus education on medical calculators and recovery terminology.",
    metric: "Clinical PAWSS screening tool",
    featured: false,
    priority: 9,
    category: "React",
    role: "Frontend Developer",
    privateSource: true,
    techs: ["Next.js", "React", "Tailwind CSS", "WordPress", "JavaScript"],
    keyWork: [
      "Built the PAWSS screening interface",
      "Shipped educational content alongside the calculator",
    ],
    relatedIds: ["caredocs", "thehopehouse-admin"],
    links: [{ url: "https://alcoholwithdrawalcalc.com/", name: "Live site", type: "external" }],
  },
  {
    id: "pariserve",
    name: "PariServe Application",
    thumbnailUrl: "/images/pariserve.jpg",
    thumbnailAlt: "PariServe parish event scheduling mobile app",
    tagline: "Web and mobile event scheduler for parish community planning.",
    description:
      "Web and mobile event scheduler for St. Columban Parish built with Ionic—streamlines event planning and community engagement.",
    metric: "Parish community scheduling",
    featured: false,
    priority: 10,
    category: "Full-stack",
    role: "Full-Stack Developer",
    privateSource: false,
    techs: ["Ionic 3", "TypeScript", "PHP", "MySQL", "JavaScript"],
    keyWork: [
      "Built web and mobile event scheduling",
      "Connected the client to a PHP and MySQL backend",
    ],
    relatedIds: ["timeoff-management", "caredocs"],
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
    tagline: "React and Tailwind theme template for design-to-code workflows.",
    description:
      "Modern React and Tailwind theme template designed to streamline design-to-code workflows.",
    metric: null,
    featured: false,
    priority: 11,
    category: "React",
    role: "Frontend Developer",
    privateSource: false,
    techs: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    keyWork: ["Converted Figma layouts into reusable React components"],
    relatedIds: ["only-sweater", "odd-pieces"],
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
    tagline: "React and TypeScript storefront exploring product listing and cart UX.",
    description:
      "Sleek, responsive e-commerce front-end exploring product listing and cart UX with React and TypeScript.",
    metric: null,
    featured: false,
    priority: 12,
    category: "React",
    role: "Frontend Developer",
    privateSource: false,
    techs: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    keyWork: ["Built product listing and cart UI in React and TypeScript"],
    relatedIds: ["figma-to-react", "odd-pieces"],
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
    tagline: "News app with React, Redux, Laravel, and Dockerized local development.",
    description:
      "News website with user login powered by React, Redux, and Laravel—with Dockerized local development.",
    metric: null,
    featured: false,
    priority: 13,
    category: "Full-stack",
    role: "Full-Stack Developer",
    privateSource: false,
    techs: ["React", "Laravel", "Redux", "MySQL", "Docker", "Tailwind CSS"],
    keyWork: [
      "Implemented authentication and news UI in React",
      "Connected a Laravel API with Dockerized local development",
    ],
    relatedIds: ["thehopehouse-admin", "timeoff-management"],
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

export function sortProjects(projects) {
  return [...projects].sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
}

export function getRelatedProjects(project, limit = 3) {
  const ids = project.relatedIds ?? [];
  const related = ids.map(getProjectById).filter(Boolean);
  if (related.length >= limit) return related.slice(0, limit);
  const extras = sortProjects(PROJECTS).filter(
    (p) => p.id !== project.id && !ids.includes(p.id)
  );
  return [...related, ...extras].slice(0, limit);
}

export function projectCtaLabel(project) {
  return project.caseStudy ? "View Case Study" : "View Project";
}

export const RESUME_PROJECTS = [
  {
    name: "TheHopeHouse Admin",
    description: "Centralized Finance Dashboard and User Management System.",
  },
  {
    name: "Odd Pieces",
    description: "Shopify e-commerce store for mystery puzzles sold in 600+ US retail stores.",
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
