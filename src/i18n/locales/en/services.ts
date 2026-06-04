import type { SiteContent } from "../../i18n.types";
import { SERVICE_IMAGES } from "../../../shared/constants/assets";

export const englishServicesSection: SiteContent["servicesSection"] = {
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
      imageUrl: SERVICE_IMAGES.fullStack,
    },
    {
      title: "Mobile Application Development",
      description:
        "Cross-platform mobile apps with reliable performance, seamless UX, and long-term maintainability.",
      iconKey: "smartphone",
      imageUrl: SERVICE_IMAGES.mobileApplication,
    },
    {
      title: "Backend & API Engineering",
      description:
        "Secure, scalable backends and APIs designed for reliability, performance, and integration.",
      iconKey: "code",
      imageUrl: SERVICE_IMAGES.backendApi,
    },
    {
      title: "Database Design & Integration",
      description:
        "Resilient data architecture with smart schema design, migrations, and high-performance queries.",
      iconKey: "database",
      imageUrl: SERVICE_IMAGES.database,
    },
    {
      title: "Authentication & Security",
      description:
        "Security-first implementation with RBAC, API hardening, identity controls, and best practices.",
      iconKey: "shield",
      imageUrl: SERVICE_IMAGES.authentication,
    },
    {
      title: "Cloud & Deployment",
      description:
        "CI/CD pipelines, infrastructure automation, and observability for reliable and fast deployments.",
      iconKey: "cloud",
      imageUrl: SERVICE_IMAGES.cloud,
    },
  ],
};