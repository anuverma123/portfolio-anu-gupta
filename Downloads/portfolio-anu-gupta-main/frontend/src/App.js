import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MouseGlow from "./components/MouseGlow";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Portfolio = () => {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden noise-bg">
      {/* Mouse-follow neon glow */}
      <MouseGlow />

      {/* Subtle scanline overlay */}
      <div className="pointer-events-none fixed inset-0 scanline z-[1]" />

      <Navbar />
      <div className="relative z-[2]">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
