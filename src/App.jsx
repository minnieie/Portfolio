import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Main landing page sections
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

// Portfolio pages
import Art from "./sections/Art";
import ThreeD from "./sections/3D";

const Home = () => (
  <div className="max-w-7xl mx-auto w-full overflow-x-hidden px-4 sm:px-6 lg:px-8">
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
    <Routes>
      {/* Normal routes */}
      <Route path="/" element={<Home />} />
      <Route path="/art" element={<Art />} />
      <Route path="/3d" element={<ThreeD />} />

      {/* Catch-all redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
