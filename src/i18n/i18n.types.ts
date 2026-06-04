export type LanguageCode = "en" | "ar";
export type TextDirection = "ltr" | "rtl";

export type LocalizedNavigationItem = {
  label: string;
  href: string;
};

export type ServiceIconKey =
  | "rocket"
  | "smartphone"
  | "code"
  | "database"
  | "shield"
  | "cloud";

export type LocalizedService = {
  title: string;
  secondaryTitle?: string;
  description: string;
  iconKey: ServiceIconKey;
  highlights?: string[];
  cta?: string;
  imageUrl?: string;
};

export type LocalizedProject = {
  title: string;
  secondaryTitle?: string;
  description: string;
  tags: string[];
  imageUrl?: string;
};

export type LocalizedTeamMember = {
  name: string;
  role: string;
  secondaryRole?: string;
  summary: string;
  skills: string[];
  imageUrl?: string;
};

export type ArchitectureIconKey =
  | "microservices"
  | "gateway"
  | "identity"
  | "security"
  | "deployment"
  | "workflow";

export type LocalizedArchitectureItem = {
  title: string;
  secondaryTitle?: string;
  description: string;
  iconKey: ArchitectureIconKey;
  appliedIn: string;
};

export type TechCategoryIconKey = "frontend" | "backend" | "database" | "cloud";

export type TechItemIconKey =
  | "react"
  | "reactNative"
  | "next"
  | "typescript"
  | "vue"
  | "node"
  | "express"
  | "dotnet"
  | "python"
  | "go"
  | "postgresql"
  | "mongodb"
  | "redis"
  | "oracle"
  | "sqlServer"
  | "docker"
  | "aws"
  | "azure"
  | "railway"
  | "githubActions";

export type LocalizedTechItem = {
  label: string;
  iconKey: TechItemIconKey;
};

export type LocalizedTechCategory = {
  title: string;
  shortTitle: string;
  description: string;
  iconKey: TechCategoryIconKey;
  items: LocalizedTechItem[];
};

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
  isPrimary?: boolean;
};

export type SiteContent = {
  language: LanguageCode;
  direction: TextDirection;
  htmlLang: string;

  agency: {
    name: string;
    shortName: string;
    tagline: string;
    description: string;
    footerDescription: string;
  };

  nav: {
    items: LocalizedNavigationItem[];
    callToAction: string;
    openMenuLabel: string;
    closeMenuLabel: string;
  };

  languageSwitcher: {
    ariaLabel: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    logoAlt: string;
  };

  techStackSection: {
    eyebrow: string;
    title: string;
    description: string;
    closingText: string;
    categories: LocalizedTechCategory[];
  };

  projectsSection: {
    eyebrow: string;
    title: string;
    description: string;
    imageAltSuffix: string;
    items: LocalizedProject[];
  };

  servicesSection: {
    eyebrow: string;
    title: string;
    description: string;
    items: LocalizedService[];
  };

  architectureSection: {
    eyebrow: string;
    title: string;
    description: string;
    appliedInLabel: string;
    items: LocalizedArchitectureItem[];
  };

  teamSection: {
    eyebrow: string;
    title: string;
    description: string;
    members: LocalizedTeamMember[];
  };

  contactSection: {
    eyebrow: string;
    title: string;
    description: string;
    businessContactLabel: string;
    primaryButtonLabel: string;
    channels: ContactChannel[];
  };

  footer: {
    links: ContactChannel[];
    copyrightPrefix: string;
  };
};