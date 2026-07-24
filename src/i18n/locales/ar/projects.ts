import type { SiteContent } from "../../i18n.types";
import { PROJECT_IMAGES } from "../../../shared/constants/assets";

export const arabicProjectsSection: SiteContent["projectsSection"] = {
  eyebrow: "المشاريع",
  title: "خبرة عملية في تحديث الأنظمة وبناء المنصات",
  description:
    "نماذج توضّح كيف نساعد الشركات على تقليل المخاطر التقنية وتسريع الإطلاق وتقوية أساس المنصة.",
  imageAltSuffix: "عرض توضيحي",
  viewAllLabel: "عرض جميع المشاريع",
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
        "تطبيق مجتمعي يركز على دعم ذوي الاحتياجات الخاصة، تخطيط المسارات، النقاط المحلية، والتحديثات المدعومة بالصور.",
      tags: ["HTML", "JavaScript", "Node.js", "Express", "MongoDB", "Cloudinary"],
      imageUrl: PROJECT_IMAGES.pathPal,
    },
    {
      title: "منصة الذكاء الاصطناعي لإمكانية الوصول",
      secondaryTitle: "Accessibility Intelligence System",
      description:
        "منصة بحثية مدعومة بالذكاء الاصطناعي لتحليل إمكانية الوصول لمستخدمي الكراسي المتحركة، مع جمع بيانات الحساسات من الموبايل، تتبع GPS، تحليل المخاطر، الخرائط التفاعلية، وتوليد رؤى ذكية حول سهولة التنقل.",
      tags: [
        "React Native",
        "Expo",
        "ASP.NET Core",
        "MongoDB",
        "PostgreSQL",
        "GPS Tracking",
        "AI Analysis",
      ],
      imageUrl: PROJECT_IMAGES.accessibilityIntelligence,
    },
    {
      title: "منصة FinSight AI للتحليل المالي",
      secondaryTitle: "FinSight AI",
      description:
        "منصة ذكاء مالي مدعومة بالذكاء الاصطناعي تكتشف أنماط الإنفاق غير المعتادة، وتشرح الاتجاهات المالية، وتحول بيانات الأعمال إلى توصيات واضحة وقابلة للتنفيذ.",
      tags: ["React", ".NET 8", "OpenAI API", "ML.NET", "SQLite"],
      imageUrl: PROJECT_IMAGES.finSightAi,
    },
  ],
};
