import type {LucideIcon} from "lucide-react";
import type {ComponentType} from "react";

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

export type TechItem = {
  label: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
};

export type TechCategory = {
  title: string;
  items: TechItem[];
};
