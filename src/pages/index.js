import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiZap,
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
      name: "React",
      link: "https://",
    },
    {
      name: "Laravel",
      link: "https://",
    },
    {
      name: "JavaScript ( ES6+ )",
      link: "https://",
    },
    {
      name: "Express.js",
      link: "https://",
    },
    {
      name: "Next.js",
      link: "https://",
    },
    {
      name: "TypeScript",
      link: "https://",
    },
    {
      name: "TailwindCSS",
      link: "https://",
    },
    {
      name: "AngularJS",
      link: "https://",
    },
    {
      name: "HTML",
      link: "https://",
    },
    {
      name: "PHP Native",
      link: "https://",
    },
    {
      name: "CSS",
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
    return (
      <Fragment key={index}>
        <div className="__tech_stack_item flex gap-2 items-center self-center cursor-pointer hover:underline hover:underline-offset-4">
          <FiZap className=" text-gray-400 font-bold" />
          <span className=" font-medium text-[13px] text-white">
            {techStack.name}
          </span>
        </div>
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

      <section className="__main_section text-md relative flex flex-col justify-center text-gray-400 max-w-[1600px] w-full mx-auto px-[50px] md:px-[100px] lg:px-[150px]">
        <div className="flex flex-col justify-center gap-10 __hero_section max-w-[1000px] min-h-screen mx-auto w-full">
          <div className="__greetings">
            <div className="text-[15px] text-white font-mono mb-6">
              Hi, I&apos;m Fedimar Kayl 👋
            </div>
            <h1 className="font-bold text-start leading-none md:leading-[4.5rem] mb-[25px] __big_heading">
              <span className="text-[#e9e9e9] ">I design and develop </span>
              <br /> things for the web.
            </h1>

            <p className="lg:w-[500px]">
              I am an experienced full-stack web developer specializing in
              modern, user-friendly websites and web applications. With
              proficiency in front-end and back-end technologies, I can bring
              your vision to life with attention to detail and a focus on
              quality.{" "}
              <span className="text-white">
                Let me help you achieve your business objectives!
              </span>
              <span className="text-white">
                {/* HTML, CSS, TailwindCSS, Bootstrap, JavaScript, React.JS,
                Next.JS, AngularJS, TypeScript, Node.JS, Express, PHP Native,
                Laravel, CodeIgniter, Python and MySQL */}

                {/* {renderedTechStacks} */}
              </span>
            </p>
          </div>

          <div className="__check_my_work mt-[20px]">
            <button className="border uppercase rounded shadow__btn font-semibold border-gray-300 hover:border-white hover:text-white py-3 px-[2rem] text-[13px]">
              View my works!
            </button>
          </div>
        </div>

        <div
          id="about"
          className="__about pt-20 max-w-[1000px] min-h-screen mx-auto w-full grid grid-cols-1 lg:grid-cols-2"
        >
          <div className="flex flex-col">
            <h2 className="__numbered_heading flex items-center font-bold text-white after:ml-[10px] after:w-[200px] after:bg-[#9898989d] after:h-[1px]">
              About Me
            </h2>

            <div>
              <p className="mb-[15px]">
                Hi! I'm Fedimar Kayl M. Rabanzo from Olongapo City, Philippines.
                For the past 3 years, I've been working as a Full-Stack Web
                Developer. I have the same background in both Front-end and
                Back-end development.
              </p>

              <p className="mb-[15px]">
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>

            <div className="__tech_stacks grid grid-cols-2 gap-4 mt-[15px]">
              {renderedTechStacks}
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <section></section>
    </main>
  );
}
