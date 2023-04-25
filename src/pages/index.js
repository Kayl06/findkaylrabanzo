import Image from "next/image";
import { Inter } from "next/font/google";
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import Header from "../components/Header";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const socialLinks = [
    {
      url: "https://www.linkedin.com/in/frabanzo/",
      name: "LinkedIn",
      icon: <FaLinkedin className="text-[28px]" />,
    },
    {
      url: "https://github.com/Kayl06",
      name: "GitHub",
      icon: <FaGithub className="text-[28px]" />,
    },
    {
      url: "https://www.facebook.com/kAyL06/",
      name: "Facebook",
      icon: <FaFacebook className="text-[28px]" />,
    },
    {
      url: "https://www.twitter.com/KangkongKayl",
      name: "Twitter",
      icon: <FaTwitter className="text-[28px]" />,
    },
  ];

  const renderedSocialLinks = socialLinks.map((link) => {
    return (
      <Link
        key={link.name}
        href={link.url}
        target="_blank"
        className="hover:text-[#fafafa] flex items-center"
      >
        {link.icon}
      </Link>
    );
  });
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between pb-24 ${inter.className} __main`}
    >
      <Header />

      <div className="relative flex text-gray-400 max-w-[1140px] w-full">
        <div className="flex flex-col justify-between gap-10">
          <div className="__greetings lg:w-[600px]">
            <div className="text-[15px] text-white font-mono">
              Hi, I&apos;m Fedimar Kayl 👋
            </div>
            <h1 className="text-[3rem] font-bold text-start leading-snug mb-[20px]">
              I design and develop things for the web.
            </h1>

            <p className="lg:w-[500px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="__social_links flex gap-[35px]">
            {renderedSocialLinks}
          </div>

          <div className="__check_my_work mt-[20px]">
            <button className="border rounded-[8px] shadow__btn font-mono border-gray-400 hover:border-white hover:text-white p-3  w-[200px] text-[14px]">
              View my works
            </button>
          </div>
        </div>
      </div>

      <div></div>
    </main>
  );
}
