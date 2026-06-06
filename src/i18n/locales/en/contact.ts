import type { SiteContent } from "../../i18n.types";
import { CONTACT_LINKS } from "../../../shared/constants/contact";
import { BUSINESS_CONTACT } from "../../../shared/constants/business";

export const englishContactSection: SiteContent["contactSection"] = {
  eyebrow: "Talk to an engineering partner",
  title: "De-risk delivery and scale your product roadmap.",
  description:
    "SystemForge Studio helps teams move from technical uncertainty to delivery clarity across architecture, platform engineering, and cloud operations.",
  businessContactLabel: "Business Contact",
  primaryButtonLabel: "Request a Quote",
  contactGroupTitle: "Contact Us",
  followGroupTitle: "Visit / Follow Us",
  channels: [
    {
      label: "Quote Form",
      value: "Request a quote",
      href: CONTACT_LINKS.quote,
      iconKey: "quote",
      group: "contact",
      isPrimary: true,
    },
    {
      label: "Email",
      value: BUSINESS_CONTACT.email,
      href: CONTACT_LINKS.email,
      iconKey: "mail",
      group: "contact",
    },
    {
      label: "Phone",
      value: BUSINESS_CONTACT.phoneDisplay,
      href: CONTACT_LINKS.phone,
      iconKey: "phone",
      group: "contact",
    },
    {
      label: "WhatsApp",
      value: BUSINESS_CONTACT.whatsappDisplay,
      href: CONTACT_LINKS.whatsapp,
      iconKey: "whatsapp",
      group: "contact",
    },
    {
      label: "Website",
      value: BUSINESS_CONTACT.websiteDisplay,
      href: CONTACT_LINKS.website,
      iconKey: "website",
      group: "follow",
    },
    {
      label: "LinkedIn",
      value: "SystemForge Studio",
      href: CONTACT_LINKS.linkedin,
      iconKey: "linkedin",
      group: "follow",
    },
    {
      label: "Instagram",
      value: BUSINESS_CONTACT.instagramHandle,
      href: CONTACT_LINKS.instagram,
      iconKey: "instagram",
      group: "follow",
    },
    {
      label: "Facebook",
      value: "SystemForge Studio",
      href: CONTACT_LINKS.facebook,
      iconKey: "facebook",
      group: "follow",
    },
    {
      label: "GitHub",
      value: BUSINESS_CONTACT.githubHandle,
      href: CONTACT_LINKS.github,
      iconKey: "github",
      group: "follow",
    },
  ],
};