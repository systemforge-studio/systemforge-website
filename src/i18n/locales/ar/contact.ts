import type { SiteContent } from "../../i18n.types";
import { CONTACT_LINKS } from "../../../shared/constants/contact";
import { BUSINESS_CONTACT } from "../../../shared/constants/business";

export const arabicContactSection: SiteContent["contactSection"] = {
  eyebrow: "تواصل مع شريك هندسي",
  title: "حوّل فكرتك أو نظامك الحالي إلى منتج جاهز للنمو.",
  description:
    "نساعد الشركات في الشرق الأوسط وكندا على بناء وتحديث الأنظمة بثقة، من التخطيط المعماري إلى الإطلاق والدعم.",
  businessContactLabel: "قنوات التواصل",
  primaryButtonLabel: "راسلنا الآن",
  channels: [
    {
      label: "واتساب",
      value: BUSINESS_CONTACT.whatsappLabel,
      href: CONTACT_LINKS.whatsapp,
      isPrimary: true,
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