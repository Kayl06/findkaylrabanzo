import { useState, useEffect } from "react";
import Logo from "./Logo";
import Head from "next/head";
import useToggle from "@/hooks/useToggle";
import HeaderMenuList from "./HeaderMenuList";
import { motion, useScroll } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function Header() {
  const { scrollYProgress } = useScroll();

  const [isMenuOpen, handleBurgerMenuClick] = useToggle(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      // const isMobileSize = window.innerWidth < 1024; // Change this value as needed
      const isMobileSize = window.matchMedia('(max-width: 1024px)').matches; // Change this value as needed
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
      `p-10 top-[80px] gap-[30px] right-0 flex-col fixed flex bg-black h-screen w-full`;
  }

  return (
    <>
      <Head>
        <title>Fedimar Kayl Rabanzo - Full Stack Web Developer</title>
        
        <meta name="description" content="This website is built by Fedimar Kayl Rabanzo for his portfolio, showcasing examples of his work and experience as a Full-Stack Web Developer." />

        <meta name="keywords" content="Fedimar, Fedimar Kayl, Fedimar Kayl Rabanzo, Kayl Rabanzo, Kayl, Fedimar Rabanzo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Fedimar Kayl Rabanzo - Full Stack Web Developer" />
        <meta property="og:description" content="This website is built by Fedimar Kayl Rabanzo for his portfolio, showcasing examples of his work and experience as a Full-Stack Web Developer." />
        <meta property="og:image" content="" />


        <link rel="icon" href="/images/profile1.png"  type="image/x-icon"/>
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="sticky top-0 z-[11] __header w-full py-2 items-center justify-between text-sm flex text-gray-400 font-light lg:px-[50px] px-[20px]"
      >
        <Logo />

        <HeaderMenuList
          parentMenuClassName={parentMenuClassName}
          childMenuClassName={childMenuClassName}
          handleBurgerMenuClick={handleBurgerMenuClick}
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
      </motion.div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}
