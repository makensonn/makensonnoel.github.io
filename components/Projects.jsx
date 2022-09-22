import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

//Images
import floatImg from '../public/assets/projects/float.png';
import cogoptImg from '../public/assets/projects/cogopt.png';
import materialImg from '../public/assets/projects/material handling robot.png';
import pythonImg from '../public/assets/projects/python paradise.png';

//Links
const floatLink = 'https://www.youtube.com/shorts/JQ4K1mymz-M';
const cogoptLink = 'https://cogopt.org/';
const materialLink ='https://www.youtube.com/watch?v=CdM2Otm6FBI';
const pythonLink ='https://pyradisesw.github.io/';

//Sources
const floatSource = 'https://github.com/makensonn/float';
const mathSource = 'https://github.com/makensonn/mathGameNodejs';
const materialSource = 'https://github.com/materialhandlingrobot';
const pythonSource ='https://github.com/pyradisesw';


import ProjectItem from './ProjectItem';
import ProjectItems from './ProjectItems';

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

         <ProjectItems
            title='Cogopt.org'
            backgroundImg={cogoptImg}
            projectUrl={cogoptLink}
            tech='Website'
          /> 

          <ProjectItem
            title='Robot'
            backgroundImg={materialImg}
            projectUrl={materialLink}
            sourceUrl={materialSource}
            tech='Material Handling Robot'
          />

          <ProjectItem
            title='Pyradise'
            backgroundImg={pythonImg}
            projectUrl={pythonLink}
            sourceUrl={pythonSource}
            tech='Website'
          />

          <Link href='/more'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              View more
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
