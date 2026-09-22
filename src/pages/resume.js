import Link from "next/link";
import Header from "../components/Header";
import SiteMeta from "@/components/SiteMeta";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiMail,
  FiGlobe,
  FiGithub,
  FiMapPin,
  FiExternalLink,
} from "react-icons/fi";
import { SITE } from "@/data/site";
import {
  RESUME_SUMMARY,
  RESUME_HIGHLIGHTS,
  RESUME_EXPERTISE,
  RESUME_ADDITIONAL_SKILLS,
  RESUME_EXPERIENCE,
  RESUME_EDUCATION,
  RESUME_PROJECTS,
} from "@/data/resume";
import { defaultViewport } from "@/lib/motion";

const sectionVariant = {
  offscreen: { y: 24, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.15, duration: 0.6 },
  },
};

function SectionTitle({ children }) {
  return (
    <h2 className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
      <span className="h-px flex-1 max-w-[40px] bg-accent/40" aria-hidden />
      {children}
    </h2>
  );
}

export default function Resume() {
  const featuredProjects = RESUME_PROJECTS.filter((p) => p.featured);
  const otherProjects = RESUME_PROJECTS.filter((p) => !p.featured);

  return (
    <>
      <SiteMeta
        title={`${SITE.resumeHeadline} — ${SITE.name}`}
        description={SITE.description}
        path="/resume"
      />
      <main className="relative flex min-h-screen flex-col __main">
        <Header />

        {/* Sticky recruiter CTA */}
        <div className="sticky top-[var(--header-height)] z-10 border-b border-line/[0.06] bg-canvas/80 backdrop-blur-md">
          <div className="max-w-[1000px] mx-auto px-5 sm:px-8 md:px-12 py-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted hidden sm:block">
              <span className="text-ink font-medium">{SITE.name}</span>
              <span className="mx-2 text-muted/70">·</span>
              {SITE.resumeHeadline}
            </p>
            <a
              href={SITE.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas hover:bg-ink/90 font-semibold py-2.5 px-5 text-xs uppercase tracking-wider transition-colors w-full sm:w-auto justify-center"
            >
              <FiDownload className="w-4 h-4" /> Download PDF
            </a>
          </div>
        </div>

        <section className="max-w-[1000px] w-full mx-auto px-5 sm:px-8 md:px-12 pt-10 pb-20 text-muted">
          {/* Hero */}
          <motion.header
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
              {SITE.resumeHeadline}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-2">
              {SITE.name}
            </h1>
            <p className="flex items-center gap-2 text-muted text-sm mb-6">
              <FiMapPin className="shrink-0" aria-hidden />
              {SITE.location}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {RESUME_HIGHLIGHTS.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-accent/25 bg-accent/10 text-accent/90"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <FiMail className="text-muted" /> {SITE.email}
              </a>
              <a
                href={SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <FiGlobe className="text-muted" /> Portfolio
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <FiGithub className="text-muted" /> GitHub
              </a>
              <Link
                href="/#work"
                className="inline-flex items-center gap-1 hover:text-accent transition-colors"
              >
                View live work <FiExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.header>

          {/* Summary */}
          <motion.section
            variants={sectionVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            className="mb-14 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-accent/5 to-transparent p-6 sm:p-8"
          >
            <SectionTitle>Professional summary</SectionTitle>
            <p className="text-muted leading-[1.8] text-[17px] max-w-[70ch]">
              {RESUME_SUMMARY}
            </p>
          </motion.section>

          {/* Expertise — scannable for ATS & humans */}
          <motion.section
            variants={sectionVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            className="mb-14"
          >
            <SectionTitle>Area of expertise</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RESUME_EXPERTISE.map((group) => (
                <div
                  key={group.title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
                >
                  <h3 className="text-ink text-sm font-semibold mb-3">{group.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-md bg-line/[0.04] text-muted border border-line/[0.06]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section
            variants={sectionVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            className="mb-14"
            id="experience"
          >
            <SectionTitle>Professional experience</SectionTitle>
            <div className="space-y-5">
              {RESUME_EXPERIENCE.map((exp, i) => (
                <article
                  key={i}
                  className={`rounded-xl border p-5 sm:p-6 transition-colors ${
                    exp.current
                      ? "border-accent/35 bg-accent/[0.06] ring-1 ring-accent/10"
                      : "border-[var(--border)] bg-[var(--surface)] hover:border-line/10"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-ink font-semibold text-lg">{exp.role}</h3>
                        {exp.current && (
                          <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-accent text-canvas">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-muted text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <time className="text-xs text-muted font-mono tabular-nums shrink-0 bg-canvas/30 px-2.5 py-1 rounded-md border border-line/[0.06]">
                      {exp.period}
                    </time>
                  </div>
                  <ul className="space-y-2.5 list-none">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span className="text-accent mt-1.5 shrink-0 text-[8px]" aria-hidden>
                          ●
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </motion.section>

          {/* Featured projects */}
          <motion.section
            variants={sectionVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            className="mb-14"
          >
            <SectionTitle>Selected projects</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {featuredProjects.map((proj) => (
                <div
                  key={proj.name}
                  className="rounded-xl border border-accent/20 bg-[var(--surface)] p-5 flex flex-col"
                >
                  <h3 className="text-ink font-semibold mb-2">{proj.name}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.techs.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded bg-accent/10 text-accent/90 border border-accent/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {otherProjects.length > 0 && (
              <details className="group rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-muted hover:text-ink list-none flex items-center justify-between">
                  More projects
                  <span className="text-accent/80 group-open:rotate-180 transition-transform text-xs">
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-line/[0.06] pt-4">
                  {otherProjects.map((proj) => (
                    <div key={proj.name}>
                      <h3 className="text-ink text-sm font-medium mb-1">{proj.name}</h3>
                      <p className="text-xs text-muted mb-2">{proj.description}</p>
                      <p className="text-[11px] text-muted/70 leading-relaxed">
                        {proj.techs.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </details>
            )}
          </motion.section>

          {/* Additional skills */}
          <motion.section
            variants={sectionVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            className="mb-14"
          >
            <SectionTitle>Additional skills</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RESUME_ADDITIONAL_SKILLS.map((group) => (
                <div
                  key={group.title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
                >
                  <h3 className="text-muted text-xs uppercase tracking-wider mb-3">
                    {group.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            variants={sectionVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            className="mb-14"
          >
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-4">
              {RESUME_EDUCATION.map((edu, i) => (
                <div
                  key={i}
                  className="flex flex-wrap justify-between gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4"
                >
                  <div>
                    <h3 className="text-ink font-medium">{edu.degree}</h3>
                    <p className="text-sm text-muted">{edu.school}</p>
                    <p className="text-xs text-muted/70 mt-0.5">{edu.location}</p>
                  </div>
                  {edu.period && (
                    <span className="text-xs font-mono text-muted tabular-nums">{edu.period}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Footer CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-8 border-t border-line/[0.08]">
            <a
              href={SITE.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas hover:bg-ink/90 font-semibold py-3.5 px-8 text-sm uppercase tracking-wider transition-colors"
            >
              <FiDownload /> Download full PDF
            </a>
            <Link
              href="/#contact"
              className="text-muted hover:text-accent transition-colors text-sm font-medium"
            >
              Contact for opportunities →
            </Link>
            <Link href="/" className="text-muted hover:text-ink text-sm">
              ← Portfolio home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
