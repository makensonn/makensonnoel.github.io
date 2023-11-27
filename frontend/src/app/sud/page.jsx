import Image from "next/image";
import React from "react";
import sudImg from "../public/assets/projects/sudoku.png"; //Tic Tac Toe
import SudokuGame from "../components/Sudoku";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

const SudokuSolverPage = () => {
  return (
    <div className="w-full h-screen">
      {/*Header*/}
      <div className="w-full h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute"
          layout="fill"
          objectFit="cover"
          src={sudImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Sudoku</h2>
          <h3>JavaScript</h3>
        </div>
      </div>
      {/*Header*/}

      {/* Project Overview */}
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Sudoku</h2>
          <br></br>
          <SudokuGame />

          <br></br>
          <br></br>
          <h2>Overview</h2>
          <p>
            Created a Sudoku game using JavaScript and Tailwind CSS. The Sudoku
            game allows users to input numbers into a 9x9 grid, aiming to
            complete the grid with numbers from 1 to 9 without any repetition in
            rows, columns, or 3x3 boxes. The game provides a user-friendly
            interface for solving Sudoku puzzles.
          </p>

          <a
            href="https://github.com/makensonn/makensonn.github.io/blob/master/components/Sudoku.jsx"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Source Code</button>
          </a>
        </div>
        {/*Project Overview*/}

        {/*Technologies*/}
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Technologies */}

      {/* Back Button */}
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
      {/* Back Button */}
    </div>
  );
};

export default SudokuSolverPage;
