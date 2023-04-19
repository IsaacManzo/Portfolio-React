import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Particle from "./components/Particle";

function App() {
  return (
    <div>
      <Particle />
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
