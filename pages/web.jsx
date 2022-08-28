import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';

import webImg from '../public/assets/projects/web.png';
import cogoptImg from '../public/assets/projects/web/cogopt.png';
import toDoImg from '../public/assets/projects/web/todo.png';
import cofImg from '../public/assets/projects/web/cof.png';
import artImg from '../public/assets/projects/web/art.png';

import ProjectItems from '../components/ProjectItems';

const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const gridOld = 'grid md:grid-cols-2 gap-8'

const Web = () => {
  return (
    <div id='web' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className = {titleStyle}><br></br><br></br>Web Development</p>
        <p className='py-6'>View websites</p>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItems
            title='Non profit organization website'
            backgroundImg={cogoptImg}
            projectUrl='https://cogopt.org/'
            tech='Squarespace'
          />

          <ProjectItems
              title='To-do-list'
              backgroundImg={toDoImg}
              projectUrl='https://makenson.com/todo/'
              target={"_blank"}
              tech='React JS and Firebase'
            />

          <ProjectItems
              title='Coding is fun'
              backgroundImg={cofImg}
              projectUrl='https://makenson.com/cof/'
              tech='Bootstrap, HTML, CSS, JavaScript'
            />

          <ProjectItems
              title='Photography'
              backgroundImg={artImg}
              projectUrl='https://makenson.com/art/'
              tech='Bootstrap, HTML, CSS, JavaScript'
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

export default Web;
