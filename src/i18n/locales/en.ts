import type { SiteContent } from "../i18n.types";
import { englishAgency } from "./en/agency";
import { englishArchitectureSection } from "./en/architecture";
import { englishContactSection } from "./en/contact";
import { englishFooter } from "./en/footer";
import { englishHero } from "./en/hero";
import { englishNav } from "./en/nav";
import { englishProjectsSection } from "./en/projects";
import { englishServicesSection } from "./en/services";
import { englishTeamSection } from "./en/team";
import { englishTechStackSection } from "./en/techStack";

export const enContent: SiteContent = {
  language: "en",
  direction: "ltr",
  htmlLang: "en-CA",

  agency: englishAgency,
  nav: englishNav,

  languageSwitcher: {
    ariaLabel: "Change website language",
  },

  hero: englishHero,
  projectsSection: englishProjectsSection,
  servicesSection: englishServicesSection,
  techStackSection: englishTechStackSection,
  architectureSection: englishArchitectureSection,
  teamSection: englishTeamSection,
  contactSection: englishContactSection,
  footer: englishFooter,
};