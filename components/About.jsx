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
          As a recent computer science graduate with a passion for technology, Makenson is excited to start his career as a software engineer. Makenson is knowledgeable in several programming languages, including Python, TypeScript, JavaScript, C#, and C++. Makenson has experience working on software development applications both independently and in a team environment.
          <br></br><br></br>
          During his academic career, he gained a strong understanding of data structures and algorithms, and has experience developing software applications using a variety of software development methodologies, including Agile and Scrum. In addition, Makenson has strong problem-solving skills and is able to think creatively to develop innovative solutions to complex technical challenges.
          <br></br><br></br>
          Makenson is eager to learn and grow as a software engineer and is excited to work on projects that will allow him to leverage his skills and knowledge to create meaningful impact. With a strong work ethic and dedication to excellence, Makenson is confident that he will be a valuable asset to any software development team.
          <br></br><br></br>
          If you're looking for a motivated and dedicated software engineer, please don't hesitate to reach out. Makenson is excited to explore new opportunities and take more steps towards a successful career in software development.
          </p>
          <br></br>


          <Link href='/#experience' legacyBehavior>
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
