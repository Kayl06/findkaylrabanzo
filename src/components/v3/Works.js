import { useMemo, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { PROJECTS, PROJECT_FILTERS, getProjectById } from "@/data/projects";
import { defaultViewport, getMotionVariant, worksGridVariant } from "@/lib/motion";
import useReducedMotion from "@/hooks/useReducedMotion";
import Badge from "./Badge";
import CaseStudyModal from "./CaseStudyModal";

const INITIAL_COUNT = 6;

function sortFeaturedFirst(projects) {
  return [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
}

export default function Works() {
  const [showMore, setShowMore] = useState(false);
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const reducedMotion = useReducedMotion();
  const worksVariant = getMotionVariant(reducedMotion, worksGridVariant);

  const openProject = useCallback((project) => {
    setActiveProject(project);
    const url = new URL(window.location.href);
    url.searchParams.set("project", project.id);
    window.history.replaceState({}, "", url);
  }, []);

  const closeProject = useCallback(() => {
    setActiveProject(null);
    const url = new URL(window.location.href);
    url.searchParams.delete("project");
    window.history.replaceState({}, "", url.pathname + url.hash);
  }, []);

  useEffect(() => {
    const readParams = () => {
      const params = new URLSearchParams(window.location.search);
      const filterParam = params.get("filter");
      if (filterParam && PROJECT_FILTERS.includes(filterParam)) {
        setFilter(filterParam);
      }
      const projectId = params.get("project");
      if (projectId) {
        const project = getProjectById(projectId);
        if (project) setActiveProject(project);
      }
    };

    readParams();

    const onFilter = (e) => {
      if (PROJECT_FILTERS.includes(e.detail)) setFilter(e.detail);
    };

    window.addEventListener("popstate", readParams);
    window.addEventListener("portfolio-filter", onFilter);
    return () => {
      window.removeEventListener("popstate", readParams);
      window.removeEventListener("portfolio-filter", onFilter);
    };
  }, []);

  const filtered = useMemo(() => {
    const list =
      filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
    return sortFeaturedFirst(list);
  }, [filter]);

  const projectsToShow = showMore ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter projects">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium border transition-colors ${
              filter === f
                ? "border-accent/50 bg-accent/10 text-accent"
                : "border-[var(--border)] text-[var(--text-secondary)] hover:border-white/20 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {projectsToShow.map((project) => (
          <motion.article
            key={project.id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            variants={worksVariant}
          >
            <button
              type="button"
              onClick={() => openProject(project)}
              className={`__project-grid-card glass-panel w-full text-left overflow-hidden ${
                project.featured ? "md:col-span-1" : ""
              }`}
              aria-label={`View case study: ${project.name}`}
            >
              <div className="__project-grid-image relative aspect-video w-full">
                <Image
                  src={project.thumbnailUrl}
                  alt={project.thumbnailAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {project.category === "Shopify" && <Badge variant="shopify">Shopify</Badge>}
                  {project.featured && <Badge variant="accent">Featured</Badge>}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{project.name}</h3>
                {project.metric && (
                  <p className="text-accent/90 font-mono text-xs mb-2">{project.metric}</p>
                )}
                <p className="text-sm text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.techs.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-[var(--text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techs.length > 4 && (
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      +{project.techs.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </button>
          </motion.article>
        ))}
      </div>

      {filtered.length > INITIAL_COUNT && (
        <button
          type="button"
          onClick={() => setShowMore(!showMore)}
          className="btn-secondary-v3 mx-auto flex items-center gap-2"
        >
          {showMore ? "Show less" : "Show more projects"}
          {showMore ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
        </button>
      )}

      <CaseStudyModal project={activeProject} onClose={closeProject} />
    </>
  );
}
