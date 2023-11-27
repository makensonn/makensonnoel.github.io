import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

// Image Imports
import projectOneeImg from "../public/assets/projects/thousandmen.png";
import projectOneImg from "../public/assets/projects/insight.png";
import projectTwoImg from "../public/assets/projects/mozy.png";
import projectThreeImg from "../public/assets/projects/asl.png";
import projectFourImg from "../public/assets/projects/weatherfacts.png";

// Source URLs
const projectOneeSource = "https://github.com/makensonn/weatherfacts";
const projectOneSource = "https://github.com/makensonn/float";
const projectTwoSource = "https://github.com/makensonn/tictactoe";
const projectThreeSource = "https://github.com/makensonn/todolist";
const projectFourSource = "https://github.com/makensonn/weatherfacts";

import ProjectItem from "./ProjectItem";
import ProjectItems from "./ProjectItems";

// Tailwind CSS Classes
const titleStyle =
  "text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500";
const containerStyle = "w-full";
const maxWidthStyle = "max-w-[1240px] mx-auto px-2 py-16";
const gridStyle = "grid md:grid-cols-4 gap-8";

const Projects = () => {
  return (
    <div id="projects" className={containerStyle}>
      <div className={maxWidthStyle}>
        <p className={titleStyle}>
          <br></br>
          <br></br>
          Experience
        </p>
        <p className="py-6"></p>

        <div className={gridStyle}>
          <ProjectItems
            title="E-Commerce"
            backgroundImg={projectOneeImg}
            projectUrl="https://thousandmen.co/"
            sourceUrl={projectOneeSource}
            tech=""
          />

          {/* Project Description */}
          <p>
            Title: Thousandmen.co
            <br></br>
            <br></br>
            Custom E-Commerce site.
          </p>

          <ProjectItems
            title="E-Commerce"
            backgroundImg={projectTwoImg}
            projectUrl="https://amoseb.com/"
            sourceUrl={projectOneeSource}
            tech=""
          />

          {/* Project Description */}
          <p>
            Title: Amoseb.com
            <br></br>
            <br></br>
            Custom E-Commerce site.
          </p>

          <ProjectItems
            title="ABC ASL"
            backgroundImg={projectThreeImg}
            projectUrl="/asl"
            sourceUrl={projectOneeSource}
            tech=""
          />

          {/* Project Description */}
          <p>
            Title: Hand Gesture Tracker
            <br></br>
            <br></br>
            This is an application that translates American sign language hand
            gestures to subtitles in real-time.
          </p>

          <ProjectItems
            title="Insight"
            backgroundImg={projectOneImg}
            projectUrl="https://insitee.github.io/"
            sourceUrl={projectOneSource}
            tech=""
          />

          {/* Project Description */}
          <p>
            Title: Insitee.github.io
            <br></br>
            <br></br>
            This is an award-winning product landing page for an accessibility
            app developed at a hackathon.
          </p>
        </div>

        <br></br>
        <br></br>

        <div className="flex justify-center items-center">
          <a
            href="https://github.com/makensonn"
            className="flex items-center h-full underline"
          >
            View More
          </a>
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
