import Image from "next/image";
import { Inter } from "next/font/google";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialGithub,
} from "react-icons/sl";
import Link from "next/link";
import Header from "../components/Header";
import BotCornerLinks from "@/components/BotCornerLinks";

export default function Home() {
  const socialLinks = [
    {
      url: "https://www.linkedin.com/in/frabanzo/",
      name: "LinkedIn",
      icon: <SlSocialLinkedin className="text-[21px] font-bold" />,
    },
    {
      url: "https://github.com/Kayl06",
      name: "GitHub",
      icon: <SlSocialGithub className="text-[21px]" />,
    },
    {
      url: "https://www.instagram.com/kangkongkayl/",
      name: "Facebook",
      icon: <SlSocialInstagram className="text-[21px]" />,
    },
    {
      url: "https://www.twitter.com/KangkongKayl",
      name: "Twitter",
      icon: <SlSocialTwitter className="text-[21px]" />,
    },
  ];

  const renderedSocialLinks = socialLinks.map((link) => {
    return (
      <li key={link.name}>
        <Link
          href={link.url}
          target="_blank"
          className="hover:text-[#fafafa] flex items-center p-[10px] transition ease-in-out delay-100 hover:-translate-y-1 motion-reduce:transition motion-reduce:hover:transform"
        >
          {link.icon}
        </Link>
      </li>
    );
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between pb-24 __main`}
    >
      <Header />

      <BotCornerLinks
        renderedSocialLinks={renderedSocialLinks}
        email="frabanzoo@gmail.com"
      />

      <section className="relative flex text-gray-400 max-w-[1600px] w-full mx-auto px-[50px] md:px-[150px]">
        <div className="flex flex-col justify-between gap-10 __section_item max-w-[1000px] mx-auto w-full">
          <div className="__greetings">
            <div className="text-[15px] text-white font-mono mb-6">
              Hi, I&apos;m Fedimar Kayl 👋
            </div>
            <h1 className="font-bold text-start leading-none md:leading-[4.5rem] mb-[25px] __big_heading">
              <span className="text-[#e9e9e9] ">I design and develop </span>
              <br /> things for the web.
            </h1>

            <p className="lg:w-[500px] font-medium">
              As a full-stack web developer, I specialize in creating modern and
              user-friendly websites and web applications. With experience in
              front-end and back-end technologies such as &nbsp;
              <span className="text-white">
                HTML, CSS, JavaScript, React.JS, Next.JS, AngularJS, TypeScript,
                Node.js, Express, Laravel, CodeIgniter, Python and MySQL
              </span>
              , I have the skills needed to bring your vision to life.
            </p>
          </div>

          <div className="__check_my_work mt-[20px]">
            <button className="border rounded shadow__btn font-semibold border-gray-300 hover:border-white hover:text-white py-3 px-[2rem] text-[13px]">
              View my works!
            </button>
          </div>
        </div>
      </section>

      <div></div>
    </main>
  );
}
