import type { LocaleContent } from "../i18n.types";
import { ROUTES } from "../../shared/constants/routes";

export const ckbContent: LocaleContent = {
  language: "ckb",
  direction: "rtl",
  htmlLang: "ckb-IQ",

  agency: {
    name: "SystemForge Studio",
    shortName: "SFS",
    tagline: "دروستکردن · داهێنان · فراوانکردن",
    description:
      "هاوبەشی ئەندازیاری نەرمەکاڵای ئاستی کۆمپانیاکان، تایبەت بە پلاتفۆڕمی بەرهەمی قابلی گەشە، سیستەمی پشتەوەی پارێزراو، و ئەندازیاری ئامادە بۆ هەور.",
    footerDescription:
      "ستۆدیۆیەکی نوێی ئەندازیاری نەرمەکاڵا بۆ چارەسەری وێب، مۆبایل، پشتەوە، هەور و ئەندازیاری سیستەم کە قابلی گەشەن.",
  },

  nav: {
    callToAction: "کات بگرە",
    items: [
      { label: "پڕۆژەکان", href: ROUTES.PROJECTS },
      { label: "خزمەتگوزارییەکان", href: ROUTES.SERVICES },
      { label: "تەکنەلۆژیا", href: ROUTES.STACK },
      { label: "بنەماکان", href: ROUTES.ARCHITECTURE },
      { label: "تیم", href: ROUTES.TEAM },
      { label: "پەیوەندی", href: ROUTES.CONTACT },
    ],
  },

  languageSwitcher: {
    ariaLabel: "گۆڕینی زمانی ماڵپەڕ",
  },

  hero: {
    eyebrow: "دروستکردن · داهێنان · فراوانکردن",
    title: "ئێمە پلاتفۆڕمی نەرمەکاڵا دروست دەکەین کە کۆمپانیاکان دەتوانن بە متمانە فراوانی بکەن.",
    description:
      "SystemForge Studio لەگەڵ سەرکردەکانی بەرهەم و کارگێڕی کار دەکات بۆ گەیاندنی سیستەمی پارێزراو، قابلی چاکردنەوە و ئامادە بۆ بەرهەمهێنان، بە ئەندازیاری ڕوون و ئەنجامی پێوانەکراو.",
    primaryCta: "کات بۆ گفتوگۆ دابنێ",
    secondaryCta: "بینینی نموونەی کارەکان",
    logoAlt: "SystemForge Studio",
  },

  projectsSection: {
    eyebrow: "پڕۆژەکان",
    title: "ئەزموونی جێبەجێکردن لە نوێکردنەوەی سیستەم و ئەندازیاری پلاتفۆڕم",
    description:
      "نموونەکان پیشان دەدەن چۆن یارمەتی ڕێکخراوەکان دەدەین مەترسی تەکنیکی کەم بکەنەوە، خێرایی بڵاوکردنەوە باشتر بکەن و بنەمای پلاتفۆڕم بەهێزتر بکەن.",
    items: [
      {
        title: "نوێکردنەوەی EquiTip",
        description:
          "دووبارە ئەندازیاری سیستەمێکی مۆبایلی کۆن بۆ پلاتفۆڕمێکی قابلی گەشە، بە خزمەتگوزاری نوێ، تەواوی داتای بەهێزتر و توانای بڵاوکردنەوەی خێراتر.",
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
        title: "پلاتفۆڕمی سەلامەتی دژی کەوتن بە AI",
        description:
          "پلاتفۆڕمێکی ئامادە بۆ کارگای مەیدانی، لەگەڵ ڕێکاری یارمەتیدراو بە AI، توانای کارکردن بەبێ ئینتەرنێت، و ڕاپۆرتی یەکگرتوو بۆ تیمەکانی کارگێڕی.",
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
        title: "ڕێنیشاندەری کۆمەڵگای PathPal",
        description:
          "ئەپێکی ڕێنیشاندەری کۆمەڵگا کە سەرنج دەداتە سەر دەستگەیشتن، پلانی ڕێگا، فیدی کۆمەڵگا، شوێنی پێشنیازکراو لەلایەن بەکارهێنەر و نوێکاری ناوخۆیی بە پشتگیری میدیا.",
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
    eyebrow: "خزمەتگوزارییەکان",
    title: "خزمەتگوزاری ئەندازیاری ستراتیژی بۆ بەرهەمە گرنگەکانی بازرگانی",
    description:
      "لە ئەندازیارییەوە تا بڵاوکردنەوە، ئێمە یارمەتی تیمەکان دەدەین نەرمەکاڵای پارێزراو و قابلی گەشە بگەیەنن، مەترسی کارگێڕی کەم بکەنەوە و متمانەی گەیاندن زیاد بکەن.",
    items: [
      {
        title: "گەشەپێدانی بەرهەمی Full-Stack",
        description:
          "چارەسەری تەواوی وێب و مۆبایل کە بۆ گەشە، کارایی و فراوانبوون دروست دەکرێن.",
        iconKey: "rocket",
        highlights: [
          "ئەپلیکەیشنی وێبی نوێ",
          "ئەپلیکەیشنی مۆبایل",
          "ئەندازیاری قابلی گەشە",
          "گەیاندنی ئامادە بۆ بەرهەمهێنان",
        ],
        cta: "لە بیرۆکەوە تا بەرهەمهێنان",
        imageUrl: "/services/full-stack.png",
      },
      {
        title: "گەشەپێدانی ئەپلیکەیشنی مۆبایل",
        description:
          "ئەپلیکەیشنی مۆبایل بۆ چەند پلاتفۆڕم، بە کارایی جێگیر، ئەزموونی بەکارهێنەری ڕەوان و قابلی چاکردنەوەی درێژخایەن.",
        iconKey: "smartphone",
        imageUrl: "/services/mobile-application.png",
      },
      {
        title: "ئەندازیاری پشتەوە و API",
        description:
          "پشتەوە و API ی پارێزراو و قابلی گەشە کە بۆ متمانەپێکراوی، کارایی و یەکخستن دیزاین دەکرێن.",
        iconKey: "code",
        imageUrl: "/services/backend-api.png",
      },
      {
        title: "دیزاین و یەکخستنی داتابەیس",
        description:
          "ئەندازیاری داتای خۆڕاگر، دیزاینی سکیمای زیرەک، کۆچکردن و پرسیاری کارای بەرز.",
        iconKey: "database",
        imageUrl: "/services/database.png",
      },
      {
        title: "ناسنامە و پاراستن",
        description:
          "جێبەجێکردنی سەرەتا-پاراستن بە RBAC، بەهێزکردنی API، کۆنترۆڵی ناسنامە و باشترین ڕاهێنانە ئەندازیارییەکان.",
        iconKey: "shield",
        imageUrl: "/services/authentication.png",
      },
      {
        title: "هەور و بڵاوکردنەوە",
        description:
          "ڕێڕەوی CI/CD، ئۆتۆماتکردنی ژێرخان و چاودێریکردن بۆ بڵاوکردنەوەی متمانەپێکراو و خێرا.",
        iconKey: "cloud",
        imageUrl: "/services/cloud.png",
      },
    ],
  },

  techStackSection: {
    eyebrow: "تەکنەلۆژیا",
    title: "ئەو تەکنەلۆژیایانەی پێیان دروست دەکەین",
    description:
      "تەکنەلۆژیای نوێ، متمانەپێکراو و قابلی گەشە کە یارمەتیمان دەدات بەرهەمی دیجیتاڵی باکیفیت دروست بکەین.",
    closingText:
      "ئێمە بەردەوام تەکنەلۆژیای نوێ دەدۆزینەوە و بەکاردەهێنین بۆ گەیاندنی چارەسەری باشتر.",
    categories: [
      {
        title: "پێشەوە و مۆبایل",
        shortTitle: "پێشەوە",
        description: "دروستکردنی ڕووکارە خێرا، وەڵامدەر و دەستپێگەیشتوو.",
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
        title: "پشتەوە و API",
        shortTitle: "پشتەوە",
        description: "لۆژیکی سێرڤەر و API ی بەهێز.",
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
        title: "داتابەیس و سیستەمەکان",
        shortTitle: "داتابەیس",
        description: "داتای پارێزراو، قابلی گەشە و کارای بەرز.",
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
        title: "هەور و DevOps",
        shortTitle: "هەور و DevOps",
        description: "ژێرخان، بڵاوکردنەوە و ئۆتۆماتکردن.",
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
    eyebrow: "بنەما ئەندازیارییەکان",
    title: "چۆن سیستەمی نەرمەکاڵای متمانەپێکراو دروست دەکەین",
    description:
      "ئێمە شوێنی بنەما ئەندازیارییە تاقیکراوەکان و ڕاهێنانی cloud-native دەگرین بۆ گەیاندنی چارەسەری قابلی گەشە، پارێزراو و باکیفیت.",
    appliedInLabel: "بەکارهاتوو لە",
    items: [
      {
        title: "Microservices",
        description:
          "سنوری خزمەتگوزاری بە پشتبەستن بە domain-driven design کە پشتگیری فراوانبوونی سەربەخۆ و خێرایی گۆڕان دەکات.",
        iconKey: "microservices",
        appliedIn: "نوێکردنەوەی EquiTip",
      },
      {
        title: "API Gateway",
        description:
          "کۆنترۆڵی ناوەندی هاتوچۆ بە جێبەجێکردنی سیاسەت، چاودێریکردن و دەرخستنی پارێزراو.",
        iconKey: "gateway",
        appliedIn: "ئەندازیاری API Gateway ی EquiTip",
      },
      {
        title: "ناسنامە و ڕێپێدان",
        description:
          "کۆنترۆڵی دەستگەیشتنی ئاستی کۆمپانیا بە JWT، RBAC و سنوری ڕێپێدانی ڕوون.",
        iconKey: "identity",
        appliedIn: "هەموو پڕۆژەکان",
      },
      {
        title: "خزمەتگوزاری پارێزراو",
        description:
          "شێوازی پشتەوەی defense-in-depth بە پشکنین، بەهێزکردن و هەڵبژاردەی بنەڕەتی ئاگادار لە مەترسی.",
        iconKey: "security",
        appliedIn: "پلاتفۆڕمی AI Fall Protection و PathPal",
      },
      {
        title: "بڵاوکردنەوەی نوێ",
        description:
          "ڕێڕەوی بڵاوکردنەوەی ئامادە بۆ بەرهەمهێنان بە GitHub، Docker، Railway، AWS و Azure.",
        iconKey: "deployment",
        appliedIn: "نوێکردنەوەی EquiTip",
      },
      {
        title: "ڕێڕەوی گەیاندن",
        description:
          "چوارچێوەی جێبەجێکردن کە سنوور، کیفیت و کاتی کار لەگەڵ ئامانجی بازرگانی هاوتا دەکات.",
        iconKey: "workflow",
        appliedIn: "هەموو پڕۆژەکان",
      },
    ],
  },

  teamSection: {
    eyebrow: "تیم",
    title: "پسپۆڕانی چەند بوارە کە لەگەڵ ئەنجامی بازرگانی هاوتان",
    description:
      "ئێمە سەرکردایەتی ئەندازیاری، قووڵایی جێبەجێکردن و دیسیپلینی گەیاندن تێکەڵ دەکەین بۆ پشتگیری تیمەکان لە پلانکردنەوە تا بەرهەمهێنان.",
    members: [
      {
        name: "Haider Al-Sudani",
        imageUrl: "/team/haider.png",
        role: "دامەزرێنەر | Full-Stack Developer | ئەندازیاری پشتەوە",
        summary:
          "دامەزرێنەری SystemForge Studio. سەرکردایەتی ئەندازیاری چارەسەر، ستراتیژی پشتەوە، پلانی گەیاندن و پەیوەندی لەگەڵ هاوبەشانی کار دەکات.",
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
        role: "Full-Stack Developer | ئەپلیکەیشنی کۆمپانیا",
        summary:
          "گەشەپێدەری نەرمەکاڵای کۆمپانیا بە ٧ ساڵ ئەزموون لە گەیاندنی چارەسەر بۆ پڕۆژەکانی NEC و ئەپلیکەیشنی full-stack ی نوێ.",
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
        role: "گەشەپێدەری مۆبایل",
        summary:
          "گەشەپێدەری سەربەخۆی ئەپلیکەیشنی Rentamin. AWS Certified Solutions Architect، بە زانیاری بەهێز لە ژینگەی هەور و بەکارهێنانی AI بۆ زیادکردنی بەرهەمداری گەشەپێدان.",
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
        role: "Full-Stack Developer | پسپۆڕی سیستەمی بازرگانی",
        summary:
          "گەشەپێدەری full-stack بە ئەزموونی دروستکردنی وێب، مۆبایل و سیستەمی پشتەوە. ڕاوێژکاری کۆمپانیا و ئەندازیاری نەرمەکاڵا تێکەڵ دەکات بۆ گەیاندنی چارەسەری بازرگانی قابلی گەشە.",
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
        role: "Full-Stack Developer",
        summary:
          "گەشەپێدەری full-stack کە سەرنج دەداتە سەر جێبەجێکردنی پشتەوە و یەکخستنی API. بەشداری لە گەشەپێدانی خزمەتگوزاری، کاری پەیوەندیدار بە داتابەیس، ڕێڕەوی ناساندن و بەڵگەنامەی پڕۆژە دەکات.",
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
    eyebrow: "پەیوەندی بە هاوبەشی ئەندازیاری",
    title: "مەترسی گەیاندن کەم بکەرەوە و ڕێگای بەرهەمەکەت فراوان بکە.",
    description:
      "SystemForge Studio یارمەتی تیمەکان دەدات لە دڵنیانەبوونی تەکنیکییەوە بگەنە ڕوونی گەیاندن لە ئەندازیاری، platform engineering و کارگێڕی هەور.",
    businessContactLabel: "پەیوەندی بازرگانی",
    primaryButtonLabel: "داواکردنی ڕاوێژ",
    channels: [
      {
        label: "ئیمەیڵ",
        value: "haider.alsudani.dev@gmail.com",
        href: "mailto:haider.alsudani.dev@gmail.com",
        isPrimary: true,
      },
      {
        label: "GitHub",
        value: "systemforge-studio",
        href: "https://github.com/systemforge-studio",
      },
    ],
  },

  footer: {
    copyrightPrefix: "هەموو مافەکان پارێزراون.",
    links: [
      {
        label: "GitHub",
        value: "systemforge-studio",
        href: "https://github.com/systemforge-studio",
      },
      {
        label: "ئیمەیڵ",
        value: "haider.alsudani.dev@gmail.com",
        href: "mailto:haider.alsudani.dev@gmail.com",
      },
    ],
  },
};
