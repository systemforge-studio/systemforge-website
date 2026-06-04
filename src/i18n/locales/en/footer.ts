import type { SiteContent } from "../../i18n.types";
import { CONTACT_LINKS } from "../../../shared/constants/contact";
import { BUSINESS_CONTACT } from "../../../shared/constants/business";

export const englishFooter: SiteContent["footer"] = {
  copyrightPrefix: "All rights reserved.",
  links: [
    {
      label: "GitHub",
      value: BUSINESS_CONTACT.githubLabel,
      href: CONTACT_LINKS.github,
    },
    {
      label: "Email",
      value: BUSINESS_CONTACT.email,
      href: CONTACT_LINKS.email,
    },
  ],
};