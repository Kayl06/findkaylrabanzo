import { VscMail } from "react-icons/vsc";
import Link from "next/link";
import Head from "next/head";

export default function Header() {
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
        className="__menut-items hover:text-[#fff] hover:bg-[#373737b4] transition ease-in-out delay-100 hover:-translate-y-1 motion-reduce:transition motion-reduce:hover:transform flex items-center gap-2 p-1 px-2 rounded"
      >
        <span className="text-[#efefef]">0{index + 1}.</span>
        {menuItem.name}
      </Link>
    );
  });

  return (
    <>
      <Head>
        <title>Fedimar Kayl Rabanzo &#8212; Full Stack Web Developer</title>
        <link rel="shortcut icon" href="/images/profile1.png" />
      </Head>

      <div className=" z-[11] __header fixed md:relative w-full py-2 items-center justify-between text-sm flex text-gray-400 font-light lg:px-[50px] px-[20px]">
        <div className="__logo rounded font-bold text-gray-300 border-2 border-gray-400 p-5 flex items-center bg-[#313131] cursor-pointer">
          <span className="text-[1.2rem]">KR</span>
        </div>

        <div className="__menu gap-[20px] hidden md:flex font-mono ">
          {renderedMenuList}

          <button className="border rounded shadow__btn font-normal border-gray-300 hover:border-white hover:text-white py-2 px-[1rem] text-[13px]">
            Resume
          </button>
        </div>

        <div className="__hamburger flex md:hidden cursor-pointer">
          <div className="__hamburger_box">
            <div className="__hamburger_box_inner"></div>
          </div>
        </div>
      </div>
    </>
  );
}
