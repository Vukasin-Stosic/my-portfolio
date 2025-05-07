import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
