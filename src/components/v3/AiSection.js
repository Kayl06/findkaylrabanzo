import GlassPanel from "./GlassPanel";

export default function AiSection() {
  return (
    <GlassPanel className="p-6 md:p-8">
      <h3 className="text-ink font-semibold text-lg mb-3">AI-Augmented Development</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
        I use tools like Cursor, Claude Code, GitHub Copilot, Codex, and ChatGPT to accelerate
        architecture exploration, implementation, debugging, testing, and documentation. I review
        and validate AI-generated code before shipping production software.
      </p>
      <p className="text-sm font-mono text-accent">
        AI makes me faster; engineering judgment still comes from me.
      </p>
    </GlassPanel>
  );
}
