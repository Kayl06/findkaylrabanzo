import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function Logo({ onNavigate }) {
  const { isLight } = useTheme();

  return (
    <Link
      href="/v3"
      onClick={onNavigate}
      className="__logo relative h-11 w-11 overflow-hidden rounded-xl flex items-center justify-center transition ease-in-out hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer"
      aria-label="Home"
    >
      <img
        src={isLight ? "/images/logo-light.jpg" : "/images/logo.png"}
        alt=""
        className="h-full w-full object-cover"
      />
    </Link>
  );
}
