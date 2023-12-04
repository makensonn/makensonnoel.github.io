import Image from "next/image";
import React from "react";
import aslImg from "../assets/projects/asl.svg"; //ASL Hand Tracker
import YouTubePlayer from "../components/YouTubePlayer";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

const videoId = "q1tI7GO7d1A"; //ASL Video

const asl = () => {
  return (
    <div className="w-full h-screen">
      {/*Header*/}
      <div className="w-full h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute"
          layout="fill"
          objectFit="cover"
          src={aslImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">American Sign Language Hand Tracker</h2>
          <h3>Python / Jupyter Notebook / TensorFlow</h3>
        </div>
      </div>
      {/*Header*/}

      {/* Project Overview */}
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>American Sign Language Hand Tracker</h2>
          <br></br>
          <YouTubePlayer videoId={videoId} />
          <br></br>
          <br></br>
          <h2>Overview</h2>
          <p>
            I built this application in Python and it's source code is on
            GitHub. The American Sign Language (ASL) Hand Tracker project is a
            Python-based solution that utilizes TensorFlow, OpenCV, Mediapipe,
            Matplotlib, and Scikit-Learn to recognize and interpret ASL hand
            gestures in real-time. By leveraging deep learning with TensorFlow,
            the system accurately detects and classifies hand movements. OpenCV
            and Mediapipe provide the necessary tools for hand tracking and pose
            estimation. The project incorporates a graphical interface in
            Jupyter Notebook, enabling interactive visualization of the
            recognized gestures using Matplotlib. The ASL Hand Tracker serves as
            an invaluable tool for learning and communicating in ASL, while also
            contributing to the fields of computer vision, gesture recognition,
            and human-computer interaction.
          </p>
          <a
            href="https://github.com/makensonn/asl"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a href="/asl" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        {/*Project Overview*/}

        {/*Technologies*/}
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Jupyter Notebook
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TensorFlow
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> OpenCV
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Matplotlib
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mediapipe
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Scikit-Learn
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Technologies */}

      {/* Back Button */}
      <div className="flex justify-center py-12">
        <Link href="/#projects">
          <a>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleLeft
                className="text-[#0a192f]"
                size={30}
              />
            </div>
          </a>
        </Link>
      </div>
      {/* Back Button */}
    </div>
  );
};

export default asl;
