import { SKILL_CATEGORIES } from "@/data/skills";
import Badge from "./Badge";

export default function SkillsSection() {
  return (
    <div className="space-y-6">
      {SKILL_CATEGORIES.map((group) => (
        <div key={group.id}>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
            {group.title}
          </h3>
          <ul className="flex flex-wrap gap-2 list-none">
            {group.items.map((skill) => (
              <li key={skill} className="list-none">
                <Badge className="!rounded-full">{skill}</Badge>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
