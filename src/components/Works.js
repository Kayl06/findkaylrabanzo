import { Fragment } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Works() {
  const myProjects = [
    {
      name: "PariServe Application",
      thumbnailUrl:
        "https://findkaylrabanzo.netlify.app/css/images/pariserve.JPG",
      description:
        "Web & Mobile Event Scheduler: Crafted for St. Columban Parish using Ionic Framework, this app streamlines event planning and community engagement.",
      techs: [
        {
          name: "Ionic 3",
          icon: "",
        },
        {
          name: "TypeScript",
          icon: "",
        },
        {
          name: "HTML5",
          icon: "",
        },
        {
          name: "CSS3",
          icon: "",
        },
        {
          name: "JavaScript",
          icon: "",
        },
        {
          name: "PHP",
          icon: "",
        },
        {
          name: "MySQL",
          icon: "",
        },
      ],
      links: [
        {
          url: "https://github.com/Kayl06/PariServe",
          name: "GitHub",
          icon: <FiGithub width={20} height={20} />,
        },
        {
          url: "https://drive.google.com/drive/folders/1ptN3ZT1l2IKfNGh7x28YB7ttMO6Vrzl0?usp=sharing",
          name: "External",
          icon: <FiExternalLink />,
        },
      ],
    },
    {
      name: "Custom Template using ReactJS",
      thumbnailUrl:
        "/images/my-work-2.png",
      description:
      `"React-Based HTML and CSS Theme Template" is a modern and versatile web development resource designed to streamline your web development process.`,
      techs: [
        {
          name: "ReactJS",
          icon: "",
        },
        {
          name: "TailwindCSS",
          icon: "",
        },
        {
          name: "HTML5",
          icon: "",
        },
        {
          name: "CSS3",
          icon: "",
        },
        {
          name: "JavaScript",
          icon: "",
        }
      ],
      links: [
        {
          url: "https://github.com/Kayl06/figma-to-react",
          name: "GitHub",
          icon: <FiGithub width={20} height={20} />,
        },
        {
          url: "https://figma-to-react-murex.vercel.app/",
          name: "External",
          icon: <FiExternalLink />,
        },
      ],
    },
  ];

  const renderedProjects = myProjects.map((project, index) => {
    const renderedTechs = project.techs.map((tech, indx) => {
      return (
        <Fragment key={indx}>
          <li>{tech.name}</li>
        </Fragment>
      );
    });

    const renderedLinks = project.links.map((link, indx) => {
      console.log(link);
      return (
        <Fragment key={indx}>
          <a
            href={`${link.url}`}
            aria-label={`${link.name} Link`}
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-white"
          >
            {link.icon}
          </a>
        </Fragment>
      );
    });
    return (
      <Fragment key={index}>
        <div
          className={`__project_card grid grid-cols-12 gap-[10px] items-center mb-[100px]`}
        >
          <div className={`__project_content relative`}>
            <div>
              <div className="leading-5 mb-[2em]">
                <p className="__project_overline text-[.8em] mb-[.5em] text-slate-400">
                  Featured Project
                </p>
                <h1 className="font-bold text-[1.4em] text-white">
                  {project.name}
                </h1>
              </div>
              <div className="__project_description p-[25px] rounded z-[2] relative shadow-lg">
                <p className="text-white text-sm font-normal">
                  {project.description}
                </p>
              </div>
              <ul className="__project-tech-list flex flex-wrap mt-[25px] mb-[10px]">
                {renderedTechs}
              </ul>
              <div className="__project-links flex">{renderedLinks}</div>
            </div>
          </div>

          <div
            className="__project_image z-[1] bg-slate-400 rounded-[10px] "
            style={{}}
          >
            <div className="__image_wrapper rounded-[10px] cursor-pointer w-full max-w-full relative overflow-hidden before:w-full before:h-full before:mix-blend-screen before:bg-slate-900 before:absolute before:inset-0 before:z-[3]">
              <div className="max-w-[700px] block">
                <img
                  src={`${project.thumbnailUrl}`}
                  className="h-full max-w-full static object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  });

  return (
    <>
      <div className="__project_cards mb-20 grid">{renderedProjects}</div>
    </>
  );
}
