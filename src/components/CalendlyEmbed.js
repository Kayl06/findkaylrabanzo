import { SITE } from "@/data/site";

const EMBED_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  SITE.calendly ||
  "https://calendly.com/frabanzoo/30min?hide_gdpr_banner=1&background_color=0b0d12&text_color=f5f5f7&primary_color=3b82f6";

export default function CalendlyEmbed({ url = EMBED_URL }) {
  if (!url) {
    return (
      <p className="text-sm text-[var(--text-muted,#9ca3af)]">
        Scheduling is temporarily unavailable.{" "}
        <a href={`mailto:${SITE.email}`} className="underline hover:opacity-80">
          Email me instead
        </a>
        .
      </p>
    );
  }

  return (
    <iframe
      src={url}
      title="Schedule a 30-minute call"
      loading="lazy"
      className="w-full border-0 block"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
