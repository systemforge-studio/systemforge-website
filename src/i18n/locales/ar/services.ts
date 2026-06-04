import type { SiteContent } from "../../i18n.types";
import { SERVICE_IMAGES } from "../../../shared/constants/assets";

export const arabicServicesSection: SiteContent["servicesSection"] = {
  eyebrow: "الخدمات",
  title: "خدمات هندسية استراتيجية للمنتجات المهمة للأعمال",
  description:
    "من التخطيط المعماري إلى الإطلاق، نساعد الشركات على بناء برمجيات آمنة وقابلة للتوسع بثقة أعلى ومخاطر أقل.",
  items: [
    {
      title: "تطوير منتجات ويب وموبايل متكاملة",
      description:
        "حلول ويب وموبايل من الفكرة إلى الإنتاج، مبنية للأداء والنمو طويل المدى.",
      iconKey: "rocket",
      highlights: [
        "تطبيقات ويب حديثة",
        "تطبيقات موبايل",
        "بنية قابلة للتوسع",
        "تسليم جاهز للإنتاج",
      ],
      cta: "من الفكرة إلى الإنتاج",
      imageUrl: SERVICE_IMAGES.fullStack,
    },
    {
      title: "تطوير تطبيقات الموبايل",
      description:
        "تطبيقات متعددة المنصات بأداء موثوق وتجربة استخدام واضحة وقابلة للصيانة.",
      iconKey: "smartphone",
      imageUrl: SERVICE_IMAGES.mobileApplication,
    },
    {
      title: "هندسة الأنظمة الخلفية وواجهات API",
      description:
        "أنظمة خلفية وواجهات API آمنة وقابلة للتوسع ومصممة للتكامل والاعتمادية.",
      iconKey: "code",
      imageUrl: SERVICE_IMAGES.backendApi,
    },
    {
      title: "تصميم قواعد البيانات",
      subtitle: "Database Design",
      description:
        "بنية بيانات قوية مع تصميم جداول واضح، ترحيلات منظمة، واستعلامات عالية الأداء.",
      iconKey: "database",
      imageUrl: SERVICE_IMAGES.database,
    },
    {
      title: "المصادقة والأمان",
      subtitle: "Authentication & Security",
      description:
        "تنفيذ يركز على الأمان باستخدام الصلاحيات، تقوية واجهات API، وضوابط الهوية وأفضل الممارسات.",
      iconKey: "shield",
      imageUrl: SERVICE_IMAGES.authentication,
    },
    {
      title: "السحابة والنشر",
      subtitle: "Cloud & Deployment",
      description:
        "مسارات CI/CD، أتمتة البنية، ومراقبة تساعد على نشر موثوق وسريع.",
      iconKey: "cloud",
      imageUrl: SERVICE_IMAGES.cloud,
    },
  ],
};