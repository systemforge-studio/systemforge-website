import { useLanguage } from "../../i18n/useLanguage";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionHeader } from "../ui/SectionHeader";
import { getStaggerDelayClass } from "../../shared/constants/animation";
import { SECTION_ID } from "../../shared/constants/routes";
import { SECTION_CLASSES } from "../../shared/constants/layout";

export function ProjectsSection() {
  const { content } = useLanguage();

  const section = content.projectsSection;
  const projects = section.items;

  return (
    <section
      id={SECTION_ID.PROJECTS}
      className={SECTION_CLASSES.default}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`animate-fade-up ${getStaggerDelayClass(index)}`}
            >
              <ProjectCard
                project={project}
                imageAltSuffix={section.imageAltSuffix}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}