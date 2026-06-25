export const V3_BASE = "/v3";

export const V3_RESUME_PDF =
  "/files/PRODUCT ENGINEER CV - FEDIMAR KAYL RABANZO.pdf";

export const V3_NAV_LINKS = [
  { path: "#work", name: "Work" },
  { path: "#services", name: "Services" },
  { path: "#about", name: "About" },
  { path: "#experience", name: "Experience" },
  { path: "#proof", name: "Proof" },
  { path: "#contact", name: "Contact" },
];

export function v3Href(path) {
  if (path.startsWith("#")) return `${V3_BASE}${path}`;
  if (path.startsWith("/")) return `${V3_BASE}${path}`;
  return `${V3_BASE}/${path}`;
}
