import Link from "next/link";
import Header from "@/components/v3/Header";
import DockNav from "@/components/v3/DockNav";
import SiteMeta from "@/components/v3/SiteMeta";
import Button from "@/components/v3/Button";
import Badge from "@/components/v3/Badge";
import GlassPanel from "@/components/v3/GlassPanel";
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
import { V3_BASE, v3Href, V3_RESUME_PDF } from "@/lib/v3";
import V3Layout from "@/layouts/V3Layout";
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

export default function ResumeV3() {
  const featuredProjects = RESUME_PROJECTS.filter((p) => p.featured);
  const otherProjects = RESUME_PROJECTS.filter((p) => !p.featured);

  return (
    <V3Layout>
      <SiteMeta
        title={`${SITE.resumeHeadline} — ${SITE.name}`}
        description={RESUME_SUMMARY.slice(0, 155) + "…"}
        path={`${V3_BASE}/resume`}
      />
      <main className="relative flex min-h-screen flex-col __main pb-24 md:pb-28">
        <Header />
        <DockNav />

        <div className="sticky top-[0] z-10 border-b border-[var(--glass-border)] bg-[var(--bg-base)]/80 backdrop-blur-md">
          <div className="max-w-[1000px] mx-auto px-5 sm:px-8 md:px-12 py-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-[var(--text-secondary)] hidden sm:block">
              <span className="text-[var(--text-primary)] font-medium">{SITE.name}</span>
              <span className="mx-2 text-[var(--text-muted)]">·</span>
              {SITE.resumeHeadline}
            </p>
            <Button
              variant="primary"
              href={V3_RESUME_PDF}
              className="!py-2.5 !px-5 !text-xs w-full sm:w-auto"
            >
              <FiDownload className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        <section className="max-w-[1000px] w-full mx-auto px-5 sm:px-8 md:px-12 pt-10 pb-20 text-[var(--text-secondary)]">
          <motion.header
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
              {SITE.resumeHeadline}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-2">
              {SITE.name}
            </h1>
            <p className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-6">
              <FiMapPin className="shrink-0" aria-hidden />
              {SITE.location}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {RESUME_HIGHLIGHTS.map((tag) => (
                <Badge key={tag} variant="accent">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <FiMail className="text-[var(--text-muted)]" /> {SITE.email}
              </a>
              <a
                href={SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <FiGlobe className="text-[var(--text-muted)]" /> Portfolio
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <FiGithub className="text-[var(--text-muted)]" /> GitHub
              </a>
              <Link
                href={v3Href("#work")}
                className="inline-flex items-center gap-1 hover:text-accent transition-colors"
              >
                View live work <FiExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.header>

          <motion.section
            variants={sectionVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            className="mb-14"
          >
            <GlassPanel className="p-6 sm:p-8">
              <SectionTitle>Professional summary</SectionTitle>
              <p className="text-[var(--text-secondary)] leading-[1.8] text-[17px] max-w-[70ch]">
                {RESUME_SUMMARY}
              </p>
            </GlassPanel>
          </motion.section>

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
                <GlassPanel key={group.title} className="p-4">
                  <h3 className="text-[var(--text-primary)] text-sm font-semibold mb-3">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </GlassPanel>
              ))}
            </div>
          </motion.section>

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
                <GlassPanel
                  key={i}
                  className={`p-5 sm:p-6 ${exp.current ? "ring-1 ring-accent/20 border-accent/30" : ""}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-[var(--text-primary)] font-semibold text-lg">
                          {exp.role}
                        </h3>
                        {exp.current && <Badge variant="accent">Current</Badge>}
                      </div>
                      <p className="text-[var(--text-muted)] text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <time className="text-xs text-[var(--text-muted)] font-mono tabular-nums shrink-0 bg-white/[0.04] px-2.5 py-1 rounded-md border border-[var(--glass-border)]">
                      {exp.period}
                    </time>
                  </div>
                  <ul className="space-y-2.5 list-none">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-[15px] leading-relaxed text-[var(--text-secondary)]"
                      >
                        <span className="text-accent mt-1.5 shrink-0 text-[8px]" aria-hidden>
                          ●
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </GlassPanel>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={sectionVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            className="mb-14"
          >
            <SectionTitle>Selected projects</SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
              {featuredProjects.map((proj) => (
                <GlassPanel key={proj.name} className="p-5 flex flex-col">
                  <h3 className="text-[var(--text-primary)] font-semibold mb-2">{proj.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.techs.map((t) => (
                      <Badge key={t} variant="accent">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </GlassPanel>
              ))}
            </div>
            {otherProjects.length > 0 && (
              <details className="group">
                <summary className="glass-panel cursor-pointer px-5 py-4 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] list-none flex items-center justify-between">
                  More projects
                  <span className="text-accent/80 group-open:rotate-180 transition-transform text-xs">
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {otherProjects.map((proj) => (
                    <div key={proj.name}>
                      <h3 className="text-[var(--text-primary)] text-sm font-medium mb-1">
                        {proj.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mb-2">{proj.description}</p>
                      <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                        {proj.techs.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </details>
            )}
          </motion.section>

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
                <GlassPanel key={group.title} className="p-4">
                  <h3 className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-3">
                    {group.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {group.items.join(" · ")}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </motion.section>

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
                <GlassPanel key={i} className="flex flex-wrap justify-between gap-2 px-5 py-4">
                  <div>
                    <h3 className="text-[var(--text-primary)] font-medium">{edu.degree}</h3>
                    <p className="text-sm text-[var(--text-muted)]">{edu.school}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">{edu.location}</p>
                  </div>
                  {edu.period && (
                    <span className="text-xs font-mono text-[var(--text-muted)] tabular-nums">
                      {edu.period}
                    </span>
                  )}
                </GlassPanel>
              ))}
            </div>
          </motion.section>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-8 border-t border-[var(--glass-border)]">
            <Button variant="primary" href={V3_RESUME_PDF}>
              <FiDownload className="mr-2" />
              Download full PDF
            </Button>
            <Button variant="ghost" href={v3Href("#contact")}>
              Contact for opportunities →
            </Button>
            <Link href={V3_BASE} className="text-[var(--text-muted)] hover:text-white text-sm">
              ← Portfolio home
            </Link>
          </div>
        </section>
      </main>
    </V3Layout>
  );
}
