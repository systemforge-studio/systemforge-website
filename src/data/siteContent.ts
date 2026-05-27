import {
  Code2,
  Smartphone,
  Server,
  Database,
  ShieldCheck,
  Cloud,
} from "lucide-react";
import type {
  NavigationItem,
  Project,
  Service,
  TeamMember,
  TechCategory,
} from "../types/site.types";
import { ROUTES } from "../constants/routes";

export const agencyName = "SystemForge Studio";
export const agencyShortName = "SFS";
export const agencyTagline = "Build • Innovate • Scale";
export const agencyDescription =
  "Modern software engineering studio focused on scalable web, mobile, backend, cloud, and architecture solutions.";
export const contactEmail = "haider.alsudani.dev@gmail.com";

export const navigationItems: NavigationItem[] = [
  { label: "Services", href: ROUTES.SERVICES },
  { label: "Stack", href: ROUTES.STACK },
  { label: "Projects", href: ROUTES.PROJECTS },
  { label: "Team", href: ROUTES.TEAM },
  { label: "Contact", href: ROUTES.CONTACT },
];

export const services: Service[] = [
  {
    title: "Full-Stack Web Development",
    description: "Modern web platforms with clean frontend, backend APIs, authentication, databases, and deployment-ready architecture.",
    icon: Code2,
  },
  {
    title: "Mobile Application Development",
    description: "Cross-platform mobile applications using React Native, Expo, secure API integration, and scalable app structure.",
    icon: Smartphone,
  },
  {
    title: "Backend & API Engineering",
    description: "Secure backend systems, REST APIs, authorization, validation, microservices, and production-ready service design.",
    icon: Server,
  },
  {
    title: "Database Design & Integration",
    description: "PostgreSQL, MongoDB, Prisma, schema design, migrations, data modeling, and maintainable persistence layers.",
    icon: Database,
  },
  {
    title: "Authentication & Security",
    description: "JWT, RBAC, secure middleware, validation, rate limiting, API protection, and security-focused engineering practices.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud & Deployment",
    description: "Docker, Railway, Vercel, GitHub workflows, CI/CD readiness, and cloud-friendly deployment practices.",
    icon: Cloud,
  },
];

export const techCategories: TechCategory[] = [
  {
    title: "Frontend & Mobile",
    items: ["React", "React Native", "Next.js", "Expo", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express.js", "Python", "FastAPI", "Java", "ASP.NET Core", "REST APIs", "WebSockets", "Socket.IO", "JWT", "Prisma"],
  },
  {
    title: "Programming Languages",
    items: ["C", "C++", "C#", "Java", "Kotlin", "Swift", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Databases & Systems",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis", "Firebase", "Linux", "Windows", "macOS"],
  },
  {
    title: "Tools & Engineering",
    items: ["Docker", "Git", "GitHub", "GitLab", "Postman", "Figma", "Selenium", "AWS", "Azure", "Railway", "Vercel", "Xcode"],
  },
  {
    title: "Architecture & Delivery",
    items: ["Microservices", "OOP", "MVC", "Agile/Scrum", "SDLC", "CI/CD", "QA Testing", "API Gateway", "Security", "System Design"],
  },
];

export const projects: Project[] = [
  {
    title: "EquiTip Modernization",
    description: "Modernized a legacy mobile platform from low-code tools into React Native, PostgreSQL, API Gateway, and microservices architecture.",
    tags: ["React Native", "Node.js", "PostgreSQL", "Microservices", "API Gateway"],
  },
  {
    title: "AI Fall Protection Platform",
    description: "Built a mobile safety platform with AI-assisted hazard detection, guided workflows, offline-first behavior, and PDF export.",
    tags: ["React Native", "AI Integration", "MongoDB", "Offline Sync", "PDF Export"],
  },
  {
    title: "Custom Business Systems",
    description: "Designed scalable internal tools, dashboards, APIs, databases, and workflow automation for business operations.",
    tags: ["Full-Stack", "APIs", "Cloud", "Automation"],
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Haider Al-Sudani",
    imageUrl: "/team/haider.png",
    role: "Founder | Full-Stack Developer | Backend Architecture",
    summary:
      "Founder of SystemForge Studio. Leads backend architecture, API design, database structure, system integration, technical planning, and client-facing delivery.",
    skills: ["Founder", "Backend", "Architecture", "React Native", "Node.js", "PostgreSQL"],
  },
  {
    name: "Team Member",
    role: "Frontend & Mobile Developer",
    summary: "Profile placeholder. Add frontend/mobile responsibilities, skills, photo, and portfolio details later.",
    skills: ["Frontend", "Mobile", "UI", "React", "React Native"],
  },
  {
    name: "Team Member",
    role: "Integration & QA Engineer",
    summary: "Profile placeholder. Add integration, testing, validation, and project delivery responsibilities later.",
    skills: ["Testing", "Integration", "QA", "Mobile Flows"],
  },
  {
    name: "Team Member",
    role: "Backend & Security Developer",
    summary: "Profile placeholder. Add backend, authentication, security, API, and documentation responsibilities later.",
    skills: ["Backend", "Security", "Auth", "APIs"],
  },
];