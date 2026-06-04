import type { SiteContent } from "../../i18n.types";
import { PROJECT_IMAGES } from "../../../shared/constants/assets";

export const englishProjectsSection: SiteContent["projectsSection"] = {
  eyebrow: "Projects",
  title: "Proven delivery across modernization and platform engineering",
  description:
    "Examples of how we help organizations reduce technical risk, improve release velocity, and strengthen platform foundations.",
  imageAltSuffix: "demo",
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
  ],
};