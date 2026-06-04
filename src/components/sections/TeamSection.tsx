import { useLanguage } from "../../i18n/useLanguage";
import { SectionHeader } from "../ui/SectionHeader";
import { TeamMemberCard } from "../ui/TeamMemberCard";
import { getStaggerDelayClass } from "../../shared/constants/animation";
import { SECTION_ID } from "../../shared/constants/routes";
import { TEAM_SECTION_CLASSES } from "../styles/teamSection.styles";

export function TeamSection() {
  const { content } = useLanguage();

  const section = content.teamSection;
  const teamMembers = section.members;

  return (
    <section id={SECTION_ID.TEAM} className={TEAM_SECTION_CLASSES.section}>
      <div className={TEAM_SECTION_CLASSES.container}>
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className={TEAM_SECTION_CLASSES.grid}>
          {teamMembers.map((member, index) => (
            <div
              key={`${member.name}-${member.role}`}
              className={`${TEAM_SECTION_CLASSES.item} ${getStaggerDelayClass(
                index,
              )}`}
            >
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}