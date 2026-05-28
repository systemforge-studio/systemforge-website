import { UserRound } from "lucide-react";
import type { TeamMember } from "../../types/site.types";

type TeamMemberCardProps = {
  member: TeamMember;
};

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className="glow-hover rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950 p-7 shadow-[0_8px_40px_rgba(2,6,23,0.45)]">
      <div className="mb-5 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
        {member.imageUrl ? (
          <img
            src={member.imageUrl}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <UserRound className="h-8 w-8 text-cyan-300" />
        )}
      </div>

      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-cyan-200">{member.role}</p>
      <p className="mt-4 leading-7 text-slate-300">{member.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {member.skills.map((skill) => (
          <span key={skill} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
