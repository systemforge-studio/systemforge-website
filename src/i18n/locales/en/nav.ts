import type { SiteContent } from "../../i18n.types";
import { ROUTES } from "../../../shared/constants/routes";

export const englishNav: SiteContent["nav"] = {
  callToAction: "Book Call",
  openMenuLabel: "Open menu",
  closeMenuLabel: "Close menu",
  items: [
    { label: "Projects", href: ROUTES.PROJECTS },
    { label: "Services", href: ROUTES.SERVICES },
    { label: "Technology", href: ROUTES.STACK },
    { label: "Principles", href: ROUTES.ARCHITECTURE },
    { label: "Team", href: ROUTES.TEAM },
    { label: "Contact", href: ROUTES.CONTACT },
  ],
};