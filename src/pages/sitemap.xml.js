import { SITE } from "@/data/site";
import { PROJECTS } from "@/data/projects";
import { V3_BASE, v3WorkHref } from "@/lib/v3";

function generateSiteMap() {
  const lastmod = new Date().toISOString().split("T")[0];
  const pages = [
    { path: "", priority: "0.6" },
    { path: "/resume", priority: "0.5" },
    { path: V3_BASE, priority: "1.0" },
    { path: `${V3_BASE}/resume`, priority: "0.8" },
    ...PROJECTS.map((project) => ({
      path: v3WorkHref(project.id),
      priority: project.featured ? "0.8" : "0.6",
    })),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
    .map(
      (page) => `  <url>
    <loc>${SITE.url}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("\n")}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default function SiteMap() {}
