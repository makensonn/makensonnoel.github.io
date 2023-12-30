"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import Navbar from "../components/Navbar";
import Sudoku from "../sudoku/page";
import ToDoList from "../todo/page";
import GymWorkoutTracker from "../gym/page";
import Countdown from "../components/Counter";

// Source URLs
import ProjectItems from "../components/ProjectItems";

// Tailwind CSS Classes
const titleStyle = "text-4xl font-bold inline border-b-4  border-zinc-500";
const containerStyle = "w-full";
const maxWidthStyle = "max-w-[1240px] mx-auto px-2 py-16";
const gridStyle = "grid md:grid-cols-4 gap-8";

const soon = "Coming Soon";
const comingSoon = "This project is coming soon";

const Projects = () => {
  return (
    <>
      <Navbar />
      <ToDoList />
      <GymWorkoutTracker />
      <Sudoku />
    </>
  );
};

export default Projects;
