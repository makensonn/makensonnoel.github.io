import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

// Image Imports
import projectOneImg from "../assets/projects/asl.gif";
import projectTwoImg from "../assets/projects/thousand.jpg";
import projectThreeImg from "../assets/projects/mozy.jpg";
import projectFourImg from "../assets/projects/mbj.jpg";
import projectSixImg from "../assets/projects/insight.png";
import projectFiveImg from "../assets/projects/lulawn.png";

// Source URLs
import ProjectItems from "./ProjectItems";
import ProjectItem from "./ProjectItem";

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
            title="Project"
            backgroundImg={projectOneImg}
            projectUrl="/#projects"
            tech=""
          />

          {/* Description */}
          <p>
            Title: Hand Gesture Tracker
            <br></br>
            <br></br>
            This is a Open Source hand gesture tracker using
            Python, OpenCV, TensorFlow.
          </p>

          {/* Project 2*/}
          <ProjectItems
            title="Project"
            backgroundImg={projectTwoImg}
            projectUrl="https://thousandmen.co/"
            tech=""
          />

          {/* Description */}
          <p>
            Title: Thousandmen.co
            <br></br>
            <br></br>
            This is a custom designed webapp an E-Commerce business using
            Shopify & JavaScript.
          </p>

          {/* Project 3*/}
          <ProjectItems
            title="Project"
            backgroundImg={projectThreeImg}
            projectUrl="https://amoseb.com/"
            tech=""
          />

          {/*Description */}
          <p>
            Title: Amoseb.com
            <br></br>
            <br></br>
            This is a custom designed drop shipping webapp for an E-Commerce business using
            Shopify & JavaScript.
          </p>

          {/* Project 4*/}

          <ProjectItems
            title="Project"
            backgroundImg={projectFourImg}
            projectUrl="https://mbjllc.store/"
            tech=""
          />

          {/* Description */}
          <p>
            Title: Mbjllc.store
            <br></br>
            <br></br>
            This is a custom designed drop shipping web app for an E-Commerce business using
            Shopify & JavaScript.
          </p>

          {/* Project 5*/}

          <ProjectItems
            title="Project"
            backgroundImg={projectFiveImg}
            projectUrl="https://lulawn.vercel.app/"
            tech=""
          />

          {/* Description */}
          <p>
            Title: Lucien Lawn Services
            <br></br>
            <br></br>
            This is a custom landing page using Next.js.
          </p>

          {/* Project 6*/}

          <ProjectItems
            title="Project"
            backgroundImg={projectSixImg}
            projectUrl="https://insitee.github.io/"
            tech=""
          />

          {/* Description */}
          <p>
            Title: Insitee.github.io
            <br></br>
            <br></br>
            This is an award-winning wesbite for a hackathon using
            JavaScript, HTML, and CSS.
          </p>
        </div>

        <br></br>
        <br></br>

        {/*<div className={buttonContainerStyle}>
          <Link legacyBehavior href="/more">
            <a>
              <div className={socialIconStyle}>View More</div>
            </a>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
