import { SKILLS } from "@/data/skills";

function Pill({ children, size = "md" }) {
  const sizes = {
    md: "px-4 py-2 text-[13px]",
    sm: "px-3 py-1.5 text-xs",
    lg: "px-4 py-2.5 text-sm font-medium",
  };
  return (
    <li
      className={`flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-white/90 transition-colors hover:border-cyan-400/30 hover:bg-cyan-500/5 ${sizes[size]}`}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" aria-hidden />
      <span>{children}</span>
    </li>
  );
}

export default function SkillsSection() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan-400/90 mb-3">
          Core stack
        </h3>
        <ul className="flex flex-wrap gap-2 list-none">
          {SKILLS.core.map((skill) => (
            <Pill key={skill} size="lg">
              {skill}
            </Pill>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
          Also proficient
        </h3>
        <ul className="flex flex-wrap gap-2 list-none">
          {SKILLS.proficient.map((skill) => (
            <Pill key={skill}>{skill}</Pill>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">
          Familiar
        </h3>
        <ul className="flex flex-wrap gap-2 list-none">
          {SKILLS.familiar.map((skill) => (
            <Pill key={skill} size="sm">
              {skill}
            </Pill>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">
          Tools
        </h3>
        <ul className="flex flex-wrap gap-2 list-none">
          {SKILLS.tools.map((tool) => (
            <Pill key={tool} size="sm">
              {tool}
            </Pill>
          ))}
        </ul>
      </div>
    </div>
  );
}