import { Cloud, Database, Monitor, Server, Zap } from "lucide-react";
import {
  SiDocker,
  SiDotnet,
  SiExpress,
  SiGithubactions,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRailway,
  SiReact,
  SiRedis,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { FaAws, FaDatabase, FaMicrosoft, FaServer } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { useLanguage } from "../../i18n/useLanguage";import type {
  LocalizedTechCategory,
  LocalizedTechItem,
} from "../../i18n/i18n.types";
import { SectionHeader } from "../ui/SectionHeader";

const CATEGORY_ICON_BY_KEY: Record<
  LocalizedTechCategory["iconKey"],
  typeof Monitor
> = {
  frontend: Monitor,
  backend: Server,
  database: Database,
  cloud: Cloud,
};

const TECH_ICON_BY_KEY: Record<LocalizedTechItem["iconKey"], typeof SiReact> = {
  react: SiReact,
  reactNative: TbBrandReactNative,
  next: SiNextdotjs,
  typescript: SiTypescript,
  vue: SiVuedotjs,
  node: SiNodedotjs,
  express: SiExpress,
  dotnet: SiDotnet,
  python: SiPython,
  go: FaGolang,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  redis: SiRedis,
  oracle: FaDatabase,
  sqlServer: FaServer,
  docker: SiDocker,
  aws: FaAws,
  azure: FaMicrosoft,
  railway: SiRailway,
  githubActions: SiGithubactions,
};

export function TechStackSection() {
  const { content } = useLanguage();

  const section = content.techStackSection;
  const techCategories = section.categories;

  return (
    <section
      id="stack"
      className="bg-slate-900/45 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 md:pb-24 md:pt-16 lg:pb-28 lg:pt-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/35 sm:mt-12">
          {techCategories.map((category, index) => {
            const CategoryIcon = CATEGORY_ICON_BY_KEY[category.iconKey];

            return (
              <div
                key={category.title}
                className={`grid gap-5 px-4 py-6 sm:px-6 sm:py-7 lg:grid-cols-[280px_1fr] lg:items-center lg:gap-8 ${
                  index !== techCategories.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <div className="flex gap-4">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-300/30 bg-indigo-300/10">
                    <CategoryIcon className="h-5 w-5 text-indigo-300" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-semibold text-white">
                      {category.shortTitle}
                    </h3>

                    <p className="mt-2 max-w-xs text-sm leading-7 text-slate-300">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
                  {category.items.map((item) => {
                    const TechIcon = TECH_ICON_BY_KEY[item.iconKey];

                    return (
                      <article
                        key={item.label}
                        className="tech-logo-card group animate-fade-up rounded-2xl border border-white/12 bg-gradient-to-b from-slate-900/90 to-slate-950 px-2.5 py-3.5 text-center shadow-[0_8px_32px_rgba(2,6,23,0.35)]"
                      >
                        <TechIcon
                          className={`tech-logo-icon mx-auto h-7 w-7 ${item.color}`}
                        />

                        <p className="tech-logo-label mt-2">{item.label}</p>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-12 sm:pt-8">
          <p className="mx-auto flex max-w-3xl items-start justify-center gap-3 text-slate-300">
            <Zap className="mt-0.5 h-5 w-5 text-cyan-300" />

            <span className="text-base leading-8">{section.closingText}</span>
          </p>
        </div>
      </div>
    </section>
  );
}