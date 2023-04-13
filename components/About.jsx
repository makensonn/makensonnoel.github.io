import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProfileImg from '../public/assets/profile.jpg'


const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className={titleStyle}><br></br><br></br>About</p>
          <p className='py-2'></p>
          <p className='py-2 text-gray-600'>
          As a recent computer science graduate with a passion for technology, I am excited to start my career as a software engineer. I am knowledgeable in several programming languages, including Java, Python, and C++, and have experience working on software development projects both independently and in a team environment.

          <br></br><br></br>
          During my academic career, I gained a strong understanding of data structures and algorithms, and I have experience developing software applications using a variety of software development methodologies, including Agile and Scrum. In addition, I have strong problem-solving skills and am able to think creatively to develop innovative solutions to complex technical challenges.
          <br></br><br></br>
          I am eager to learn and grow as a software engineer and am excited to work on projects that will allow me to leverage my skills and knowledge to create meaningful impact. With a strong work ethic and dedication to excellence, I am confident that I will be a valuable asset to any software development team.
          <br></br><br></br>
          If you're looking for a motivated and dedicated software engineer, please don't hesitate to reach out. I am excited to explore new opportunities and take the first step towards a successful career in software development.
          </p>
          <br></br>


          <Link href='/#experience'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              View Experience
            </p>
          </Link>
        </div>
        <div className='w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={ProfileImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
