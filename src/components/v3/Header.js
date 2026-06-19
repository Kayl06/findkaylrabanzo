import { useState, useEffect, useRef, useCallback } from "react";
import Logo from "./Logo";
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
    if (isMenuOpen) toggleMenu();
  }, [isMenuOpen, toggleMenu]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const parentMenuClassName = isMobile
    ? isMenuOpen
      ? "fixed inset-0 z-[10] opacity-100 visible"
      : "invisible opacity-0 pointer-events-none"
    : "hidden lg:flex";

  const childMenuClassName = isMobile
    ? "p-8 pt-24 gap-2 flex-col fixed flex glass-panel !rounded-none !border-0 h-full w-full top-0 left-0 h-screen bg-[var(--bg-base)]/95 backdrop-blur-xl"
    : "items-center";

  return (
    <>
      <header
        className={`sticky top-0 z-[11] __header w-full items-center justify-between text-sm flex px-5 lg:px-10 transition-shadow ${
          scrolled ? "shadow-lg shadow-black/30" : ""
        }`}
        role="banner"
      >
        <Logo onNavigate={closeMenu} />

        <HeaderMenuList
          menuRef={menuRef}
          parentMenuClassName={parentMenuClassName}
          childMenuClassName={childMenuClassName}
          handleBurgerMenuClick={closeMenu}
        />

        <button
          ref={burgerRef}
          type="button"
          className={`${isMenuOpen ? "__open" : "__close"} __hamburger lg:hidden flex cursor-pointer`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="__hamburger_box">
            <span className="__hamburger_box_inner" />
          </span>
        </button>
      </header>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
        aria-hidden
      />
    </>
  );
}
