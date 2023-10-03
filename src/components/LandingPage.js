import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import About from "./About";
import Skills from "./Skills";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
    </>
  );
}
