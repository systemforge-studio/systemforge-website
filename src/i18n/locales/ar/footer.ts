import type { SiteContent } from "../../i18n.types";
import { CONTACT_LINKS } from "../../../shared/constants/contact";
import { BUSINESS_CONTACT } from "../../../shared/constants/business";

export const arabicFooter: SiteContent["footer"] = {
  copyrightPrefix: "جميع الحقوق محفوظة.",
  links: [
    {
      label: "واتساب",
      value: BUSINESS_CONTACT.whatsappLabel,
      href: CONTACT_LINKS.whatsapp,
    },
    {
      label: "إنستغرام",
      value: BUSINESS_CONTACT.instagramLabel,
      href: CONTACT_LINKS.instagram,
    },
    {
      label: "البريد الإلكتروني",
      value: BUSINESS_CONTACT.email,
      href: CONTACT_LINKS.email,
    },
  ],
};