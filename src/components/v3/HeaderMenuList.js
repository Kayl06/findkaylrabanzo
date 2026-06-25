import { SITE } from "@/data/site";
import { v3Href, V3_NAV_LINKS, V3_RESUME_PDF } from "@/lib/v3";
import Link from "next/link";

export default function HeaderMenuList({
  parentMenuClassName = "hidden lg:flex",
  childMenuClassName = "",
  handleBurgerMenuClick,
  menuRef,
}) {
  return (
    <nav
      ref={menuRef}
      id="mobile-menu"
      aria-label="Primary"
      className={`__menu transition duration-300 ${parentMenuClassName}`}
    >
      <div
        className={`__menu_inner lg:gap-1 md:flex items-start ${childMenuClassName}`}
      >
        {V3_NAV_LINKS.map((menuItem) => (
          <a
            key={menuItem.path}
            href={v3Href(menuItem.path)}
            onClick={handleBurgerMenuClick}
            className="text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors px-3 py-2 rounded-lg hover:bg-white/[0.04] motion-reduce:transition-none capitalize"
          >
            {menuItem.name}
          </a>
        ))}
        <Link
          href="/v3/resume"
          onClick={handleBurgerMenuClick}
          className="text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors px-3 py-2 rounded-lg hover:bg-white/[0.04]"
        >
          Resume
        </Link>
        <a
          href={V3_RESUME_PDF}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleBurgerMenuClick}
          className="hidden lg:inline-flex text-[13px] font-semibold text-white bg-accent rounded-lg px-4 py-2 hover:opacity-90 transition-opacity ml-1"
        >
          PDF
        </a>
      </div>
    </nav>
  );
}
