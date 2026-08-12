import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiFacebook,
} from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import BotCornerLinks from "@/components/BotCornerLinks";
import Works from "@/components/Works";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import SkillsSection from "@/components/SkillsSection";
import AboutFlipCard from "@/components/AboutFlipCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SiteMeta from "@/components/SiteMeta";
import { SOCIAL_LINKS, SITE } from "@/data/site";
import useReducedMotion from "@/hooks/useReducedMotion";
import {
  defaultViewport,
  getHeroAnimate,
  getHeroInitial,
  getHeroTransition,
  getMotionVariant,
} from "@/lib/motion";

const ICON_MAP = {
  LinkedIn: FiLinkedin,
  GitHub: FiGithub,
  Instagram: FiInstagram,
  Twitter: FiTwitter,
  Facebook: FiFacebook,
};

const SECTION_CLASS = "py-20 md:py-28 max-w-[1000px] mx-auto w-full";

export default function Home() {
  const reducedMotion = useReducedMotion();
  const sectionVariant = getMotionVariant(reducedMotion);

  const renderedSocialLinks = SOCIAL_LINKS.map((link) => {
    const Icon = ICON_MAP[link.name];
    return (
      <li key={link.name}>
        <Link
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="hover:text-[#fafafa] flex items-center p-[10px] transition ease-in-out delay-100 hover:-translate-y-1 motion-reduce:transition motion-reduce:hover:transform"
        >
          <Icon className="text-[24px]" />
        </Link>
      </li>
    );
  });

  return (
    <>
      <SiteMeta />
      <main
        id="main-content"
        className="relative flex min-h-screen flex-col items-center justify-between pb-10 __main"
      >
        <Header />

        <BotCornerLinks renderedSocialLinks={renderedSocialLinks} email={SITE.email} />

        <div className="__main_section text-md relative flex flex-col text-gray-400 max-w-[1600px] w-full mx-auto px-6 sm:px-[50px] md:px-[100px] lg:px-[150px]">
          {/* Hero */}
          <section className={`${SECTION_CLASS} min-h-[85vh] flex flex-col justify-center gap-10 __hero_section`}>
            <div className="__greetings">
              <motion.p
                initial={getHeroInitial(reducedMotion)}
                animate={getHeroAnimate(reducedMotion)}
                transition={getHeroTransition(reducedMotion, 0.1)}
                className="text-[15px] text-cyan-400/90 font-mono mb-4"
              >
                {SITE.title}
              </motion.p>
              <motion.div
                initial={getHeroInitial(reducedMotion)}
                animate={getHeroAnimate(reducedMotion)}
                transition={getHeroTransition(reducedMotion, 0.2)}
              >
                <p className="text-[15px] text-white font-mono mb-6">
                  Hi, I&apos;m Fedimar Kayl 👋
                </p>
                <h1 className="font-bold text-start leading-none md:leading-[4.5rem] mb-6 __big_heading text-[#e9e9e9]">
                  I build fast storefronts and product UIs that convert.
                </h1>
              </motion.div>
              <motion.p
                initial={getHeroInitial(reducedMotion)}
                animate={getHeroAnimate(reducedMotion)}
                transition={getHeroTransition(reducedMotion, 0.35)}
                className="lg:max-w-[540px] leading-relaxed"
              >
                Front-end developer specializing in React, Next.js, Shopify, and API-driven
                experiences—for startups, agencies, and e-commerce brands. Available for full-time
                roles and selective freelance projects.
              </motion.p>
            </div>
            <motion.div
              initial={getHeroInitial(reducedMotion, false)}
              animate={getHeroAnimate(reducedMotion)}
              transition={getHeroTransition(reducedMotion, 0.5)}
              className="flex flex-wrap gap-3 items-center"
            >
              <a
                href="#work"
                className="btn-primary border uppercase rounded-full shadow__btn font-semibold border-cyan-400/40 hover:border-cyan-400 hover:text-white py-3 px-8 text-[13px] text-cyan-400"
              >
                View my work
              </a>
              <a
                href={SITE.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="border uppercase rounded-full shadow__btn font-semibold border-gray-300 hover:border-white hover:text-white py-3 px-8 text-[13px]"
              >
                Download resume
              </a>
              <a
                href="#contact"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors py-3 px-2"
              >
                Hire me →
              </a>
            </motion.div>
          </section>

          {/* Work — moved up */}
          <motion.section
            id="work"
            className={SECTION_CLASS}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            variants={sectionVariant}
          >
            <h2 className="__numbered_heading flex items-center font-bold text-white after:ml-[10px] after:w-[200px] after:bg-[#9898989d] after:h-[1px]">
              Selected Work
            </h2>
            <Works />
          </motion.section>

          {/* About */}
          <motion.section
            id="about"
            className={SECTION_CLASS}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            variants={sectionVariant}
          >
            <h2 className="__numbered_heading flex items-center font-bold text-white after:ml-[10px] after:w-[200px] after:bg-[#9898989d] after:h-[1px]">
              About Me
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <p className="mb-4 leading-relaxed">
                  Full-stack developer (Front-end Solid) with{" "}
                  <strong className="text-white">6 years of experience</strong> shipping
                  enterprise web apps, Shopify storefronts, and cross-platform products. I care about
                  performance, accessibility, and clean handoffs with design and backend teams.
                </p>
                <p className="mb-6 leading-relaxed">
                  Currently building at{" "}
                  <a
                    href="https://chykalophia.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400/90 hover:text-cyan-400"
                  >
                    Chykalophia
                  </a>
                  . Here&apos;s what I work with most:
                </p>
                <SkillsSection />
              </div>
              <AboutFlipCard />
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section
            id="experience"
            className={`${SECTION_CLASS} flex flex-col`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            variants={sectionVariant}
          >
            <h2 className="__numbered_heading flex items-center font-bold text-white after:ml-[10px] after:w-[200px] after:bg-[#9898989d] after:h-[1px]">
              Where I&apos;ve Worked
            </h2>
            <ExperienceTimeline />
          </motion.section>

          {/* Contact */}
          <motion.section
            id="contact"
            className={`${SECTION_CLASS} pb-32`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            variants={sectionVariant}
          >
            <div className="__contact max-w-[720px] mx-auto text-center">
              <p className="text-cyan-400/90 font-mono text-sm mb-4">What&apos;s next?</p>
              <h2 className="font-black text-4xl md:text-5xl text-white mb-4">Get In Touch</h2>
              <p className="text-gray-400 mb-10 max-w-[480px] mx-auto">
                Have a project in mind or hiring for your team? Book a 30-minute call, or reach out
                directly.
              </p>
              <CalendlyEmbed />
              <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm font-mono text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  {SITE.email}
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  LinkedIn →
                </a>
              </div>
              <ul className="flex justify-center gap-2 mt-6 list-none">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = ICON_MAP[link.name];
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className="text-gray-400 hover:text-white p-2 transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.section>
        </div>

        <footer className="text-center flex flex-col gap-4 text-gray-300 py-8">
          <div className="__social_links_mob flex md:hidden justify-center">
            <ul className="flex gap-[15px] text-gray-400 list-none">{renderedSocialLinks}</ul>
          </div>
          <Link href="/" className="text-[14px] font-mono hover:text-cyan-400 transition-colors">
            Built by {SITE.name}
          </Link>
        </footer>
      </main>
    </>
  );
}
