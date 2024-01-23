import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import TicTacToe from "./components/Tic";
import Asl from "./components/Asl";
import Sudoku from "./components/Sudoku";
import ToDoList from "./components/Todo";
import GymWorkoutTracker from "./components/Gym";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Skills />
      <About />
      <Projects />
      <TicTacToe />
      <Asl/>
      <ToDoList />
      <GymWorkoutTracker />
      <Sudoku />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
};

export default Home;
