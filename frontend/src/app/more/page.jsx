import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

// Image Imports
import projectOneeImg from "../assets/projects/thousandmen.svg";
import projectOneImg from "../assets/projects/insight.svg";
import projectTwoImg from "../assets/projects/mozy.svg";
import projectThreeImg from "../assets/projects/asl.svg";
//import projectFourImg from "../assets/projects/weatherfacts.svg";

// Source URLs
const projectOneeSource = "https://github.com/makensonn/weatherfacts";
const projectOneSource = "https://github.com/makensonn/float";
const projectTwoSource = "https://github.com/makensonn/tictactoe";
const projectThreeSource = "https://github.com/makensonn/todolist";
const projectFourSource = "https://github.com/makensonn/weatherfacts";

import ProjectItems from "../components/ProjectItems";

// Tailwind CSS Classes
const titleStyle = "text-4xl font-bold inline border-b-4  border-zinc-500";
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
          Projects
        </p>
        <p className="py-6"></p>

        <div className={gridStyle}>
          {/* Project 1*/}
          <ProjectItems
            title="Project 1"
            backgroundImg={projectOneeImg}
            projectUrl="https://thousandmen.co/"
            sourceUrl={projectOneeSource}
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
            sourceUrl={projectOneeSource}
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
            projectUrl="/asl"
            sourceUrl={projectOneeSource}
            tech=""
          />

          {/* Description */}
          <p>
            Title: Hand Gesture Tracker
            <br></br>
            <br></br>
            This is an ASL tracker using Python, JavaScript, HTML, and CSS.
          </p>

          {/* Project 4*/}

          <ProjectItems
            title="Project 4"
            backgroundImg={projectOneImg}
            projectUrl="https://insitee.github.io/"
            sourceUrl={projectOneSource}
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
            backgroundImg={projectOneImg}
            projectUrl="https://insitee.github.io/"
            sourceUrl={projectOneSource}
            tech=""
          />

          {/* Description */}
          <p>
            Title: Lucien Lawn Services
            <br></br>
            <br></br>
            This is an award-winning product landing page for an accessibility
            app developed at a hackathon.
          </p>

          {/* Project 6*/}

          <ProjectItems
            title="Project 6"
            backgroundImg={projectOneImg}
            projectUrl="https://insitee.github.io/"
            sourceUrl={projectOneSource}
            tech=""
          />

          {/* Description */}
          <p>
            Title: Guitto Transportation
            <br></br>
            <br></br>
            This is an award-winning product landing page for an accessibility
            app developed at a hackathon.
          </p>

          {/* Project 7*/}

          <ProjectItems
            title="Project 7"
            backgroundImg={projectOneImg}
            projectUrl="https://insitee.github.io/"
            sourceUrl={projectOneSource}
            tech=""
          />

          {/* Description */}
          <p>
            Title: Insitee.github.io
            <br></br>
            <br></br>
            This is an award-winning product landing page for an accessibility
            app developed at a hackathon.
          </p>

          {/* Project 8*/}

          <ProjectItems
            title="Project 8"
            backgroundImg={projectOneImg}
            projectUrl="https://insitee.github.io/"
            sourceUrl={projectOneSource}
            tech=""
          />

          {/* Description */}
          <p>
            Title: Insitee.github.io
            <br></br>
            <br></br>
            This is an award-winning product landing page for an accessibility
            app developed at a hackathon.
          </p>

          {/* Project 9*/}

          <ProjectItems
            title="Project 9"
            backgroundImg={projectOneImg}
            projectUrl="https://insitee.github.io/"
            sourceUrl={projectOneSource}
            tech=""
          />

          {/* Description */}
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
      <div className="flex justify-center py-12">
        <Link legacyBehavior href="/">
          <a>
            <div className="rounded-full shadow-lg shadow-neutral-950  p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleLeft className="" size={30} />
            </div>
          </a>
        </Link>
      </div>
      {/* Button Ends Here */}
    </div>
  );
};

export default Projects;
