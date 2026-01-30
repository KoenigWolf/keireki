import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";

const About = dynamic(() => import("@/components/About"));
const Summary = dynamic(() => import("@/components/Summary"));
const Skills = dynamic(() => import("@/components/Skills"));
const Experience = dynamic(() => import("@/components/Experience"));
const Education = dynamic(() => import("@/components/Education"));
const Stories = dynamic(() => import("@/components/Stories"));
const Projects = dynamic(() => import("@/components/Projects"));
const Documents = dynamic(() => import("@/components/Documents"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Stories />
        <Projects />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
