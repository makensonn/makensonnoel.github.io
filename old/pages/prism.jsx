import React from "react";
import Image from "next/image";
import Link from "next/link";
import WelcomeImg from "../public/assets/projects/prism.webp";

import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

const titleStyle =
  "text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500";

const Prism = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className={titleStyle}>
            <br></br>
            <br></br>Welcome Prism
          </p>
          <p className="py-2"></p>
          <p className="py-2 text-gray-600">
            This is an example of my university personal webpage
          </p>
          <br></br>
        </div>
        <div className="w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={WelcomeImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Prism;
