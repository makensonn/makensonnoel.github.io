import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';

import rfbImg from '../public/assets/projects/mobile/rfb.png';
import cov19Img from '../public/assets/projects/mobile/cov19.png';

import ProjectItems from '../components/ProjectItems';


const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const gridOld = 'grid md:grid-cols-2 gap-8'

const Mobile = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className = {titleStyle}><br></br><br></br>Mobile App Development Projects</p>
        <p className='py-6'>View projects</p>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItems
            title='React Flappy Bird'
            backgroundImg={rfbImg}
            projectUrl='https://www.youtube.com/shorts/JQ4K1mymz-M'
            tech='React and Expo'
          />

          <ProjectItems
              title='Covid 19'
              backgroundImg={cov19Img}
              projectUrl='https://makenson.com/cov/'
              tech='Apache Cordova, HTML, Bootstrap, JavaScript'
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

export default Mobile;
