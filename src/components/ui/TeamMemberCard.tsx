import { UserRound } from "lucide-react";
import type { TeamMember } from "../../types/site.types";

type TeamMemberCardProps = {
  member: TeamMember;
};

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className="glow-hover rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-7 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30">
      <div className="mb-5 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-cyan-400/10">
        {member.imageUrl ? (
          <img src={member.imageUrl} alt={member.name} className="h-full w-full object-cover" />
        ) : (
          <UserRound className="h-8 w-8 text-cyan-400" />
        )}
      </div>

      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-cyan-300">{member.role}</p>
      <p className="mt-4 leading-7 text-slate-300">{member.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {member.skills.map((skill) => (
          <span key={skill} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}