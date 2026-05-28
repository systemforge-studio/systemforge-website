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
  "Enterprise software engineering partner for scalable product platforms, secure backend systems, and cloud-ready architecture.";
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
    description: "Business-critical web platforms with robust frontend architecture, secure APIs, and production-ready delivery standards.",
    icon: Code2,
  },
  {
    title: "Mobile Application Development",
    description: "Cross-platform mobile products engineered for reliability, secure integration, and long-term maintainability at scale.",
    icon: Smartphone,
  },
  {
    title: "Backend & API Engineering",
    description: "High-availability backend services and APIs with enforceable security, clear service contracts, and scalable architecture patterns.",
    icon: Server,
  },
  {
    title: "Database Design & Integration",
    description: "Resilient data architecture with governed schema design, migration strategy, and maintainable persistence for growth-stage products.",
    icon: Database,
  },
  {
    title: "Authentication & Security",
    description: "Security-first implementation with identity controls, RBAC, API hardening, and defensive backend engineering practices.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud & Deployment",
    description: "Cloud deployment pipelines with CI/CD governance, release reliability, and infrastructure workflows built for operational confidence.",
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
    description: "Re-architected a legacy mobile system into a scalable platform with modern services, stronger data integrity, and faster release capability.",
    tags: ["React Native", "Node.js", "PostgreSQL", "Microservices", "API Gateway"],
  },
  {
    title: "AI Fall Protection Platform",
    description: "Delivered a field-ready safety platform with AI-assisted workflows, offline resilience, and standardized reporting for operational teams.",
    tags: ["React Native", "AI Integration", "MongoDB", "Offline Sync", "PDF Export"],
  },
  {
    title: "Custom Business Systems",
    description: "Designed internal product systems that improved process control, reporting visibility, and cross-team operational efficiency.",
    tags: ["Full-Stack", "APIs", "Cloud", "Automation"],
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Haider Al-Sudani",
    imageUrl: "/team/haider.png",
    role: "Founder | Full-Stack Developer | Backend Architecture",
    summary:
      "Founder of SystemForge Studio. Leads solution architecture, backend strategy, delivery planning, and stakeholder communication for end-to-end execution.",
    skills: ["Founder", "Backend", "Architecture", "React Native", "Node.js", "PostgreSQL"],
  },
  {
    name: "Team Member",
    imageUrl: "/team/haven.png",
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
