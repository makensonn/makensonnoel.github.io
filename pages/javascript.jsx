import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';

import diceImg from '../public/assets/projects/node/dice.png';
import mathImg from '../public/assets/projects/node/math.png';
import hotelImg from '../public/assets/projects/node/hotel.png';
import rpsImg from '../public/assets/projects/node/rps.png';

import ProjectItems from '../components/ProjectItems';


const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const gridOld = 'grid md:grid-cols-2 gap-8'

const Javascript = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className = {titleStyle}><br></br><br></br>JavaScript</p>
        <p className='py-6'>View projects</p>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItems
            title='Math Game'
            backgroundImg={mathImg}
            projectUrl='https://replit.com/@MakensonNoel/mathGame#index.js'
            tech='JavaScript'
          />

          <ProjectItems
              title='RPS Game'
              backgroundImg={rpsImg}
              projectUrl='https://replit.com/@MakensonNoel/rpsGame#index.js'
              tech='JavaScript'
          />

          <ProjectItems
              title='Hotel Occupancy'
              backgroundImg={hotelImg}
              projectUrl='https://replit.com/@MakensonNoel/Hotel-Nodejs#index.js'
              tech='JavaScript'
          />

          <ProjectItems
              title='456 Dice Game'
              backgroundImg={diceImg}
              projectUrl='https://replit.com/@MakensonNoel/456-Nodejs#index.js'
              tech='JavaScript'
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
