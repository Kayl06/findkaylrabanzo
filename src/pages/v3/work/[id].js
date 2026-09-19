import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";
import Header from "@/components/v3/Header";
import DockNav from "@/components/v3/DockNav";
import SiteMeta from "@/components/v3/SiteMeta";
import Button from "@/components/v3/Button";
import Badge from "@/components/v3/Badge";
import ArchitectureFlow from "@/components/v3/ArchitectureFlow";
import V3Layout from "@/layouts/V3Layout";
import { PROJECTS, getProjectById, getRelatedProjects } from "@/data/projects";
import { SITE } from "@/data/site";
import { V3_BASE, v3WorkHref, V3_RESUME_PDF } from "@/lib/v3";

function normalizeGallery(project) {
  const raw = project?.caseStudy?.gallery;
  if (Array.isArray(raw) && raw.length > 0) {
    return raw.map((item, i) =>
      typeof item === "string"
        ? { src: item, alt: `${project.name} screenshot ${i + 1}` }
        : item
    );
  }
  return [{ src: project.thumbnailUrl, alt: project.thumbnailAlt }];
}

function Section({ title, children }) {
  if (!children) return null;
  return (
    <section className="space-y-3">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">{title}</h2>
      {children}
    </section>
  );
}

function BulletList({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="space-y-2 list-none">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[var(--text-secondary)] text-sm leading-relaxed">
          <span className="text-accent shrink-0 mt-1" aria-hidden>
            ▹
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProjectLink({ link }) {
  const Icon = link.type === "github" ? FiGithub : FiExternalLink;
  return (
    <Button variant="secondary" size="sm" href={link.url}>
      <Icon className="w-4 h-4" aria-hidden />
      {link.name}
    </Button>
  );
}

export default function CaseStudyPage({ project, related }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const cs = project.caseStudy;
  const gallery = normalizeGallery(project);
  const activeImage = gallery[activeImageIndex] ?? gallery[0];
  const publicLinks = (project.links || []).filter((link) =>
    project.privateSource ? link.type !== "github" : true
  );
  const description = project.description || cs?.overview || `${project.name} case study.`;

  return (
    <V3Layout>
      <SiteMeta
        title={`${project.name} — ${SITE.shortName}`}
        description={
          description.length > 160
            ? `${description.slice(0, description.lastIndexOf(" ", 157)).replace(/[.,;:]$/, "")}.`
            : description
        }
        path={v3WorkHref(project.id)}
        ogType="article"
      />
      <main id="main-content" className="relative flex min-h-screen flex-col __main pb-24 md:pb-28">
        <Header />
        <DockNav />

        <article className="max-w-[800px] w-full mx-auto px-5 sm:px-8 md:px-12 pt-10 pb-16 text-[var(--text-secondary)]">
          <Button variant="ghost" size="sm" href={`${V3_BASE}#work`} className="mb-8">
            <FiArrowLeft className="w-4 h-4" aria-hidden />
            Back to work
          </Button>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.category === "Shopify" ? (
                <Badge variant="shopify">Shopify</Badge>
              ) : (
                <Badge>{project.category}</Badge>
              )}
              {project.featured && <Badge variant="accent">Featured</Badge>}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-3">
              {project.name}
            </h1>
            {project.metric && (
              <p className="text-accent font-mono text-sm mb-4">{project.metric}</p>
            )}
            <p className="text-lg leading-relaxed">{project.tagline || project.description}</p>
          </header>

          {activeImage && (
            <div className="mb-10 space-y-3">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[var(--bg-elevated)] border border-[var(--glass-border)]">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 800px"
                  className="object-cover object-top"
                  quality={85}
                  priority
                />
              </div>
              {gallery.length > 1 && (
                <div
                  className="flex gap-2 overflow-x-auto pb-1"
                  role="listbox"
                  aria-label={`${project.name} screenshots`}
                >
                  {gallery.map((image, i) => {
                    const isActive = i === activeImageIndex;
                    return (
                      <button
                        key={image.src}
                        type="button"
                        role="option"
                        aria-selected={isActive}
                        onClick={() => setActiveImageIndex(i)}
                        className={`relative shrink-0 w-[4.5rem] sm:w-24 aspect-video rounded-lg overflow-hidden border transition-colors ${
                          isActive
                            ? "border-accent ring-2 ring-accent/40"
                            : "border-[var(--glass-border)] hover:border-white/30"
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt=""
                          fill
                          sizes="96px"
                          className="object-cover object-top"
                        />
                        <span className="sr-only">{image.alt}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          <div className="space-y-10">
            <Section title="Overview">
              <p className="leading-relaxed">{cs?.overview || project.description}</p>
            </Section>

            {cs?.problem && (
              <Section title="Problem">
                <p className="leading-relaxed">{cs.problem}</p>
              </Section>
            )}

            <Section title="My Role">
              <p className="leading-relaxed">{cs?.role || project.role}</p>
            </Section>

            {(cs?.whatIBuilt || project.keyWork) && (
              <Section title="What I Built">
                <BulletList items={cs?.whatIBuilt || project.keyWork} />
              </Section>
            )}

            {cs?.architecture && (
              <Section title="Technical Architecture">
                <p className="text-sm leading-relaxed mb-4">{cs.architecture.label}</p>
                <ArchitectureFlow
                  steps={cs.architecture.steps}
                  label={cs.architecture.label}
                />
              </Section>
            )}

            {cs?.challenges && (
              <Section title="Key Challenges">
                <BulletList items={cs.challenges} />
              </Section>
            )}

            {cs?.implementation && (
              <Section title="Implementation">
                <BulletList items={cs.implementation} />
              </Section>
            )}

            {cs?.results && (
              <Section title="Results / Impact">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none">
                  {cs.results.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[var(--text-secondary)] glass-panel-sm px-3 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            <Section title="Technology">
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Section>

            {gallery.length > 0 && (
              <Section title="Screenshots">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {gallery.map((image) => (
                    <div
                      key={image.src}
                      className="relative aspect-video rounded-xl overflow-hidden bg-[var(--bg-elevated)] border border-[var(--glass-border)]"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 800px) 100vw, 400px"
                        className="object-cover object-top"
                        quality={80}
                      />
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {publicLinks.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {publicLinks.map((link) => (
                  <ProjectLink key={link.url} link={link} />
                ))}
              </div>
            )}
          </div>

          {related.length > 0 && (
            <section className="mt-16 pt-10 border-t border-[var(--glass-border)]">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-accent mb-5">
                Related Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={v3WorkHref(item.id)}
                    className="glass-panel p-4 hover:border-white/20 transition-colors block"
                  >
                    <p className="text-white font-medium mb-1">{item.name}</p>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {item.tagline || item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 flex flex-wrap gap-3">
            <Button variant="primary" href={`${V3_BASE}#contact`}>
              Email Me
            </Button>
            <Button variant="secondary" href={V3_RESUME_PDF}>
              Download CV
            </Button>
            <Button variant="ghost" href={`${V3_BASE}#work`}>
              More work
            </Button>
          </div>
        </article>
      </main>
    </V3Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: PROJECTS.map((project) => ({ params: { id: project.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectById(params.id);
  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
      related: getRelatedProjects(project),
    },
  };
}
