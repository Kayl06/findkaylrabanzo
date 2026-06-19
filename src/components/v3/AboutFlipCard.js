import Image from "next/image";
import { SITE } from "@/data/site";
import { V3_RESUME_PDF } from "@/lib/v3";

export default function AboutFlipCard() {
  return (
    <div className="relative mt-6 lg:mt-0 w-full max-w-[420px] mx-auto aspect-square self-start">
      <div
        className="absolute inset-0 rounded-[20px] border border-accent/20 translate-x-3 translate-y-3 pointer-events-none z-0"
        aria-hidden
      />
      <div
        className="about-flip-card relative z-[1] w-full h-full rounded-[20px] focus-within:outline focus-within:outline-2 focus-within:outline-accent/50 focus-within:outline-offset-4"
        tabIndex={0}
        aria-label={`About ${SITE.name}. Hover or focus to flip card.`}
      >
        <div className="about-flip-card__inner">
          <div className="about-flip-card__face about-flip-card__front overflow-hidden rounded-[20px]">
            <Image
              src="/images/my-about-pic-1.jpg"
              alt="Portrait of Fedimar Kayl Rabanzo"
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover object-top mix-blend-luminosity"
              priority
            />
          </div>
          <div className="about-flip-card__face about-flip-card__back rounded-[20px] flex flex-col items-center justify-center p-6 text-center glass-panel">
            <p className="text-accent font-mono text-xs uppercase tracking-widest mb-2">
              {SITE.resumeHeadline}
            </p>
            <p className="text-[var(--text-primary)] font-bold text-xl sm:text-2xl mb-1">
              {SITE.name}
            </p>
            <p className="text-[var(--text-muted)] text-sm mb-4">{SITE.location}</p>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-[240px]">
              6+ years building React, Next.js & Shopify experiences for teams and clients.
            </p>
            <a
              href={V3_RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 text-xs font-semibold uppercase tracking-wider text-accent hover:text-blue-400 border border-accent/40 rounded-full px-4 py-2 transition-colors"
            >
              View resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
