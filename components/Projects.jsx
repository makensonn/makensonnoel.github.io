import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

import artImg from '../public/assets/projects/art.png'; //Art
import dontforgetImg from '../public/assets/projects/dontforget.png'; //Dont forget
import gymImg from '../public/assets/projects/gym.png'; //Gym
import cofImg from '../public/assets/projects/cof.png'; //Cof
import scImg from '../public/assets/projects/sc.png'; //Speed Converter
import portfolioImg from '../public/assets/projects/mozy.png'; //TicTacToe\


//Source
const artSource ='https://github.com/makensonn/art'; //Art
const dontforgetSource ='https://github.com/makensonn/todolist'; //Dont forget
const gymSource ='https://github.com/makensonn/gym'; //Gym
const cofSource ='https://github.com/makensonn/cof'; //Cof
const scSource ='https://github.com/makensonn/sc'; //Speed Converter
const portfolioSource ='https://github.com/makensonn/makensonn.github.io'; //Portfolio

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
            title='Dont Forget'
            backgroundImg={dontforgetImg}
            projectUrl='https://makensonn.github.io/todolist/'
            sourceUrl={dontforgetSource}
            tech='To-Do List'
          />          
          
          <ProjectItem
            title='Speed Converter'
            backgroundImg={scImg}
            projectUrl='https://makensonn.github.io/sc/'
            sourceUrl={scSource}
            tech='Speed Converter'
          /> 
          
          <ProjectItem
            title='Coding is Fun'
            backgroundImg={cofImg}
            projectUrl='https://makensonn.github.io/cof/'
            sourceUrl={cofSource}
            tech='Coding Website'
          />

          <ProjectItem
            title='Art Gallery'
            backgroundImg={artImg}
            projectUrl='https://makensonn.github.io/art/'
            sourceUrl={artSource}
            tech='Art Website'
          /> 

          <ProjectItem
            title='Gym Guide'
            backgroundImg={gymImg}
            projectUrl='https://makensonn.github.io/gym/'
            sourceUrl={gymSource}
            tech='Gym Website'
          />

          <ProjectItems
            title='E-commerce'
            backgroundImg={portfolioImg}
            projectUrl='https://amoseb.com/'
            sourceUrl={portfolioSource}
            tech='E-commerce Website'
          />

        </div>
      {/*  <br></br><br></br>

        <a href='https://github.com/makensonn' target="_blank" className="flex items-center h-full underline">
          View More
  </a> */}

      </div>

      {/* Scroll Up Button 
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
      Button Ends Here */}
    </div>
  );
};

export default Projects;
