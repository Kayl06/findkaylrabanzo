import { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { PROJECTS, PROJECT_FILTERS, sortProjects } from "@/data/projects";
import { v3WorkHref } from "@/lib/v3";
import { defaultViewport, getMotionVariant, worksGridVariant } from "@/lib/motion";
import useReducedMotion from "@/hooks/useReducedMotion";
import Button from "./Button";

const INITIAL_COUNT = 4;
const ICON_SIZE = 64;
const FOLLOW_EASE = 0.14;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function ProjectCard({ project, index, reducedMotion, worksVariant }) {
  const cardRef = useRef(null);
  const stageRef = useRef(null);
  const iconRef = useRef(null);
  const motionRef = useRef({
    x: 0,
    y: 0,
    scale: 0.7,
    tx: 0,
    ty: 0,
    tScale: 0.7,
    raf: 0,
  });

  useEffect(() => {
    const card = cardRef.current;
    const stage = stageRef.current;
    const icon = iconRef.current;
    if (!card || !stage || !icon || reducedMotion) return;

    const state = motionRef.current;

    const applyTransform = (x, y, scale) => {
      icon.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`;
    };

    const pointFromEvent = (event) => {
      const rect = stage.getBoundingClientRect();
      const half = ICON_SIZE / 2;
      return {
        x: Math.max(half, Math.min(rect.width - half, event.clientX - rect.left)),
        y: Math.max(half, Math.min(rect.height - half, event.clientY - rect.top)),
      };
    };

    const tick = () => {
      state.x = lerp(state.x, state.tx, FOLLOW_EASE);
      state.y = lerp(state.y, state.ty, FOLLOW_EASE);
      state.scale = lerp(state.scale, state.tScale, FOLLOW_EASE);
      applyTransform(state.x, state.y, state.scale);

      const stillMoving =
        Math.abs(state.tx - state.x) > 0.15 ||
        Math.abs(state.ty - state.y) > 0.15 ||
        Math.abs(state.tScale - state.scale) > 0.004;

      state.raf = stillMoving ? requestAnimationFrame(tick) : 0;
    };

    const startTick = () => {
      if (!state.raf) state.raf = requestAnimationFrame(tick);
    };

    const onEnter = (event) => {
      const point = pointFromEvent(event);
      state.x = point.x;
      state.y = point.y;
      state.tx = point.x;
      state.ty = point.y;
      state.scale = 0.7;
      state.tScale = 1;
      applyTransform(point.x, point.y, 0.7);
      startTick();
    };

    const onMove = (event) => {
      const point = pointFromEvent(event);
      state.tx = point.x;
      state.ty = point.y;
      state.tScale = 1;
      startTick();
    };

    const onLeave = () => {
      state.tScale = 0.7;
      startTick();
    };

    card.addEventListener("pointerenter", onEnter);
    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerleave", onLeave);

    return () => {
      card.removeEventListener("pointerenter", onEnter);
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerleave", onLeave);
      if (state.raf) cancelAnimationFrame(state.raf);
      state.raf = 0;
    };
  }, [reducedMotion]);

  return (
    <motion.article
      initial="offscreen"
      whileInView="onscreen"
      viewport={defaultViewport}
      variants={worksVariant}
    >
      <Link
        ref={cardRef}
        href={v3WorkHref(project.id)}
        className="__project-grid-card group block"
      >
        <div ref={stageRef} className="relative mb-4">
          <div className="__project-grid-image relative aspect-[3/2] w-full">
            <Image
              src={project.thumbnailUrl}
              alt={project.thumbnailAlt}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover object-top"
              quality={85}
              priority={index < 2}
            />
          </div>
          <span ref={iconRef} className="__project-grid-hover-icon" aria-hidden>
            <FiArrowUpRight />
          </span>
        </div>
        <p className="text-sm text-[var(--text-muted)] mb-1">{project.category}</p>
        <h3 className="text-lg font-semibold text-[var(--text-primary)] leading-snug group-hover:text-white transition-colors">
          {project.name}
        </h3>
      </Link>
    </motion.article>
  );
}

export default function Works() {
  const [showMore, setShowMore] = useState(false);
  const [filter, setFilter] = useState("All");
  const reducedMotion = useReducedMotion();
  const worksVariant = getMotionVariant(reducedMotion, worksGridVariant);

  useEffect(() => {
    const readParams = () => {
      const params = new URLSearchParams(window.location.search);
      const filterParam = params.get("filter");
      if (filterParam && PROJECT_FILTERS.includes(filterParam)) {
        setFilter(filterParam);
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

  const setFilterAndUrl = (nextFilter) => {
    setFilter(nextFilter);
    setShowMore(false);
    const url = new URL(window.location.href);
    if (nextFilter === "All") {
      url.searchParams.delete("filter");
    } else {
      url.searchParams.set("filter", nextFilter);
    }
    window.history.replaceState({}, "", url.pathname + url.search + url.hash);
  };

  const filtered = useMemo(() => {
    const list =
      filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
    return sortProjects(list);
  }, [filter]);

  const projectsToShow = showMore ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <>
      <p className="mb-8 max-w-[42ch] text-[15px] leading-relaxed text-[var(--text-muted)]">
        Shopify storefronts, SaaS products, and full-stack applications.
      </p>

      <div
        className="flex flex-wrap gap-2 mb-10"
        role="group"
        aria-label="Filter projects"
      >
        {PROJECT_FILTERS.map((f) => (
          <Button
            key={f}
            size="sm"
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilterAndUrl(f)}
            aria-pressed={filter === f}
          >
            {f}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 mb-10">
        {projectsToShow.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            reducedMotion={reducedMotion}
            worksVariant={worksVariant}
          />
        ))}
      </div>

      {filtered.length > INITIAL_COUNT && (
        <Button variant="secondary" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show less" : "See all projects"}
        </Button>
      )}
    </>
  );
}
