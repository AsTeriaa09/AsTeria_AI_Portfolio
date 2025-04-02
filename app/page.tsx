import Hero from "./components/HeroSection";
import WorkSection from "./components/ProjectSection";
import About from "./components/AboutSection";
import ChatSection from "./components/ChatSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
   <>
   <Hero/>
   <WorkSection/>
   <About/>
   <ChatSection/>
   <ContactSection/>
   </>
  );
}
