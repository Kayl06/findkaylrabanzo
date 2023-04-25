import { VscMail } from "react-icons/vsc";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <title>Fedimar Kayl Rabanzo &#8212; Full Stack Web Developer</title>
        <link rel="shortcut icon" href="/images/profile1.png" />
      </Head>

      <div className="z-10 w-full max-w-[1140px] py-7 items-center justify-between text-sm lg:flex text-gray-400 font-light border-b border-b-[#2d2d2d] p-[5px]">
        <Link
          href="mailto:frabanzoo@gmail.com"
          className="__get_in_touch flex gap-5 items-center text-[14px] hover:text-[#fafafa]"
        >
          <span className="rounded-full p-5 border font-bold">
            <VscMail className="text-[20px]" />
          </span>
          Get in touch
        </Link>
        <div className="__social_links flex gap-[35px]">
          <Link
            href="https://www.linkedin.com/in/frabanzo/"
            target="_blank"
            className="hover:text-[#fafafa] flex items-center"
          >
            <FaLinkedinIn className="text-[28px]" />
          </Link>

          <Link
            href="https://github.com/Kayl06"
            target="_blank"
            className="hover:text-[#fafafa] flex items-center"
          >
            <FaGithub className="text-[28px]" />
          </Link>

          <Link
            href="https://www.facebook.com/kAyL06/"
            target="_blank"
            className="hover:text-[#fafafa] flex items-center"
          >
            <FaFacebook className="text-[28px]" />
          </Link>
        </div>
      </div>
    </>
  );
}
