import type { LucideIcon } from "lucide-react";
import type { TechItemIconKey } from "../i18n/i18n.types";

export type NavigationItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  highlights?: string[];
  cta?: string;
  imageUrl?: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  summary: string;
  skills: string[];
  imageUrl?: string;
};

export type TechStackItem = {
  label: string;
  iconKey: TechItemIconKey;
};

export type TechCategory = {
  title: string;
  items: TechStackItem[];
};