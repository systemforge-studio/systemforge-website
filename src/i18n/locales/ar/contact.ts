import type { SiteContent } from "../../i18n.types";
import { CONTACT_LINKS } from "../../../shared/constants/contact";
import { BUSINESS_CONTACT } from "../../../shared/constants/business";

export const arabicContactSection: SiteContent["contactSection"] = {
  eyebrow: "تواصل مع شريك هندسي",
  title: "حوّل فكرتك أو نظامك الحالي إلى منتج جاهز للنمو.",
  description:
    "نساعد الشركات في الشرق الأوسط وكندا على بناء وتحديث الأنظمة بثقة، من التخطيط المعماري إلى الإطلاق والدعم.",
  businessContactLabel: "قنوات التواصل",
  primaryButtonLabel: "طلب عرض سعر",
  contactGroupTitle: "تواصل معنا",
  followGroupTitle: "تابعنا / زرنا",
  channels: [
    {
      label: "طلب عرض سعر",
      value: "أرسل تفاصيل مشروعك",
      href: CONTACT_LINKS.quote,
      iconKey: "quote",
      group: "contact",
      isPrimary: true,
    },
    {
      label: "البريد الإلكتروني",
      value: BUSINESS_CONTACT.email,
      href: CONTACT_LINKS.email,
      iconKey: "mail",
      group: "contact",
    },
    {
      label: "الهاتف",
      value: BUSINESS_CONTACT.phoneDisplay,
      href: CONTACT_LINKS.phone,
      iconKey: "phone",
      group: "contact",
    },
    {
      label: "واتساب",
      value: BUSINESS_CONTACT.whatsappDisplay,
      href: CONTACT_LINKS.whatsapp,
      iconKey: "whatsapp",
      group: "contact",
    },
    {
      label: "الموقع الإلكتروني",
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
      label: "TikTok",
      value: BUSINESS_CONTACT.tiktokHandle,
      href: CONTACT_LINKS.tiktok,
      iconKey: "tiktok",
      group: "follow",
    },
  ],
};