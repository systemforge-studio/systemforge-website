import type {LocaleContent} from "../i18n.types";
import {ROUTES} from "../../shared/constants/routes";
import {publicAsset} from "../../shared/utils/assets";

export const zhTwContent: LocaleContent = {
  language: "zh-tw",
  direction: "ltr",
  htmlLang: "zh-TW",

  agency: {
    name: "SystemForge Studio",
    shortName: "SFS",
    tagline: "構建 · 創新 · 擴展",
    description:
      "面向企業級軟體的平台工程夥伴，專注於可擴展產品平台、安全後端系統和雲端就緒架構。",
    footerDescription:
      "現代軟體工程工作室，專注於可擴展的網站、行動應用、後端、雲端服務和架構解決方案。",
  },

  nav: {
    callToAction: "預約溝通",
    items: [
      {label: "專案", href: ROUTES.PROJECTS},
      {label: "服務", href: ROUTES.SERVICES},
      {label: "技術", href: ROUTES.STACK},
      {label: "原則", href: ROUTES.ARCHITECTURE},
      {label: "團隊", href: ROUTES.TEAM},
      {label: "聯絡", href: ROUTES.CONTACT},
    ],
  },

  languageSwitcher: {
    ariaLabel: "切換網站語言",
  },

  hero: {
    eyebrow: "構建 · 創新 · 擴展",
    title: "我們打造企業能安心擴展的軟體平台。",
    description:
      "SystemForge Studio 與產品負責人和營運團隊合作，交付安全、可維護、可上線的軟體系統，並以清楚的架構和可衡量成果降低交付風險。",
    primaryCta: "預約需求溝通",
    secondaryCta: "查看案例亮點",
    logoAlt: "SystemForge Studio",
  },

  projectsSection: {
    eyebrow: "專案",
    title: "在系統現代化和平台工程中的實戰交付經驗",
    description:
      "這些案例展示我們如何協助組織降低技術風險、提升發布速度，並強化平台基礎。",
    items: [
      {
        title: "EquiTip 現代化改造",
        description:
          "將既有行動系統重新架構為可擴展平台，導入現代服務、更穩健的資料完整性，以及更快的發布能力。",
        tags: [
          "React Native",
          "Node.js",
          "PostgreSQL",
          "Microservices",
          "API Gateway",
        ],
        imageUrl: publicAsset("/project/EquiTip.png"),
      },
      {
        title: "AI 防墜落安全平台",
        description:
          "交付面向現場作業的安全平台，支援 AI 輔助流程、離線韌性和面向營運團隊的標準化報表。",
        tags: [
          "React Native",
          "AI Integration",
          "MongoDB",
          "Offline Sync",
          "PDF Export",
        ],
        imageUrl: publicAsset("/project/fpp.png"),
      },
      {
        title: "PathPal 社區導航",
        description:
          "構建重視無障礙體驗的社區導航應用，包含路線規劃、社區動態、使用者提交興趣點和媒體支援的在地更新。",
        tags: [
          "HTML",
          "JavaScript",
          "Node.js",
          "Express",
          "MongoDB",
          "Cloudinary",
        ],
        imageUrl: publicAsset("/project/pathPal.png"),
      },
    ],
  },

  servicesSection: {
    eyebrow: "服務",
    title: "面向關鍵業務產品的戰略工程服務",
    description:
      "從架構到發布，我們協助團隊交付安全、可擴展的軟體，降低營運風險並提升交付信心。",
    items: [
      {
        title: "全端產品開發",
        description:
          "從端到端構建網站和行動應用解決方案，兼顧擴展性、效能和業務成長。",
        iconKey: "rocket",
        highlights: [
          "現代 Web 應用",
          "行動應用",
          "可擴展架構",
          "正式上線交付",
        ],
        cta: "從想法到上線",
        imageUrl: publicAsset("/services/full-stack.png"),
      },
      {
        title: "行動應用開發",
        description:
          "構建跨平台行動應用，提供穩定效能、順暢體驗和長期可維護性。",
        iconKey: "smartphone",
        imageUrl: publicAsset("/services/mobile-application.png"),
      },
      {
        title: "後端與 API 工程",
        description:
          "設計安全、可擴展的後端和 API，兼顧可靠性、效能與系統整合。",
        iconKey: "code",
        imageUrl: publicAsset("/services/backend-api.png"),
      },
      {
        title: "資料庫設計與整合",
        description:
          "透過合理的資料架構、遷移方案和高效能查詢，打造具備韌性的資料系統。",
        iconKey: "database",
        imageUrl: publicAsset("/services/database.png"),
      },
      {
        title: "身分驗證與資安",
        description:
          "以資安優先的方式實作 RBAC、API 強化、身分控管和工程最佳實務。",
        iconKey: "shield",
        imageUrl: publicAsset("/services/authentication.png"),
      },
      {
        title: "雲端服務與部署",
        description:
          "提供 CI/CD 流程、基礎設施自動化和可觀測性能力，支援可靠、快速的部署。",
        iconKey: "cloud",
        imageUrl: publicAsset("/services/cloud.png"),
      },
    ],
  },

  techStackSection: {
    eyebrow: "技術",
    title: "我們使用的技術棧",
    description:
      "現代、可靠、可擴展的技術，協助我們構建高品質數位產品。",
    closingText:
      "我們持續探索並採用新技術，為客戶交付更好的解決方案。",
    categories: [
      {
        title: "前端與行動端",
        shortTitle: "前端",
        description: "構建快速、響應式且易於使用的使用者介面。",
        iconKey: "frontend",
        items: [
          {label: "React", iconKey: "react", color: "text-cyan-400"},
          {
            label: "React Native",
            iconKey: "reactNative",
            color: "text-sky-400",
          },
          {label: "Next.js", iconKey: "next", color: "text-slate-100"},
          {
            label: "TypeScript",
            iconKey: "typescript",
            color: "text-blue-500",
          },
          {label: "Vue.js", iconKey: "vue", color: "text-emerald-400"},
        ],
      },
      {
        title: "後端與 API",
        shortTitle: "後端",
        description: "構建穩健的服務端邏輯和 API。",
        iconKey: "backend",
        items: [
          {label: "Node.js", iconKey: "node", color: "text-green-500"},
          {label: "Express", iconKey: "express", color: "text-slate-100"},
          {label: ".NET", iconKey: "dotnet", color: "text-violet-500"},
          {label: "Python", iconKey: "python", color: "text-blue-400"},
          {label: "Go", iconKey: "go", color: "text-cyan-300"},
        ],
      },
      {
        title: "資料庫與系統",
        shortTitle: "資料庫",
        description: "構建安全、可擴展且高效能的資料能力。",
        iconKey: "database",
        items: [
          {
            label: "PostgreSQL",
            iconKey: "postgresql",
            color: "text-blue-500",
          },
          {label: "MongoDB", iconKey: "mongodb", color: "text-green-500"},
          {label: "Redis", iconKey: "redis", color: "text-red-500"},
          {label: "Oracle", iconKey: "oracle", color: "text-red-500"},
          {
            label: "SQL Server",
            iconKey: "sqlServer",
            color: "text-rose-400",
          },
        ],
      },
      {
        title: "雲端服務與 DevOps",
        shortTitle: "雲端與 DevOps",
        description: "基礎設施、部署和自動化能力。",
        iconKey: "cloud",
        items: [
          {label: "Docker", iconKey: "docker", color: "text-blue-500"},
          {label: "AWS", iconKey: "aws", color: "text-orange-400"},
          {label: "Azure", iconKey: "azure", color: "text-blue-500"},
          {label: "Railway", iconKey: "railway", color: "text-purple-400"},
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
    eyebrow: "工程原則",
    title: "我們如何構建可靠的軟體系統",
    description:
      "我們遵循成熟的工程原則和雲原生實務，為客戶交付可擴展、安全且高品質的解決方案。",
    appliedInLabel: "應用於",
    items: [
      {
        title: "微服務",
        description:
          "以領域驅動劃分服務邊界，支援獨立擴展並提升變更速度。",
        iconKey: "microservices",
        appliedIn: "EquiTip 現代化改造",
      },
      {
        title: "API 閘道器",
        description:
          "集中管理流量控制、策略執行、可觀測性和安全對外暴露。",
        iconKey: "gateway",
        appliedIn: "EquiTip API 閘道器架構",
      },
      {
        title: "身分與驗證",
        description:
          "透過 JWT、RBAC 和明確的權限邊界實作企業級存取控管。",
        iconKey: "identity",
        appliedIn: "所有專案",
      },
      {
        title: "安全服務",
        description:
          "採用縱深防禦的後端模式，結合資料驗證、系統強化和風險感知預設值。",
        iconKey: "security",
        appliedIn: "AI 防墜落安全平台與 PathPal 平台",
      },
      {
        title: "現代部署",
        description:
          "基於 GitHub、Docker、Railway、AWS 和 Azure 打造可正式上線的部署流程。",
        iconKey: "deployment",
        appliedIn: "EquiTip 現代化改造",
      },
      {
        title: "交付流程",
        description:
          "用清楚的執行框架，讓範圍、品質和時程與業務目標保持一致。",
        iconKey: "workflow",
        appliedIn: "所有專案",
      },
    ],
  },

  teamSection: {
    eyebrow: "團隊",
    title: "圍繞業務成果協作的跨職能專家",
    description:
      "我們結合架構領導力、實作深度和交付紀律，支援團隊從規劃走向正式上線。",
    members: [
      {
        name: "Haider Al-Sudani",
        imageUrl: publicAsset("/team/haider.png"),
        role: "創辦人 | 全端開發者 | 後端架構",
        summary:
          "SystemForge Studio 創辦人。負責解決方案架構、後端策略、交付規劃和端到端執行中的利害關係人溝通。",
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
        imageUrl: publicAsset("/team/haven.png"),
        role: "全端開發者 | 企業應用",
        summary:
          "擁有 7 年企業軟體開發經驗，曾為 NEC 客戶專案和現代全端應用交付解決方案。",
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
        imageUrl: publicAsset("/team/jimmy.png"),
        role: "行動端開發者",
        summary:
          "行動應用 Rentamin 的獨立開發者。AWS 認證解決方案架構師，熟悉雲端生態，並積極使用 AI 提升開發效率。",
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
        imageUrl: publicAsset("/team/lin.jpg"),
        role: "全端開發者 | 業務系統專家",
        summary:
          "全端開發者，擅長構建 Web、行動端和後端系統。結合企業諮詢和軟體工程經驗，交付可擴展的業務解決方案。",
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
        imageUrl: publicAsset("/team/jerry.png"),
        role: "全端開發者",
        summary:
          "全端開發者，專注於後端實作和 API 整合，參與服務開發、資料庫相關工作、驗證流程和專案文件。",
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
    eyebrow: "聯絡工程夥伴",
    title: "降低交付風險，擴展你的產品路線圖。",
    description:
      "SystemForge Studio 協助團隊從技術不確定性走向清楚交付，涵蓋架構、平台工程和雲端營運。",
    businessContactLabel: "商務聯絡",
    primaryButtonLabel: "申請諮詢",
    channels: [
      {
        label: "信箱",
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
    copyrightPrefix: "版權所有。",
    links: [
      {
        label: "GitHub",
        value: "systemforge-studio",
        href: "https://github.com/systemforge-studio",
      },
      {
        label: "信箱",
        value: "haider.alsudani.dev@gmail.com",
        href: "mailto:haider.alsudani.dev@gmail.com",
      },
    ],
  },
};
