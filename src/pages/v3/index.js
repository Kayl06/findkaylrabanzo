import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiFacebook,
} from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/v3/Header";
import Works from "@/components/v3/Works";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import SkillsSection from "@/components/v3/SkillsSection";
import AboutFlipCard from "@/components/v3/AboutFlipCard";
import ExperienceTimeline from "@/components/v3/ExperienceTimeline";
import ServicesSection from "@/components/v3/ServicesSection";
import SocialProofSection from "@/components/v3/SocialProofSection";
import DockNav from "@/components/v3/DockNav";
import Button from "@/components/v3/Button";
import SiteMeta from "@/components/v3/SiteMeta";
import { SOCIAL_LINKS, SITE, TRUST_METRICS } from "@/data/site";
import { V3_BASE, V3_RESUME_PDF, V3_TITLE } from "@/lib/v3";
import V3Layout from "@/layouts/V3Layout";
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

const SECTION_CLASS = "py-16 md:py-24 max-w-[1000px] mx-auto w-full";

export default function HomeV3() {
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
          className="hover:text-white flex items-center p-[10px] transition ease-in-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-[var(--text-secondary)]"
        >
          <Icon className="text-[22px]" />
        </Link>
      </li>
    );
  });

  return (
    <V3Layout>
      <SiteMeta path={V3_BASE} />
      <main
        id="main-content"
        className="relative flex min-h-screen flex-col items-center justify-between pb-24 md:pb-28 __main"
      >
        <Header />
        <DockNav />

        <div className="__main_section text-md relative flex flex-col text-[var(--text-secondary)] max-w-[1100px] w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <section
            className={`${SECTION_CLASS} min-h-[85vh] flex flex-col justify-center gap-10 __hero_section`}
          >
            <div className="__greetings">
              <motion.p
                initial={getHeroInitial(reducedMotion)}
                animate={getHeroAnimate(reducedMotion)}
                transition={getHeroTransition(reducedMotion, 0.1)}
                className="text-[13px] text-accent font-mono mb-4 tracking-wide"
              >
                {V3_TITLE}
              </motion.p>
              <motion.div
                initial={getHeroInitial(reducedMotion)}
                animate={getHeroAnimate(reducedMotion)}
                transition={getHeroTransition(reducedMotion, 0.2)}
              >
                <p className="text-[15px] text-[var(--text-primary)] font-mono mb-6">
                  Hi, I&apos;m Fedimar Kayl
                </p>
                <h1 className="font-bold text-start leading-tight md:leading-[1.1] mb-6 __big_heading text-[var(--text-primary)]">
                  I build fast storefronts and product UIs that convert.
                </h1>
              </motion.div>
              <motion.p
                initial={getHeroInitial(reducedMotion)}
                animate={getHeroAnimate(reducedMotion)}
                transition={getHeroTransition(reducedMotion, 0.35)}
                className="lg:max-w-[540px] leading-relaxed text-[17px]"
              >
                Senior front-end developer specializing in Shopify, React, Next.js, and
                API-driven experiences—for startups, agencies, and e-commerce brands. Available for
                full-time roles and selective freelance projects.
              </motion.p>
            </div>

            <motion.div
              initial={getHeroInitial(reducedMotion, false)}
              animate={getHeroAnimate(reducedMotion)}
              transition={getHeroTransition(reducedMotion, 0.5)}
              className="flex flex-wrap gap-3 items-center"
            >
              <Button variant="primary" href="#work">
                View my work
              </Button>
              <Button variant="secondary" href={V3_RESUME_PDF}>
                Download resume
              </Button>
              <Button variant="ghost" href="#contact">
                Hire me →
              </Button>
            </motion.div>

            <motion.div
              initial={getHeroInitial(reducedMotion, false)}
              animate={getHeroAnimate(reducedMotion)}
              transition={getHeroTransition(reducedMotion, 0.65)}
              className="flex flex-wrap gap-x-6 gap-y-2 pt-2"
            >
              {TRUST_METRICS.map((m) => (
                <span key={m.label} className="text-xs font-mono text-[var(--text-muted)]">
                  <span className="text-[var(--text-primary)] font-semibold">{m.value}</span>{" "}
                  {m.label.toLowerCase()}
                </span>
              ))}
            </motion.div>
          </section>

          <motion.section
            id="work"
            className={SECTION_CLASS}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            variants={sectionVariant}
          >
            <h2 className="__numbered_heading flex items-center font-bold after:ml-[10px] after:w-[120px] md:after:w-[200px] after:bg-[var(--glass-border)] after:h-px">
              Selected Work
            </h2>
            <Works />
          </motion.section>

          <motion.section
            id="services"
            className={SECTION_CLASS}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            variants={sectionVariant}
          >
            <h2 className="__numbered_heading flex items-center font-bold after:ml-[10px] after:w-[120px] md:after:w-[200px] after:bg-[var(--glass-border)] after:h-px">
              What I Build
            </h2>
            <ServicesSection />
          </motion.section>

          <motion.section
            id="about"
            className={SECTION_CLASS}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            variants={sectionVariant}
          >
            <h2 className="__numbered_heading flex items-center font-bold after:ml-[10px] after:w-[120px] md:after:w-[200px] after:bg-[var(--glass-border)] after:h-px">
              About Me
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <p className="mb-4 leading-relaxed">
                  Senior front-end developer with{" "}
                  <strong className="text-[var(--text-primary)]">6+ years of experience</strong>{" "}
                  shipping enterprise web apps, Shopify storefronts, and cross-platform products. I
                  care about performance, accessibility, and clean handoffs with design and backend
                  teams.
                </p>
                <p className="mb-6 leading-relaxed">
                  Currently building at{" "}
                  <a
                    href="https://chykalophia.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-blue-400 transition-colors"
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

          <motion.section
            id="experience"
            className={`${SECTION_CLASS} flex flex-col`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            variants={sectionVariant}
          >
            <h2 className="__numbered_heading flex items-center font-bold after:ml-[10px] after:w-[120px] md:after:w-[200px] after:bg-[var(--glass-border)] after:h-px">
              Where I&apos;ve Worked
            </h2>
            <ExperienceTimeline />
          </motion.section>

          <motion.section
            id="proof"
            className={SECTION_CLASS}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            variants={sectionVariant}
          >
            <h2 className="__numbered_heading flex items-center font-bold after:ml-[10px] after:w-[120px] md:after:w-[200px] after:bg-[var(--glass-border)] after:h-px">
              Results & Proof
            </h2>
            <SocialProofSection />
          </motion.section>

          <motion.section
            id="contact"
            className={`${SECTION_CLASS} pb-8`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            variants={sectionVariant}
          >
            <div className="__contact max-w-[720px] mx-auto text-center glass-panel p-8 md:p-10">
              <p className="text-accent font-mono text-sm mb-4">What&apos;s next?</p>
              <h2 className="font-bold text-3xl md:text-4xl text-[var(--text-primary)] mb-4">
                Get In Touch
              </h2>
              <p className="text-[var(--text-secondary)] mb-10 max-w-[480px] mx-auto">
                Have a project in mind or hiring for your team? Book a 30-minute call, or reach out
                directly.
              </p>
              <CalendlyEmbed />
              <div className="mt-10 pt-8 border-t border-[var(--glass-border)] flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm font-mono text-[var(--text-muted)] hover:text-accent transition-colors"
                >
                  {SITE.email}
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-secondary)] hover:text-accent transition-colors"
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
                        className="text-[var(--text-muted)] hover:text-white p-2 transition-colors"
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

        <footer className="text-center flex flex-col gap-4 text-[var(--text-muted)] py-8">
          <div className="__social_links_mob flex md:hidden justify-center">
            <ul className="flex gap-[15px] list-none">{renderedSocialLinks}</ul>
          </div>
          <Link href={V3_BASE} className="text-[14px] font-mono hover:text-accent transition-colors">
            Built by {SITE.name}
          </Link>
        </footer>
      </main>
    </V3Layout>
  );
}
