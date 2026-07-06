import Head from "next/head";
import { SITE } from "@/data/site";
import { V3_TITLE } from "@/lib/v3";

export default function SiteMeta({
  title = `${SITE.name} — ${V3_TITLE}`,
  description = "Portfolio of Fedimar Kayl Rabanzo — Frontend Engineer and Shopify Developer specializing in React, Next.js, Liquid, and API-driven product development.",
  path = "",
}) {
  const url = `${SITE.url}${path}`;
  const ogImage = `${SITE.url}/og.png`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Fedimar Kayl Rabanzo, Kayl Rabanzo, Frontend Engineer, Shopify Developer, React, Next.js, Liquid"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/images/profile1.png" type="image/png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}
