import { TRUST_METRICS, TESTIMONIALS } from "@/data/site";
import GlassPanel from "./GlassPanel";

export default function SocialProofSection() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {TRUST_METRICS.map((metric) => (
          <GlassPanel key={metric.label} className="p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-white mb-1">{metric.value}</p>
            <p className="text-sm text-[var(--text-muted)] font-mono uppercase tracking-wider">
              {metric.label}
            </p>
          </GlassPanel>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TESTIMONIALS.map((t, i) => (
          <GlassPanel key={i} className="p-6 flex flex-col gap-4">
            <blockquote className="text-[var(--text-secondary)] text-[15px] leading-relaxed flex-1">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <footer className="border-t border-[var(--glass-border)] pt-4">
              <cite className="not-italic">
                <span className="text-white text-sm font-medium block">{t.author}</span>
                <span className="text-[var(--text-muted)] text-xs">{t.role}</span>
              </cite>
            </footer>
          </GlassPanel>
        ))}
      </div>
    </div>
  );
}
