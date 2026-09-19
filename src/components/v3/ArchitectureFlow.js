export default function ArchitectureFlow({ steps, label }) {
  if (!steps?.length) return null;

  return (
    <div>
      {label ? <p className="sr-only">{label}</p> : null}
      <ol className="flex flex-wrap items-center gap-2 list-none">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className="glass-panel-sm px-3 py-2 text-xs font-mono text-[var(--text-primary)]">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span className="text-[var(--text-muted)]" aria-hidden>
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
