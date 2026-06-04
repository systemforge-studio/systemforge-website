import type { SiteContent } from "../../i18n.types";
import { TEAM_IMAGES } from "../../../shared/constants/assets";

export const englishTeamSection: SiteContent["teamSection"] = {
  eyebrow: "Team",
  title: "Cross-functional experts aligned to business outcomes",
  description:
    "We combine architecture leadership, implementation depth, and delivery discipline to support teams from planning through production.",
  members: [
    {
      name: "Haider Al-Sudani",
      imageUrl: TEAM_IMAGES.haider,
      role: "Founder | Full-Stack Developer | Backend Architecture",
      summary:
        "Founder of SystemForge Studio. Leads solution architecture, backend strategy, delivery planning, and stakeholder communication for end-to-end execution.",
      skills: ["Founder", "Backend", "Architecture", "React Native", "Node.js", "PostgreSQL"],
    },
    {
      name: "Haven Zhang",
      imageUrl: TEAM_IMAGES.haven,
      role: "Full-Stack Developer | Enterprise Applications",
      summary:
        "Enterprise software developer with 7 years of experience delivering solutions for NEC client projects and modern full-stack applications.",
      skills: ["System Design", "Enterprise", ".NET", "React", "Node.js", "Oracle"],
    },
    {
      name: "Jimmy Kong",
      imageUrl: TEAM_IMAGES.jimmy,
      role: "Mobile Developer",
      summary:
        "Independent developer of mobile app Rentamin. AWS Certified Solutions Architect with strong knowledge of the cloud ecosystem. Actively uses AI to improve development productivity.",
      skills: ["Go", "TypeScript", "AWS", "React Native", "Next.js", "Web Animations", "CSS"],
    },
    {
      name: "Lin Pan",
      imageUrl: TEAM_IMAGES.lin,
      role: "Full-Stack Developer | Business Systems Specialist",
      summary:
        "Full-stack developer experienced in building web, mobile, and backend systems. Combines enterprise consulting and software engineering to deliver scalable business solutions.",
      skills: [
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "System Design",
        "Business Analysis",
        "AI Integration",
        "Tax Technology",
        "Process Automation",
      ],
    },
    {
      name: "Jerry Xing",
      imageUrl: TEAM_IMAGES.jerry,
      role: "Full-Stack Developer",
      summary:
        "Full-stack developer focused on backend implementation and API integration. Contributes to service development, database-related work, authentication flows, and project documentation.",
      skills: ["Vue.js", "React", "Node.js", "C#", "Java", "Oracle", "MongoDB", "PostgreSQL", "Git Workflow"],
    },
  ],
};