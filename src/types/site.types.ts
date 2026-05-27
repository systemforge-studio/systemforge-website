import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  summary: string;
  skills: string[];
  imageUrl?: string;
};

export type TechCategory = {
  title: string;
  items: string[];
};