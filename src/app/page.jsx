import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  return (
    <>
      <Navbar /> 
      <Main/>
      <About/>
      <Skills/>     
      <Projects />
      <Footer />
      <Analytics />
    </>
  );
};

export default Home;
