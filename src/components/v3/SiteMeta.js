import Head from "next/head";
import { SITE } from "@/data/site";
import { V3_TITLE, V3_DESCRIPTION, V3_KEYWORDS } from "@/lib/v3";

export default function SiteMeta({
  title = `${SITE.shortName} — ${V3_TITLE}`,
  description = V3_DESCRIPTION,
  path = "",
  ogType = "website",
}) {
  const url = `${SITE.url}${path}`;
  const ogImage = `${SITE.url}/og.png`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={V3_KEYWORDS} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/images/logo.png" type="image/png" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE.shortName} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${SITE.shortName} — ${V3_TITLE}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${SITE.shortName} — ${V3_TITLE}`} />
    </Head>
  );
}
