import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';

import ageCalcImg from '../public/assets/projects/cpp/agecalc.png';
import mathGameImg from '../public/assets/projects/cpp/mathGame.png';
import twoLargestImg from '../public/assets/projects/cpp/twoLargest.png';
import rpsImg from '../public/assets/projects/cpp/rps.png';

import ProjectItems from '../components/ProjectItems';

const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const gridOld = 'grid md:grid-cols-2 gap-8'

const Cpp = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className = {titleStyle}><br></br><br></br>C++ Development Projects</p>
        <p className='py-6'>View projects</p>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItems
            title='Age Calculator'
            backgroundImg={ageCalcImg}
            projectUrl='https://replit.com/@MakensonNoel/AgeCalculator#main.cpp'
            tech='C++'
          />

          <ProjectItems
            title='Rock Paper Scissors Automated'
            backgroundImg={rpsImg}
            projectUrl='https://replit.com/@MakensonNoel/rps-automated#main.cpp'
            tech='C++'
          />

          <ProjectItems
              title='Math Game'
              backgroundImg={mathGameImg}
              projectUrl='https://replit.com/@MakensonNoel/MathGame#main.cpp'
              tech='C++'
            />

            <ProjectItems
              title='Two Largest'
              backgroundImg={twoLargestImg}
              projectUrl='https://replit.com/@MakensonNoel/TwoLargest#main.cpp'
              tech='C++'
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

export default Cpp;
