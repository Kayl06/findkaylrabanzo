import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiFacebook,
} from "react-icons/fi";
import Link from "next/link";
import Header from "../components/Header";
import BotCornerLinks from "@/components/BotCornerLinks";
import { Fragment } from "react";

export default function Home() {
  const socialLinks = [
    {
      url: "https://www.linkedin.com/in/frabanzo/",
      name: "LinkedIn",
      icon: <FiLinkedin className="text-[24px] font-bold" />,
    },
    {
      url: "https://github.com/Kayl06",
      name: "GitHub",
      icon: <FiGithub className="text-[24px]" />,
    },
    {
      url: "https://www.instagram.com/kangkongkayl/",
      name: "Instagram",
      icon: <FiInstagram className="text-[24px]" />,
    },
    {
      url: "https://www.twitter.com/KangkongKayl",
      name: "Twitter",
      icon: <FiTwitter className="text-[24px]" />,
    },
    {
      url: "https://www.facebook.com/kayl06",
      name: "Facebook",
      icon: <FiFacebook className="text-[24px]" />,
    },
  ];

  const techStacks = [
    {
      name: "HTML",
      link: "https://",
    },
    {
      name: "CSS",
      link: "https://",
    },
    {
      name: "TailwindCSS",
      link: "https://",
    },
    {
      name: "Bootstrap",
      link: "https://",
    },
    {
      name: "JavaScript",
      link: "https://",
    },
    {
      name: "React.JS",
      link: "https://",
    },
    {
      name: "Next.JS",
      link: "https://",
    },
    {
      name: "AngularJS",
      link: "https://",
    },
    {
      name: "TypeScript",
      link: "https://",
    },
    {
      name: "ExpressJS",
      link: "https://",
    },
    {
      name: "PHP Native",
      link: "https://",
    },
    {
      name: "Laravel",
      link: "https://",
    },
    {
      name: "CodeIgniter",
      link: "https://",
    },
    {
      name: "Python",
      link: "https://",
    },
    {
      name: "MySQL",
      link: "https://",
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

  const renderedTechStacks = techStacks.map((techStack, index) => {
    let separator = ", ";

    if (index == techStacks.length - 2) {
      separator = " and ";
    }

    if (index == techStacks.length - 1) {
      separator = " ";
    }

    return (
      <Fragment key={index}>
        <Link
          href={techStack.link}
          className="hover:underline hover:underline-offset-4 transition hover:-translate-y-1 hover:scale-110 duration-300 "
          target="_blank"
        >
          {techStack.name}
        </Link>
        {separator}
      </Fragment>
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

      <section className="__main_section mt-[100px] lg:mt-0  relative flex flex-col justify-center text-gray-400 max-w-[1600px] w-full mx-auto px-[50px] md:px-[100px] lg:px-[150px]">
        <div className="flex flex-col justify-between gap-10 __hero_section max-w-[1000px] mx-auto w-full">
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
                {/* HTML, CSS, TailwindCSS, Bootstrap, JavaScript, React.JS,
                Next.JS, AngularJS, TypeScript, Node.JS, Express, PHP Native,
                Laravel, CodeIgniter, Python and MySQL */}

                {renderedTechStacks}
              </span>
              , I have the skills needed to bring your vision to life.
            </p>
          </div>

          <div className="__check_my_work mt-[20px]">
            <button className="border uppercase rounded shadow__btn font-semibold border-gray-300 hover:border-white hover:text-white py-3 px-[2rem] text-[13px]">
              View my works!
            </button>
          </div>
        </div>
      </section>

      <section></section>
    </main>
  );
}
