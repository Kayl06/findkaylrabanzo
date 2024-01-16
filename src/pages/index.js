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
import { Fragment, useRef } from "react";
import Tabs from "@/components/Tabs";
import Works from "@/components/Works";
import FadeInView from "@/components/FadeInView";
import "transition-style";
import { Variants, motion } from "framer-motion";

const aboutMeVariant = {
  offscreen: {
    y: 150,
    opacity: 0, // Optionally set opacity to 0 for a fade-in effect
  },
  onscreen: {
    y: 0,
    opacity: 1, // Optionally set opacity to 1 for a fade-in effect
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1,
    },
  },
};


const experienceVariant = {
  offscreen: {
    x: -1500,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: .5,
      duration: 1,
    },
  },
};

const fadeInVariant = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1, // Adjust the duration as needed
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1, // Adjust the duration as needed
    },
  },
};


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
      className={`relative flex min-h-screen flex-col items-center justify-between pb-10 __main`}
    >
      <Header />

      <BotCornerLinks
        renderedSocialLinks={renderedSocialLinks}
        email="frabanzoo@gmail.com"
      />
      <section className="__main_section text-md relative flex flex-col justify-center text-gray-400 max-w-[1600px] w-full mx-auto px-[50px] md:px-[100px] lg:px-[150px]">
        <section className="flex flex-col justify-center gap-10 __hero_section max-w-[1000px] min-h-screen mx-auto w-full">
          <div
            className="__greetings">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="text-[15px] text-white font-mono mb-6"
            >
              Hi, I&apos;m Fedimar Kayl 👋
            </motion.div>
            <motion.div
              initial={{ x: -1200 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <h1 className="font-bold text-start leading-none md:leading-[4.5rem] mb-[25px] __big_heading">
                <span className="text-[#e9e9e9] ">I design and develop </span>
                <br /> things for the web.
              </h1>
            </motion.div>

            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
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
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.9,
            }}
          >
            <div className="__check_my_work mt-[20px]">
              <a
                href="#work"
                className="border uppercase rounded-full shadow__btn font-semibold border-gray-300 hover:border-white hover:text-white py-3 px-[2rem] text-[13px]"
              >
                View my works!
              </a>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="__about pt-20 max-w-[1000px] min-h-screen mx-auto w-full"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div className="" 
            variants={aboutMeVariant}>
            <h2 className="__numbered_heading flex items-center font-bold text-white after:ml-[10px] after:w-[200px] after:bg-[#9898989d] after:h-[1px]">
              About Me
            </h2>

            <div className="__inner grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div className="flex flex-col">
                <div>
                  <p className="mb-[15px]">
                    Skilled full-stack web developer with <strong className="text-white">5 years of experience</strong> designing, developing, and deploying enterprise-level applications. Proficient in
                    multiple programming languages, software development methodologies, and database management systems. Strong problem-solving skills and ability to work effectively in a team-based or individual environment.
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

              <motion.div
                initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                whileHover={{ scale: 1.1, rotate: 365 }}
              >
                <div className="__wrapper flex cursor-pointer w-full h-full lg:max-w-[500px] max-h-[450px] relative mt-10 lg:mt-0">
                  <div className="__image_wrapper flex relative">
                    <div className=" flex justify-center">
                      <img
                        src="/images/my-about-pic-1.jpg"
                        alt="ABOUT ME PICTURE"
                        className="__about_me_pic rounded-[26px] hover:scale-105  transition duration-300 ease-in mix-blend-luminosity hover:mix-blend-normal"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          id="experience"
          className="__work pt-20 max-w-[1000px] min-h-screen mx-auto w-full flex flex-col"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }} >
          <motion.div variants={experienceVariant}>
            <h2 className="__numbered_heading flex items-center font-bold text-white after:ml-[10px] after:w-[200px] after:bg-[#9898989d] after:h-[1px]">
              Where I've Worked
            </h2>

            <Tabs />
          </motion.div>
        </motion.section>

        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          id="work"
          className="__work pt-20 max-w-[1000px] min-h-screen mx-auto w-full"
        >
          <motion.div variants={experienceVariant}>
            <h2 className="__numbered_heading flex items-center font-bold text-white after:ml-[10px] after:w-[200px] after:bg-[#9898989d] after:h-[1px]">
              Some Things I’ve Built
            </h2>
          </motion.div>

          <Works />
        </motion.section>

        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            id="contact"
          >
            <motion.div
              className="__contact max-w-[600px] mb-[100px] mx-auto block text-center py-20">
                <h4 className="__numbered_heading __over-line text-[16px] flex items-center font-bold text-white after:ml-[10px] after:w-[200px] after:bg-[#9898989d] after:h-[1px]">
                  What's Next?
                </h4>

                <h2 className=" font-[900] text-[3em] text-white">Get In Touch</h2>

                <p className="mb-[5rem]">
                  Thanks for visiting my portfolio! If you have any questions or want
                  to discuss a project, please get in touch via my email/socials
                  listed below. Looking forward to hearing from you soon!
                </p>

                <a
                  href="mailto:frabanzoo@gmail.com"
                  target="_blank"
                  className="text-center border rounded shadow__btn font-normal border-gray-300 hover:border-white hover:text-white py-5 px-[1.5rem] text-[13px]"
                >
                  Say, Hello!
                </a>
            </motion.div>
            
          </motion.section>
        
      </section>
      <section></section>

      <footer className="text-center flex flex-col text-gray-300">
        <div className="__social_links_mob flex md:hidden">
          <ul className="flex gap-[15px] text-gray-400">
            {renderedSocialLinks}
          </ul>
        </div>
        <a href="" className="text-[14px] font-mono hover:text-white">
          Built by Fedimar Kayl Rabanzo
        </a>
      </footer>
    </main>
  );
}
