"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLink, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineHome, HiOutlineChevronDoubleUp } from "react-icons/hi";
import MakImg from "../assets/mak.svg";

// Tailwind CSS Classes
const titleStyle = "text-4xl font-bold inline border-b-4 border-zinc-500";
const contactContainerStyle = "w-full lg:h-screen";
const maxWidthStyle = "max-w-[1240px] m-auto px-2 py-16 w-full";
const leftContainerStyle =
  "col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-neutral-950 rounded-xl p-4";
const rightContainerStyle =
  "col-span-3 w-full h-auto shadow-xl shadow-neutral-950 rounded-xl lg:p-4";
const formStyle = "grid md:grid-cols-2 gap-4 w-full py-2";
const inputContainerStyle = "flex flex-col";
const inputStyle = "border-2 rounded-lg p-3 flex border-shadow-neutral-950";
const textareaStyle = "border-2 rounded-lg p-3 border-shadow-neutral-950";
const buttonStyle = "w-full p-4 mt-4";
const backToTopStyle = "flex justify-center py-12";
const socialIconsContainerStyle =
  "flex items-center justify-between max-w-[330px] m-auto py-4";
const backToTopIconStyle =
  "rounded-full shadow-lg shadow-neutral-950 p-4 cursor-pointer hover:scale-110 ease-in duration-300";
const textStyle = "uppercase text-sm py-2";
const contactImageStyle = "rounded-xl hover:scale-105 ease-in duration-300";

const Contact = () => {
  return (
    <div id="contact" className={contactContainerStyle}>
      <div className={maxWidthStyle}>
        <p className={titleStyle}>
          <br></br>
          <br></br>Contact
        </p>
        <p className="py-6"></p>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className={leftContainerStyle}>
            <div className="lg:p-4 h-full ">
              <div>
                <Image className={contactImageStyle} src={MakImg} alt="/" />
              </div>
              <div>
                {/*<h2 className='py-2'>Makenson</h2>*/}
                {/*<!--}<p>Software Engineer</p>-->*/}
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/makensonnoel/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={backToTopIconStyle}>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/makjustcode"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={backToTopIconStyle}>
                      <FaGithub />
                    </div>
                  </a>
                  <a href="/#about" rel="noreferrer">
                    <div className={backToTopIconStyle}>
                      <BsFillPersonLinesFill />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className={rightContainerStyle}>
            <div className="p-4">
              <form
                action="https://getform.io/f/7d94aa2b-bbf7-4996-83a6-43d6efb0412e"
                method="POST"
                encType="multipart/form-data"
              >
                <div className={formStyle}>
                  <div className={inputContainerStyle}>
                    <label className={textStyle}>Name</label>
                    <input className={inputStyle} type="text" name="name" />
                  </div>
                </div>
                <div className={inputContainerStyle}>
                  <label className={textStyle}>Email</label>
                  <input className={inputStyle} type="email" name="email" />
                </div>
                <div className={inputContainerStyle}>
                  <label className={textStyle}>Message</label>
                  <textarea
                    className={textareaStyle}
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className={buttonStyle}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className={backToTopStyle}>
          <Link legacyBehavior href="/">
            <a>
              <div className={backToTopIconStyle}>
                <HiOutlineChevronDoubleUp className="" size={30} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
