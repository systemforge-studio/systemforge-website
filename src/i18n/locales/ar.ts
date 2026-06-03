import type { LocaleContent } from "../i18n.types";
import { ROUTES } from "../../shared/constants/routes";

export const arContent: LocaleContent = {
  language: "ar",
  direction: "rtl",
  htmlLang: "ar",

  agency: {
    name: "SystemForge Studio",
    shortName: "SFS",
    tagline: "نبني • نبتكر • نوسّع",
    description:
      "شريك هندسي كندي لبناء منصات برمجية قابلة للتوسع وأنظمة خلفية آمنة وبنية سحابية جاهزة للإنتاج.",
    footerDescription:
      "استوديو هندسة برمجيات كندي يقدّم حلول ويب وموبايل وخلفية وسحابية قابلة للتوسع للشركات في الشرق الأوسط وكندا.",
  },

  nav: {
    callToAction: "تواصل معنا",
    items: [
      { label: "المشاريع", href: ROUTES.PROJECTS },
      { label: "الخدمات", href: ROUTES.SERVICES },
      { label: "التقنيات", href: ROUTES.STACK },
      { label: "المبادئ", href: ROUTES.ARCHITECTURE },
      { label: "الفريق", href: ROUTES.TEAM },
      { label: "التواصل", href: ROUTES.CONTACT },
    ],
  },

  languageSwitcher: {
    ariaLabel: "تغيير لغة الموقع",
  },

  hero: {
    eyebrow: "🇨🇦 خبرة برمجية كندية تخدم الشرق الأوسط",
    title: "نبني منصات برمجية آمنة وقابلة للتوسع تثق بها الشركات.",
    description:
      "تساعد SystemForge Studio أصحاب الأعمال والفرق التشغيلية على تحويل الأفكار إلى أنظمة إنتاجية واضحة البنية، آمنة، وقابلة للنمو، مع دعم بالإنجليزية والعربية والكردية.",
    primaryCta: "راسلنا عبر واتساب",
    secondaryCta: "شاهد نماذج العمل",
    logoAlt: "SystemForge Studio",
  },

  projectsSection: {
    eyebrow: "المشاريع",
    title: "خبرة عملية في تحديث الأنظمة وبناء المنصات",
    description:
      "نماذج توضّح كيف نساعد الشركات على تقليل المخاطر التقنية وتسريع الإطلاق وتقوية أساس المنصة.",
    items: [
      {
        title: "تحديث منصة EquiTip",
        description:
          "إعادة بناء نظام موبايل قديم إلى منصة حديثة بخدمات مستقلة، تكامل بيانات أقوى، وقدرة أسرع على الإطلاق.",
        tags: [
          "React Native",
          "Node.js",
          "PostgreSQL",
          "Microservices",
          "API Gateway",
        ],
        imageUrl: "/project/EquiTip.png",
      },
      {
        title: "منصة السلامة المدعومة بالذكاء الاصطناعي",
        description:
          "منصة ميدانية تدعم العمل بدون إنترنت، سير عمل ذكي، وتقارير موحدة للفرق التشغيلية.",
        tags: [
          "React Native",
          "AI Integration",
          "MongoDB",
          "Offline Sync",
          "PDF Export",
        ],
        imageUrl: "/project/fpp.png",
      },
      {
        title: "منصة PathPal للملاحة المجتمعية",
        description:
          "تطبيق مجتمعي يركز على الوصول، تخطيط المسارات، النقاط المحلية، والتحديثات المدعومة بالصور.",
        tags: [
          "HTML",
          "JavaScript",
          "Node.js",
          "Express",
          "MongoDB",
          "Cloudinary",
        ],
        imageUrl: "/project/pathPal.png",
      },
    ],
  },

  servicesSection: {
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
        imageUrl: "/services/full-stack.png",
      },
      {
        title: "تطوير تطبيقات الموبايل",
        description:
          "تطبيقات متعددة المنصات بأداء موثوق وتجربة استخدام واضحة وقابلة للصيانة.",
        iconKey: "smartphone",
        imageUrl: "/services/mobile-application.png",
      },
      {
        title: "هندسة الخلفية وواجهات API",
        description:
          "أنظمة خلفية وواجهات API آمنة وقابلة للتوسع ومصممة للتكامل والاعتمادية.",
        iconKey: "code",
        imageUrl: "/services/backend-api.png",
      },
      {
        title: "تصميم قواعد البيانات والتكامل",
        description:
          "بنية بيانات قوية مع تصميم جداول واضح، ترحيلات منظمة، واستعلامات عالية الأداء.",
        iconKey: "database",
        imageUrl: "/services/database.png",
      },
      {
        title: "المصادقة والأمان",
        description:
          "تنفيذ يركز على الأمان باستخدام الصلاحيات، تقوية API، وضوابط الهوية وأفضل الممارسات.",
        iconKey: "shield",
        imageUrl: "/services/authentication.png",
      },
      {
        title: "السحابة والنشر",
        description:
          "مسارات CI/CD، أتمتة البنية، ومراقبة تساعد على نشر موثوق وسريع.",
        iconKey: "cloud",
        imageUrl: "/services/cloud.png",
      },
    ],
  },

  techStackSection: {
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
          { label: "React", iconKey: "react", color: "text-cyan-400" },
          {
            label: "React Native",
            iconKey: "reactNative",
            color: "text-sky-400",
          },
          { label: "Next.js", iconKey: "next", color: "text-slate-100" },
          {
            label: "TypeScript",
            iconKey: "typescript",
            color: "text-blue-500",
          },
          { label: "Vue.js", iconKey: "vue", color: "text-emerald-400" },
        ],
      },
      {
        title: "الأنظمة الخلفية وواجهات API",
        shortTitle: "Backend",
        description: "منطق خادمي قوي وواجهات API موثوقة.",
        iconKey: "backend",
        items: [
          { label: "Node.js", iconKey: "node", color: "text-green-500" },
          { label: "Express", iconKey: "express", color: "text-slate-100" },
          { label: ".NET", iconKey: "dotnet", color: "text-violet-500" },
          { label: "Python", iconKey: "python", color: "text-blue-400" },
          { label: "Go", iconKey: "go", color: "text-cyan-300" },
        ],
      },
      {
        title: "قواعد البيانات والأنظمة",
        shortTitle: "قواعد البيانات",
        description: "بيانات آمنة، قابلة للتوسع، وعالية الأداء.",
        iconKey: "database",
        items: [
          {
            label: "PostgreSQL",
            iconKey: "postgresql",
            color: "text-blue-500",
          },
          { label: "MongoDB", iconKey: "mongodb", color: "text-green-500" },
          { label: "Redis", iconKey: "redis", color: "text-red-500" },
          { label: "Oracle", iconKey: "oracle", color: "text-red-500" },
          {
            label: "SQL Server",
            iconKey: "sqlServer",
            color: "text-rose-400",
          },
        ],
      },
      {
        title: "السحابة و DevOps",
        shortTitle: "Cloud & DevOps",
        description: "بنية تحتية، نشر، وأتمتة للتشغيل الاحترافي.",
        iconKey: "cloud",
        items: [
          { label: "Docker", iconKey: "docker", color: "text-blue-500" },
          { label: "AWS", iconKey: "aws", color: "text-orange-400" },
          { label: "Azure", iconKey: "azure", color: "text-blue-500" },
          { label: "Railway", iconKey: "railway", color: "text-purple-400" },
          {
            label: "GitHub Actions",
            iconKey: "githubActions",
            color: "text-blue-500",
          },
        ],
      },
    ],
  },

  architectureSection: {
    eyebrow: "مبادئنا الهندسية",
    title: "كيف نبني أنظمة برمجية موثوقة",
    description:
      "نتبع مبادئ هندسية واضحة وممارسات سحابية حديثة لتقديم حلول آمنة وقابلة للتوسع وعالية الجودة.",
    appliedInLabel: "مطبّق في",
    items: [
      {
        title: "الخدمات المصغّرة",
        description:
          "حدود خدمات واضحة حسب المجال تسمح بالتوسع والتغيير المستقل.",
        iconKey: "microservices",
        appliedIn: "تحديث EquiTip",
      },
      {
        title: "بوابة API",
        description:
          "تحكم مركزي بالترافيك مع سياسات أمان ومراقبة وتعريض آمن للخدمات.",
        iconKey: "gateway",
        appliedIn: "هندسة بوابة API في EquiTip",
      },
      {
        title: "الهوية والمصادقة",
        description:
          "تحكم مؤسسي بالوصول باستخدام JWT و RBAC وحدود صلاحيات واضحة.",
        iconKey: "identity",
        appliedIn: "جميع المشاريع",
      },
      {
        title: "خدمات آمنة",
        description:
          "دفاع متعدد الطبقات مع تحقق من البيانات وتقوية الإعدادات الافتراضية.",
        iconKey: "security",
        appliedIn: "AI Fall Protection Plan و PathPal",
      },
      {
        title: "نشر حديث",
        description:
          "مسارات نشر جاهزة للإنتاج باستخدام GitHub و Docker و Railway و AWS و Azure.",
        iconKey: "deployment",
        appliedIn: "تحديث EquiTip",
      },
      {
        title: "منهجية تسليم",
        description:
          "إطار عمل يحافظ على توافق النطاق والجودة والوقت مع أهداف العمل.",
        iconKey: "workflow",
        appliedIn: "جميع المشاريع",
      },
    ],
  },

  teamSection: {
    eyebrow: "الفريق",
    title: "خبراء متكاملون يركزون على نتائج الأعمال",
    description:
      "نجمع بين قيادة البنية، عمق التنفيذ، وانضباط التسليم لدعم الشركات من التخطيط إلى الإنتاج.",
    members: [
      {
        name: "Haider Al-Sudani",
        imageUrl: "/team/haider.png",
        role: "المؤسس | مطور Full-Stack | هندسة الخلفية",
        summary:
          "مؤسس SystemForge Studio. يقود بنية الحلول، استراتيجية الخلفية، تخطيط التسليم، والتواصل مع أصحاب المصلحة.",
        skills: [
          "Founder",
          "Backend",
          "Architecture",
          "React Native",
          "Node.js",
          "PostgreSQL",
        ],
      },
      {
        name: "Haven Zhang",
        imageUrl: "/team/haven.png",
        role: "مطورة Full-Stack | تطبيقات مؤسسية",
        summary:
          "مطورة برمجيات مؤسسية بخبرة 7 سنوات في مشاريع NEC وتطبيقات Full-Stack حديثة.",
        skills: [
          "System Design",
          "Enterprise",
          ".NET",
          "React",
          "Node.js",
          "Oracle",
        ],
      },
      {
        name: "Jimmy Kong",
        imageUrl: "/team/jimmy.png",
        role: "مطور موبايل",
        summary:
          "مطور مستقل لتطبيق Rentamin وحاصل على AWS Certified Solutions Architect مع معرفة قوية بمنظومة السحابة.",
        skills: [
          "Go",
          "TypeScript",
          "AWS",
          "React Native",
          "Next.js",
          "Web Animations",
          "CSS",
        ],
      },
      {
        name: "Lin Pan",
        imageUrl: "/team/lin.jpg",
        role: "مطورة Full-Stack | أنظمة أعمال",
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
      {
        name: "Jerry Xing",
        imageUrl: "/team/jerry.png",
        role: "مطور Full-Stack",
        summary:
          "مطور Full-Stack يركز على تنفيذ الخلفية وتكامل API، قواعد البيانات، المصادقة، والتوثيق.",
        skills: [
          "Vue.js",
          "React",
          "Node.js",
          "C#",
          "Java",
          "Oracle",
          "MongoDB",
          "PostgreSQL",
          "Git Workflow",
        ],
      },
    ],
  },

  contactSection: {
    eyebrow: "تواصل مع شريك هندسي",
    title: "حوّل فكرتك أو نظامك الحالي إلى منتج جاهز للنمو.",
    description:
      "نساعد الشركات في الشرق الأوسط وكندا على بناء وتحديث الأنظمة بثقة، من التخطيط المعماري إلى الإطلاق والدعم.",
    businessContactLabel: "قنوات التواصل",
    primaryButtonLabel: "راسلنا الآن",
    channels: [
      {
        label: "واتساب",
        value: "WhatsApp",
        href: "https://wa.me/10000000000",
        isPrimary: true,
      },
      {
        label: "إنستغرام",
        value: "Instagram",
        href: "https://www.instagram.com/systemforge.studio",
      },
      {
        label: "البريد الإلكتروني",
        value: "haider.alsudani.dev@gmail.com",
        href: "mailto:haider.alsudani.dev@gmail.com",
      },
    ],
  },

  footer: {
    copyrightPrefix: "جميع الحقوق محفوظة.",
    links: [
      {
        label: "واتساب",
        value: "WhatsApp",
        href: "https://wa.me/10000000000",
      },
      {
        label: "إنستغرام",
        value: "Instagram",
        href: "https://www.instagram.com/systemforge.studio",
      },
      {
        label: "البريد الإلكتروني",
        value: "haider.alsudani.dev@gmail.com",
        href: "mailto:haider.alsudani.dev@gmail.com",
      },
    ],
  },
};
