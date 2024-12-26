import React from "react";
import Hero from "../components/Hero";
import CardVerticleSlider from "../components/CardVerticleSlider";
import About from "../components/About";
import Work from "../components/Work";
import Features from "../components/Features";

const Landing = () => {
  return (
    <div>
      <Hero />
      <CardVerticleSlider />
      <About />
      <Work />
      <Features />
    </div>
  );
};

export default Landing;
