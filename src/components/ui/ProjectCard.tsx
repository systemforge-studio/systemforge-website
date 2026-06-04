import { GitBranch } from "lucide-react";
import type { Project } from "../../types/site.types";
import { PROJECT_CARD_CLASSES } from "../styles/projectCard.styles";

type ProjectCardProps = {
  project: Project;
  imageAltSuffix: string;
};

export function ProjectCard({ project, imageAltSuffix }: ProjectCardProps) {
  return (
    <article className={PROJECT_CARD_CLASSES.card}>
      <div className={PROJECT_CARD_CLASSES.imageWrapper}>
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`${project.title} ${imageAltSuffix}`}
            loading="lazy"
            decoding="async"
            className={PROJECT_CARD_CLASSES.image}
          />
        ) : (
          <div className={PROJECT_CARD_CLASSES.fallbackImage}>
            <GitBranch className={PROJECT_CARD_CLASSES.fallbackIcon} />
          </div>
        )}

        <div className={PROJECT_CARD_CLASSES.iconBadge}>
          <GitBranch className={PROJECT_CARD_CLASSES.badgeIcon} />
        </div>
      </div>

      <h3 className={PROJECT_CARD_CLASSES.title}>
        {project.title}
      </h3>

      {project.secondaryTitle ? (
        <p className={PROJECT_CARD_CLASSES.secondaryTitle}>
          {project.secondaryTitle}
        </p>
      ) : null}

      <p className={PROJECT_CARD_CLASSES.description}>
        {project.description}
      </p>

      <div className={PROJECT_CARD_CLASSES.tagsWrapper}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={PROJECT_CARD_CLASSES.tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}