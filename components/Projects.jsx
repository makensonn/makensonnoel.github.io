import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

//Image
import ticImg from '../public/assets/projects/tictactoe.png'; //TicTacToe
import sudImg from '../public/assets/projects/sudoku.png'; //ASL Hand Tracker
import ecommImg from '../public/assets/projects/ecomm.png'; //TicTacToe\

import artImg from '../public/assets/projects/art.png'; //Art
import dontforgetImg from '../public/assets/projects/dontforget.png'; //Dont forget
import gymImg from '../public/assets/projects/gym.png'; //Gym
import cofImg from '../public/assets/projects/cof.png'; //Cof
import scImg from '../public/assets/projects/sc.png'; //Speed Converter
import portfolioImg from '../public/assets/projects/portfolio.png'; //TicTacToe\



//Source
const aslSource ='https://github.com/makensonn/asl'; //ASL Hand Tracker
const ticSource ='https://github.com/makensonn/makensonn.github.io/blob/master/components/TicTacToe.jsx'; //TicTacToe
const sudSource ='https://github.com/makensonn/makensonn.github.io/blob/master/components/Sudoku.jsx'; //Sudoku Solver
const ecommSource ='/ecomm'; //Ecommerce Site

import ProjectItem from './ProjectItem';
import ProjectItems from './ProjectItems';

const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const gridOld = 'grid md:grid-cols-2 gap-8'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className = {titleStyle}><br></br><br></br>Projects</p>
        <p className='py-6'></p>

        <div className='grid md:grid-cols-3 gap-8'>

          <ProjectItem
            title='Coding is Fun'
            backgroundImg={cofImg}
            projectUrl='/ecomm'
            sourceUrl={ecommSource}
            tech='JavaScript'
          />

          <ProjectItem
            title='Tic Tac Toe'
            backgroundImg={artImg}
            projectUrl='/tic'
            sourceUrl={ticSource}
            tech='JavaScript'
          /> 

          <ProjectItem
            title='Sudoku Game'
            backgroundImg={gymImg}
            projectUrl='/sud'
            sourceUrl={sudSource}
            tech='JavaScript'
          />

          <ProjectItem
            title='E-Commerce'
            backgroundImg={dontforgetImg}
            projectUrl='/ecomm'
            sourceUrl={ecommSource}
            tech='JavaScript'
          />

          <ProjectItem
            title='Tic Tac Toe'
            backgroundImg={scImg}
            projectUrl='/tic'
            sourceUrl={ticSource}
            tech='JavaScript'
          /> 

          <ProjectItem
            title='Sudoku Game'
            backgroundImg={portfolioImg}
            projectUrl='/sud'
            sourceUrl={sudSource}
            tech='JavaScript'
          />



        </div>
      {/*  <br></br><br></br>

        <a href='https://github.com/makensonn' target="_blank" className="flex items-center h-full underline">
          View More
  </a> */}

      </div>

      {/* Scroll Up Button */}
      <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#0a192f]'
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

export default Projects;
