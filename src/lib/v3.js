export const V3_BASE = "/v3";

export const V3_RESUME_PDF =
  "/files/PRODUCT ENGINEER CV - FEDIMAR KAYL RABANZO.pdf";

export function v3Href(path) {
  if (path.startsWith("#")) return `${V3_BASE}${path}`;
  if (path.startsWith("/")) return `${V3_BASE}${path}`;
  return `${V3_BASE}/${path}`;
}
