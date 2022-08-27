import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';

import averageImg from '../public/assets/projects/java/average.png';
import entreeImg from '../public/assets/projects/java/entree.png';
import hotelImg from '../public/assets/projects/java/hotel.png';
import milesImg from '../public/assets/projects/java/miles.png';

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
            title='Averages'
            backgroundImg={averageImg}
            projectUrl='https://replit.com/@MakensonNoel/Averages-Nodejs#index.js'
            tech='JavaScript'
          />

          <ProjectItems
              title='Entree Price'
              backgroundImg={entreeImg}
              projectUrl='https://replit.com/@MakensonNoel/Entree-Nodejs#index.js'
              tech='JavaScript'
          />

          <ProjectItems
              title='Hotel Occupancy'
              backgroundImg={hotelImg}
              projectUrl='https://replit.com/@MakensonNoel/Hotel-Nodejs#index.js'
              tech='JavaScript'
          />

          <ProjectItems
              title='456 Dice'
              backgroundImg={milesImg}
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
