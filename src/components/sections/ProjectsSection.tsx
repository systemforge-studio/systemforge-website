import { projects } from "../../data/siteContent";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionHeader } from "../ui/SectionHeader";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 md:pb-24 md:pt-16 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projects"
          title="Proven delivery across modernization and platform engineering"
          description="Examples of how we help organizations reduce technical risk, improve release velocity, and strengthen platform foundations."
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={project.title} className="animate-fade-up" style={{ animationDelay: `${index * 70}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
