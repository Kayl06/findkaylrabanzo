import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiPhone, FiGlobe, FiGithub } from "react-icons/fi";

const sectionVariant = {
  offscreen: { y: 40, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 },
  },
};

const experiences = [
  {
    company: "Chykalophia",
    role: "Senior Front-end Developer",
    period: "February 2024 – Present",
    bullets: [
      "Build frontend, style, and ship high-quality websites, mobile apps, and cross-platform digital experiences using JavaScript, ReactJS, React Native, CSS, TailwindCSS, ShadCN, and NativeWind.",
      "Consumed and integrated REST APIs and third-party APIs.",
      "Work alongside product & project managers, designers, and other engineers to transform creative concepts into refined digital experiences (agile 2-week cadence).",
      "Maintain existing web applications using Laravel, ReactJS, AlpineJS, Laravel Backpack, and Laravel Livewire.",
      "Consistently doing a weekly code review to improve code quality and best practices.",
      "Implement new features and improvements to the existing codebase.",
    ],
  },
  {
    company: "Playasia",
    role: "Full-Stack Web Developer",
    period: "2022 – April 2024",
    bullets: [
      "Maintain and enhance e-commerce website and admin system.",
      "Integrate new functions and features to meet client goals and enhance internal efficiency.",
      "Planned, designed, developed, and maintained front-end and back-end of e-commerce website and admin system.",
      "Understand client requirements and business needs; plan development of systems and applications accordingly.",
      "Provide technical support via calls or chats; offer assistance to the internal team as needed.",
      "Proactively identify issues and improvement opportunities; communicate findings through appropriate channels.",
      "Collaborate with product team or CEO to brainstorm and create new features.",
      "Discover and fix programming bugs to ensure smooth application functionality.",
      "Optimize applications for maximum speed, scalability, and performance.",
    ],
  },
  {
    company: "Freelancer (Part-Time)",
    role: "E-Commerce & Full-Stack Development",
    period: "2023 – Present",
    bullets: [
      "Customized Shopify storefronts through theme development and advanced Liquid templating.",
      "Developed a variety of projects tailored to client and business needs.",
      "Built frontend and backend solutions: websites, mobile apps, and cross-platform digital experiences.",
      "Utilized JavaScript, ReactJS, React Native, CSS, Shopify, TailwindCSS, ShadCN, Laravel, Docker, MySQL, MariaDB, PostgreSQL, NodeJS, ExpressJS.",
      "Integrated third-party APIs (e.g. KIPU, CollabMD, QuickBooks).",
      "Build and deploy applications using AWS tools and services.",
    ],
  },
  {
    company: "Dunbrae Subic Incorporated",
    role: "Full Stack Web Developer",
    period: "October 2020 – May 2022",
    bullets: [
      "Conducted meetings with president and managers to discuss project requirements and workflow.",
      "Implemented new functions, features, and development techniques to achieve client goals and enhance internal efficiencies.",
      "Collaborated with Team Lead and President to brainstorm and create client web application systems.",
      "Designed and implemented a custom Customer Satisfaction Survey with employee dashboards.",
      "Executed design for new websites or reconstruction of existing ones.",
      "Implemented third-party APIs (e.g. 7/11 API) to automate manual processes.",
      "Planned, designed, and developed in-house websites from layout to function.",
      "Identified and resolved programming bugs; protected operations by maintaining confidentiality of information.",
    ],
  },
  {
    company: "IDESS Interactive Technologies",
    role: "Junior Full Stack Web Developer",
    period: "2019 – 2020",
    bullets: [
      "Ensured brand consistency in online content, e-Learning materials, and computer-based testing tools.",
      "Collaborated with the team to analyze pre-project plans and assess technical requirements.",
      "Migrated and upgraded the old system to a new, modern design system.",
      "Analyzed, designed, and developed websites according to business/client needs.",
      "Implemented online synchronization between web applications and desktop applications.",
    ],
  },
];

const education = [
  { degree: "Bachelor of Science in Information Technology", school: "Gordon College", period: "2017–2019" },
  { degree: "Associate in Computer Technology", school: "Gordon College", period: "2015–2017" },
];

const certifications = [
  { name: "Modern React and Redux", issuer: "Udemy", year: "2023" },
];

const skillCategories = [
  {
    title: "Core",
    items: [
      "Front-end & Back-end Coding",
      "User Interface / User Experience",
      "Design Thinking",
      "Custom Databases",
      "Mobile App Development",
      "API Integration",
      "Deployment and DNS Management",
    ],
  },
  {
    title: "Programming Languages",
    items: ["JavaScript (ES6+)", "PHP", "TypeScript", "HTML5", "CSS3", "JSON", "OOP", "MVC", "SOLID"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "ReactJS",
      "React Native",
      "Redux",
      "RTK Query",
      "NextJS",
      "TanStack Query",
      "Node.js",
      "TailwindCSS",
      "ShadCN",
      "NativeWind",
      "AlpineJS",
      "Axios",
      "jQuery",
      "CodeIgniter 4",
      "Laravel",
      "Livewire",
      "Backpack",
      "Ionic 3/4",
      "Angular 8",
      "Bootstrap",
      "Shopify Liquid",
      "Stripe",
    ],
  },
  {
    title: "Databases & APIs",
    items: ["Web API / REST API", "MySQL", "MariaDB", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Visual Studio Code",
      "PHPStorm",
      "Postman",
      "Vercel",
      "WordPress",
      "Figma",
      "Git",
      "GitHub",
      "GitLab",
      "Plesk",
      "Docker",
    ],
  },
];

