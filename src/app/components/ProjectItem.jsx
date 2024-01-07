import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl, sourceUrl }) => {
  // Tailwind CSS Classes
  const containerStyle =
    "relative flex items-center justify-center h-auto w-full shadow-xl shadow-neutral-950 rounded-xl group hover:bg-gradient-to-r from-[#c2c2c2] to-[#e4e4e4]";
  const imageStyle = "rounded-xl group-hover:opacity-10";
  const infoContainerStyle =
    "hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]";
  const titleStyle = "text-2xl text-white tracking-wider text-center";
  const techStyle = "pb-4 pt-2 text-white text-center";
  const buttonStyle =
    "text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer";

  return (
    <div className={containerStyle}>
      <Image className={imageStyle} src={backgroundImg} alt="/" />
      <div className={infoContainerStyle}>
        <h3 className={titleStyle}>{title}</h3>
        <p className={techStyle}>{tech}</p>
        <a href={projectUrl} target="_blank">
          <p className={buttonStyle}>View</p>
          <br></br>
        </a>
        <a href={sourceUrl} target="_blank">
          <p className={buttonStyle}>Source</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
