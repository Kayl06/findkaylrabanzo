import { FiCode, FiShoppingBag, FiLayers } from "react-icons/fi";
import GlassPanel from "./GlassPanel";
import Button from "./Button";

const CAPABILITIES = [
  {
    id: "fullstack",
    icon: FiLayers,
    title: "Full-Stack Development",
    description:
      "React and Next.js applications with Laravel, Node.js, REST APIs, databases, authentication, and integrations, including SaaS and internal tools.",
    filter: "Full-stack",
  },
  {
    id: "frontend",
    icon: FiCode,
    title: "Frontend Engineering",
    description:
      "React, Next.js, TypeScript, responsive interfaces, component architecture, accessibility, performance, and API integration.",
    filter: "React",
  },
  {
    id: "shopify",
    icon: FiShoppingBag,
    title: "Shopify Development",
    description:
      "Shopify Online Store 2.0, Liquid, custom themes, reusable sections, storefront features, performance, and conversion-focused UX.",
    filter: "Shopify",
  },
];

export default function ServicesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {CAPABILITIES.map((capability) => {
        const Icon = capability.icon;
        return (
          <GlassPanel
            key={capability.id}
            className="p-6 flex flex-col gap-4 hover:border-line/20 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
                <Icon className="w-5 h-5" aria-hidden />
              </span>
              <h3 className="text-ink font-semibold text-lg">{capability.title}</h3>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1">
              {capability.description}
            </p>
            <Button
              variant="ghost"
              size="sm"
              href="#work"
              className="mt-auto self-start"
              onClick={() => {
                const url = new URL(window.location.href);
                url.searchParams.set("filter", capability.filter);
                window.history.replaceState({}, "", url.pathname + url.search + "#work");
                window.dispatchEvent(
                  new CustomEvent("portfolio-filter", { detail: capability.filter })
                );
              }}
            >
              View {capability.filter} work
            </Button>
          </GlassPanel>
        );
      })}
    </div>
  );
}
