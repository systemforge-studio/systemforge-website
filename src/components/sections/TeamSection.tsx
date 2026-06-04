import { useLanguage } from "../../i18n/useLanguage";
import { SectionHeader } from "../ui/SectionHeader";
import { TeamMemberCard } from "../ui/TeamMemberCard";
import { getStaggerDelayClass } from "../../shared/constants/animation";

export function TeamSection() {
  const { content } = useLanguage();

  const section = content.teamSection;
  const teamMembers = section.members;

  return (
    <section
      id="team"
      className="bg-slate-900/45 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 md:pb-24 md:pt-16 lg:pb-28 lg:pt-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={`${member.name}-${member.role}`}
              className={`animate-fade-up ${getStaggerDelayClass(index)}`}
            >
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}