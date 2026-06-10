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
      href: "#quote-form",
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
  quoteForm: {
    title: "أرسل تفاصيل مشروعك",
    description:
      "شاركنا المعلومات الأساسية وسيقوم فريقنا بمراجعة الطلب والتواصل معك لتحديد الخطوة التالية.",
    submitLabel: "إرسال الطلب",
    submittingLabel: "جاري الإرسال...",
    successMessage: "تم إرسال طلبك بنجاح.",
    errorMessage:
      "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو التواصل معنا عبر البريد الإلكتروني.",
    selectPlaceholder: "اختر من القائمة",
    closeLabel: "إغلاق نموذج الطلب",
    fields: {
      fullName: "الاسم الكامل",
      company: "الشركة / الجهة",
      email: "البريد الإلكتروني",
      phone: "الهاتف / واتساب",
      projectType: "نوع المشروع",
      budgetRange: "الميزانية المتوقعة",
      timeline: "المدة الزمنية",
      preferredContact: "طريقة التواصل المفضلة",
      message: "تفاصيل المشروع",
    },
    placeholders: {
      message:
        "اكتب فكرة المشروع، النظام الحالي، الميزات المطلوبة، عدد المستخدمين، الموعد المتوقع، وأي تفاصيل تقنية مهمة.",
    },
    errors: {
      required: "هذا الحقل مطلوب.",
      invalidEmail: "أدخل بريداً إلكترونياً صحيحاً.",
      minMessage: "يرجى إضافة تفاصيل أكثر عن المشروع.",
    },
    projectTypes: [
      { value: "webApp", label: "تطبيق ويب" },
      { value: "mobileApp", label: "تطبيق موبايل" },
      { value: "businessSystem", label: "نظام أعمال" },
      { value: "aiAutomation", label: "ذكاء اصطناعي / أتمتة" },
      { value: "cloudDeployment", label: "سحابة / نشر" },
      { value: "securityReview", label: "مراجعة أمنية" },
      { value: "other", label: "أخرى" },
    ],
    budgetRanges: [
      { value: "under5k", label: "أقل من 5,000 دولار" },
      { value: "5kTo15k", label: "5,000 - 15,000 دولار" },
      { value: "15kTo50k", label: "15,000 - 50,000 دولار" },
      { value: "50kPlus", label: "أكثر من 50,000 دولار" },
      { value: "notSure", label: "غير محدد حالياً" },
    ],
    timelines: [
      { value: "urgent", label: "عاجل" },
      { value: "oneToThreeMonths", label: "1 - 3 أشهر" },
      { value: "threeToSixMonths", label: "3 - 6 أشهر" },
      { value: "sixMonthsPlus", label: "أكثر من 6 أشهر" },
      { value: "notSure", label: "غير محدد حالياً" },
    ],
    contactMethods: [
      { value: "email", label: "البريد الإلكتروني" },
      { value: "phone", label: "الهاتف" },
      { value: "whatsapp", label: "واتساب" },
    ],
  },
};