import type { SiteContent } from "../../i18n.types";
import { PROJECT_IMAGES } from "../../../shared/constants/assets";

export const arabicProjectsSection: SiteContent["projectsSection"] = {
  eyebrow: "المشاريع",
  title: "خبرة عملية في تحديث الأنظمة وبناء المنصات",
  description:
    "نماذج توضّح كيف نساعد الشركات على تقليل المخاطر التقنية وتسريع الإطلاق وتقوية أساس المنصة.",
  imageAltSuffix: "عرض توضيحي",
  items: [
    {
      title: "تحديث منصة EquiTip",
      secondaryTitle: "EquiTip Modernization",
      description:
        "إعادة بناء نظام موبايل قديم إلى منصة حديثة بخدمات مستقلة، تكامل بيانات أقوى، وقدرة أسرع على الإطلاق.",
      tags: ["React Native", "Node.js", "PostgreSQL", "Microservices", "API Gateway"],
      imageUrl: PROJECT_IMAGES.equitip,
    },
    {
      title: "منصة السلامة المدعومة بالذكاء الاصطناعي",
      secondaryTitle: "AI Fall Protection Platform",
      description:
        "منصة ميدانية تدعم العمل بدون إنترنت، سير عمل ذكي، وتقارير موحدة للفرق التشغيلية.",
      tags: ["React Native", "AI Integration", "MongoDB", "Offline Sync", "PDF Export"],
      imageUrl: PROJECT_IMAGES.fallProtection,
    },
    {
      title: "منصة PathPal للملاحة المجتمعية",
      secondaryTitle: "PathPal Community Navigation",
      description:
        "تطبيق مجتمعي يركز على الوصول، تخطيط المسارات، النقاط المحلية، والتحديثات المدعومة بالصور.",
      tags: ["HTML", "JavaScript", "Node.js", "Express", "MongoDB", "Cloudinary"],
      imageUrl: PROJECT_IMAGES.pathPal,
    },
  ],
};