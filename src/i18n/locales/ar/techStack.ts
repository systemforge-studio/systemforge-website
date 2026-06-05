import type { SiteContent } from "../../i18n.types";

export const arabicTechStackSection: SiteContent["techStackSection"] = {
  eyebrow: "التقنيات",
  title: "التقنيات التي نستخدمها",
  description:
    "تقنيات حديثة وموثوقة وقابلة للتوسع تساعدنا على بناء منتجات رقمية عالية الجودة.",
  closingText:
    "نستمر في متابعة واعتماد التقنيات الحديثة لتقديم حلول أفضل لعملائنا.",
  categories: [
    {
      title: "الواجهات وتطبيقات الموبايل",
      secondaryTitle: "Frontend & Mobile",
      shortTitle: "الواجهات",
      description: "واجهات حديثة ومتجاوبة توفر تجربة استخدام احترافية على جميع الأجهزة.",
      iconKey: "frontend",
      items: [
        { label: "React", iconKey: "react" },
        { label: "React Native", iconKey: "reactNative" },
        { label: "Next.js", iconKey: "next" },
        { label: "TypeScript", iconKey: "typescript" },
        { label: "Vue.js", iconKey: "vue" },
      ],
    },
    {
      title: "الأنظمة الخلفية والتكامل",
      secondaryTitle: "Backend & Integration",
      shortTitle: "الأنظمة الخلفية",
      description: "أنظمة خلفية موثوقة وتكاملات آمنة تدعم نمو الأعمال وقابلية التوسع.",
      iconKey: "backend",
      items: [
        { label: "Node.js", iconKey: "node" },
        { label: "Express", iconKey: "express" },
        { label: ".NET", iconKey: "dotnet" },
        { label: "Python", iconKey: "python" },
        { label: "Go", iconKey: "go" },
      ],
    },
    {
      title: "قواعد البيانات وإدارة البيانات",
      secondaryTitle: "Data Platforms",
      shortTitle: "قواعد البيانات",
      description: "إدارة بيانات آمنة وعالية الأداء تدعم التحليلات والتوسع المستقبلي.",
      iconKey: "database",
      items: [
        { label: "PostgreSQL", iconKey: "postgresql" },
        { label: "MongoDB", iconKey: "mongodb" },
        { label: "Redis", iconKey: "redis" },
        { label: "Oracle", iconKey: "oracle" },
        { label: "SQL Server", iconKey: "sqlServer" },
      ],
    },
    {
      title: "السحابة والتشغيل",
      secondaryTitle: "Cloud & DevOps",
      shortTitle: "السحابة",
      description: "بنية سحابية حديثة ونشر احترافي يضمن الاستقرار والجاهزية للإنتاج.",
      iconKey: "cloud",
      items: [
        { label: "Docker", iconKey: "docker" },
        { label: "AWS", iconKey: "aws" },
        { label: "Azure", iconKey: "azure" },
        { label: "Railway", iconKey: "railway" },
        { label: "GitHub Actions", iconKey: "githubActions" },
      ],
    },
  ],
};