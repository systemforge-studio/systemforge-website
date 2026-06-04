import type { SiteContent } from "../../i18n.types";
import { CONTACT_LINKS } from "../../../shared/constants/contact";
import { BUSINESS_CONTACT } from "../../../shared/constants/business";

export const englishContactSection: SiteContent["contactSection"] = {
  eyebrow: "Talk to an engineering partner",
  title: "De-risk delivery and scale your product roadmap.",
  description:
    "SystemForge Studio helps teams move from technical uncertainty to delivery clarity across architecture, platform engineering, and cloud operations.",
  businessContactLabel: "Business Contact",
  primaryButtonLabel: "Request Consultation",
  channels: [
    {
      label: "Email",
      value: BUSINESS_CONTACT.email,
      href: CONTACT_LINKS.email,
      isPrimary: true,
    },
    {
      label: "GitHub",
      value: BUSINESS_CONTACT.githubLabel,
      href: CONTACT_LINKS.github,
    },
  ],
};