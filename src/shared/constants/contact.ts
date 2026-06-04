import { BUSINESS_CONTACT } from "./business";

export const CONTACT_LINKS = {
  email: `mailto:${BUSINESS_CONTACT.email}`,
  github: `https://github.com/${BUSINESS_CONTACT.githubHandle}`,
  linkedin: "https://linkedin.com/company/systemforge-studio",
  instagram: `https://instagram.com/${BUSINESS_CONTACT.instagramHandle}`,
  whatsapp: "https://wa.me/xxxxxxxxxxx",
} as const;