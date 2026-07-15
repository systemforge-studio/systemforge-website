import type { SiteContent } from "../../i18n.types";
import { TEAM_IMAGES } from "../../../shared/constants/assets";

export const arabicTeamSection: SiteContent["teamSection"] = {
  eyebrow: "الفريق",
  title: "خبراء متكاملون يركزون على نتائج الأعمال",
  description:
    "نجمع بين قيادة البنية، عمق التنفيذ، وانضباط التسليم لدعم الشركات من التخطيط إلى الإنتاج.",
  members: [
    {
      name: "Haider Al-Sudani",
      imageUrl: TEAM_IMAGES.haider,
      role: "المؤسس | مهندس برمجيات | مهندس أنظمة خلفية",
      secondaryRole:
        "Founder | Software Engineer | Backend Engineer",
      summary:
        "مؤسس SystemForge Studio ويتمتع بخبرة تزيد عن 15 عاماً في هندسة البرمجيات وتطوير الأنظمة. يقود هندسة الحلول وتصميم الأنظمة الخلفية واستراتيجية التطوير والتواصل مع أصحاب المصلحة.",
      skills: ["Founder", "Backend", "Architecture", "React Native", "Node.js", "PostgreSQL"],
    },
    {
      name: "Haven Zhang",
      imageUrl: TEAM_IMAGES.haven,
      role: "مطورة Full-Stack | تطبيقات مؤسسية",
      secondaryRole:
        "Full-Stack Developer | Enterprise Applications",
      summary:
        "مطورة برمجيات مؤسسية بخبرة 7 سنوات في مشاريع NEC وتطبيقات Full-Stack حديثة.",
      skills: ["System Design", "Enterprise", ".NET", "React", "Node.js", "Oracle"],
    },
    {
      name: "Jimmy Kong",
      imageUrl: TEAM_IMAGES.jimmy,
      role: "مطور موبايل",
      secondaryRole:
        "Mobile Developer",
      summary:
        "مطور مستقل لتطبيق Rentamin وحاصل على AWS Certified Solutions Architect مع معرفة قوية بمنظومة السحابة.",
      skills: ["Go", "TypeScript", "AWS", "React Native", "Next.js", "Web Animations", "CSS"],
    },
    {
      name: "Lin Pan",
      imageUrl: TEAM_IMAGES.lin,
      role: "مطورة Full-Stack | أنظمة أعمال",
      secondaryRole:
        "Full-Stack Developer | Business Systems",
      summary:
        "مطورة Full-Stack تبني أنظمة ويب وموبايل وخلفية، وتجمع بين الاستشارات المؤسسية والهندسة البرمجية.",
      skills: [
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "System Design",
        "Business Analysis",
        "AI Integration",
        "Tax Technology",
        "Process Automation",
      ],
    },
  ],
};
