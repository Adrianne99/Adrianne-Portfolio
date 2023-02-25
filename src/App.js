import './App.css';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar'
import Projects from './Components/Projects';
import Services from './Components/Services';
import Skills from './Components/Skills';
import React from 'react';
import ScrollAnimation from './Components/ScrollAnimation';
import Footer from './Components/footer';


function App() {

  return (
    <>
    <ScrollAnimation />
    <Navbar />
    <Hero />
    <Services />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
