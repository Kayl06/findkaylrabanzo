import { useMemo, useState } from "react";
import Image from "next/image";
import {
  FiGithub,
  FiExternalLink,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECTS, PROJECT_FILTERS } from "@/data/projects";
import { defaultViewport, getMotionVariant, worksGridVariant } from "@/lib/motion";
import useReducedMotion from "@/hooks/useReducedMotion";

const INITIAL_COUNT = 3;

function ProjectLinks({ links }) {
  return links.map((link) => {
    const Icon = link.type === "github" ? FiGithub : FiExternalLink;
    return (
      <a
        key={link.url}
        href={link.url}
        aria-label={`${link.name} for project`}
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-white p-2.5 inline-flex"
      >
        <Icon className="w-5 h-5" />
      </a>
    );
  });
}

export default function Works() {
  const [showMore, setShowMore] = useState(false);
  const [filter, setFilter] = useState("All");
  const reducedMotion = useReducedMotion();
  const worksVariant = getMotionVariant(reducedMotion, {
    offscreen: { opacity: 0, y: 40 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.2, duration: 0.6 },
    },
  });

  const filtered = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  const projectsToShow = showMore ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section className="__project_cards mb-20">
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter projects">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium border transition-colors ${
              filter === f
                ? "border-cyan-400/50 bg-cyan-500/10 text-cyan-400"
                : "border-[var(--border)] text-gray-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {projectsToShow.map((project, index) => {
        const primaryUrl = project.links[0]?.url;
        const isFeatured = project.featured;

        return (
          <motion.section
            key={project.id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={defaultViewport}
            variants={worksVariant}
            className={`__project_card grid grid-cols-12 gap-[10px] items-center mb-[35px] md:mb-[100px] ${
              isFeatured ? "md:mb-[120px]" : ""
            }`}
          >
            <div className="__project_content rounded-[10px] relative">
              <div className="leading-5 mb-[2em]">
                <p className="__project_overline text-[.8em] mb-[.5em] text-slate-300 lg:text-slate-400">
                  {isFeatured ? "Featured Project" : "Project"}
                </p>
                {project.metric && (
                  <p className="text-cyan-400/80 text-xs font-mono mb-2">{project.metric}</p>
                )}
                <h3 className="font-bold text-[1.4em] text-white z-[2] relative">
                  {primaryUrl ? (
                    <Link href={primaryUrl} target="_blank" rel="noopener noreferrer">
                      {project.name}
                    </Link>
                  ) : (
                    project.name
                  )}
                </h3>
              </div>
              <div className="__project_description p-[25px] rounded z-[2] relative shadow-0 lg:shadow-lg">
                <p className="text-white text-sm font-normal">{project.description}</p>
              </div>
              <div
                className={`flex ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                } gap-2`}
              >
                <ul className="__project-tech-list flex flex-wrap mt-[25px] mb-[10px] max-w-[400px] list-none">
                  {project.techs.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="__project-links flex">
                <ProjectLinks links={project.links} />
              </div>
            </div>

            <div className="__project_image z-[1] w-full h-full align-middle rounded-[10px] relative min-h-[200px] md:min-h-[280px]">
              {primaryUrl ? (
                <Link href={primaryUrl} target="_blank" rel="noopener noreferrer">
                  <div className="__image_wrapper rounded-[10px] cursor-pointer w-full max-w-full relative overflow-hidden before:w-full before:h-full before:mix-blend-screen before:bg-slate-900 before:absolute before:inset-0 before:z-[3]">
                    <div className="relative w-full aspect-video max-w-[700px]">
                      <Image
                        src={project.thumbnailUrl}
                        alt={project.thumbnailAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 700px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="relative w-full aspect-video">
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.thumbnailAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="object-cover rounded-[10px]"
                  />
                </div>
              )}
            </div>
          </motion.section>
        );
      })}

      {filtered.length > INITIAL_COUNT && (
        <button
          type="button"
          onClick={() => setShowMore(!showMore)}
          className="text-center mx-auto text-sm flex items-center gap-2 border rounded shadow__btn font-normal border-gray-300 hover:border-white hover:text-white py-3 px-[2rem]"
        >
          {showMore ? "Show less" : "Show more projects"}
          {showMore ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
        </button>
      )}
    </section>
  );
}
