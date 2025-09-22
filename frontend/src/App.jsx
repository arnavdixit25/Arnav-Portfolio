import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Internship from "./components/Internship";
import Certifications from "./components/Certifications";
import SoftSkillsHobbies from "./components/SoftSkillsHobbies";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="pt-20 max-w-4xl mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Internship />
        <Certifications />
        <SoftSkillsHobbies />
        <Contact />
      </div>
      <Chatbot />
    </div>
  );
}

export default App;
