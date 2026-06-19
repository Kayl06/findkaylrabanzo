import Link from "next/link";
import {
  FiBriefcase,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiFileText,
} from "react-icons/fi";
import { SITE } from "@/data/site";
import { v3Href, V3_RESUME_PDF } from "@/lib/v3";

const DOCK_ITEMS = [
  { href: v3Href("#work"), label: "Work", icon: FiBriefcase, external: false },
  { href: SITE.github, label: "GitHub", icon: FiGithub, external: true },
  { href: SITE.linkedin, label: "LinkedIn", icon: FiLinkedin, external: true },
  { href: `mailto:${SITE.email}`, label: "Email", icon: FiMail, external: true },
  { href: V3_RESUME_PDF, label: "Resume PDF", icon: FiFileText, external: true },
];

export default function DockNav() {
  return (
    <nav
      className="__dock hidden md:flex glass-panel"
      aria-label="Quick navigation"
    >
      {DOCK_ITEMS.map((item) => {
        const Icon = item.icon;
        const className = "__dock-item";

        const content = (
          <>
            <Icon className="__dock-item-icon w-5 h-5 shrink-0" aria-hidden />
            <span className="__dock-item-label">{item.label}</span>
          </>
        );

        if (item.external) {
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className={className}
              aria-label={item.label}
            >
              {content}
            </a>
          );
        }

        return (
          <Link key={item.label} href={item.href} className={className} aria-label={item.label}>
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
