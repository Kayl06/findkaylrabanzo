import { useState, useEffect } from "react";
import Logo from "./Logo";
import Head from "next/head";
import useToggle from "@/hooks/useToggle";

export default function Header() {
  const [isMenuOpen, handleBurgerMenuClick] = useToggle(false);

  const [isMobile, setIsMobile] = useState(false);

  const menuList = [
    {
      path: "#about",
      name: "about",
    },
    {
      path: "#experience",
      name: "experience",
    },
    {
      path: "#work",
      name: "work",
    },
    {
      path: "#contact",
      name: "contact",
    },
  ];

  const renderedMenuList = menuList.map((menuItem, index) => {
    return (
      <a
        key={index}
        href={menuItem.path}
        onClick={() => handleBurgerMenuClick()}
        className="__menut-items hover:text-[#fff] capitalize hover:bg-[#373737b4] transition ease-in-out delay-100 hover:-translate-y-1 motion-reduce:transition motion-reduce:hover:transform flex items-center justify-center gap-2 p-5 md:p-1 md:px-2 px-2 rounded"
      >
        <span className="text-[#efefef]"> 0{index + 1}. </span> {menuItem.name}
      </a>
    );
  });

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
        <title> Fedimar Kayl Rabanzo - Full Stack Web Developer</title>

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
