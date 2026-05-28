import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { TeamSection } from "./components/sections/TeamSection";
import { TechStackSection } from "./components/sections/TechStackSection";
import { ArchitectureSection } from "./components/sections/ArchitectureSection";

function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto h-16 w-full max-w-7xl"
      style={{
        background:
          "linear-gradient(180deg, rgba(8, 15, 30, 0) 0%, rgba(34, 211, 238, 0.025) 50%, rgba(8, 15, 30, 0) 100%)",
      }}
    />
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <TechStackSection />
      <SectionDivider />
      <ArchitectureSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <TeamSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </main>
  );
}
