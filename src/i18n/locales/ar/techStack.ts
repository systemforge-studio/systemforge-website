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
      shortTitle: "الواجهات",
      description: "بناء واجهات سريعة، متجاوبة، وسهلة الاستخدام.",
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
      title: "الأنظمة الخلفية وواجهات API",
      shortTitle: "Backend",
      description: "منطق خادمي قوي وواجهات API موثوقة.",
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
      title: "قواعد البيانات والأنظمة",
      shortTitle: "قواعد البيانات",
      description: "بيانات آمنة، قابلة للتوسع، وعالية الأداء.",
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
      title: "السحابة و DevOps",
      shortTitle: "Cloud & DevOps",
      description: "بنية تحتية، نشر، وأتمتة للتشغيل الاحترافي.",
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