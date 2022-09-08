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

import ProjectItems from '../components/ProjectItems';


const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const gridOld = 'grid md:grid-cols-2 gap-8'

const Javascript = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className = {titleStyle}><br></br><br></br>Experience</p>
        <p className='py-6'></p>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItems
            title='Math Game'
            backgroundImg={mathImg}
            projectUrl={mathLink}
            tech='Node.js'
          />

          <ProjectItems
              title='RPS Game'
              backgroundImg={rpsImg}
              projectUrl={rpsLink}
              tech='Node.js'
          />

          <ProjectItems
              title='456 Dice Game'
              backgroundImg={diceImg}
              projectUrl={diceLink}
              tech='Node.js'
          />

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
