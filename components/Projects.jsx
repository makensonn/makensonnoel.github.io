import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';


//Image
import projectOneeImg from '../public/assets/projects/thousandmen.png'; // Thousan Men
import projectOneImg from '../public/assets/projects/insight.png'; // Insight
import projectTwoImg from '../public/assets/projects/mozy.png'; // Mozy
import projectThreeImg from '../public/assets/projects/asl.png'; // ASL
import projectFourImg from '../public/assets/projects/weatherfacts.png'; // Weather Facts


//Source
const projectOneeSource ='https://github.com/makensonn/weatherfacts' //Weather Facts
const projectOneSource ='https://github.com/makensonn/float'; //Float
const projectTwoSource ='https://github.com/makensonn/tictactoe'; //Tic Tac Toe
const projectThreeSource ='https://github.com/makensonn/todolist'; //To Do List
const projectFourSource ='https://github.com/makensonn/weatherfacts' //Weather Facts


import ProjectItem from './ProjectItem';
import ProjectItems from './ProjectItems';

const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const gridOld = 'grid md:grid-cols-2 gap-8'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className = {titleStyle}><br></br><br></br>Experience</p>
        <p className='py-6'></p>

        <div className='grid md:grid-cols-4 gap-8'>

        <ProjectItems
            title='E-Commerce'
            backgroundImg={projectOneeImg}
            projectUrl='https://thousandmen.co/'
            sourceUrl={projectOneeSource}
            tech=''
          />       

         {/*Project Description     */}

            <p>Title: Thousandmen.co
            <br></br><br></br>
            This is a custom E-Commerce site for Thousandmen.co using HTML, CSS, and Shopify Liquid.</p>

          <ProjectItems
            title='E-Commerce'
            backgroundImg={projectTwoImg}
            projectUrl='https://amoseb.com/'
            sourceUrl={projectOneeSource}
            tech=''
          />       

         {/*Project Description     */}

            <p>Title: Amoseb.com
            <br></br><br></br>
            This is a custom E-Commerce site for Amoseb.com using HTML, CSS, and Shopify Liquid.</p>

            <ProjectItems
            title='ABC ASL'
            backgroundImg={projectThreeImg}
            projectUrl='/asl'
            sourceUrl={projectOneeSource}
            tech=''
          />       

         {/*Project Description     */}

            <p>Title: Hand Gesture Tracker
            <br></br><br></br>
            This is an application that translates American sign language hand gestures to subtitles in real-time.</p>



        <ProjectItems
            title='Insight'
            backgroundImg={projectOneImg}
            projectUrl='https://www.youtube.com/shorts/JQ4K1mymz-M'
            sourceUrl={projectOneSource}
            tech=''
          />       

         {/*Project Description     */}

            <p>Title: Insitee.github.io
            <br></br><br></br>
            This is an award winning product landing page for an accessibility app developed at an hackathon.</p>

             {/*Project Description     *
          
          <ProjectItems
            title='To-Do-List'
            backgroundImg={projectThreeImg}
            projectUrl='todolist/'
            sourceUrl={projectThreeSource}
            tech=''
          />
            <p> Title: To-Do-List
            <br></br><br></br>
            This is a interactive to-do-list that stores and deletes items on a list using React.</p>


            <br></br><br></br>
     
        {/*}  <ProjectItem
            title='Art Gallery'
            backgroundImg={artImg}
            projectUrl='https://makensonn.github.io/art/'
            sourceUrl={artSource}
            tech='Art Website'
          /> 

          <ProjectItem
            title='Gym Guide'
            backgroundImg={gymImg}
            projectUrl='https://makensonn.github.io/gym/'
            sourceUrl={gymSource}
            tech='Gym Website'
          />

          <ProjectItems
            title='E-commerce'
            backgroundImg={portfolioImg}
            projectUrl='https://amoseb.com/'
            sourceUrl={portfolioSource}
            tech='E-commerce Website'
          /> */}

        </div>
        <br></br><br></br>

        <div className="flex justify-center items-center">
          <a href='https://github.com/makensonn' className="flex items-center h-full underline">
            View More
          </a>
       </div>
      </div>

      {/* Scroll Up Button 
      <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#0a192f]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div> 
      Button Ends Here */}
    </div>
  );
};

export default Projects;