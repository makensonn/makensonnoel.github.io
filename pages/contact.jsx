import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub, FaLink, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiOutlineHome } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.png'

const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const Contact = () => {

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className={titleStyle}><br></br><br></br>Contact</p>
        <p className='py-6'></p>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                {/*<h2 className='py-2'>Makenson</h2>*/}
                {/*<!--}<p>Software Engineer</p>-->*/}
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <Link
                    href='https://www.linkedin.com/in/makensonnoel/'
                    target='_blank'
                    rel='noreferrer'
                    legacyBehavior>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link
                    href='https://github.com/makensonn'
                    target='_blank'
                    rel='noreferrer'
                    legacyBehavior>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </Link>

                  <Link
                    href='https://www.youtube.com/channel/UCqXnQJAjBqTwqAE2MRky3Fw'
                    target='_blank'
                    rel='noreferrer'
                    legacyBehavior>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaYoutube />
                    </div>
                  </Link>
         
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/7d94aa2b-bbf7-4996-83a6-43d6efb0412e'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/' legacyBehavior>
            <Link legacyBehavior>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineHome
                  className='text-[#0a192f]'
                  size={30}
                />
              </div>
            </Link>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
