import { UserRound } from "lucide-react";
import type { TeamMember } from "../../types/site.types";

type TeamMemberCardProps = {
  member: TeamMember;
};

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className="glow-hover rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950 p-5 max-[430px]:p-[1.125rem] shadow-[0_8px_40px_rgba(2,6,23,0.45)] sm:p-7">
      <div className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/10 sm:mb-5 sm:h-16 sm:w-16">
        {member.imageUrl ? (
          <img
            src={member.imageUrl}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <UserRound className="h-7 w-7 text-cyan-300 sm:h-8 sm:w-8" />
        )}
      </div>

      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-cyan-200">{member.role}</p>
      <p className="team-summary mt-3.5 text-sm leading-7 text-slate-300 sm:mt-4 sm:text-base">{member.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
        {member.skills.map((skill) => (
          <span key={skill} className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-slate-200 sm:px-3 sm:text-xs">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
