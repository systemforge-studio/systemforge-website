import type { SiteContent } from "../../i18n.types";
import { ROUTES } from "../../../shared/constants/routes";

export const arabicNav: SiteContent["nav"] = {
  callToAction: "تواصل معنا",
  openMenuLabel: "فتح القائمة",
  closeMenuLabel: "إغلاق القائمة",
  items: [
    { label: "المشاريع", href: ROUTES.PROJECTS },
    { label: "الخدمات", href: ROUTES.SERVICES },
    { label: "التقنيات", href: ROUTES.STACK },
    { label: "المبادئ", href: ROUTES.ARCHITECTURE },
    { label: "الفريق", href: ROUTES.TEAM },
    { label: "التواصل", href: ROUTES.CONTACT },
  ],
};