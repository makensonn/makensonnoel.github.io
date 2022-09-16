import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


import floatImg from '../public/assets/projects/float.png';
import diceImg from '../public/assets/projects/dice.png';
import mathImg from '../public/assets/projects/math.png';
import rpsImg from '../public/assets/projects/rps.png';

const floatLink = 'https://www.youtube.com/shorts/JQ4K1mymz-M';
const mathLink = 'https://replit.com/@MakensonNoel/mathGame#index.js';
const rpsLink = 'https://replit.com/@MakensonNoel/rpsGame#index.js';
const diceLink = 'https://replit.com/@MakensonNoel/456-Nodejs#index.js';

const floatSource = 'https://github.com/makensonn/float';
const mathSource = 'https://github.com/makensonn/mathGameNodejs';
const rpsSource = 'https://github.com/makensonn/rpsGame';
const diceSource = 'https://github.com/makensonn/456-Node.js';

import ProjectItem from './ProjectItem';

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
            title='Float'
            backgroundImg={floatImg}
            projectUrl={floatLink}
            sourceUrl={floatSource}
            tech='Mobile Application'
          /> 

          <ProjectItem
            title='Quick Math'
            backgroundImg={mathImg}
            projectUrl={mathLink}
            sourceUrl={mathSource}
            tech='Node.js'
          />

          <ProjectItem
              title='RPS Game'
              backgroundImg={rpsImg}
              projectUrl={rpsLink}
              sourceUrl={rpsSource}
              tech='Node.js'
          />

          <ProjectItem
              title='Dice Game'
              backgroundImg={diceImg}
              projectUrl={diceLink}
              sourceUrl={diceSource}
              tech='Node.js'
          />
         
          <Link href='/more'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              View more projects.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
