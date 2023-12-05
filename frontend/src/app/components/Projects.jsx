import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

// Image Imports
import projectOneImg from "../assets/projects/thousandmen.svg";
import projectTwoImg from "../assets/projects/mozy.svg";
import projectThreeImg from "../assets/projects/asl.svg";
import projectFourImg from "../assets/projects/insight.svg";
import projectFiveImg from "../assets/projects/lulawn.svg";
import projectSixImg from "../assets/projects/guitto.svg";

// Source URLs
import ProjectItems from "./ProjectItems";

// Tailwind CSS Classes
const titleStyle = "text-4xl font-bold inline border-b-4  border-zinc-500";
const containerStyle = "w-full";
const maxWidthStyle = "max-w-[1240px] mx-auto px-2 py-16";
const gridStyle = "grid md:grid-cols-4 gap-8";
const buttonContainerStyle = "flex justify-center py-12";
const socialIconStyle =
  "rounded-full shadow-lg shadow-neutral-950 p-6 cursor-pointer hover:scale-110 ease-in duration-300";

const Projects = () => {
  return (
    <div id="projects" className={containerStyle}>
      <div className={maxWidthStyle}>
        <p className={titleStyle}>
          <br></br>
          <br></br>
          Projects
        </p>
        <p className="py-6"></p>

        <div className={gridStyle}>
          {/* Project 1*/}
          <ProjectItems
            title="Project 1"
            backgroundImg={projectOneImg}
            projectUrl="https://thousandmen.co/"
            tech=""
          />

          {/* Description */}
          <p>
            Title: Thousandmen.co
            <br></br>
            <br></br>
            This is a custom ecommerce website using JavaScript, HTML, and CSS.
          </p>

          {/* Project 2*/}
          <ProjectItems
            title="Project 2"
            backgroundImg={projectTwoImg}
            projectUrl="https://amoseb.com/"
            tech=""
          />

          {/*Description */}
          <p>
            Title: Amoseb.com
            <br></br>
            <br></br>
            This is a drop shipping website using JavaScript, HTML, and CSS.
          </p>

          {/* Project 3*/}
          <ProjectItems
            title="Project 3"
            backgroundImg={projectThreeImg}
            projectUrl="https://youtu.be/q1tI7GO7d1A?si=Ju90rTWD7aCWOwdQ"
            tech=""
          />

          {/* Description */}
          <p>
            Title: Hand Gesture Tracker
            <br></br>
            <br></br>
            This is a ASL tracker using Python, Next.js, and Tailwind CSS.
          </p>

          {/* Project 4*/}

          <ProjectItems
            title="Project 4"
            backgroundImg={projectFourImg}
            projectUrl="https://insitee.github.io/"
            tech=""
          />

          {/* Description */}
          <p>
            Title: Insitee.github.io
            <br></br>
            <br></br>
            This is an award-winning wesbite using JavaScript, HTML, and
            Boostrap.
          </p>

          {/* Project 5*/}

          <ProjectItems
            title="Project 5"
            backgroundImg={projectFiveImg}
            projectUrl="https://lulawn.vercel.app/"
            tech=""
          />

          {/* Description */}
          <p>
            Title: Lucien Lawn Services
            <br></br>
            <br></br>
            This is a custom business website using Next.js and Tailwind CSS.
          </p>

          {/* Project 6*/}

          <ProjectItems
            title="Project 6"
            backgroundImg={projectSixImg}
            projectUrl="https://guitto-eta.vercel.app/"
            tech=""
          />

          {/* Description */}
          <p>
            Title: Guitto Transportation
            <br></br>
            <br></br>
            This is a custom business website using Next.js and Tailwind CSS.
          </p>
        </div>

        <br></br>
        <br></br>

        <div className={buttonContainerStyle}>
          <Link legacyBehavior href="/more">
            <a>
              <div className={socialIconStyle}>View More</div>
            </a>
          </Link>
        </div>
      </div>

      {/* Scroll Up Button */}
      {/* <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#0a192f]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div> */}
      {/* Button Ends Here */}
    </div>
  );
};

export default Projects;
