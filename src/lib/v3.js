export const V3_BASE = "/v3";

export const V3_TITLE = "Mid-Senior Full-Stack Web Developer & Shopify Developer";
export const V3_RESUME_HEADLINE = "Mid-Senior Full-Stack Web Developer & Shopify Developer";

export const V3_DESCRIPTION =
  "Mid-Senior Full-Stack Web Developer & Shopify Developer with 7+ years building React, Next.js, TypeScript, Laravel, SaaS products, and Shopify storefronts.";

export const V3_KEYWORDS =
  "Kayl Rabanzo, Fedimar Kayl Rabanzo, Full-Stack Web Developer, Full Stack Developer, Senior Frontend Developer, Shopify Developer, Shopify Theme Developer, E-commerce Developer, React, Next.js, Laravel";

export const V3_RESUME_PDF = "/files/Fedimar_Kayl_Rabanzo_Fullstack.pdf";

export const V3_NAV_LINKS = [
  { path: "#work", name: "Work" },
  { path: "#what-i-do", name: "What I Do" },
  { path: "#about", name: "About" },
  { path: "#experience", name: "Experience" },
  { path: "#contact", name: "Contact" },
];

export function v3Href(path) {
  if (path.startsWith("#")) return `${V3_BASE}${path}`;
  if (path.startsWith("/")) return `${V3_BASE}${path}`;
  return `${V3_BASE}/${path}`;
}

export function v3WorkHref(id) {
  return `${V3_BASE}/work/${id}`;
}
