export type LanguageCode = "en" | "ar";
export type TextDirection = "ltr" | "rtl";

export type LocalizedNavigationItem = {
  label: string;
  href: string;
};

export type LocalizedService = {
  title: string;
  description: string;
  iconKey: "rocket" | "smartphone" | "code" | "database" | "shield" | "cloud";
  highlights?: string[];
  cta?: string;
  imageUrl?: string;
};

export type LocalizedProject = {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
};

export type LocalizedTeamMember = {
  name: string;
  role: string;
  summary: string;
  skills: string[];
  imageUrl?: string;
};

export type LocalizedArchitectureItem = {
  title: string;
  description: string;
  iconKey: "blocks" | "network" | "key" | "shield" | "cloudCog" | "workflow";
  appliedIn: string;
};

export type LocalizedTechCategoryMeta = {
  shortTitle: string;
  description: string;
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
  projectsSection: {
    eyebrow: string;
    title: string;
    description: string;
    items: LocalizedProject[];
  };
  servicesSection: {
    eyebrow: string;
    title: string;
    description: string;
    items: LocalizedService[];
  };
  techStackSection: {
    eyebrow: string;
    title: string;
    description: string;
    categoryMeta: Record<string, LocalizedTechCategoryMeta>;
    closingNote: string;
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
