import type {SiteContent} from "../i18n.types";
import {ROUTES} from "../../shared/constants/routes";
import {publicAsset} from "../../shared/utils/assets";

export const enContent: SiteContent = {
  language: "en",
  direction: "ltr",
  htmlLang: "en-CA",

  agency: {
    name: "SystemForge Studio",
    shortName: "SFS",
    tagline: "Build • Innovate • Scale",
    description:
      "Enterprise software engineering partner for scalable product platforms, secure backend systems, and cloud-ready architecture.",
    footerDescription:
      "Modern software engineering studio focused on scalable web, mobile, backend, cloud, and architecture solutions.",
  },

  nav: {
    callToAction: "Book Call",
    items: [
      {label: "Projects", href: ROUTES.PROJECTS},
      {label: "Services", href: ROUTES.SERVICES},
      {label: "Technology", href: ROUTES.STACK},
      {label: "Principles", href: ROUTES.ARCHITECTURE},
      {label: "Team", href: ROUTES.TEAM},
      {label: "Contact", href: ROUTES.CONTACT},
    ],
  },

  languageSwitcher: {
    ariaLabel: "Change website language",
  },

  hero: {
    eyebrow: "Build • Innovate • Scale",
    title: "We build software platforms enterprises can trust to scale.",
    description:
      "SystemForge Studio partners with product and operations leaders to deliver secure, maintainable, and production-ready systems with clear architecture and measurable delivery outcomes.",
    primaryCta: "Schedule Discovery",
    secondaryCta: "View Case Highlights",
    logoAlt: "SystemForge Studio",
  },

  projectsSection: {
    eyebrow: "Projects",
    title: "Proven delivery across modernization and platform engineering",
    description:
      "Examples of how we help organizations reduce technical risk, improve release velocity, and strengthen platform foundations.",
    items: [
      {
        title: "EquiTip Modernization",
        description:
          "Re-architected a legacy mobile system into a scalable platform with modern services, stronger data integrity, and faster release capability.",
        tags: [
          "React Native",
          "Node.js",
          "PostgreSQL",
          "Microservices",
          "API Gateway",
        ],
        imageUrl: publicAsset("/project/EquiTip.png"),
      },
      {
        title: "AI Fall Protection Platform",
        description:
          "Delivered a field-ready safety platform with AI-assisted workflows, offline resilience, and standardized reporting for operational teams.",
        tags: [
          "React Native",
          "AI Integration",
          "MongoDB",
          "Offline Sync",
          "PDF Export",
        ],
        imageUrl: publicAsset("/project/fpp.png"),
      },
      {
        title: "PathPal Community Navigation",
        description:
          "Built an accessibility-focused community navigation app with route planning, community feed, user-submitted POIs, and media-supported local updates.",
        tags: [
          "HTML",
          "JavaScript",
          "Node.js",
          "Express",
          "MongoDB",
          "Cloudinary",
        ],
        imageUrl: publicAsset("/project/pathPal.png"),
      },
    ],
  },

  servicesSection: {
    eyebrow: "Services",
    title: "Strategic engineering services for business-critical products",
    description:
      "From architecture through release, we help teams deliver secure, scalable software with lower operational risk and stronger delivery confidence.",
    items: [
      {
        title: "Full-Stack Product Development",
        description:
          "End-to-end web and mobile solutions built for scale, performance, and growth.",
        iconKey: "rocket",
        highlights: [
          "Modern Web Applications",
          "Mobile Apps",
          "Scalable Architectures",
          "Production-Ready Delivery",
        ],
        cta: "From idea to production",
        imageUrl: publicAsset("/services/full-stack.png"),
      },
      {
        title: "Mobile Application Development",
        description:
          "Cross-platform mobile apps with reliable performance, seamless UX, and long-term maintainability.",
        iconKey: "smartphone",
        imageUrl: publicAsset("/services/mobile-application.png"),
      },
      {
        title: "Backend & API Engineering",
        description:
          "Secure, scalable backends and APIs designed for reliability, performance, and integration.",
        iconKey: "code",
        imageUrl: publicAsset("/services/backend-api.png"),
      },
      {
        title: "Database Design & Integration",
        description:
          "Resilient data architecture with smart schema design, migrations, and high-performance queries.",
        iconKey: "database",
        imageUrl: publicAsset("/services/database.png"),
      },
      {
        title: "Authentication & Security",
        description:
          "Security-first implementation with RBAC, API hardening, identity controls, and best practices.",
        iconKey: "shield",
        imageUrl: publicAsset("/services/authentication.png"),
      },
      {
        title: "Cloud & Deployment",
        description:
          "CI/CD pipelines, infrastructure automation, and observability for reliable and fast deployments.",
        iconKey: "cloud",
        imageUrl: publicAsset("/services/cloud.png"),
      },
    ],
  },

  techStackSection: {
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
          {label: "React", iconKey: "react", color: "text-cyan-400"},
          {
            label: "React Native",
            iconKey: "reactNative",
            color: "text-sky-400",
          },
          {label: "Next.js", iconKey: "next", color: "text-slate-100"},
          {
            label: "TypeScript",
            iconKey: "typescript",
            color: "text-blue-500",
          },
          {label: "Vue.js", iconKey: "vue", color: "text-emerald-400"},
        ],
      },
      {
        title: "Backend & APIs",
        shortTitle: "Backend",
        description: "Robust server-side logic and APIs.",
        iconKey: "backend",
        items: [
          {label: "Node.js", iconKey: "node", color: "text-green-500"},
          {label: "Express", iconKey: "express", color: "text-slate-100"},
          {label: ".NET", iconKey: "dotnet", color: "text-violet-500"},
          {label: "Python", iconKey: "python", color: "text-blue-400"},
          {label: "Go", iconKey: "go", color: "text-cyan-300"},
        ],
      },
      {
        title: "Database & Systems",
        shortTitle: "Database",
        description: "Secure, scalable and high-performance data.",
        iconKey: "database",
        items: [
          {
            label: "PostgreSQL",
            iconKey: "postgresql",
            color: "text-blue-500",
          },
          {label: "MongoDB", iconKey: "mongodb", color: "text-green-500"},
          {label: "Redis", iconKey: "redis", color: "text-red-500"},
          {label: "Oracle", iconKey: "oracle", color: "text-red-500"},
          {
            label: "SQL Server",
            iconKey: "sqlServer",
            color: "text-rose-400",
          },
        ],
      },
      {
        title: "Cloud & DevOps",
        shortTitle: "Cloud & DevOps",
        description: "Infrastructure, deployment and automation.",
        iconKey: "cloud",
        items: [
          {label: "Docker", iconKey: "docker", color: "text-blue-500"},
          {label: "AWS", iconKey: "aws", color: "text-orange-400"},
          {label: "Azure", iconKey: "azure", color: "text-blue-500"},
          {label: "Railway", iconKey: "railway", color: "text-purple-400"},
          {
            label: "GitHub Actions",
            iconKey: "githubActions",
            color: "text-blue-500",
          },
        ],
      },
    ],
  },

  architectureSection: {
    eyebrow: "Engineering Principles",
    title: "How we build reliable software systems",
    description:
      "We follow proven engineering principles and cloud-native practices to deliver scalable, secure, and high-quality solutions for our clients.",
    appliedInLabel: "Applied in",
    items: [
      {
        title: "Microservices",
        description:
          "Domain-driven service boundaries that support independent scaling and change velocity.",
        iconKey: "microservices",
        appliedIn: "EquiTip Modernization",
      },
      {
        title: "API Gateway",
        description:
          "Centralized traffic control with policy enforcement, observability, and secure exposure.",
        iconKey: "gateway",
        appliedIn: "EquiTip API Gateway Architecture",
      },
      {
        title: "Identity & Auth",
        description:
          "Enterprise access control with JWT, RBAC, and explicit permission boundaries.",
        iconKey: "identity",
        appliedIn: "All Projects",
      },
      {
        title: "Secure Services",
        description:
          "Defense-in-depth backend patterns with validation, hardening, and risk-aware defaults.",
        iconKey: "security",
        appliedIn: "AI Fall Protection Plan & PathPal Platform",
      },
      {
        title: "Modern Deployment",
        description:
          "Production-ready deployment workflows using GitHub, Docker, Railway, AWS, and Azure.",
        iconKey: "deployment",
        appliedIn: "EquiTip Modernization",
      },
      {
        title: "Delivery Workflow",
        description:
          "Execution frameworks that keep scope, quality, and timeline aligned to business goals.",
        iconKey: "workflow",
        appliedIn: "All Projects",
      },
    ],
  },

  teamSection: {
    eyebrow: "Team",
    title: "Cross-functional experts aligned to business outcomes",
    description:
      "We combine architecture leadership, implementation depth, and delivery discipline to support teams from planning through production.",
    members: [
      {
        name: "Haider Al-Sudani",
        imageUrl: publicAsset("/team/haider.png"),
        role: "Founder | Full-Stack Developer | Backend Architecture",
        summary:
          "Founder of SystemForge Studio. Leads solution architecture, backend strategy, delivery planning, and stakeholder communication for end-to-end execution.",
        skills: [
          "Founder",
          "Backend",
          "Architecture",
          "React Native",
          "Node.js",
          "PostgreSQL",
        ],
      },
      {
        name: "Haven Zhang",
        imageUrl: publicAsset("/team/haven.png"),
        role: "Full-Stack Developer | Enterprise Applications",
        summary:
          "Enterprise software developer with 7 years of experience delivering solutions for NEC client projects and modern full-stack applications.",
        skills: [
          "System Design",
          "Enterprise",
          ".NET",
          "React",
          "Node.js",
          "Oracle",
        ],
      },
      {
        name: "Jimmy Kong",
        imageUrl: publicAsset("/team/jimmy.png"),
        role: "Mobile Developer",
        summary:
          "Independent developer of mobile app Rentamin. AWS Certified Solutions Architect with strong knowledge of the cloud ecosystem. Actively uses AI to improve development productivity.",
        skills: [
          "Go",
          "TypeScript",
          "AWS",
          "React Native",
          "Next.js",
          "Web Animations",
          "CSS",
        ],
      },
      {
        name: "Lin Pan",
        imageUrl: publicAsset("/team/lin.jpg"),
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
        imageUrl: publicAsset("/team/jerry.png"),
        role: "Full-Stack Developer",
        summary:
          "Full-stack developer focused on backend implementation and API integration. Contributes to service development, database-related work, authentication flows, and project documentation.",
        skills: [
          "Vue.js",
          "React",
          "Node.js",
          "C#",
          "Java",
          "Oracle",
          "MongoDB",
          "PostgreSQL",
          "Git Workflow",
        ],
      },
    ],
  },

  contactSection: {
    eyebrow: "Talk to an engineering partner",
    title: "De-risk delivery and scale your product roadmap.",
    description:
      "SystemForge Studio helps teams move from technical uncertainty to delivery clarity across architecture, platform engineering, and cloud operations.",
    businessContactLabel: "Business Contact",
    primaryButtonLabel: "Request Consultation",
    channels: [
      {
        label: "Email",
        value: "haider.alsudani.dev@gmail.com",
        href: "mailto:haider.alsudani.dev@gmail.com",
        isPrimary: true,
      },
      {
        label: "GitHub",
        value: "systemforge-studio",
        href: "https://github.com/systemforge-studio",
      },
    ],
  },

  footer: {
    copyrightPrefix: "All rights reserved.",
    links: [
      {
        label: "GitHub",
        value: "systemforge-studio",
        href: "https://github.com/systemforge-studio",
      },
      {
        label: "Email",
        value: "haider.alsudani.dev@gmail.com",
        href: "mailto:haider.alsudani.dev@gmail.com",
      },
    ],
  },
};