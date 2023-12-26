'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import MakImg from "../assets/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('bg-current');
  const [linkColor, setLinkColor] = useState('bg-current');
  const size=50

  const navBarStyle ='flex justify-between items-center w-full h-full px-2 2xl:px-16'

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
    style={{ backgroundColor: `${navBg}` }}
    className={
      shadow
        ? 'fixed w-full h-41px shadow-xl z-[100] ease-in-out duration-300'
        : 'fixed w-full h-41px z-[100]'
      }
    >
      <div className={navBarStyle}>
        <Link legacyBehavior href='/'>
          <a>
            <Image
              src={MakImg}
              alt='/'
              width={size}
              height={size}
              className='cursor-pointer'
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link legacyBehavior href='/'>Home</Link>
            </li>
           <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link legacyBehavior href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link legacyBehavior href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link legacyBehavior href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link legacyBehavior href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-inherit' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-amber-300 p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link legacyBehavior href='/'>
                <a>
                  <Image
                    src={MakImg}
                    width={size}
                    height={size}
                    alt='/'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-neutral-950 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b shadow-neutral-950 my-4'>
              <p className='w-[100%] md:w-[100%] py-4'>
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link legacyBehavior href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
             <Link legacyBehavior href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link legacyBehavior href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link legacyBehavior href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link legacyBehavior href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/makensonnoel/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-neutral-950 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>

                <a
                  href='https://github.com/makensonn'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-neutral-950 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>

                <a
                  href='/about'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-neutral-950 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;