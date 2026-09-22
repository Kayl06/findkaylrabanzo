import Link from "next/link";

export default function Logo({ onNavigate }) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className="__logo relative h-12 w-12 overflow-hidden rounded-sm flex items-center justify-center transition ease-in-out delay-100 hover:-translate-y-1 motion-reduce:transition motion-reduce:hover:transform cursor-pointer"
      aria-label="Home"
    >
      <img
        src="/images/logo.png"
        alt=""
        className="h-full w-full object-cover"
      />
    </Link>
  );
}
