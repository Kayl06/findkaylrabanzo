import Link from "next/link";

export default function Logo({ onNavigate }) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className="__logo relative rounded-sm font-bold text-[#CED4DA] h-[45px] w-[50px] flex items-center bg-[#313131] transition ease-in-out delay-100 hover:-translate-y-1 motion-reduce:transition motion-reduce:hover:transform cursor-pointer"
      aria-label="Home"
    >
      <span className="text-[1.2rem] absolute bottom-2 right-[0.35em]">KR</span>
    </Link>
  );
}
