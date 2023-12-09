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
const imageContainerStyle = "w-auto h-auto m-auto shadow-xl shadow-neutral-950 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300";
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
            Hello! 👋 I&apos;m Makenson Noel, a highly motivated and
            detail-oriented web developer with a passion for crafting robust and
            user-friendly solutions. My journey in the tech world began at
            Florida Atlantic University, where I earned my Bachelor of Science
            in Computer Science in August 2021. In my most recent role with
            Develop With Mak LLC, I&apos;ve been actively involved in delivering
            custom websites using a tech stack that includes JavaScript, HTML,
            and CSS. I specialize in creating seamless, engaging web experiences
            tailored to meet client needs. One of my recent projects involved
            developing an American Sign Language Hand Tracker, showcasing my
            versatility with Python, JavaScript, HTML, and CSS. I also had the
            opportunity to contribute my skills to Thousandmen.co, where I
            played a key role in developing a custom ecommerce website. This
            experience further honed my abilities in creating functional and
            aesthetically pleasing web applications. Beyond my professional
            endeavors, I&apos;m an active member of Haitians in Tech,
            demonstrating my commitment to fostering diversity and inclusion
            within the tech community. In my free time, I enjoy refurbishing and
            building personal gaming computers, combining my technical skills
            with a love for gaming. 🏆 Awards & Certifications: Awarded Best
            Accessibility App at PlutoHacks 2022. Certified in Deep Learning
            Onramp and Machine Learning Onramp by MathWorks (July 2020). 🎓
            Education: Bachelor of Science in Computer Science from Florida
            Atlantic University, Boca Raton, FL (August 2021)
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