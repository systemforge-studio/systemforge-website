import { teamMembers } from "../../data/siteContent";
import { SectionHeader } from "../ui/SectionHeader";
import { TeamMemberCard } from "../ui/TeamMemberCard";

export function TeamSection() {
  return (
    <section id="team" className="bg-slate-900/45 px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Team"
          title="Cross-functional experts aligned to business outcomes"
          description="We combine architecture leadership, implementation depth, and delivery discipline to support teams from planning through production."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={member.name + member.role} className="animate-fade-up" style={{ animationDelay: `${index * 70}ms` }}>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
