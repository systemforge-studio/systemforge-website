import { BUSINESS_CONTACT } from "./business";

export const CONTACT_LINKS = {
  email: `mailto:${BUSINESS_CONTACT.email}`,

  quote: `mailto:${BUSINESS_CONTACT.email}?subject=Request%20a%20Quote%20-%20SystemForge%20Studio&body=Hello%20SystemForge%20Studio,%0D%0A%0D%0AI%20would%20like%20to%20request%20a%20quote.%0D%0A%0D%0AProject%20type:%0D%0ABudget:%0D%0ATimeline:%0D%0ADescription:%0D%0A`,

  phone: BUSINESS_CONTACT.phoneHref,
  whatsapp: BUSINESS_CONTACT.whatsappHref,
  website: BUSINESS_CONTACT.websiteHref,

  github: `https://github.com/${BUSINESS_CONTACT.githubHandle}`,
  linkedin: `https://linkedin.com/company/${BUSINESS_CONTACT.linkedinCompany}`,
  instagram: `https://instagram.com/${BUSINESS_CONTACT.instagramHandle}`,
  facebook: `https://facebook.com/${BUSINESS_CONTACT.facebookHandle}`,
  tiktok: `https://tiktok.com/@${BUSINESS_CONTACT.tiktokHandle}`,
} as const;