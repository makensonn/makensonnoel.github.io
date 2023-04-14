import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

//Image
import lucienlawnserviceImg from '../public/assets/projects/lucienlawnservice.png';//Lucien Lawn Service
import cogoptImg from '../public/assets/projects/cogopt.png'; //Cogopt
import amosebImg from '../public/assets/projects/amoseb.png'; //Amoseb


//Links
const lucienlawnserviceLink = 'https://lucienlawnservice.squarespace.com/';
const cogoptLink = 'https://cogopt.org';
const amosebLink = 'https://amoseb.com';

import ProjectItems from './ProjectItems';

const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const gridOld = 'grid md:grid-cols-2 gap-8'

const Work = () => {
  return (
    <div id='work' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className = {titleStyle}><br></br><br></br>Work</p>
        <p className='py-6'></p>

        <div className='grid md:grid-cols-3 gap-8'>

          <ProjectItems
            title='Lucien Lawn Service'
            backgroundImg={lucienlawnserviceImg}
            projectUrl={lucienlawnserviceLink}
            tech='Website'
          />

          <ProjectItems
            title='Cogopt.org'
            backgroundImg={cogoptImg}
            projectUrl={cogoptLink}
            tech='Website'
          />

          <ProjectItems
            title='Mozy'
            backgroundImg={amosebImg}
            projectUrl={amosebLink}
            tech='Website'
          />

        </div>
      </div>
    </div>
  );
};

export default Work;
