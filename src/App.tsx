
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProjectCard } from "./components/ProjectCard";
import { SkillsSection } from "./components/SkillsSection";
import { SkillsTags } from './components/SkillsTags';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".project-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    cards.forEach((card, index) => {
      if (index !== 0) {
        tl.fromTo(
          card,
          { yPercent: 100 },
          { yPercent: 0, ease: "none" },
          index
        );
      }
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <main className="bg-black text-white">
      <Header />
      <HeroSection />

      {/* ✅ GSAP ONLY HERE */}
      <section
        ref={projectRef}
        className="relative h-screen overflow-hidden"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>

      {/* ✅ NORMAL SCROLL RESUMES */}
      <SkillsSection />
      <SkillsTags/>
      <AboutSection />
      <div className="flex flex-col items-center self-stretch px-4 mt-20 w-full max-md:mt-10 max-md:max-w-full">
      <ContactSection />
      <Footer />
     </div>

    </main>
  );
}

export default App;


