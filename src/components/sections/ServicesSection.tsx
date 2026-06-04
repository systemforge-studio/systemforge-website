import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code,
  Database,
  Rocket,
  Shield,
  Smartphone,
} from "lucide-react";
import type { LocalizedService } from "../../i18n/i18n.types";
import { useLanguage } from "../../i18n/useLanguage";
import { SECTION_CLASSES } from "../../shared/constants/layout";
import { ROUTES, SECTION_ID } from "../../shared/constants/routes";
import { SectionHeader } from "../ui/SectionHeader";
import {
  SERVICE_CARD_STYLES,
  SERVICE_CTA_CLASSES,
  SERVICE_DECORATION_CLASSES,
  SERVICE_DESCRIPTION_CLASSES,
  SERVICE_ICON_BADGE_STYLES,
  SERVICE_ICON_CLASSES,
  SERVICE_LAYOUT_CLASSES,
  SERVICE_LIST_CLASSES,
  SERVICE_SUBTITLE_CLASSES,
  SERVICE_TITLE_CLASSES,
  SERVICES_LAYOUT_CONFIG,
} from "./servicesSection.styles";

const ICON_BY_KEY: Record<LocalizedService["iconKey"], typeof Rocket> = {
  rocket: Rocket,
  smartphone: Smartphone,
  code: Code,
  database: Database,
  shield: Shield,
  cloud: Cloud,
};

function ServiceIcon({
  service,
  className,
}: {
  service: LocalizedService;
  className: string;
}) {
  const Icon = ICON_BY_KEY[service.iconKey];

  return <Icon className={className} />;
}

function ServiceTitle({
  service,
  direction,
  variant,
}: {
  service: LocalizedService;
  direction: "ltr" | "rtl";
  variant: "primary" | "secondary";
}) {
  return (
    <h3 className={`text-white ${SERVICE_TITLE_CLASSES[variant][direction]}`}>
      {service.title}
      {service.secondaryTitle ? (
        <span className={SERVICE_SUBTITLE_CLASSES[variant]}>
          {service.secondaryTitle}
        </span>
      ) : null}
    </h3>
  );
}

export function ServicesSection() {
  const { content } = useLanguage();

  const section = content.servicesSection;
  const [primary, ...others] = section.items;
  const direction = content.direction;

  if (!primary) {
    return null;
  }

  return (
    <section id={SECTION_ID.SERVICES} className={SECTION_CLASSES.default}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-12">
          <article className={SERVICE_LAYOUT_CLASSES.primaryArticle}>
            <div className={SERVICE_DECORATION_CLASSES.primaryGlow} />
            <div className={SERVICE_DECORATION_CLASSES.primaryOrb} />

            {primary.imageUrl ? (
              <>
                <img
                  src={primary.imageUrl}
                  alt={primary.title}
                  className={SERVICE_LAYOUT_CLASSES.primaryImage}
                />

                <div className={SERVICE_DECORATION_CLASSES.imageFade} />
              </>
            ) : null}

            <div className="relative z-10 max-w-[27rem]">
              <div
                className={`mb-6 ${SERVICE_LAYOUT_CLASSES.iconBadge} ${SERVICE_ICON_BADGE_STYLES[0]}`}
              >
                <ServiceIcon
                  service={primary}
                  className={SERVICE_ICON_CLASSES.default}
                />
              </div>

              <ServiceTitle
                service={primary}
                direction={direction}
                variant="primary"
              />

              <p
                className={`mt-4 text-slate-200 ${SERVICE_DESCRIPTION_CLASSES.primary[direction]}`}
              >
                {primary.description}
              </p>

              {primary.highlights?.length ? (
                <ul className={SERVICE_LIST_CLASSES.highlights}>
                  {primary.highlights.map((point) => (
                    <li
                      key={point}
                      className={SERVICE_LIST_CLASSES.highlightItem}
                    >
                      <CheckCircle2 className={SERVICE_ICON_CLASSES.check} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {primary.cta ? (
                <a
                  href={ROUTES.CONTACT}
                  className={SERVICE_CTA_CLASSES}
                >
                  {primary.cta}
                  <ArrowRight className={SERVICE_ICON_CLASSES.arrow} />
                </a>
              ) : null}
            </div>
          </article>

          {others.slice(0, SERVICES_LAYOUT_CONFIG.topServiceCount).map((service, index) => (
            <article
              key={service.title}
              className={`${SERVICE_LAYOUT_CLASSES.topArticle} ${SERVICE_CARD_STYLES[index]}`}
            >
              <div className={SERVICE_DECORATION_CLASSES.topGlow} />

              {service.imageUrl ? (
                <div className={SERVICE_LAYOUT_CLASSES.centerImageWrapper}>
                  <img
                    src={service.imageUrl}
                    alt=""
                    aria-hidden="true"
                    className={SERVICE_LAYOUT_CLASSES.centerImageGlow}
                  />
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className={SERVICE_LAYOUT_CLASSES.centerImage}
                  />
                  <div className={SERVICE_DECORATION_CLASSES.centerGlow} />
                </div>
              ) : null}

              <div className="relative z-10">
                <div
                  className={`mb-5 ${SERVICE_LAYOUT_CLASSES.iconBadge} ${SERVICE_ICON_BADGE_STYLES[index + SERVICES_LAYOUT_CONFIG.firstCardStyleOffset]
                    }`}
                >
                  <ServiceIcon
                    service={service}
                    className={SERVICE_ICON_CLASSES.default}
                  />
                </div>

                <ServiceTitle
                  service={service}
                  direction={direction}
                  variant="secondary"
                />

                <p
                  className={`mt-3 text-slate-200 ${SERVICE_DESCRIPTION_CLASSES.secondary[direction]}`}
                >
                  {service.description}
                </p>
              </div>
            </article>
          ))}

          {others.slice(SERVICES_LAYOUT_CONFIG.topServiceCount).map((service, index) => (
            <article
              key={service.title}
              className={`${SERVICE_LAYOUT_CLASSES.bottomArticle} ${SERVICE_CARD_STYLES[index + SERVICES_LAYOUT_CONFIG.bottomCardStyleOffset]
                }`}
            >
              <div className={SERVICE_DECORATION_CLASSES.bottomGlow} />

              {service.imageUrl ? (
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className={SERVICE_LAYOUT_CLASSES.bottomImage}
                />
              ) : null}

              <div className="relative z-10">
                <div
                  className={`mb-5 ${SERVICE_LAYOUT_CLASSES.iconBadge} ${SERVICE_ICON_BADGE_STYLES[index + SERVICES_LAYOUT_CONFIG.bottomIconStyleOffset]
                    }`}
                >
                  <ServiceIcon
                    service={service}
                    className={SERVICE_ICON_CLASSES.default}
                  />
                </div>

                <ServiceTitle
                  service={service}
                  direction={direction}
                  variant="secondary"
                />

                <p
                  className={`mt-3 text-slate-200 ${SERVICE_DESCRIPTION_CLASSES.secondary[direction]}`}
                >
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}