import { useEffect } from "react";
import { useRouter } from "next/router";
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
import SelectedExperience from "@/components/v3/SelectedExperience";
import AiSection from "@/components/v3/AiSection";
import DockNav from "@/components/v3/DockNav";
import Button from "@/components/v3/Button";
import SiteMeta from "@/components/v3/SiteMeta";
import { SOCIAL_LINKS, SITE } from "@/data/site";
import { getProjectById } from "@/data/projects";
import { V3_BASE, V3_RESUME_PDF, V3_TITLE, v3WorkHref } from "@/lib/v3";
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
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const sectionVariant = getMotionVariant(reducedMotion);

  useEffect(() => {
    if (!router.isReady) return;
    const projectId = router.query.project;
    if (typeof projectId === "string" && getProjectById(projectId)) {
      router.replace(v3WorkHref(projectId));
    }
  }, [router.isReady, router.query.project, router]);

  const renderedSocialLinks = SOCIAL_LINKS.map((link) => {
    const Icon = ICON_MAP[link.name];
    return (
      <li key={link.name}>
        <Link
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="hover:text-ink flex items-center p-[10px] transition ease-in-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-[var(--text-secondary)]"
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
                  I build fast, scalable storefronts and SaaS products.
                </h1>
              </motion.div>
              <motion.p
                initial={getHeroInitial(reducedMotion)}
                animate={getHeroAnimate(reducedMotion)}
                transition={getHeroTransition(reducedMotion, 0.35)}
                className="lg:max-w-[560px] leading-relaxed text-[17px]"
              >
                7+ years building production web applications, Shopify storefronts, SaaS
                platforms, and internal tools with React, Next.js, TypeScript, and modern APIs.
              </motion.p>
            </div>

            <motion.div
              initial={getHeroInitial(reducedMotion, false)}
              animate={getHeroAnimate(reducedMotion)}
              transition={getHeroTransition(reducedMotion, 0.5)}
              className="flex flex-wrap gap-3 items-center"
            >
              <Button variant="primary" href="#work">
                View My Work
              </Button>
              <Button variant="secondary" href={V3_RESUME_PDF}>
                Download CV
              </Button>
              <Button variant="ghost" href="#contact">
                Contact
              </Button>
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
            id="what-i-do"
            className={SECTION_CLASS}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            variants={sectionVariant}
          >
            <h2 className="__numbered_heading flex items-center font-bold after:ml-[10px] after:w-[120px] md:after:w-[200px] after:bg-[var(--glass-border)] after:h-px">
              What I Do
            </h2>
            <ServicesSection />
            <div className="mt-6">
              <AiSection />
            </div>
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
                  I&apos;m a{" "}
                  <strong className="text-[var(--text-primary)]">
                    Senior Frontend &amp; Shopify Developer
                  </strong>{" "}
                  with 7+ years of experience building production web applications, SaaS products,
                  and e-commerce experiences.
                </p>
                <p className="mb-4 leading-relaxed">
                  My strongest areas are React, Next.js, TypeScript, Shopify, and modern API-driven
                  applications. I also have backend experience with Laravel, Node.js, and SQL, so I
                  can work across the stack when the product needs it.
                </p>
                <p className="mb-6 leading-relaxed">
                  Recently I&apos;ve been shipping freelance work for e-commerce and SaaS clients,
                  after building production products at{" "}
                  <a
                    href="https://chykalophia.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-ink transition-colors"
                  >
                    Chykalophia
                  </a>
                  .
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
            <p className="mb-8 text-[15px] leading-relaxed max-w-[62ch]">
              <strong className="text-[var(--text-primary)]">7+ years</strong> of software
              development ·{" "}
              <strong className="text-[var(--text-primary)]">3+ years</strong> of Shopify
              development · production SaaS, e-commerce, and internal applications.
            </p>
            <ExperienceTimeline />
          </motion.section>

          <motion.section
            id="highlights"
            className={SECTION_CLASS}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            variants={sectionVariant}
          >
            <h2 className="__numbered_heading flex items-center font-bold after:ml-[10px] after:w-[120px] md:after:w-[200px] after:bg-[var(--glass-border)] after:h-px">
              Selected Experience
            </h2>
            <SelectedExperience />
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
              <p className="text-accent font-mono text-sm mb-4">Let&apos;s work together</p>
              <h2 className="font-bold text-3xl md:text-4xl text-[var(--text-primary)] mb-4">
                Open to opportunities
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 max-w-[480px] mx-auto">
                I&apos;m open to remote Frontend, Shopify, and Software Engineering opportunities.
              </p>
              <div className="flex flex-wrap gap-3 items-center justify-center mb-10">
                <Button variant="primary" href={V3_RESUME_PDF}>
                  Download CV
                </Button>
                <Button variant="secondary" href={SITE.linkedin}>
                  LinkedIn
                </Button>
                <Button variant="secondary" href={`mailto:${SITE.email}`}>
                  Email Me
                </Button>
              </div>
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
                        className="text-[var(--text-muted)] hover:text-ink p-2 transition-colors"
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
