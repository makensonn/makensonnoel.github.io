import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileImg from "../public/assets/about.jpg";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

// Define Tailwind CSS classes
const titleStyle =
  "text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500";
const containerStyle = "w-full md:h-screen p-2 flex items-center py-16";
const gridStyle = "max-w-[1240px] m-auto md:grid grid-cols-3 gap-8";
const textContainerStyle = "col-span-2";
const imageContainerStyle =
  "w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300";
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
          <p className="py-2 text-gray-600">
            I Graduated from Florida Atlantic University with a Bachelor of
            Science in Computer Science.
            <br></br>
            <br></br>
            I'm skilled in software development, with experience working on
            software development projects both independently and in a team
            environment.
            <br></br>
            <br></br>
            In addition I have Strong problem-solving, communication, and
            teamwork skills. I'm able to think creatively to develop innovative
            solutions to complex technical challenges.
          </p>
          <br></br>
        </div>
        <div className={imageContainerStyle}>
          <Image src={ProfileImg} className={imageStyle} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
