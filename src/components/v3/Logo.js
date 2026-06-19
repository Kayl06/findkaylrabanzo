import Link from "next/link";

export default function Logo({ onNavigate }) {
  return (
    <Link
      href="/v3"
      onClick={onNavigate}
      className="__logo relative rounded-xl font-bold text-[var(--text-primary)] h-[40px] w-[44px] flex items-center justify-center glass-panel-sm transition ease-in-out hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer"
      aria-label="Home"
    >
      <span className="text-[0.95rem] font-mono">KR</span>
    </Link>
  );
}
