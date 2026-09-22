import { TRUST_METRICS } from "@/data/site";
import { PROJECTS, projectCtaLabel } from "@/data/projects";
import { v3WorkHref } from "@/lib/v3";
import GlassPanel from "./GlassPanel";
import Button from "./Button";

const FEATURED = PROJECTS.filter((p) => p.featured).sort(
  (a, b) => (a.priority ?? 99) - (b.priority ?? 99)
);

export default function SelectedExperience() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {TRUST_METRICS.map((metric) => (
          <GlassPanel key={metric.label} className="p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-ink mb-1">{metric.value}</p>
            <p className="text-sm text-[var(--text-muted)] font-mono uppercase tracking-wider">
              {metric.label}
            </p>
          </GlassPanel>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">What I&apos;ve built</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FEATURED.map((project) => (
            <GlassPanel key={project.id} className="p-5 flex flex-col gap-3">
              <div>
                <h4 className="text-ink font-semibold">{project.name}</h4>
                <p className="text-xs font-mono text-accent mt-1">{project.role}</p>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                {project.tagline || project.description}
              </p>
              <Button variant="ghost" size="sm" href={v3WorkHref(project.id)} className="self-start">
                {projectCtaLabel(project)}
              </Button>
            </GlassPanel>
          ))}
        </div>
      </div>
    </div>
  );
}
