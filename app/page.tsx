import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Team from "../components/Team";
import TechCarousel from "../components/TechCarousel";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Upwork from "../components/Upwork";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Upwork />
      <About />
      <Services />
      <Projects />
      <Team />
      <TechCarousel />
      <Contact />
      <Footer />
    </main>
  );
}
