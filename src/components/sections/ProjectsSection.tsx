import { projects } from "../../data/siteContent";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionHeader } from "../ui/SectionHeader";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title="Proven delivery across modernization and platform engineering"
          description="Examples of how we help organizations reduce technical risk, improve release velocity, and strengthen platform foundations."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
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
