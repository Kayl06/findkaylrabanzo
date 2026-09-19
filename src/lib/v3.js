export const V3_BASE = "/v3";

export const V3_TITLE = "Senior Frontend & Shopify Developer";
export const V3_RESUME_HEADLINE = "Senior Frontend & Shopify Developer";

export const V3_DESCRIPTION =
  "Senior Frontend & Shopify Developer with 7+ years of experience building React, Next.js, TypeScript, Shopify, SaaS, and full-stack web applications.";

export const V3_RESUME_PDF = "/files/Fedimar_Kayl_Rabanzo_Front_End_Engineer_CV.pdf";

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
