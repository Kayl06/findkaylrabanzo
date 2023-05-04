import { useState, useEffect } from "react";
import Logo from "./Logo";
import Head from "next/head";
import useToggle from "@/hooks/useToggle";
import HeaderMenuList from "./HeaderMenuList";

export default function Header() {
  const [isMenuOpen, handleBurgerMenuClick] = useToggle(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileSize = window.innerWidth < 1024; // Change this value as needed
      setIsMobile(isMobileSize);
    };

    handleResize(); // Call handleResize initially to set the `isMobile` state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let parentMenuClassName = "";
  let childMenuClassName = "";

  if (isMobile) {
    parentMenuClassName = isMenuOpen
      ? "fixed opacity-100 visible "
      : "invisible opacity-0";
    childMenuClassName =
      isMenuOpen &&
      `p-10 top-[80px] right-0 flex-col fixed flex bg-black h-screen w-full`;
  }

  return (
    <>
      <Head>
        <title> Fedimar Kayl Rabanzo - Full Stack Web Developer</title>

        <link rel="shortcut icon" href="/images/profile1.png" />
      </Head>
      <div className=" z-[11] __header fixed md:relative w-full py-2 items-center justify-between text-sm flex text-gray-400 font-light lg:px-[50px] px-[20px]">
        <Logo />

        <HeaderMenuList
          parentMenuClassName={parentMenuClassName}
          childMenuClassName={childMenuClassName}
        />

        <div
          className={`${
            isMenuOpen ? "__open" : "__close"
          } __hamburger lg:hidden flex cursor-pointer`}
          onClick={handleBurgerMenuClick}
        >
          <div className="__hamburger_box">
            <div className="__hamburger_box_inner"> </div>
          </div>
        </div>
      </div>
    </>
  );
}
