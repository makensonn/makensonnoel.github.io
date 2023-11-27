import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaYoutube} from 'react-icons/fa';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import MakImg from '../public/assets/mak.jpeg'
import Image from 'next/image';

const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const Menu = () => {
  return (
    <div id='menu' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>     
          <p className='uppercase text-sm tracking-widest text-gray-600'></p>
          <h1 className='py-4 text-gray-700'>
            <span className='text-[#0a192f]'> Makenson Noel</span>
          </h1>
         <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            Software Developer
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/makensonnoel/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/makensonn'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a href='/about'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
          <br></br>

          <Link href='/python'>
          <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                View Python Projects
              </div>
            </a>
          </Link>
          <br></br>
          <Link href='/java'>
          <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                View Java Projects
              </div>
            </a>
          </Link>
          <br></br>
          <Link href='/cplusplus'>
          <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                View C++ Projects
              </div>
            </a>
          </Link>
          <br></br>
          <Link href='/all'>
          <a>
          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                View All Projects
              </div>
            </a>
          </Link>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Menu;