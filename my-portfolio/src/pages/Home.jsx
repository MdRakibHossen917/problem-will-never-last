import React from "react";
import { Link } from "react-router";
import Hero from "../Components/Hero";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import About from "../Components/About";



const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero></Hero>
      {/* About Section */}
      <About></About>
      {/* Skills Section */}
      <Skills></Skills>
      {/* Projects Section */}
      <Projects></Projects>
      {/* Contact Section */}
      <Contact></Contact>
      {/* <Resume></Resume> */}
     
    
      
    </div>
  );
};

export default Home;
