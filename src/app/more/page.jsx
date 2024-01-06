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
