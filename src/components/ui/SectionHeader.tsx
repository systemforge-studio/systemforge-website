import { SECTION_HEADER_CLASSES } from "../styles/sectionHeader.styles";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  secondaryTitle?: string;
  description: string;
};

export function SectionHeader({
  eyebrow,
  title,
  secondaryTitle,
  description,
}: SectionHeaderProps) {
  return (
    <div className={SECTION_HEADER_CLASSES.wrapper}>
      <p className={SECTION_HEADER_CLASSES.eyebrow}>{eyebrow}</p>

      <h2 className={SECTION_HEADER_CLASSES.title}>{title}</h2>

      {secondaryTitle ? (
        <p className={SECTION_HEADER_CLASSES.secondaryTitle}>
          {secondaryTitle}
        </p>
      ) : null}

      <p className={SECTION_HEADER_CLASSES.description}>{description}</p>
    </div>
  );
}