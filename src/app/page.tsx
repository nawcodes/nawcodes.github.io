import { type NextPage } from "next";
import Hero from "@/components/Hero";
// import About from "@/components/About";";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
// import Testimonials from "@/components/Testimonials";
// import Contact from "@/components/Contact";

const Home: NextPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Experience />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
    </main>
  );
};

export default Home;
