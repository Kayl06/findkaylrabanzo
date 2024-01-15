import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { Fragment } from "react";

export default function Tabs({ tabHeaders = [], tabBody = [] }) {
  const [activeTab, setActiveTab] = useState("play_asia");

  tabHeaders = [
    {
      href: "#play_asia",
      name: "Playasia",
    },
    {
      href: "#dunbrae",
      name: "Dunbrae Subic Inc.",
    },
    {
      href: "#idess",
      name: "IDESS IT",
    },
  ];

  tabBody = [
    {
      id: "play_asia",
      companyName: `Playasia`,
      website: `https://playasia.com/`,
      title: `Web Developer`,
      dateOfEmployment: `Jun 2022`,
      employementUntil: `Present`,
      responsibilities: [
        "Maintain and enhance an e-commerce website, and admin system.",
        "Integrate new functions and features to meet client goals and enhance internal efficiency.",
        "Planned, designed, developed, and maintained both the front-end and back-end of the e-commerce website and admin system.",
        "Understand client requirements and business needs, and plan the development of systems and applications accordingly.",
        "Provide technical support via calls or chats and offer assistance to the internal team as needed.",
        "Proactively identify issues and improvement opportunities, and communicate findings through appropriate channels.",
        "Collaborate with the product team or CEO to brainstorm and create new features.",
        "Discover and fix programming bugs to ensure smooth application functionality.",
        "Protect business operations by maintaining the confidentiality of information.",
        "Optimize applications for maximum speed, scalability, and performance."
      ],
    },
    {
      id: "dunbrae",
      website: `https://dunbraesubic.ph/`,
      companyName: `Dunbrae Subic Inc`,
      title: `Full-Stack Web Developer`,
      dateOfEmployment: `Oct 2022`,
      employementUntil: `Jun 2022`,
      responsibilities: [
        "Conducted meetings with the president and managers to discuss project requirements and workflow.",
        "Implemented new functions, features, and development techniques in the production process to achieve client goals, creative objectives, and enhance internal efficiencies.",
        "Collaborated with the Team Lead and President to brainstorm and create client web application systems.",
        "Designed and implemented a custom Customer Satisfaction Survey with employee dashboards.",
        "Executed the design for new websites or the reconstruction of existing ones.",
        "Implemented third-party APIs (e.g., 7/11 API) to automate manual processes.",
        "Planned, designed, and developed in-house websites from layout to function, aligning with business specifications.",
        "Provided assistance to the team for data integration and system programming.",
        "Identified and resolved programming bugs to ensure the smooth functionality of applications.",
        "Studied information needs, system flow, data usage, and work processes to improve efficiency.",
        "Protected operations by maintaining confidentiality of information."
      ],
    },
    {
      id: "idess",
      website: `https://www.idessit.com/`,
      companyName: `IDESS IT`,
      title: `Full-Stack Web Developer`,
      dateOfEmployment: `Aug 2019`,
      employementUntil: `Oct 2022`,
      responsibilities: [
        "Ensured brand consistency by overseeing adherence to guidelines in all online content, including e-Learning materials and computer-based testing tools.",
        "Collaborated with the team to analyze pre-project plans and assess technical requirements, developing functioning and user-friendly computer interfaces aligned with business goals.",
        "Migrate and upgrade the old system to the new and modern design system.",
        "Analyzed, designed, and developed websites according to business/client needs.",
        "Executed the design for new websites or the reconstruction of existing ones, maintaining alignment with brand and business objectives.",
        "Implemented online synchronization between web applications and desktop applications, enhancing accessibility and user experience."

      ],
    },
  ];

  const handleOnTabChange = (activeTab) => {
    setActiveTab(activeTab);
  };

  const renderedTabHeaders = tabHeaders.map((header) => {
    header.href = header.href.replace(/[^\w\s]/gi, "");
    return (
      <a
        key={header.href}
        className={`
        ${activeTab == header.href
            ? "bg-[#484848] text-white md:border-l-2 border-white"
            : ""
          }
        cursor-pointer
        px-[20px] py-3 duration-300 hover:text-md hover:bg-[#484848] hover:text-white hover:underline-offset-4 hover:underline hover:border-white md:border-l-2 md:border-b-0 border-[#8c8c8c90] border-l-0 border-b-2
        `}
        onClick={() => handleOnTabChange(header.href)}
      >
        {header.name}
      </a>
    );
  });

  const renderedTabBody = tabBody.map((body) => {
    const renderedResponsibilities = body.responsibilities.map((resp, idx) => {
      return (
        <Fragment key={idx}>
          <li className=" before:content-['▹'] before:absolute before:top-0 before:left-0 relative before:text-[16px] before:text-white pl-[30px]">
            {resp}
          </li>
        </Fragment>
      );
    });
    return (
      <div
        key={body.id}
        className={`__tab_body_item ${activeTab == body.id ? "" : "hidden"} `}
      >
        <h1 className="font-bold text-[22px]">
          {body.title}
          &nbsp;
          <a
            href={body.website}
            target="_blank"
            className="hover:underline hover:underline-offset-4 text-gray-400"
          >
            @{body.companyName}
          </a>
        </h1>
        <div className="flex items-center text-[14px] mt-1">
          <span className=" __range">
            {body.dateOfEmployment} - {body.employementUntil}
          </span>
        </div>

        <div className="__responsibilities mt-5 max-w-[500px] text-gray-400">
          <ul className=" flex flex-col gap-3 relative ">
            {renderedResponsibilities}
          </ul>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="__tabs flex flex-col gap-5 md:flex-row">
        <div className="__tabs_header">
          <div className="flex md:flex-col flex-row text-[13px] font-[500] w-max ">
            {renderedTabHeaders}
          </div>
        </div>

        <div className="__tabs_body text-white text-[14px]">
          {renderedTabBody}
        </div>
      </div>
    </>
  );
}
