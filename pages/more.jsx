import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';

import diceImg from '../public/assets/projects/dice.png';
import mathImg from '../public/assets/projects/math.png';
import rpsImg from '../public/assets/projects/rps.png';
import cofImg from '../public/assets/projects/cof.png';
import artImg from '../public/assets/projects/art.png';
import weightImg from '../public/assets/projects/weight training.png';

const mathLink = 'https://replit.com/@MakensonNoel/mathGame#index.js';
const rpsLink = 'https://replit.com/@MakensonNoel/rpsGame#index.js';
const diceLink = 'https://replit.com/@MakensonNoel/456-Nodejs#index.js';
const cofLink = 'https://makenson.com/cof/';
const artLink = 'https://makenson.com/art/';
const weightLink = 'https://makenson.com/gym/';

import covidImg from '../public/assets/projects/covid-19 tracker.png';
import motionImg from '../public/assets/projects/motion detector.png';
import studentImg from '../public/assets/projects/student registration.png';
import materialImg from '../public/assets/projects/material handling robot.png';
import pythonImg from '../public/assets/projects/python paradise.png';
import todoImg from '../public/assets/projects/todo.png';
import floatImg from '../public/assets/projects/float.png';
import cogoptImg from '../public/assets/projects/cogopt.png';

const covidLink = 'https://www.youtube.com/watch?v=CgPdWWw_qiU&t';
const motionLink ='https://www.youtube.com/watch?v=1iIxOdu2hoY';
const studentLink ='https://www.youtube.com/watch?v=ry1i-D-EfFI';
const materialLink ='https://www.youtube.com/watch?v=CdM2Otm6FBI';
const pythonLink ='https://www.youtube.com/watch?v=Xo44kXOb8-4';
const todoLink = 'https://www.youtube.com/watch?v=nmbmXLqOjv8&t';
const floatLink = 'https://www.youtube.com/shorts/JQ4K1mymz-M';
const cogoptLink = 'https://cogopt.org/';

import ProjectItems from '../components/ProjectItems';


const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const gridOld = 'grid md:grid-cols-2 gap-8'

const Javascript = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className = {titleStyle}><br></br><br></br>Projects</p>
        <p className='py-6'></p>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItems
              title='Photo Art Gallery'
              backgroundImg={artImg}
              projectUrl={artLink}
              tech='Website'
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

          <ProjectItems
            title='cogopt.org'
            backgroundImg={cogoptImg}
            projectUrl={cogoptLink}
            tech='Website'
          />
          <ProjectItems
            title='Material Handling Robot'
            backgroundImg={materialImg}
            projectUrl={materialLink}
            tech='Robot'
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
            title='Python Paradise'
            backgroundImg={pythonImg}
            projectUrl={pythonLink}
            tech='Website'
          />
          <ProjectItems
            title='To-do list'
            backgroundImg={todoImg}
            projectUrl={todoLink}
            tech='Website'
          />


        </div>

        <div className='flex justify-center py-12'>
          <Link href='/#projects'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleLeft
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

export default Javascript;
