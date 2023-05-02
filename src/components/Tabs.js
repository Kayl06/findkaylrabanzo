import { useState } from "react";

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
      title: `Web Developer`,
      dateOfEmployment: `Jun 2022`,
      employementUntil: `Present`,
      responsibilities: [
        `Responsible for maintaining an e-commerce website and also
        responsible for creating a mobile application for e-commerce.`,
        `Plans, design, develops and test website according to business
        needs.`,
        `Analyze requirements and implement new feature in ecommerce and/or
        in-house system.`,
        `Protects operations by keeping the information confidential.`,
        `Perform other responsibilities associated with this position as
        maybe appropriate.`,
      ],
    },
    {
      id: "dunbrae",
      companyName: `Dunbrae Subic Inc`,
      title: `Full-Stack Web Developer`,
      dateOfEmployment: `Oct 2022`,
      employementUntil: `Jun 2022`,
      responsibilities: [
        `Met with clients to discuss project requirements and
        workflow.`,
        `Planned, designed and developed in-house websites, from
        layout to function, according to client specifications.`,
        `Provide assistance to the team for data integration and
        system programming.`,
        `Plans, designs, test, and develops website according to
        business/client needs.`,
        `Implements design for new website or reconstruction of new
        website.`,
        `Responsible for studying information needs; studying system
        flow, data usage and work processes`,
        `Protects operations by keeping the information confidential.`,
        `Implementing third party API's ( 7/11 API )`,
      ],
    },
    {
      id: "idess",
      companyName: `IDESS IT`,
      title: `Full-Stack Web Developer`,
      dateOfEmployment: `Aug 2019`,
      employementUntil: `Oct 2022`,
      responsibilities: [
        `Responsible for maintaining an e-commerce website and also
        responsible for creating a mobile application for e-commerce.`,
        `Plans, design, develops and test website according to business
        needs.`,
        `Analyze requirements and implement new feature in ecommerce and/or
        in-house system.`,
        `Protects operations by keeping the information confidential.`,
        `Perform other responsibilities associated with this position as
        maybe appropriate.`,
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
        ${
          activeTab == header.href
            ? "bg-[#484848] text-white border-l-2 border-white pl-3"
            : ""
        }
        cursor-pointer
        px-[20px] py-3 duration-200 hover:text-md hover:bg-[#484848] hover:pl-3 hover:text-white hover:underline-offset-4 hover:underline hover:border-white border-l-2 border-[#8c8c8c90] 
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
        <>
          <li className="" key={idx}>
            <p>{resp}</p>
          </li>
        </>
      );
    });
    return (
      <div
        key={body.id}
        className={`__tab_body_item ${activeTab == body.id ? "" : "hidden"} `}
      >
        <h1 className="font-bold text-[16px]">
          {body.title}{" "}
          <a
            href="playasia.com"
            className="hover:underline hover:underline-offset-4 text-gray-400"
          >
            @ {body.companyName}
          </a>
        </h1>
        <div className="flex items-center text-[13px] mt-1">
          <span className=" __range">
            {body.dateOfEmployment} - {body.employementUntil}
          </span>
        </div>

        <div className="__responsibilities mt-5 ml-5 max-w-[500px] text-gray-400">
          <ul className="list-disc flex flex-col gap-2">
            {renderedResponsibilities}
          </ul>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="__tabs flex gap-5">
        <div className="__tabs_header">
          <div className="flex flex-col text-[13px] font-[500] w-max">
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
