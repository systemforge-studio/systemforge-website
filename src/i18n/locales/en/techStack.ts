import type { SiteContent } from "../../i18n.types";

export const englishTechStackSection: SiteContent["techStackSection"] = {
  eyebrow: "Technology",
  title: "Technologies We Build With",
  description:
    "Modern, reliable and scalable technologies that help us build high-quality digital products.",
  closingText:
    "We continuously explore and adopt new technologies to deliver better solutions.",
  categories: [
    {
      title: "Frontend & Mobile",
      shortTitle: "Frontend",
      description: "Building fast, responsive and accessible interfaces.",
      iconKey: "frontend",
      items: [
        { label: "React", iconKey: "react" },
        { label: "React Native", iconKey: "reactNative" },
        { label: "Next.js", iconKey: "next" },
        { label: "TypeScript", iconKey: "typescript" },
        { label: "Vue.js", iconKey: "vue" },
      ],
    },
    {
      title: "Backend & APIs",
      shortTitle: "Backend",
      description: "Robust server-side logic and APIs.",
      iconKey: "backend",
      items: [
        { label: "Node.js", iconKey: "node" },
        { label: "Express", iconKey: "express" },
        { label: ".NET", iconKey: "dotnet" },
        { label: "Python", iconKey: "python" },
        { label: "Go", iconKey: "go" },
      ],
    },
    {
      title: "Database & Systems",
      shortTitle: "Database",
      description: "Secure, scalable and high-performance data.",
      iconKey: "database",
      items: [
        { label: "PostgreSQL", iconKey: "postgresql" },
        { label: "MongoDB", iconKey: "mongodb" },
        { label: "Redis", iconKey: "redis" },
        { label: "Oracle", iconKey: "oracle" },
        { label: "SQL Server", iconKey: "sqlServer" },
      ],
    },
    {
      title: "Cloud & DevOps",
      shortTitle: "Cloud & DevOps",
      description: "Infrastructure, deployment and automation.",
      iconKey: "cloud",
      items: [
        { label: "Docker", iconKey: "docker" },
        { label: "AWS", iconKey: "aws" },
        { label: "Azure", iconKey: "azure" },
        { label: "Railway", iconKey: "railway" },
        { label: "GitHub Actions", iconKey: "githubActions" },
      ],
    },
  ],
};