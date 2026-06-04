import { TECH_BADGE_CLASSES } from "../styles/techBadge.styles";

type TechBadgeProps = {
  label: string;
};

export function TechBadge({ label }: TechBadgeProps) {
  return <span className={TECH_BADGE_CLASSES.badge}>{label}</span>;
}