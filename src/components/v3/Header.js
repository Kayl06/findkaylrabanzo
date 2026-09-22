import { useState, useEffect, useRef, useCallback } from "react";
import Logo from "./Logo";
import ThemeToggle from "@/components/ThemeToggle";
import useToggle from "@/hooks/useToggle";
import HeaderMenuList from "./HeaderMenuList";
import { motion, useScroll } from "framer-motion";

export default function Header() {
  const { scrollYProgress } = useScroll();
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const closeMenu = useCallback(() => {
    document.body.style.overflow = "";
    if (isMenuOpen) toggleMenu();
  }, [isMenuOpen, toggleMenu]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.matchMedia("(max-width: 1024px)").matches;
      setIsMobile(mobile);
      if (!mobile && isMenuOpen) toggleMenu();
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen, toggleMenu]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen && isMobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isMobile]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <header
        className={`sticky top-0 z-[11] __header w-full items-center justify-between text-sm flex px-5 lg:px-10 transition-shadow ${
          scrolled || isMenuOpen ? "shadow-lg shadow-black/30" : ""
        }`}
        role="banner"
      >
        <Logo onNavigate={closeMenu} />

        <HeaderMenuList variant="desktop" handleBurgerMenuClick={closeMenu} />

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            ref={burgerRef}
            type="button"
            className={`${isMenuOpen ? "__open" : "__close"} __hamburger lg:hidden flex cursor-pointer min-h-[44px] min-w-[44px] items-center justify-center`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="__hamburger_box">
              <span className="__hamburger_box_inner" />
            </span>
          </button>
        </div>
      </header>

      <HeaderMenuList
        variant="mobile"
        menuRef={menuRef}
        isOpen={isMenuOpen}
        handleBurgerMenuClick={closeMenu}
      />

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
        aria-hidden
      />
    </>
  );
}
