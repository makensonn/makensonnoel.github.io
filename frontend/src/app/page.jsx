import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Main from "./components/Main";
import Projects from "./components/Projects";



const Home = () => {
  return (
    <>
      <Navbar />      
      <Main />
      <About />
      <Projects />
    </>
  );
};

export default Home;
