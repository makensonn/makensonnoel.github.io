import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';


//Image
import projectOneImg from '../public/assets/projects/weatherfacts.png'; // Weather Facts
import projectTwoImg from '../public/assets/projects/tictactoe.png'; // Tic Tac Toe
import projectThreeImg from '../public/assets/projects/dontforget.png'; // To Do List


//Source
const projectOneSource ='https://github.com/makensonn/weatherfacts'; //Weather Facts
const projectTwoSource ='https://github.com/makensonn/tictactoe'; //Tic Tac Toe
const projectThreeSource ='https://github.com/makensonn/todolist'; //To Do List


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

        <div className='grid md:grid-cols-2 gap-8'>

        <ProjectItem
            title='Weather App'
            backgroundImg={projectOneImg}
            projectUrl='https://weatherfacts.vercel.app/'
            sourceUrl={projectOneSource}
            tech=''
          />       

         {/*Project Description     */}

            <p>Project: Weather Facts
            <br></br><br></br>
            Developed a weather application that fetches data from a weather API.
            <br></br><br></br>
            Technologies Used: React, JavaScript XML, TailwindCSS, Vercel, GitHub, Visual Studio Code</p>


        
          <ProjectItem
            title='Tic Tac Toe'
            backgroundImg={projectTwoImg}
            projectUrl='https://tictactoe-eta-tan.vercel.app/'
            sourceUrl={projectTwoSource}
            tech=''
          />       

         {/*Project Description     */}

            <p>Project: Tic Tac Toe
            <br></br><br></br>
            Developed a simple classic two-player board game played on a 3x3 grid.
            <br></br><br></br>
            Technologies Used: React, JavaScript XML, TailwindCSS, Vercel, GitHub, Visual Studio Code</p>
          
          <ProjectItem
            title='Dont Forget'
            backgroundImg={projectThreeImg}
            projectUrl='https://makensonn.github.io/todolist/'
            sourceUrl={projectThreeSource}
            tech=''
          />
            <p>Project: Don't Forget
            <br></br><br></br>
            Developed a interactive to-do-list that stores and deletes items on a list.
            <br></br><br></br>
            Technologies Used: Bootstrap, HTML, CSS, JavaScript, GitHub, Visual Studio Code</p>


        {/*}  <ProjectItem
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
          /> */}

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
