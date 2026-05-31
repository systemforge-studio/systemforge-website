import {
  Code2,
  Smartphone,
  Server,
  Database,
  ShieldCheck,
  Cloud,
  Rocket,
} from "lucide-react";
import {
  SiDocker,
  SiDotnet,
  SiExpress,
  SiGithubactions,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRailway,
  SiReact,
  SiRedis,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { FaAws, FaDatabase, FaMicrosoft, FaServer } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
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
  { label: "Projects", href: ROUTES.PROJECTS },
  { label: "Services", href: ROUTES.SERVICES },
  { label: "Technology", href: ROUTES.STACK },
  { label: "Principles", href: ROUTES.ARCHITECTURE },
  { label: "Team", href: ROUTES.TEAM },
  { label: "Contact", href: ROUTES.CONTACT },
];

export const services: Service[] = [
  {
    title: "Full-Stack Product Development",
    description: "End-to-end web and mobile solutions built for scale, performance, and growth.",
    icon: Rocket,
    highlights: ["Modern Web Applications", "Mobile Apps", "Scalable Architectures", "Production-Ready Delivery"],
    cta: "From idea to production",
    imageUrl: "/services/full-stack.png",
  },
  {
    title: "Mobile Application Development",
    description: "Cross-platform mobile apps with reliable performance, seamless UX, and long-term maintainability.",
    icon: Smartphone,
    imageUrl: "/services/mobile-application.png",
  },
  {
    title: "Backend & API Engineering",
    description: "Secure, scalable backends and APIs designed for reliability, performance, and integration.",
    icon: Code2,
    imageUrl: "/services/backend-api.png",
  },
  {
    title: "Database Design & Integration",
    description: "Resilient data architecture with smart schema design, migrations, and high-performance queries.",
    icon: Database,
    imageUrl: "/services/database.png",
  },
  {
    title: "Authentication & Security",
    description: "Security-first implementation with RBAC, API hardening, identity controls, and best practices.",
    icon: ShieldCheck,
    imageUrl: "/services/authentication.png",
  },
  {
    title: "Cloud & Deployment",
    description: "CI/CD pipelines, infrastructure automation, and observability for reliable and fast deployments.",
    icon: Cloud,
    imageUrl: "/services/cloud.png",
  },
];

export const techCategories: TechCategory[] = [
  {
    title: "Frontend & Mobile",
    items: [
      { label: "React", icon: SiReact, color: "text-cyan-400" },
      { label: "React Native", icon: TbBrandReactNative, color: "text-sky-400" },
      { label: "Next.js", icon: SiNextdotjs, color: "text-slate-100" },
      { label: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { label: "Vue.js", icon: SiVuedotjs, color: "text-emerald-400" },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { label: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { label: "Express", icon: SiExpress, color: "text-slate-100" },
      { label: ".NET", icon: SiDotnet, color: "text-violet-500" },
      { label: "Python", icon: SiPython, color: "text-blue-400" },
      { label: "Go", icon: FaGolang, color: "text-cyan-300" },
    ],
  },
  {
    title: "Database & Systems",
    items: [
      { label: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
      { label: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { label: "Redis", icon: SiRedis, color: "text-red-500" },
      { label: "Oracle", icon: FaDatabase, color: "text-red-500" },
      { label: "SQL Server", icon: FaServer, color: "text-rose-400" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { label: "Docker", icon: SiDocker, color: "text-blue-500" },
      { label: "AWS", icon: FaAws, color: "text-orange-400" },
      { label: "Azure", icon: FaMicrosoft, color: "text-blue-500" },
      { label: "Railway", icon: SiRailway, color: "text-purple-400" },
      { label: "GitHub Actions", icon: SiGithubactions, color: "text-blue-500" },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "EquiTip Modernization",
    description: "Re-architected a legacy mobile system into a scalable platform with modern services, stronger data integrity, and faster release capability.",
    tags: ["React Native", "Node.js", "PostgreSQL", "Microservices", "API Gateway"],
    imageUrl: "/project/EquiTip.png",
  },
  {
    title: "AI Fall Protection Platform",
    description: "Delivered a field-ready safety platform with AI-assisted workflows, offline resilience, and standardized reporting for operational teams.",
    tags: ["React Native", "AI Integration", "MongoDB", "Offline Sync", "PDF Export"],
    imageUrl: "/project/fpp.png",
  },
  {
    title: "PathPal Community Navigation",
    description: "Built an accessibility-focused community navigation app with route planning, community feed, user-submitted POIs, and media-supported local updates.",
    tags: ["HTML", "JavaScript", "Node.js", "Express", "MongoDB", "Cloudinary"],
    imageUrl: "/project/pathPal.png",
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
    name: "Haven Zhang",
    imageUrl: "/team/haven.png",
    role: "Full-Stack Developer | Enterprise Applications",
    summary:
      "Enterprise software developer with 7 years of experience delivering solutions for NEC client projects and modern full-stack applications.",
    skills: ["System Design", "Enterprise", ".NET", "React", "Node.js", "Oracle"],
  },
  {
    name: "Jimmy Kong",
    imageUrl: "/team/jimmy.png",
    role: "Mobile Developer",
    summary:
      "Independent developer of mobile app Rentamin. AWS Certified Solutions Architect with strong knowledge of the cloud ecosystem. Actively uses AI to improve development productivity.",
    skills: ["Go", "TypeScript", "AWS", "React Native", "Next.js", "Web Animations", "CSS"],
  },
  {
    name: "Lin Pan",
    imageUrl: "/team/lin.jpg",
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
    imageUrl: "/team/jerry.png",
    role: "Full-Stack Developer",
    summary:
      "Full-stack developer focused on backend implementation and API integration. Contributes to service development, database-related work, authentication flows, and project documentation.",
    skills: ["Vue.js", "React", "Node.js", "C#", "Java", "Oracle", "MongoDB", "PostgreSQL", "Git Workflow"],
  },
];
