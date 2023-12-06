import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import Navbar from "../components/Navbar";

// Image Imports
import projectOneImg from "../assets/projects/thousandmen.svg";
import projectTwoImg from "../assets/projects/mozy.svg";
import projectThreeImg from "../assets/projects/asl.svg";
import projectFourImg from "../assets/projects/insight.svg";
import projectFiveImg from "../assets/projects/lulawn.svg";
import projectSixImg from "../assets/projects/guitto.svg";
import projectSoonImg from "../assets/projects/soon.svg";

// Source URLs
import ProjectItems from "../components/ProjectItems";

// Tailwind CSS Classes
const titleStyle = "text-4xl font-bold inline border-b-4  border-zinc-500";
const containerStyle = "w-full";
const maxWidthStyle = "max-w-[1240px] mx-auto px-2 py-16";
const gridStyle = "grid md:grid-cols-4 gap-8";

const soon = "Coming Soon";
const comingSoon = "This project is coming soon";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div id="projects" className={containerStyle}>
        <div className={maxWidthStyle}>
          <p className={titleStyle}>
            <br></br>
            <br></br>
            More Projects
          </p>
          <p className="py-6"></p>

          <div className={gridStyle}>
            {/* Project 1*/}
            <ProjectItems
              title="Project 1"
              backgroundImg={projectSoonImg}
              projectUrl="https://github.com/makensonn?tab=repositories&q=&type=&language=javascript&sort="
              tech=""
            />

            {/* Description */}
            <p>
              Title: JavaScript
              <br></br>
              <br></br>
              {comingSoon}
            </p>

            {/* Project 2*/}
            <ProjectItems
              title="Project 2"
              backgroundImg={projectSoonImg}
              projectUrl="https://github.com/makensonn?tab=repositories&q=&type=&language=python&sort="
              tech=""
            />

            {/*Description */}
            <p>
              Title: Python
              <br></br>
              <br></br>
              {comingSoon}
            </p>

            {/* Project 3*/}
            <ProjectItems
              title="Project 3"
              backgroundImg={projectSoonImg}
              projectUrl="https://github.com/makensonn?tab=repositories&q=&type=&language=java&sort="
              tech=""
            />

            {/* Description */}
            <p>
              Title: Java
              <br></br>
              <br></br>
              {comingSoon}
            </p>

            {/* Project 4*/}

            <ProjectItems
              title="Project 4"
              backgroundImg={projectSoonImg}
              projectUrl="https://github.com/makensonn?tab=repositories&q=&type=&language=c%2B%2B&sort="
              tech=""
            />

            {/* Description */}
            <p>
              Title: C++
              <br></br>
              <br></br>
              {comingSoon}
            </p>

            {/* Project 5*/}

            <ProjectItems
              title="Project 5"
              backgroundImg={projectSoonImg}
              projectUrl="https://github.com/makensonn"
              tech=""
            />

            {/* Description */}
            <p>
              Title: Sandbox
              <br></br>
              <br></br>
              {comingSoon}
            </p>

            {/* Project 6*/}

            <ProjectItems
              title="Project 6"
              backgroundImg={projectSoonImg}
              projectUrl="/"
              tech=""
            />

            {/* Description */}
            <p>
              Title: Blog
              <br></br>
              <br></br>
              {comingSoon}
            </p>
          </div>

          <br></br>
          <br></br>
        </div>

        {/* Scroll Up Button */}
        <div className="flex justify-center py-12">
          <Link legacyBehavior href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-neutral-950  p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleLeft className="" size={30} />
              </div>
            </a>
          </Link>
          {/* <Link legacyBehavior href="/">
          <a>
            <div className="rounded-full shadow-lg shadow-neutral-950  p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleLeft className="" size={30} />
            </div>
          </a>
  </Link> */}
        </div>
        {/* Button Ends Here */}
      </div>
    </>
  );
};

export default Projects;
