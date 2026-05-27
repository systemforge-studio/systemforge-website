import { teamMembers } from "../../data/siteContent";
import { SectionHeader } from "../ui/SectionHeader";
import { TeamMemberCard } from "../ui/TeamMemberCard";

export function TeamSection() {
  return (
    <section id="team" className="bg-slate-900/50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Team"
          title="A focused software delivery team"
          description="Our team brings together backend architecture, mobile development, frontend implementation, testing, security, and integration experience."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name + member.role} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}