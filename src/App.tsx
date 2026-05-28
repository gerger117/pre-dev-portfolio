import Hero from "./components/Home/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificate/Certificate";
import Contact from "./components/Contacts/Constact";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  );
}
