import { SKILL_CATEGORIES } from "@/data/skills";

function Pill({ children, size = "md" }) {
  const sizes = {
    md: "px-4 py-2 text-[13px]",
    sm: "px-3 py-1.5 text-xs",
    lg: "px-4 py-2.5 text-sm font-medium",
  };
  return (
    <li
      className={`flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-ink/90 transition-colors hover:border-accent/30 hover:bg-accent/5 ${sizes[size]}`}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" aria-hidden />
      <span>{children}</span>
    </li>
  );
}

export default function SkillsSection() {
  return (
    <div className="space-y-8">
      {SKILL_CATEGORIES.map((group, index) => (
        <div key={group.id}>
          <h3
            className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
              index === 0 ? "text-accent/90" : "text-muted"
            }`}
          >
            {group.title}
          </h3>
          <ul className="flex flex-wrap gap-2 list-none">
            {group.items.map((skill) => (
              <Pill key={skill} size={index === 0 ? "lg" : "md"}>
                {skill}
              </Pill>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
