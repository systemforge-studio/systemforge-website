import {
  Blocks,
  CloudCog,
  KeyRound,
  Network,
  Shield,
  Workflow,
} from "lucide-react";
import { useLanguage } from "../../i18n/useLanguage";
import type {
  ArchitectureIconKey,
  LocalizedArchitectureItem,
} from "../../i18n/i18n.types";
import { getStaggerDelayClass } from "../../shared/constants/animation";
import { SECTION_ID } from "../../shared/constants/routes";
import { SECTION_CLASSES } from "../../shared/constants/layout";
import { ARCHITECTURE_CLASSES } from "../styles/architectureSection.styles";

const ICON_BY_KEY: Record<ArchitectureIconKey, typeof Blocks> = {
  microservices: Blocks,
  gateway: Network,
  identity: KeyRound,
  security: Shield,
  deployment: CloudCog,
  workflow: Workflow,
};

function ArchitectureIcon({ item }: { item: LocalizedArchitectureItem }) {
  const Icon = ICON_BY_KEY[item.iconKey];

  return <Icon className={ARCHITECTURE_CLASSES.icon} />;
}

export function ArchitectureSection() {
  const { content } = useLanguage();

  const section = content.architectureSection;

  return (
    <section id={SECTION_ID.ARCHITECTURE} className={SECTION_CLASSES.default}>
      <div className={ARCHITECTURE_CLASSES.container}>
        <div className={ARCHITECTURE_CLASSES.header}>
          <p className={ARCHITECTURE_CLASSES.eyebrow}>
            {section.eyebrow}
          </p>

          <h2 className={ARCHITECTURE_CLASSES.title}>
            {section.title}
          </h2>

          <p className={ARCHITECTURE_CLASSES.description}>
            {section.description}
          </p>
        </div>

        <div className={ARCHITECTURE_CLASSES.grid}>
          {section.items.map((item, index) => (
            <article
              key={`${item.title}-${item.iconKey}`}
              className={`${ARCHITECTURE_CLASSES.card} ${getStaggerDelayClass(
                index,
              )}`}
            >
              <div className={ARCHITECTURE_CLASSES.iconBox}>
                <ArchitectureIcon item={item} />
              </div>

              <h3 className={ARCHITECTURE_CLASSES.itemTitle}>
                {item.title}
              </h3>

              {item.secondaryTitle ? (
                <p className={ARCHITECTURE_CLASSES.itemSecondaryTitle}>
                  {item.secondaryTitle}
                </p>
              ) : null}

              <p className={ARCHITECTURE_CLASSES.itemDescription}>
                {item.description}
              </p>

              <div className={ARCHITECTURE_CLASSES.appliedInWrapper}>
                <p className={ARCHITECTURE_CLASSES.appliedInText}>
                  {section.appliedInLabel}:{" "}
                  <span className={ARCHITECTURE_CLASSES.appliedInValue}>
                    {item.appliedIn}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}