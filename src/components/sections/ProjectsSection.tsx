import { useLanguage } from "../../i18n/useLanguage";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionHeader } from "../ui/SectionHeader";
import { getStaggerDelayClass } from "../../shared/constants/animation";
import { SECTION_ID } from "../../shared/constants/routes";
import { SECTION_CLASSES } from "../../shared/constants/layout";
import { PROJECTS_CLASSES } from "../styles/projectsSection.styles";

export function ProjectsSection() {
  const { content } = useLanguage();

  const section = content.projectsSection;
  const projects = section.items;

  return (
    <section id={SECTION_ID.PROJECTS} className={SECTION_CLASSES.default}>
      <div className={PROJECTS_CLASSES.container}>
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className={PROJECTS_CLASSES.grid}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`${PROJECTS_CLASSES.item} ${getStaggerDelayClass(
                index,
              )}`}
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