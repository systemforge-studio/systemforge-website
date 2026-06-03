import type { SiteContent } from "../i18n.types";
import { ROUTES } from "../../shared/constants/routes";

export const zhCnContent: SiteContent = {
  language: "zh-cn",
  direction: "ltr",
  htmlLang: "zh-CN",

  agency: {
    name: "SystemForge Studio",
    shortName: "SFS",
    tagline: "构建 · 创新 · 扩展",
    description:
      "面向企业级软件的平台工程伙伴，专注于可扩展产品平台、安全后端系统和云端就绪架构。",
    footerDescription:
      "现代软件工程工作室，专注于可扩展的网站、移动应用、后端、云服务和架构解决方案。",
  },

  nav: {
    callToAction: "预约沟通",
    items: [
      { label: "项目", href: ROUTES.PROJECTS },
      { label: "服务", href: ROUTES.SERVICES },
      { label: "技术", href: ROUTES.STACK },
      { label: "原则", href: ROUTES.ARCHITECTURE },
      { label: "团队", href: ROUTES.TEAM },
      { label: "联系", href: ROUTES.CONTACT },
    ],
  },

  languageSwitcher: {
    ariaLabel: "切换网站语言",
  },

  hero: {
    eyebrow: "构建 · 创新 · 扩展",
    title: "我们构建企业可以放心扩展的软件平台。",
    description:
      "SystemForge Studio 与产品负责人和运营团队合作，交付安全、可维护、可上线的软件系统，并以清晰架构和可衡量成果降低交付风险。",
    primaryCta: "预约需求沟通",
    secondaryCta: "查看案例亮点",
    logoAlt: "SystemForge Studio",
  },

  projectsSection: {
    eyebrow: "项目",
    title: "在系统现代化和平台工程中的真实交付经验",
    description:
      "这些案例展示了我们如何帮助组织降低技术风险、提升发布速度，并强化平台基础。",
    items: [
      {
        title: "EquiTip 现代化改造",
        description:
          "将旧版移动系统重构为可扩展平台，采用现代服务、更强的数据完整性和更快的发布能力。",
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
        title: "AI 防坠落安全平台",
        description:
          "交付面向现场作业的安全平台，支持 AI 辅助流程、离线韧性和面向运营团队的标准化报告。",
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
        title: "PathPal 社区导航",
        description:
          "构建重视无障碍体验的社区导航应用，包含路线规划、社区动态、用户提交兴趣点和媒体支持的本地更新。",
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
    eyebrow: "服务",
    title: "面向关键业务产品的战略工程服务",
    description:
      "从架构到发布，我们帮助团队交付安全、可扩展的软件，降低运营风险并提升交付信心。",
    items: [
      {
        title: "全栈产品开发",
        description:
          "从端到端构建网站和移动应用解决方案，兼顾扩展性、性能和业务增长。",
        iconKey: "rocket",
        highlights: [
          "现代 Web 应用",
          "移动应用",
          "可扩展架构",
          "生产级交付",
        ],
        cta: "从想法到上线",
        imageUrl: "/services/full-stack.png",
      },
      {
        title: "移动应用开发",
        description:
          "构建跨平台移动应用，提供稳定性能、顺畅体验和长期可维护性。",
        iconKey: "smartphone",
        imageUrl: "/services/mobile-application.png",
      },
      {
        title: "后端与 API 工程",
        description:
          "设计安全、可扩展的后端和 API，兼顾可靠性、性能与系统集成。",
        iconKey: "code",
        imageUrl: "/services/backend-api.png",
      },
      {
        title: "数据库设计与集成",
        description:
          "通过合理的数据架构、迁移方案和高性能查询，打造具备韧性的数据系统。",
        iconKey: "database",
        imageUrl: "/services/database.png",
      },
      {
        title: "认证与安全",
        description:
          "以安全优先的方式实现 RBAC、API 加固、身份控制和工程最佳实践。",
        iconKey: "shield",
        imageUrl: "/services/authentication.png",
      },
      {
        title: "云服务与部署",
        description:
          "提供 CI/CD 流程、基础设施自动化和可观测性能力，实现可靠、快速的部署。",
        iconKey: "cloud",
        imageUrl: "/services/cloud.png",
      },
    ],
  },

  techStackSection: {
    eyebrow: "技术",
    title: "我们使用的技术栈",
    description:
      "现代、可靠、可扩展的技术，帮助我们构建高质量数字产品。",
    closingText:
      "我们持续探索并采用新技术，为客户交付更好的解决方案。",
    categories: [
      {
        title: "前端与移动端",
        shortTitle: "前端",
        description: "构建快速、响应式且易访问的用户界面。",
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
        title: "后端与 API",
        shortTitle: "后端",
        description: "构建稳健的服务端逻辑和 API。",
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
        title: "数据库与系统",
        shortTitle: "数据库",
        description: "构建安全、可扩展且高性能的数据能力。",
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
        title: "云服务与 DevOps",
        shortTitle: "云与 DevOps",
        description: "基础设施、部署和自动化能力。",
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
    eyebrow: "工程原则",
    title: "我们如何构建可靠的软件系统",
    description:
      "我们遵循成熟的工程原则和云原生实践，为客户交付可扩展、安全且高质量的解决方案。",
    appliedInLabel: "应用于",
    items: [
      {
        title: "微服务",
        description:
          "以领域驱动划分服务边界，支持独立扩展并提升变更速度。",
        iconKey: "microservices",
        appliedIn: "EquiTip 现代化改造",
      },
      {
        title: "API 网关",
        description:
          "集中管理流量控制、策略执行、可观测性和安全暴露。",
        iconKey: "gateway",
        appliedIn: "EquiTip API 网关架构",
      },
      {
        title: "身份与认证",
        description:
          "通过 JWT、RBAC 和明确的权限边界实现企业级访问控制。",
        iconKey: "identity",
        appliedIn: "所有项目",
      },
      {
        title: "安全服务",
        description:
          "采用纵深防御的后端模式，结合数据校验、系统加固和风险感知默认值。",
        iconKey: "security",
        appliedIn: "AI 防坠落安全平台与 PathPal 平台",
      },
      {
        title: "现代部署",
        description:
          "基于 GitHub、Docker、Railway、AWS 和 Azure 打造生产级部署流程。",
        iconKey: "deployment",
        appliedIn: "EquiTip 现代化改造",
      },
      {
        title: "交付流程",
        description:
          "用清晰的执行框架，让范围、质量和时间线与业务目标保持一致。",
        iconKey: "workflow",
        appliedIn: "所有项目",
      },
    ],
  },

  teamSection: {
    eyebrow: "团队",
    title: "围绕业务成果协作的跨职能专家",
    description:
      "我们结合架构领导力、实现深度和交付纪律，支持团队从规划走向生产上线。",
    members: [
      {
        name: "Haider Al-Sudani",
        imageUrl: "/team/haider.png",
        role: "创始人 | 全栈开发者 | 后端架构",
        summary:
          "SystemForge Studio 创始人。负责解决方案架构、后端策略、交付规划和端到端执行中的利益相关方沟通。",
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
        role: "全栈开发者 | 企业应用",
        summary:
          "拥有 7 年企业软件开发经验，曾为 NEC 客户项目和现代全栈应用交付解决方案。",
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
        role: "移动端开发者",
        summary:
          "移动应用 Rentamin 的独立开发者。AWS 认证解决方案架构师，熟悉云生态，并积极使用 AI 提升开发效率。",
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
        role: "全栈开发者 | 业务系统专家",
        summary:
          "全栈开发者，擅长构建 Web、移动端和后端系统。结合企业咨询和软件工程经验，交付可扩展的业务解决方案。",
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
        role: "全栈开发者",
        summary:
          "全栈开发者，专注于后端实现和 API 集成，参与服务开发、数据库相关工作、认证流程和项目文档。",
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
    eyebrow: "联系工程伙伴",
    title: "降低交付风险，扩展你的产品路线图。",
    description:
      "SystemForge Studio 帮助团队从技术不确定性走向清晰交付，覆盖架构、平台工程和云端运营。",
    businessContactLabel: "商务联系",
    primaryButtonLabel: "申请咨询",
    channels: [
      {
        label: "邮箱",
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
    copyrightPrefix: "版权所有。",
    links: [
      {
        label: "GitHub",
        value: "systemforge-studio",
        href: "https://github.com/systemforge-studio",
      },
      {
        label: "邮箱",
        value: "haider.alsudani.dev@gmail.com",
        href: "mailto:haider.alsudani.dev@gmail.com",
      },
    ],
  },
};
