import type { SiteContent } from "../../i18n.types";

export const englishArchitectureSection: SiteContent["architectureSection"] = {
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
};