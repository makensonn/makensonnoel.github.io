import Image from "next/image";
import Link from "next/link";
import React from "react";

// Tailwind CSS classes as constants for ProjectItems component
const projectItemContainerStyle =
  "relative flex items-center justify-center h-auto w-full shadow-xl shadow-neutral-950 rounded-xl group hover:bg-gradient-to-r from-[#c2c2c2] to-[#e4e4e4]";
const projectImageStyle = "rounded-xl group-hover:opacity-10";
const projectDetailsContainerStyle =
  "hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]";
const projectTitleStyle = "text-2xl text-white tracking-wider text-center";
const projectTechStyle = "pb-4 pt-2 text-white text-center";
const projectLinkStyle =
  "text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer";

const ProjectItems = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <div className={projectItemContainerStyle}>
      <Image className={projectImageStyle} src={backgroundImg} alt="/" />
      <div className={projectDetailsContainerStyle}>
        <h3 className={projectTitleStyle}>{title}</h3>
        <p className={projectTechStyle}>{tech}</p>
        <a href={projectUrl} target="_blank">
          <p className={projectLinkStyle}>View</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
