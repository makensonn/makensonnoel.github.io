import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className={titleStyle}><br></br><br></br>About</p>
          <p className='py-2 text-gray-600'>
          I'm a first genreation STEM college graduate. I obtained a Bachelor of Science in Computer Science 
          from Florida Atlantic University. I enjoy writing code and have been developing software for 
          several years with multiple contributions to open source code on GitHub. I've taken on 
          leadership roles and developed an award winning app in a hackathon at Broward College. 
          I am proficient in C++, Python, Java, JavaScript, HTML, CSS and adaptive with 
          learning programming languages, frameworks, tech stacks and new technologies. 
          I enjoy the software development process, finding solutions to challenging 
          problems and collaborating with teams to improve software applications.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
