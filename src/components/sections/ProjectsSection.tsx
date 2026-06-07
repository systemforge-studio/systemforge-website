import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
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
  const direction = content.direction;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const scrollToProject = (index: number) => {
    const nextIndex = Math.max(0, Math.min(index, projects.length - 1));

    setActiveIndex(nextIndex);

    itemRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const handlePrevious = () => {
    scrollToProject(activeIndex - 1);
  };

  const handleNext = () => {
    scrollToProject(activeIndex + 1);
  };

  const previousIcon =
    direction === "rtl" ? (
      <ArrowRight className="h-4 w-4" />
    ) : (
      <ArrowLeft className="h-4 w-4" />
    );

  const nextIcon =
    direction === "rtl" ? (
      <ArrowLeft className="h-4 w-4" />
    ) : (
      <ArrowRight className="h-4 w-4" />
    );

  return (
    <section id={SECTION_ID.PROJECTS} className={SECTION_CLASSES.default}>
      <div className={PROJECTS_CLASSES.container}>
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className={PROJECTS_CLASSES.viewport}>
          <div className={PROJECTS_CLASSES.track}>
            {projects.map((project, index) => (
              <div
                key={project.title}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
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

        <div className={PROJECTS_CLASSES.navigationBar}>
          <div className={PROJECTS_CLASSES.navigationButtons}>
            <button
              type="button"
              className={PROJECTS_CLASSES.navigationButton}
              onClick={handlePrevious}
              disabled={activeIndex === 0}
              aria-label="Previous project"
            >
              {previousIcon}
            </button>

            <button
              type="button"
              className={PROJECTS_CLASSES.navigationButton}
              onClick={handleNext}
              disabled={activeIndex === projects.length - 1}
              aria-label="Next project"
            >
              {nextIcon}
            </button>
          </div>

          <button
            type="button"
            className={PROJECTS_CLASSES.viewAllButton}
            onClick={() => setIsModalOpen(true)}
          >
            {section.viewAllLabel}
          </button>
        </div>
      </div>

      {isModalOpen ? (
        <div className={PROJECTS_CLASSES.modalOverlay}>
          <div className={PROJECTS_CLASSES.modal}>
            <div className={PROJECTS_CLASSES.modalHeader}>
              <h3 className={PROJECTS_CLASSES.modalTitle}>
                {section.viewAllLabel}
              </h3>

              <button
                type="button"
                className={PROJECTS_CLASSES.modalCloseButton}
                onClick={() => setIsModalOpen(false)}
                aria-label="Close projects window"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className={PROJECTS_CLASSES.modalGrid}>
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  imageAltSuffix={section.imageAltSuffix}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}