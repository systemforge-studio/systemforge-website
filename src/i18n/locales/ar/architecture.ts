import type { SiteContent } from "../../i18n.types";

export const arabicArchitectureSection: SiteContent["architectureSection"] = {
  eyebrow: "مبادئنا الهندسية",
  title: "كيف نبني أنظمة برمجية موثوقة",
  description:
    "نتبع مبادئ هندسية واضحة وممارسات سحابية حديثة لتقديم حلول آمنة وقابلة للتوسع وعالية الجودة.",
  appliedInLabel: "مطبّق في",
  items: [
    {
      title: "الخدمات المصغّرة",
      secondaryTitle: "Microservices",
      description:
        "حدود خدمات واضحة حسب المجال تسمح بالتوسع والتغيير المستقل.",
      iconKey: "microservices",
      appliedIn: "تحديث EquiTip",
    },
    {
      title: "بوابة API",
      secondaryTitle: "API Gateway",
      description:
        "تحكم مركزي بالترافيك مع سياسات أمان ومراقبة وتعريض آمن للخدمات.",
      iconKey: "gateway",
      appliedIn: "هندسة بوابة API في EquiTip",
    },
    {
      title: "الهوية والمصادقة",
      secondaryTitle: "Identity and Authentication",
      description:
        "تحكم مؤسسي بالوصول باستخدام JWT و RBAC وحدود صلاحيات واضحة.",
      iconKey: "identity",
      appliedIn: "جميع المشاريع",
    },
    {
      title: "خدمات آمنة",
      secondaryTitle: "Secure Services",
      description:
        "دفاع متعدد الطبقات مع تحقق من البيانات وتقوية الإعدادات الافتراضية.",
      iconKey: "security",
      appliedIn: "AI Fall Protection Plan و PathPal",
    },
    {
      title: "نشر حديث",
      secondaryTitle: "Modern Deployment",
      description:
        "مسارات نشر جاهزة للإنتاج باستخدام GitHub و Docker و Railway و AWS و Azure.",
      iconKey: "deployment",
      appliedIn: "تحديث EquiTip",
    },
    {
      title: "منهجية تسليم",
      secondaryTitle: "Delivery Methodology",
      description:
        "إطار عمل يحافظ على توافق النطاق والجودة والوقت مع أهداف العمل.",
      iconKey: "workflow",
      appliedIn: "جميع المشاريع",
    },
  ],
};