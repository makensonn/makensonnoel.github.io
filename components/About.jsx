import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProfileImg from '../public/assets/about.jpg';


const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className={titleStyle}><br></br><br></br>About</p>
          <p className='py-2'></p>
          <p className='py-2 text-gray-600'>
          Knowledgeable in several programming languages, with experience working on software development projects both 
          independently and in a team environment using a variety of software development methodologies.
          <br></br><br></br>
          In addition, Strong problem-solving skills and able to think creatively to develop innovative solutions to complex 
          technical challenges. Excited to explore new opportunities and take the steps towards a successful career in software development.
          <br></br><br></br>
          If you're looking for a motivated and dedicated software engineer, please don't hesitate to reach out.
          </p>
          <br></br>

        </div>
        <div className='w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={ProfileImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
