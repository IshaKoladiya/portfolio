

import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ProjectCard } from './components/ProjectCard'
import { SkillsSection } from './components/SkillsSection'
import { SkillsTags } from './components/SkillsTags'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
   <main className="pt-10 pb-10 bg-black">
      <Header />
      <HeroSection />

      {/* <ProjectCard className="mt-6" />
      <ProjectCard className="mt-16 max-md:mt-10" />
      <ProjectCard className="mt-16 max-md:mt-10" /> */}

      {/* <SkillsSection />
      <SkillsTags />
      <AboutSection/> */}

      {/* <div className="flex flex-col items-center self-stretch px-4 mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <ContactSection />
        <Footer />
      </div> */}
    </main>
    </>
  )
}

export default App
