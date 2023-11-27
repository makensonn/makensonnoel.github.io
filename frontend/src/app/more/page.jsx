import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

//Image

import aslImg from "../public/assets/projects/asl.png"; //ASL Hand Tracker
import ticImg from "../public/assets/projects/tictactoe.png"; //TicTacToe
import sudImg from "../public/assets/projects/sudoku.png"; //ASL Hand Tracker
import ecommImg from "../public/assets/projects/ecomm.png"; //TicTacToe

//Links
const aslLink = "https://www.youtube.com/watch?v=q1tI7GO7d1A"; //ASL Hand Tracker
const guideLink = "https://makenson.com/cof/"; //Guide
const visualsLink = "https://makenson.com/art/"; //Visuals

//Source
const aslSource = "https://github.com/makensonn/asl"; //ASL Hand Tracker
const ticSource =
  "https://github.com/makensonn/makensonn.github.io/blob/master/components/TicTacToe.jsx"; //ASL Hand Tracker
const sudSource = "https://github.com/makensonn/Sudoku-solver"; //Sudoku Solver
const ecommSource = "https://makenson.com/ecomm"; //ASL Hand Tracker

import ProjectItem from "../components/ProjectItem";
import ProjectItems from "../components/ProjectItems";

const titleStyle =
  "text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500";

const gridOld = "grid md:grid-cols-2 gap-8";

const More = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className={titleStyle}>
          <br></br>
          <br></br>Projects
        </p>
        <p className="py-6"></p>

        <div className="grid md:grid-cols-1 gap-8">
          {/*    <ProjectItem
            title='E-Commerce'
            backgroundImg={ecommImg}
            projectUrl='/ecomm'
            sourceUrl={ecommSource}
            tech='Next.js'
          />

          <ProjectItem
            title='ASL HT'
            backgroundImg={aslImg}
            projectUrl='/asl'
            sourceUrl={aslSource}
            tech='Python'
          />

          <ProjectItem
            title='Sudoku'
            backgroundImg={sudImg}
            projectUrl='/sud'
            sourceUrl={sudSource}
            tech='Java'
  /> */}

          <ProjectItem
            title="TicTacToe"
            backgroundImg={ticImg}
            projectUrl="/tic"
            sourceUrl={ticSource}
            tech="JSX"
          />
        </div>
      </div>

      {/* Scroll Up Button */}
      <div className="flex justify-center py-12">
        <Link href="/#projects">
          <a>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleLeft
                className="text-[#0a192f]"
                size={30}
              />
            </div>
          </a>
        </Link>
      </div>
      {/* Button Ends Here */}
    </div>
  );
};

export default More;
