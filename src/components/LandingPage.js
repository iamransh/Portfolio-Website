import React from "react";
// import Navbar from "./Navbar";
import dynamic from "next/dynamic";
// import HeroSection from "./HeroSection";
const Navbar = dynamic(() => import("./Navbar"), { ssr: false });
const HeroSection = dynamic(() => import("./HeroSection"), { ssr: false });
// import About from "./About";
const About = dynamic(() => import("./About"), { ssr: false });
// import Skills from "./Skills";
const Skills = dynamic(() => import("./Skills"), { ssr: false });

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
