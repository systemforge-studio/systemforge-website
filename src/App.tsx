import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { TeamSection } from "./components/sections/TeamSection";
import { TechStackSection } from "./components/sections/TechStackSection";
import { ArchitectureSection } from "./components/sections/ArchitectureSection";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <TechStackSection />
      <ArchitectureSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
