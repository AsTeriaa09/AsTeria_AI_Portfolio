import Image from "next/image";
import Hero from "./components/HeroSection";
import WorkSection from "./components/ProjectSection";
import About from "./components/AboutSection";

export default function Home() {
  return (
   <>
   <Hero/>
   <WorkSection/>
   <About/>
   </>
  );
}
