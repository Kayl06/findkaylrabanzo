import { FiShoppingBag, FiLayers, FiLink } from "react-icons/fi";
import GlassPanel from "./GlassPanel";

const SERVICES = [
  {
    id: "shopify",
    icon: FiShoppingBag,
    title: "Shopify Development",
    description:
      "Custom Liquid themes, storefront performance, and conversion-focused UX for merchants who need more than a template.",
    filter: "Shopify",
    anchor: "#work",
  },
  {
    id: "react",
    icon: FiLayers,
    title: "React & Next.js Products",
    description:
      "Dashboards, SaaS interfaces, and cross-platform apps with React, Next.js, and React Native—pixel-perfect from Figma.",
    filter: "React",
    anchor: "#work",
  },
  {
    id: "api",
    icon: FiLink,
    title: "API Integrations & Laravel",
    description:
      "Reliable third-party integrations, Laravel backends, and full-stack handoffs that keep your product shipping on schedule.",
    filter: "Full-stack",
    anchor: "#work",
  },
];

export default function ServicesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {SERVICES.map((service) => {
        const Icon = service.icon;
        return (
          <GlassPanel
            key={service.id}
            className="p-6 flex flex-col gap-4 hover:border-white/20 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
                <Icon className="w-5 h-5" aria-hidden />
              </span>
              <h3 className="text-white font-semibold text-lg">{service.title}</h3>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1">
              {service.description}
            </p>
            <a
              href="#work"
              onClick={() => {
                const url = new URL(window.location.href);
                url.searchParams.set("filter", service.filter);
                window.history.replaceState({}, "", url.pathname + url.search + url.hash);
                window.dispatchEvent(
                  new CustomEvent("portfolio-filter", { detail: service.filter })
                );
              }}
              className="text-sm font-medium text-accent hover:text-blue-400 transition-colors inline-flex items-center gap-1 mt-auto"
            >
              View {service.filter} work →
            </a>
          </GlassPanel>
        );
      })}
    </div>
  );
}
