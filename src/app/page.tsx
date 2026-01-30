import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Documents from "@/components/Documents";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
