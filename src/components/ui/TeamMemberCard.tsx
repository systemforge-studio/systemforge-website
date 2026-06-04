import { UserRound } from "lucide-react";
import type { TeamMember } from "../../types/site.types";
import { TEAM_MEMBER_CARD_CLASSES } from "../styles/teamMemberCard.styles";

type TeamMemberCardProps = {
  member: TeamMember;
};

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className={TEAM_MEMBER_CARD_CLASSES.card}>
      <div className={TEAM_MEMBER_CARD_CLASSES.avatarBox}>
        {member.imageUrl ? (
          <img
            src={member.imageUrl}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className={TEAM_MEMBER_CARD_CLASSES.avatarImage}
          />
        ) : (
          <UserRound className={TEAM_MEMBER_CARD_CLASSES.fallbackIcon} />
        )}
      </div>

      <h3 className={TEAM_MEMBER_CARD_CLASSES.name}>{member.name}</h3>

      <p className={TEAM_MEMBER_CARD_CLASSES.role}>{member.role}</p>

      {member.secondaryRole ? (
        <p className={TEAM_MEMBER_CARD_CLASSES.secondaryRole}>
          {member.secondaryRole}
        </p>
      ) : null}

      <p className={TEAM_MEMBER_CARD_CLASSES.summary}>{member.summary}</p>

      <div className={TEAM_MEMBER_CARD_CLASSES.skillsWrapper}>
        {member.skills.map((skill) => (
          <span key={skill} className={TEAM_MEMBER_CARD_CLASSES.skill}>
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}