import Nav from "@/components/Nav";
import SectionDots from "@/components/SectionDots";
import Hero from "@/components/Hero";
import PortfolioDashboard from "@/components/PortfolioDashboard";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FieldWork from "@/components/FieldWork";
import Projects from "@/components/Projects";
import Credentials from "@/components/Credentials";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-paper min-h-screen">
      <Nav />
      <SectionDots />
      <Hero />
      <PortfolioDashboard />
      <About />
      <Experience />
      <FieldWork />
      <Projects />
      <Credentials />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
