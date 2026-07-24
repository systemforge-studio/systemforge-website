import type { SiteContent } from "../../i18n.types";
import { PROJECT_IMAGES } from "../../../shared/constants/assets";

export const englishProjectsSection: SiteContent["projectsSection"] = {
  eyebrow: "Projects",
  title: "Proven delivery across modernization and platform engineering",
  description:
    "Examples of how we help organizations reduce technical risk, improve release velocity, and strengthen platform foundations.",
  imageAltSuffix: "demo",
  viewAllLabel: "See all projects",
  items: [
    {
      title: "EquiTip Modernization",
      description:
        "Re-architected a legacy mobile system into a scalable platform with modern services, stronger data integrity, and faster release capability.",
      tags: ["React Native", "Node.js", "PostgreSQL", "Microservices", "API Gateway"],
      imageUrl: PROJECT_IMAGES.equitip,
    },
    {
      title: "AI Fall Protection Platform",
      description:
        "Delivered a field-ready safety platform with AI-assisted workflows, offline resilience, and standardized reporting for operational teams.",
      tags: ["React Native", "AI Integration", "MongoDB", "Offline Sync", "PDF Export"],
      imageUrl: PROJECT_IMAGES.fallProtection,
    },
    {
      title: "PathPal Community Navigation",
      description:
        "Built an accessibility-focused community navigation app with route planning, community feed, user-submitted POIs, and media-supported local updates.",
      tags: ["HTML", "JavaScript", "Node.js", "Express", "MongoDB", "Cloudinary"],
      imageUrl: PROJECT_IMAGES.pathPal,
    },
    {
      title: "Accessibility Intelligence System",
      description:
        "Developed an AI-powered accessibility research platform with mobile sensor collection, GPS route tracking, risk analysis, interactive maps, and AI-generated accessibility insights for wheelchair mobility assessment.",
      tags: [
        "React Native",
        "Expo",
        "ASP.NET Core",
        "MongoDB",
        "PostgreSQL",
        "GPS Tracking",
        "AI Analysis",
      ],
      imageUrl: PROJECT_IMAGES.accessibilityIntelligence,
    },
    {
      title: "FinSight AI",
      description:
        "Built an AI-powered financial intelligence platform that detects unusual spending patterns, explains financial trends, and turns business data into clear, actionable recommendations.",
      tags: ["React", ".NET 8", "OpenAI API", "ML.NET", "SQLite"],
      imageUrl: PROJECT_IMAGES.finSightAi,
    },
  ],
};
