import type { SiteContent } from "../i18n.types";
import { ROUTES } from "../../shared/constants/routes";

export const arContent: SiteContent = {
  language: "ar",
  direction: "rtl",
  htmlLang: "ar",
  agency: {
    name: "SystemForge Studio",
    shortName: "SFS",
    tagline: "نبني • نبتكر • نوسّع",
    description: "شريك هندسي كندي لبناء منصات برمجية قابلة للتوسع وأنظمة خلفية آمنة وبنية سحابية جاهزة للإنتاج.",
    footerDescription: "استوديو هندسة برمجيات كندي يقدّم حلول ويب وموبايل وخلفية وسحابية قابلة للتوسع للشركات في الشرق الأوسط وكندا.",
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
  languageSwitcher: { ariaLabel: "تغيير لغة الموقع" },
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
    description: "نماذج توضّح كيف نساعد الشركات على تقليل المخاطر التقنية وتسريع الإطلاق وتقوية أساس المنصة.",
    items: [
      {
        title: "تحديث منصة EquiTip",
        description: "إعادة بناء نظام موبايل قديم إلى منصة حديثة بخدمات مستقلة، تكامل بيانات أقوى، وقدرة أسرع على الإطلاق.",
        tags: ["React Native", "Node.js", "PostgreSQL", "Microservices", "API Gateway"],
        imageUrl: "/project/EquiTip.png",
      },
      {
        title: "منصة السلامة المدعومة بالذكاء الاصطناعي",
        description: "منصة ميدانية تدعم العمل بدون إنترنت، سير عمل ذكي، وتقارير موحدة للفرق التشغيلية.",
        tags: ["React Native", "AI Integration", "MongoDB", "Offline Sync", "PDF Export"],
        imageUrl: "/project/fpp.png",
      },
      {
        title: "منصة PathPal للملاحة المجتمعية",
        description: "تطبيق مجتمعي يركز على الوصول، تخطيط المسارات، النقاط المحلية، والتحديثات المدعومة بالصور.",
        tags: ["HTML", "JavaScript", "Node.js", "Express", "MongoDB", "Cloudinary"],
        imageUrl: "/project/pathPal.png",
      },
    ],
  },
  servicesSection: {
    eyebrow: "الخدمات",
    title: "خدمات هندسية استراتيجية للمنتجات المهمة للأعمال",
    description: "من التخطيط المعماري إلى الإطلاق، نساعد الشركات على بناء برمجيات آمنة وقابلة للتوسع بثقة أعلى ومخاطر أقل.",
    items: [
      {
        title: "تطوير منتجات ويب وموبايل متكاملة",
        description: "حلول ويب وموبايل من الفكرة إلى الإنتاج، مبنية للأداء والنمو طويل المدى.",
        iconKey: "rocket",
        highlights: ["تطبيقات ويب حديثة", "تطبيقات موبايل", "بنية قابلة للتوسع", "تسليم جاهز للإنتاج"],
        cta: "من الفكرة إلى الإنتاج",
        imageUrl: "/services/full-stack.png",
      },
      { title: "تطوير تطبيقات الموبايل", description: "تطبيقات متعددة المنصات بأداء موثوق وتجربة استخدام واضحة وقابلة للصيانة.", iconKey: "smartphone", imageUrl: "/services/mobile-application.png" },
      { title: "هندسة الخلفية وواجهات API", description: "أنظمة خلفية وواجهات API آمنة وقابلة للتوسع ومصممة للتكامل والاعتمادية.", iconKey: "code", imageUrl: "/services/backend-api.png" },
      { title: "تصميم قواعد البيانات والتكامل", description: "بنية بيانات قوية مع تصميم جداول واضح، ترحيلات منظمة، واستعلامات عالية الأداء.", iconKey: "database", imageUrl: "/services/database.png" },
      { title: "المصادقة والأمان", description: "تنفيذ يركز على الأمان باستخدام الصلاحيات، تقوية API، وضوابط الهوية وأفضل الممارسات.", iconKey: "shield", imageUrl: "/services/authentication.png" },
      { title: "السحابة والنشر", description: "مسارات CI/CD، أتمتة البنية، ومراقبة تساعد على نشر موثوق وسريع.", iconKey: "cloud", imageUrl: "/services/cloud.png" },
    ],
  },
  techStackSection: {
    eyebrow: "التقنيات",
    title: "التقنيات التي نبني بها",
    description: "تقنيات حديثة وموثوقة تساعدنا على بناء منتجات رقمية عالية الجودة وقابلة للنمو.",
    categoryMeta: {
      "Frontend & Mobile": { shortTitle: "الواجهات والموبايل", description: "واجهات سريعة ومتجاوبة وسهلة الاستخدام." },
      "Backend & APIs": { shortTitle: "الخلفية وواجهات API", description: "منطق خلفي قوي وواجهات تكامل موثوقة." },
      "Database & Systems": { shortTitle: "قواعد البيانات والأنظمة", description: "بيانات آمنة وقابلة للتوسع وعالية الأداء." },
      "Cloud & DevOps": { shortTitle: "السحابة و DevOps", description: "نشر، بنية تحتية، وأتمتة للإنتاج." },
    },
    closingNote: "نراجع ونتبنى التقنيات المناسبة باستمرار لتقديم حلول أفضل لعملائنا.",
  },
  architectureSection: {
    eyebrow: "مبادئنا الهندسية",
    title: "كيف نبني أنظمة برمجية موثوقة",
    description: "نتبع مبادئ هندسية واضحة وممارسات سحابية حديثة لتقديم حلول آمنة وقابلة للتوسع وعالية الجودة.",
    appliedInLabel: "مطبّق في",
    items: [
      { title: "الخدمات المصغّرة", description: "حدود خدمات واضحة حسب المجال تسمح بالتوسع والتغيير المستقل.", iconKey: "blocks", appliedIn: "EquiTip Modernization" },
      { title: "بوابة API", description: "تحكم مركزي بالترافيك مع سياسات أمان ومراقبة وتعريض آمن للخدمات.", iconKey: "network", appliedIn: "EquiTip API Gateway Architecture" },
      { title: "الهوية والمصادقة", description: "تحكم مؤسسي بالوصول باستخدام JWT و RBAC وحدود صلاحيات واضحة.", iconKey: "key", appliedIn: "All Projects" },
      { title: "خدمات آمنة", description: "دفاع متعدد الطبقات مع تحقق من البيانات وتقوية الإعدادات الافتراضية.", iconKey: "shield", appliedIn: "AI Fall Protection Plan & PathPal Platform" },
      { title: "نشر حديث", description: "مسارات نشر جاهزة للإنتاج باستخدام GitHub و Docker و Railway و AWS و Azure.", iconKey: "cloudCog", appliedIn: "EquiTip Modernization" },
      { title: "منهجية تسليم", description: "إطار عمل يحافظ على توافق النطاق والجودة والوقت مع أهداف العمل.", iconKey: "workflow", appliedIn: "All Projects" },
    ],
  },
  teamSection: {
    eyebrow: "الفريق",
    title: "خبراء متكاملون يركزون على نتائج الأعمال",
    description: "نجمع بين قيادة البنية، عمق التنفيذ، وانضباط التسليم لدعم الشركات من التخطيط إلى الإنتاج.",
    members: [
      { name: "Haider Al-Sudani", imageUrl: "/team/haider.png", role: "المؤسس | مطور Full-Stack | هندسة الخلفية", summary: "مؤسس SystemForge Studio. يقود بنية الحلول، استراتيجية الخلفية، تخطيط التسليم، والتواصل مع أصحاب المصلحة.", skills: ["Founder", "Backend", "Architecture", "React Native", "Node.js", "PostgreSQL"] },
      { name: "Haven Zhang", imageUrl: "/team/haven.png", role: "مطورة Full-Stack | تطبيقات مؤسسية", summary: "مطورة برمجيات مؤسسية بخبرة 7 سنوات في مشاريع NEC وتطبيقات Full-Stack حديثة.", skills: ["System Design", "Enterprise", ".NET", "React", "Node.js", "Oracle"] },
      { name: "Jimmy Kong", imageUrl: "/team/jimmy.png", role: "مطور موبايل", summary: "مطور مستقل لتطبيق Rentamin وحاصل على AWS Certified Solutions Architect مع معرفة قوية بمنظومة السحابة.", skills: ["Go", "TypeScript", "AWS", "React Native", "Next.js", "Web Animations", "CSS"] },
      { name: "Lin Pan", imageUrl: "/team/lin.jpg", role: "مطورة Full-Stack | أنظمة أعمال", summary: "مطورة Full-Stack تبني أنظمة ويب وموبايل وخلفية، وتجمع بين الاستشارات المؤسسية والهندسة البرمجية.", skills: ["React", "TypeScript", "Node.js", "MongoDB", "System Design", "Business Analysis", "AI Integration", "Tax Technology", "Process Automation"] },
      { name: "Jerry Xing", imageUrl: "/team/jerry.png", role: "مطور Full-Stack", summary: "مطور Full-Stack يركز على تنفيذ الخلفية وتكامل API، قواعد البيانات، المصادقة، والتوثيق.", skills: ["Vue.js", "React", "Node.js", "C#", "Java", "Oracle", "MongoDB", "PostgreSQL", "Git Workflow"] },
    ],
  },
  contactSection: {
    eyebrow: "تواصل مع شريك هندسي",
    title: "حوّل فكرتك أو نظامك الحالي إلى منتج جاهز للنمو.",
    description: "نساعد الشركات في الشرق الأوسط وكندا على بناء وتحديث الأنظمة بثقة، من التخطيط المعماري إلى الإطلاق والدعم.",
    businessContactLabel: "قنوات التواصل",
    primaryButtonLabel: "راسلنا الآن",
    channels: [
      { label: "واتساب", value: "WhatsApp", href: "https://wa.me/10000000000", isPrimary: true },
      { label: "إنستغرام", value: "Instagram", href: "https://www.instagram.com/systemforge.studio" },
      { label: "البريد الإلكتروني", value: "haider.alsudani.dev@gmail.com", href: "mailto:haider.alsudani.dev@gmail.com" },
    ],
  },
  footer: {
    copyrightPrefix: "جميع الحقوق محفوظة.",
    links: [
      { label: "واتساب", value: "WhatsApp", href: "https://wa.me/10000000000" },
      { label: "إنستغرام", value: "Instagram", href: "https://www.instagram.com/systemforge.studio" },
      { label: "البريد الإلكتروني", value: "haider.alsudani.dev@gmail.com", href: "mailto:haider.alsudani.dev@gmail.com" },
    ],
  },
};
