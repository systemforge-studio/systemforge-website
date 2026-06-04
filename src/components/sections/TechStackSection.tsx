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
import { useLanguage } from "../../i18n/useLanguage";
import type {
  LocalizedTechCategory,
  LocalizedTechItem,
} from "../../i18n/i18n.types";
import { SectionHeader } from "../ui/SectionHeader";
import {
  TECH_ICON_COLORS,
  TECH_STACK_CLASSES,
} from "../styles/techStack.styles";
import { SECTION_ID } from "../../shared/constants/routes";

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
      id={SECTION_ID.STACK}
      className={TECH_STACK_CLASSES.section}
    >
      <div className={TECH_STACK_CLASSES.container}>
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className={TECH_STACK_CLASSES.wrapper}>
          {techCategories.map((category, index) => {
            const CategoryIcon = CATEGORY_ICON_BY_KEY[category.iconKey];

            return (
              <div
                key={category.title}
                className={`${TECH_STACK_CLASSES.categoryRow} ${index !== techCategories.length - 1
                  ? TECH_STACK_CLASSES.categoryDivider
                  : ""
                  }`}
              >
                <div className={TECH_STACK_CLASSES.categoryContent}>
                  <div className={TECH_STACK_CLASSES.categoryIconBox}>
                    <CategoryIcon className={TECH_STACK_CLASSES.categoryIcon} />
                  </div>

                  <div>
                    <h3 className={TECH_STACK_CLASSES.categoryTitle}>
                      {category.shortTitle}
                    </h3>

                    <p className={TECH_STACK_CLASSES.categoryDescription}>
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className={TECH_STACK_CLASSES.logoGrid}>
                  {category.items.map((item) => {
                    const TechIcon = TECH_ICON_BY_KEY[item.iconKey];

                    return (
                      <article
                        key={item.label}
                        className={TECH_STACK_CLASSES.logoCard}
                      >
                        <TechIcon
                          className={`${TECH_STACK_CLASSES.logoIconBase} ${TECH_ICON_COLORS[item.iconKey]
                            }`}
                        />

                        <p className={TECH_STACK_CLASSES.logoLabel}>{item.label}</p>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className={TECH_STACK_CLASSES.closingWrapper}>
          <p className={TECH_STACK_CLASSES.closingText}>
            <Zap className={TECH_STACK_CLASSES.closingIcon} />

            <span className={TECH_STACK_CLASSES.closingLabel}>
              {section.closingText}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}