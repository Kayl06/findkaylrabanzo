import { VscMail } from "react-icons/vsc";
import Link from "next/link";
import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <title>Fedimar Kayl Rabanzo &#8212; Full Stack Web Developer</title>
        <link rel="shortcut icon" href="/images/profile1.png" />
      </Head>

      <div className="z-10 w-full font-mono max-w-[1140px] py-7 items-center justify-between text-sm flex text-gray-400 font-light border-b border-b-[#2d2d2d] p-[5px]">
        <div className="__logo"></div>

        <div className="__menu flex gap-[20px]">
          <Link
            href="#about"
            className="__menut-items hover:text-[#fafafa] flex items-center gap-2"
          >
            <span className="text-[#7e7e7e]">01.</span>
            About
          </Link>
          <Link
            href="#experience"
            className="__menut-items hover:text-[#fafafa] flex items-center gap-2"
          >
            <span className="text-[#7e7e7e]">02.</span>
            Experience
          </Link>
          <Link
            href="#work"
            className="__menut-items hover:text-[#fafafa] flex items-center gap-2"
          >
            <span className="text-[#7e7e7e]">03.</span>
            Work
          </Link>
          <Link
            href="#contact"
            className="__menut-items hover:text-[#fafafa] flex items-center gap-2"
          >
            <span className="text-[#7e7e7e]">04.</span>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
