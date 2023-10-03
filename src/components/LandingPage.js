import React from "react";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";
// import HeroSection from "./HeroSection";
const HeroSection = dynamic(() => import("./HeroSection"), { ssr: false });
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
