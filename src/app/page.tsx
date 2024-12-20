import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/StarsCanvas";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Tech from "@/sections/Tech";
import Works from "@/sections/Works";

export default function Home() {
  return (
    <main className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      <Experience />
      <Tech />
      <Experience />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </main>
  );
}
