import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';



//Image

import aslImg from '../public/assets/projects/asl.png'; //ASL Hand Tracker
import ticImg from '../public/assets/projects/tictactoe.png'; //TicTacToe
import sudImg from '../public/assets/projects/sudoku.png'; //ASL Hand Tracker
import ecommImg from '../public/assets/projects/ecomm.png'; //TicTacToe


//Links
const aslLink ='https://www.youtube.com/watch?v=q1tI7GO7d1A'; //ASL Hand Tracker
const guideLink = "https://makenson.com/cof/"; //Guide
const visualsLink = 'https://makenson.com/art/'; //Visuals

//Source
const aslSource ='https://github.com/makensonn/asl'; //ASL Hand Tracker
const ticSource ='https://github.com/makensonn/makensonn.github.io/blob/master/components/TicTacToe.jsx'; //ASL Hand Tracker
const sudSource ='https://github.com/makensonn/makensonn.github.io/blob/master/components/Sudoku.jsx'; //Sudoku Solver
const ecommSource ='https://makenson.com/ecomm'; //ASL Hand Tracker

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
            title='E-Commerce'
            backgroundImg={ecommImg}
            projectUrl='/ecomm'
            sourceUrl={ecommSource}
            tech='JavaScript'
          />

          <ProjectItem
            title='TicTacToe'
            backgroundImg={ticImg}
            projectUrl='/tic'
            sourceUrl={ticSource}
            tech='JavaScript'
          /> 

          <ProjectItem
            title='Sudoku'
            backgroundImg={sudImg}
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
