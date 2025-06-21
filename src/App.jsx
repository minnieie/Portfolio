import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main landing page sections
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

// Portfolio pages
import Art from "./sections/Art";
import ThreeD from "./sections/3D"; // ✅ <-- make sure this is correct

const Home = () => (
  <div className="container mx-auto max-w-7xl">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Experiences />
    <Testimonial />
    <Contact />
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/3d" element={<ThreeD />} /> {/* ✅ Added this */}
      </Routes>
    </Router>
  );
};

export default App;