const projects = [
  {
    name: "TheHopeHouse Admin",
    description: "Centralized Finance Dashboard and User Management System.",
  },
  {
    name: "Oddpieces",
    description: "A vibrant online puzzle shop built on Shopify, offering uniquely crafted jigsaw puzzles.",
  },
  {
    name: "findkaylrabanzo.vercel.app",
    description: "Personal website built with NextJS and ReactJS.",
  },
  {
    name: "Themes Template",
    description: "HTML/CSS Theme Template built with React JS.",
  },
  {
    name: "CareDocs System",
    description: "All-in-one Facility Operations, Staff Management System, and Billing System.",
  },
  {
    name: "TimeOff Management",
    description: "Open Source Time Off Management System.",
  },
];

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume — Fedimar Kayl Rabanzo</title>
        <meta name="description" content="Resume and experience of Fedimar Kayl Rabanzo, Senior Front-end Developer." />
      </Head>
      <main className="relative flex min-h-screen flex-col items-center justify-between pb-10 __main" id="top">
        <Header />

        <section className="__main_section text-[15px] md:text-base relative flex flex-col justify-center text-gray-400 max-w-[1000px] w-full mx-auto px-5 sm:px-8 md:px-12 pt-24 pb-20">
          {/* Hero — card style, easy to scan */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 sm:p-8 mb-12"
          >
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">
                    Fedimar Kayl Rabanzo
                  </h1>
                  {/* Download Resume Button */}
                  <a
                    href="/files/CV - FEDIMAR KAYL RABANZO.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/50 font-medium py-3 px-6 text-[13px] uppercase tracking-wider transition-colors"
                  >
                    <FiDownload />  Download Resume
                  </a>
                </div>
                <p className="text-cyan-400/90 font-medium text-sm tracking-wide uppercase">
                  Senior Front-end Developer
                </p>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <a
                  href="mailto:frabanzoo@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <FiMail className="flex-shrink-0 text-gray-500" /> frabanzoo@gmail.com
                </a>
                <a
                  href="tel:+639760409290"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <FiPhone className="flex-shrink-0 text-gray-500" /> +63 976 040 9290
                </a>
                <a
                  href="https://findkaylrabanzo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <FiGlobe className="flex-shrink-0 text-gray-500" /> findkaylrabanzo.vercel.app
                </a>
                <a
                  href="https://github.com/Kayl06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <FiGithub className="flex-shrink-0 text-gray-500" /> github.com/Kayl06
                </a>
              </div>
            </div>
          </motion.div>

          {/* Summary — constrained line length for readability */}
          <motion.section
            variants={sectionVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12"
            id="about"
          >
            <h2 className="text-xs font-semibold text-cyan-400/90 uppercase tracking-widest mb-4">
              Summary
            </h2>
            <p className="text-gray-400 leading-[1.75] max-w-[65ch]">
              Skilled full-stack web developer with almost 6 years of experience designing, developing, and deploying enterprise-level applications. Proficient in multiple programming languages, software development methodologies, and database management systems. Strong problem-solving skills and ability to work effectively in a team-based or individual environment.
            </p>
          </motion.section>

          {/* Work Experience — cards, easy to scan */}
          <motion.section
            variants={sectionVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            className="mb-12"
            id="experience"
          >
            <h2 className="text-xs font-semibold text-cyan-400/90 uppercase tracking-widest mb-6">
              Work Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5 sm:p-6 hover:border-white/[0.1] transition-colors"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                      <p className="text-gray-500 text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <span className="text-xs text-gray-500 font-medium tabular-nums">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-400 text-[15px] leading-[1.65]">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2 items-center">
                        <span className="text-cyan-500/70 shrink-0">·</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>


          {/* Skills — pills for quick scan */}
          <motion.section
            variants={sectionVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-xs font-semibold text-cyan-400/90 uppercase tracking-widest mb-5">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((cat, i) => (
                <div key={i} className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-4">
                  <h3 className="text-white font-medium text-sm mb-3">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, j) => (
                      <span
                        key={j}
                        className="inline-block px-2.5 py-1 text-xs text-gray-400 bg-white/[0.04] border border-white/[0.06] rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Selected Projects */}
          <motion.section
            variants={sectionVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-xs font-semibold text-cyan-400/90 uppercase tracking-widest mb-5">
              Selected Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((proj, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-4 hover:border-white/[0.1] transition-colors"
                >
                  <h3 className="text-white font-medium text-[15px] mb-1">{proj.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-10 border-t border-white/[0.08]"
          >
            <a
              href="/files/CV - FEDIMAR KAYL RABANZO.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/50 font-medium py-3 px-6 text-[13px] uppercase tracking-wider transition-colors"
            >
              <FiDownload /> Download Resume
            </a>
            <Link
              href="/resume#top"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              Get in touch →
            </Link>
          </motion.div>
        </section>

        <footer className="text-center py-6 text-gray-500 text-sm">
          <Link href="/resume#top" className="hover:text-cyan-400 transition-colors">
            ← Back to home
          </Link>
        </footer>
      </main>
    </>
  );
}
