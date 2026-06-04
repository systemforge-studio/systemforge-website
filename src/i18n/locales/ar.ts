import type { SiteContent } from "../i18n.types";
import { arabicAgency } from "./ar/agency";
import { arabicArchitectureSection } from "./ar/architecture";
import { arabicContactSection } from "./ar/contact";
import { arabicFooter } from "./ar/footer";
import { arabicHero } from "./ar/hero";
import { arabicNav } from "./ar/nav";
import { arabicProjectsSection } from "./ar/projects";
import { arabicServicesSection } from "./ar/services";
import { arabicTeamSection } from "./ar/team";
import { arabicTechStackSection } from "./ar/techStack";

export const arContent: SiteContent = {
  language: "ar",
  direction: "rtl",
  htmlLang: "ar",

  agency: arabicAgency,
  nav: arabicNav,

  languageSwitcher: {
    ariaLabel: "تغيير لغة الموقع",
  },

  hero: arabicHero,
  projectsSection: arabicProjectsSection,
  servicesSection: arabicServicesSection,
  techStackSection: arabicTechStackSection,
  architectureSection: arabicArchitectureSection,
  teamSection: arabicTeamSection,
  contactSection: arabicContactSection,
  footer: arabicFooter,
};