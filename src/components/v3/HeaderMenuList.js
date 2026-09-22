import { v3Href, V3_BASE, V3_NAV_LINKS, V3_RESUME_PDF } from "@/lib/v3";
import Link from "next/link";
import Button from "./Button";

const DESKTOP_LINK =
  "text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors px-3 py-2 rounded-lg hover:bg-line/[0.04] motion-reduce:transition-none capitalize";

function handleNavClick(event, closeMenu) {
  closeMenu?.();
  const href = event.currentTarget.getAttribute("href") || "";
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return;

  const hash = href.slice(hashIndex);
  const id = hash.slice(1);
  if (!id) return;

  const onHome =
    window.location.pathname === V3_BASE || window.location.pathname === `${V3_BASE}/`;
  if (!onHome) return;

  const target = document.getElementById(id);
  if (!target) return;

  event.preventDefault();
  window.requestAnimationFrame(() => {
    const headerOffset = 76;
    const top = window.scrollY + target.getBoundingClientRect().top - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    window.history.replaceState(null, "", hash);
  });
}

function NavItems({ variant, handleBurgerMenuClick }) {
  const isMobile = variant === "mobile";

  return (
    <>
      {V3_NAV_LINKS.map((menuItem, index) => (
        <a
          key={menuItem.path}
          href={v3Href(menuItem.path)}
          onClick={(event) => handleNavClick(event, handleBurgerMenuClick)}
          className={isMobile ? "__mobile-nav-link" : DESKTOP_LINK}
        >
          {isMobile && (
            <span className="__mobile-nav-index" aria-hidden>
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          {menuItem.name}
        </a>
      ))}
      {isMobile ? (
        <>
          <Link
            href="/v3/resume"
            onClick={handleBurgerMenuClick}
            className="__mobile-nav-link"
          >
            <span className="__mobile-nav-index" aria-hidden>
              {String(V3_NAV_LINKS.length + 1).padStart(2, "0")}
            </span>
            Resume
          </Link>
          <Button
            variant="primary"
            href={V3_RESUME_PDF}
            onClick={handleBurgerMenuClick}
            className="mt-8"
          >
            Download CV
          </Button>
        </>
      ) : (
        <>
          <Link
            href="/v3/resume"
            onClick={handleBurgerMenuClick}
            className={DESKTOP_LINK}
          >
            Resume
          </Link>
          <Button
            variant="primary"
            size="sm"
            href={V3_RESUME_PDF}
            onClick={handleBurgerMenuClick}
            className="ml-1"
          >
            CV
          </Button>
        </>
      )}
    </>
  );
}

export default function HeaderMenuList({
  variant = "desktop",
  handleBurgerMenuClick,
  menuRef,
  isOpen = false,
}) {
  if (variant === "mobile") {
    return (
      <nav
        ref={menuRef}
        id="mobile-menu"
        aria-label="Mobile"
        aria-hidden={!isOpen}
        className={`__mobile-nav ${isOpen ? "is-open" : ""}`}
      >
        <div className="__mobile-nav-inner">
          <NavItems variant="mobile" handleBurgerMenuClick={handleBurgerMenuClick} />
        </div>
      </nav>
    );
  }

  return (
    <nav ref={menuRef} aria-label="Primary" className="__menu hidden lg:flex">
      <div className="__menu_inner flex items-center gap-1">
        <NavItems variant="desktop" handleBurgerMenuClick={handleBurgerMenuClick} />
      </div>
    </nav>
  );
}
