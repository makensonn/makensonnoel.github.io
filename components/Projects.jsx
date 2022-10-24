import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

//Images
import materialImg from '../public/assets/projects/material handling robot.png';
import insightImg from '../public/assets/projects/insight.png';

//Links
const materialLink ='https://www.youtube.com/watch?v=CdM2Otm6FBI';
const insightLink ='https://insitee.github.io/';

//Sources
const materialSource = 'https://github.com/materialhandlingrobot';
const insightSource ='https://github.com/orgs/Insitee/repositories';


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
            title='Insight'
            backgroundImg={insightImg}
            projectUrl={insightLink}
            sourceUrl={insightSource}
            tech='ASL XR Application'
          />

          <ProjectItem
            title='Robot'
            backgroundImg={materialImg}
            projectUrl={materialLink}
            sourceUrl={materialSource}
            tech='Material Handling Robot'
          />

         {/* <Link href='/more'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              View more
            </p>
  </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
