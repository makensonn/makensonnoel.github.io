import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';

import diceImg from '../public/assets/projects/python/456.png';
import budgetImg from '../public/assets/projects/python/budget.png';
import calculatorImg from '../public/assets/projects/python/calculator.png';
import flagImg from '../public/assets/projects/python/flag.png';


import ProjectItems from '../components/ProjectItems';


const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const gridOld = 'grid md:grid-cols-2 gap-8'

const Python = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className = {titleStyle}><br></br><br></br>Python Development Projects</p>
        <p className='py-6'>// View projects</p>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItems
            title='456'
            backgroundImg={diceImg}
            projectUrl='https://replit.com/@MakensonNoel/456#main.py'
            tech='Python'
          />

          <ProjectItems
              title='Budget Tool'
              backgroundImg={budgetImg}
              projectUrl='https://replit.com/@MakensonNoel/budgettool#main.py'
              tech='Python'
            />

          <ProjectItems
              title='Calculator'
              backgroundImg={calculatorImg}
              projectUrl='https://replit.com/@MakensonNoel/pythoncalculator#main.py'
              tech='Python'
            />

          <ProjectItems
              title='Haitian Flag'
              backgroundImg={flagImg}
              projectUrl='https://replit.com/@MakensonNoel/Happy-Haitian-Flag-Day#main.py'
              tech='Python'
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

export default Python;
