import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Footer/>
    </>
  );
};

export default Home;
