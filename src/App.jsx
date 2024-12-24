import About from "./components/About";
import CardVerticleSlider from "./components/CardVerticleSlider";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardVerticleSlider />
      <Work />
      <About />
      <Features />
      <Footer />
    </>
  );
}
