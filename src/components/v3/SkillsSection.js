import { SKILLS } from "@/data/skills";
import Badge from "./Badge";

function Pill({ children, size = "md" }) {
  const sizes = {
    md: "py-2 text-[13px]",
    sm: "py-1.5 text-xs",
    lg: "py-2.5 text-sm font-medium",
  };
  return (
    <li className={`list-none ${sizes[size]}`}>
      <Badge className="!rounded-full">{children}</Badge>
    </li>
  );
}

export default function SkillsSection() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
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
        <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
          Also proficient
        </h3>
        <ul className="flex flex-wrap gap-2 list-none">
          {SKILLS.proficient.map((skill) => (
            <Pill key={skill}>{skill}</Pill>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
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
        <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
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
