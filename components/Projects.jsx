import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import page from '../pages/guide/guide';


//Image

import aslImg from '../public/assets/projects/asl.png'; //ASL Hand Tracker
import guideImg from '../public/assets/projects/guide.png'; //Guide
import visualsImg from '../public/assets/projects/visuals.png'; //Visuals

//Links
const aslLink ='https://www.youtube.com/watch?v=q1tI7GO7d1A'; //ASL Hand Tracker
const guideLink = "/guide"; //Guide
const visualsLink = 'https://makenson.com/art/'; //Visuals

import ProjectItem from './ProjectItem';
import ProjectItems from './ProjectItems';

const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const gridOld = 'grid md:grid-cols-2 gap-8'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className = {titleStyle}><br></br><br></br>Portfolio</p>
        <p className='py-6'></p>

        <div className='grid md:grid-cols-3 gap-8'>


          <ProjectItem
            title='ASL Hand Tracker'
            backgroundImg={aslImg}
            projectUrl={aslLink}
            tech='Python'
          />

          <ProjectItems
            title='Visuals'
            backgroundImg={visualsImg}
            projectUrl={visualsLink}
            tech='Next.js'
          />

          <ProjectItems
            title='Guide'
            backgroundImg={guideImg}
            projectUrl={guideLink}
            tech='Next.js'
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
