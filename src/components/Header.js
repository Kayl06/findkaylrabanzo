import Logo from "./Logo";
import Link from "next/link";
import Head from "next/head";
import useToggle from "@/hooks/useToggle";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, handleBurgerMenuClick] = useToggle(false);

  const [isMobile, setIsMobile] = useState(false);

  const menuList = [
    {
      path: "#about",
      name: "About",
    },
    {
      path: "#skillset",
      name: "Skillset",
    },
    {
      path: "#works",
      name: "Works",
    },
    {
      path: "#contact",
      name: "Contact",
    },
  ];

  const renderedMenuList = menuList.map((menuItem, index) => {
    return (
      <Link
        key={index}
        href={menuItem.path}
        className="__menut-items hover:text-[#fff] hover:bg-[#373737b4] transition ease-in-out delay-100 hover:-translate-y-1 motion-reduce:transition motion-reduce:hover:transform flex items-center justify-center gap-2 p-5 md:p-1 px-2 rounded"
      >
        <span className="text-[#efefef]"> 0{index + 1}. </span> {menuItem.name}
      </Link>
    );
  });

  useEffect(() => {
    const handleResize = () => {
      const isMobileSize = window.innerWidth <= 768; // Change this value as needed
      setIsMobile(isMobileSize);
    };

    handleResize(); // Call handleResize initially to set the `isMobile` state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let parentMenuClassName = "hidden lg:flex";
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
        <title> Fedimar Kayl Rabanzo & #8212; Full Stack Web Developer</title>

        <link rel="shortcut icon" href="/images/profile1.png" />
      </Head>
      <div className=" z-[11] __header fixed md:relative w-full py-2 items-center justify-between text-sm flex text-gray-400 font-light lg:px-[50px] px-[20px]">
        <Logo />

        <div
          className={`__menu font-mono transition duration-300 ${parentMenuClassName}`}
        >
          <div
            className={`__menu_inner gap-[20px] md:flex ${childMenuClassName}`}
          >
            {renderedMenuList}
            <a
              href="/files/CV - FEDIMAR KAYL RABANZO.pdf"
              target="_blank"
              className="text-center border rounded shadow__btn font-normal border-gray-300 hover:border-white hover:text-white py-2 px-[1rem] text-[13px]"
            >
              Resume
            </a>
          </div>
        </div>
        <div
          className={`${isMenuOpen ? "__open" : "__close"} __hamburger flex lg:hidden cursor-pointer`}
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
