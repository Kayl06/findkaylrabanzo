import { useEffect, useRef, useCallback, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiExternalLink, FiLink2 } from "react-icons/fi";
import Badge from "./Badge";
import Button from "./Button";
import useReducedMotion from "@/hooks/useReducedMotion";

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

function ProjectLink({ link }) {
  const Icon = link.type === "github" ? FiGithub : FiExternalLink;
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-accent hover:text-blue-400 transition-colors"
    >
      <Icon className="w-4 h-4" aria-hidden />
      {link.name}
    </a>
  );
}

export default function CaseStudyModal({ project, onClose }) {
  const reducedMotion = useReducedMotion();
  const closeRef = useRef(null);
  const previousFocusRef = useRef(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    previousFocusRef.current = document.activeElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus?.();
    };
  }, [project, handleClose]);

  const cs = project?.caseStudy;
  const hasCaseStudy = Boolean(cs);
  const gallery = project ? normalizeGallery(project) : [];
  const activeImage = gallery[activeImageIndex] ?? gallery[0];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
          role="presentation"
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="relative w-full sm:max-w-2xl lg:max-w-3xl max-h-[92vh] sm:max-h-[88vh] glass-panel !rounded-t-2xl sm:!rounded-2xl overflow-hidden flex flex-col"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 20 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="window-chrome shrink-0">
              <div className="window-chrome__dots" aria-hidden>
                <span className="window-chrome__dot window-chrome__dot--red" />
                <span className="window-chrome__dot window-chrome__dot--yellow" />
                <span className="window-chrome__dot window-chrome__dot--green" />
              </div>
              <span className="text-sm text-[var(--text-secondary)] font-mono flex-1 truncate ml-2">
                {project.name}
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={handleClose}
                className="p-2 rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close case study"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-6">
              {activeImage && (
                <div className="space-y-3">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[var(--bg-elevated)]">
                    <Image
                      src={activeImage.src}
                      alt={activeImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover object-top"
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

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {project.category === "Shopify" && <Badge variant="shopify">Shopify</Badge>}
                  {project.featured && <Badge variant="accent">Featured</Badge>}
                </div>
                <h2 id="case-study-title" className="text-2xl font-bold text-white mb-2">
                  {project.name}
                </h2>
                {project.metric && (
                  <p className="text-accent font-mono text-sm mb-3">{project.metric}</p>
                )}
                <p className="text-[var(--text-secondary)] leading-relaxed">{project.description}</p>
              </div>

              {hasCaseStudy && (
                <>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                      Problem
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{cs.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                      Approach
                    </h3>
                    <ul className="space-y-2 list-none">
                      {cs.approach.map((item, i) => (
                        <li key={i} className="flex gap-3 text-[var(--text-secondary)] text-sm">
                          <span className="text-accent shrink-0 mt-1">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                      Results
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none">
                      {cs.results.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-[var(--text-secondary)] glass-panel-sm px-3 py-2"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {(cs.role || cs.duration) && (
                    <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)] font-mono">
                      {cs.role && <span>Role: {cs.role}</span>}
                      {cs.duration && <span>Duration: {cs.duration}</span>}
                    </div>
                  )}
                </>
              )}

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
                  Tech stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>

              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-4 pt-2">
                  {project.links.map((link) => (
                    <ProjectLink key={link.url} link={link} />
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-4 border-t border-[var(--glass-border)]">
                <Button
                  variant="primary"
                  href="#contact"
                  onClick={handleClose}
                  className="!normal-case !tracking-normal"
                >
                  Discuss a similar project
                </Button>
                <button
                  type="button"
                  onClick={() => {
                    const url = `${window.location.origin}${window.location.pathname}?project=${project.id}`;
                    navigator.clipboard?.writeText(url);
                  }}
                  className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  <FiLink2 className="w-4 h-4" aria-hidden />
                  Copy link
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
