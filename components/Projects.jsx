import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

//Image
import materialImg from '../public/assets/projects/material handling robot.png';//Material Handling Robot
import insightImg from '../public/assets/projects/insight.png'; //Insight
import diceImg from '../public/assets/projects/dice.png';
import mathImg from '../public/assets/projects/math.png';
import rpsImg from '../public/assets/projects/rps.png';
import cofImg from '../public/assets/projects/cof.png';
import artImg from '../public/assets/projects/art.png';
import weightImg from '../public/assets/projects/weight training.png';
import covidImg from '../public/assets/projects/covid-19 tracker.png';
import motionImg from '../public/assets/projects/motion detector.png';
import studentImg from '../public/assets/projects/student registration.png';
import pythonImg from '../public/assets/projects/python paradise.png';
import todoImg from '../public/assets/projects/todo.png';
import floatImg from '../public/assets/projects/float.png';
import retodoImg from '../public/assets/projects/retodo.png';
import speedImg from '../public/assets/projects/speed.png';
import soonImg from '../public/assets/projects/soon.png';
import arcadeImg from '../public/assets/projects/arcade.png';

//Links
const materialLink ='https://www.youtube.com/watch?v=CdM2Otm6FBI'; //Material Handling Robot
const insightLink ='https://insitee.github.io/'; //Insight
const mathLink = 'https://replit.com/@MakensonNoel/mathGame#index.js';
const rpsLink = 'https://replit.com/@MakensonNoel/rpsGame#index.js';
const diceLink = 'https://replit.com/@MakensonNoel/456-Nodejs#index.js';
const cofLink = 'https://makenson.com/cof/';
const artLink = 'https://makenson.com/art/';
const weightLink = 'https://makenson.com/gym/';
const covidLink = 'https://makenson.com/cov/';
const motionLink ='https://www.youtube.com/watch?v=1iIxOdu2hoY';
const studentLink ='https://www.youtube.com/watch?v=ry1i-D-EfFI';
const pythonLink ='https://www.youtube.com/watch?v=Xo44kXOb8-4';
const todoLink = 'https://www.youtube.com/watch?v=nmbmXLqOjv8&t';
const floatLink = 'https://www.youtube.com/shorts/JQ4K1mymz-M';
const retodoLink = 'https://makenson.com/todo/';
const speedLink = 'https://makenson.com/sc/';
const soonLink = 'https://makenson.com/bop/#home';
const arcadeLink = 'https://makenson.com/games/';


//Source
const materialSource = 'https://github.com/materialhandlingrobot'; //Material Handling Robot
const insightSource ='https://github.com/orgs/Insitee/repositories'; //Insight
const diceSource = 'https://github.com/makensonn/456-Node.js';
const mathSource = 'https://github.com/makensonn/mathGameNodejs';
const rpsSource = 'https://github.com/makensonn/rpsGame';
const floatSource = 'https://github.com/makensonn/float';



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
            title='Insight'
            backgroundImg={insightImg}
            projectUrl={insightLink}
            sourceUrl={insightSource}
            tech='ASL XR Application'
          />

          <ProjectItem
            title='Robot'
            backgroundImg={materialImg}
            projectUrl={materialLink}
            sourceUrl={materialSource}
            tech='Material Handling Robot'
          />


          <ProjectItems
            title='React.js To-do list'
            backgroundImg={retodoImg}
            projectUrl={retodoLink}
            tech='Website'
          />

          <ProjectItems
            title='Photo Art Gallery'
            backgroundImg={artImg}
            projectUrl={artLink}
            tech='Website'
          />

          <ProjectItems
            title='Float'
            backgroundImg={floatImg}
            projectUrl={floatLink}
            sourceUrl={floatSource}
            tech='Mobile Application'
            /> 

          <ProjectItems
            title='Coding is Fun'
            backgroundImg={cofImg}
            projectUrl={cofLink}
            tech='Website'
          />

          <ProjectItems
            title='Weight Training'
            backgroundImg={weightImg}
            projectUrl={weightLink}
            tech='Website'
          />

         <ProjectItem
              title='Dice Game'
              backgroundImg={diceImg}
              projectUrl={diceLink}
              sourceUrl={diceSource}
              tech='Node.js'
          /> 
            
          <ProjectItems
            title='Motion Detector'
            backgroundImg={motionImg}
            projectUrl={motionLink}
            tech='Embedded System'
          />
          <ProjectItems
            title='Student Registration'
            backgroundImg={studentImg}
            projectUrl={studentLink}
            tech='Database'
          />
          <ProjectItems
            title='Covid-19 Tracker'
            backgroundImg={covidImg}
            projectUrl={covidLink}
            tech='Mobile Application'
          />
          <ProjectItems
            title='To-do list'
            backgroundImg={todoImg}
            projectUrl={todoLink}
            tech='Website'
          />

          <ProjectItems
            title='Python Paradise'
            backgroundImg={pythonImg}
            projectUrl={pythonLink}
            tech='Website'
          />

          <ProjectItems
            title='Math Game'
            backgroundImg={mathImg}
            projectUrl={mathLink}
            tech='Website'
          />

          <ProjectItems
            title='Rock Paper Scissors'
            backgroundImg={rpsImg}
            projectUrl={rpsLink}
            tech='Website'
          />

          <ProjectItems
            title='Speed Converter'
            backgroundImg={speedImg}
            projectUrl={speedLink}
            tech='Website'
          />

          <ProjectItems
            title='Coming Soon'
            backgroundImg={soonImg}
            projectUrl={soonLink}
            tech='Website'
          />

          <ProjectItems
            title='Arcade'
            backgroundImg={arcadeImg}
            projectUrl={arcadeLink}
            tech='Website'
          />


         {/*<Link href='/more'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              View more
            </p>
  </Link> */}
        </div>
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
      </div>
    </div>
  );
};

export default Projects;
