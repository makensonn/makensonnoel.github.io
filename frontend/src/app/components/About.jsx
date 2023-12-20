import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import MakImg from "../assets/mak.svg";

// Define Tailwind CSS classes
const titleStyle = "text-4xl font-bold inline border-b-4  border-zinc-500";
const containerStyle = "w-full md:h-screen p-2 flex items-center py-16";
const gridStyle = "max-w-[1240px] m-auto md:grid grid-cols-3 gap-8";
const textContainerStyle = "col-span-2";
const imageContainerStyle =
  "w-auto h-auto m-auto shadow-xl shadow-neutral-950 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300";
const imageStyle = "rounded-xl";

const About = () => {
  return (
    <div id="about" className={containerStyle}>
      <div className={gridStyle}>
        <div className={textContainerStyle}>
          <p className={titleStyle}>
            <br></br>
            <br></br>About
          </p>
          <p className="py-2"></p>
          <p className="py-2">
            Hello! 👋🏾 I&apos;m Makenson Noel, a highly motivated and
            detail-oriented web developer with a passion for crafting robust and
            user-friendly solutions.<br></br><br></br>My journey in the tech world began at
            Florida Atlantic University, where I earned my Bachelor of Science
            in Computer Science in August 2021 🎓. I&apos;ve been actively involved in delivering
            custom websites using React, JavaScript, HTML,
            and CSS. I specialize in creating seamless, engaging web experiences. 
            <br></br><br></br>
            I&apos;m an active member of Haitians in Tech. In my free time, I enjoy refurbishing and
            building personal gaming computers, combining my technical skills
            with a love for gaming. 
            <br></br><br></br>
            🏆 Awards & Certifications: Awarded Best
            Accessibility App at PlutoHacks 2022. 
            <br></br>📃Certified in Deep Learning
            Onramp and Machine Learning Onramp by MathWorks (July 2020).
          </p>
          <br></br>
        </div>
        <div className={imageContainerStyle}>
          <Image src={MakImg} className={imageStyle} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
