import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SectionDivider from "./components/SectionDivider";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <SectionDivider />
    </>
  );
}

export default App;
