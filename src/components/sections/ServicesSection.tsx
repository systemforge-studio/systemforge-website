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
  SERVICE_DESCRIPTION_CLASSES,
  SERVICE_ICON_BADGE_STYLES,
  SERVICE_LAYOUT_CLASSES,
  SERVICE_SUBTITLE_CLASSES,
  SERVICE_TITLE_CLASSES,
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
      {service.subtitle ? (
        <span className={SERVICE_SUBTITLE_CLASSES[variant]}>
          {service.subtitle}
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_26%,rgba(59,130,246,0.25),transparent_48%)]" />
            <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

            {primary.imageUrl ? (
              <>
                <img
                  src={primary.imageUrl}
                  alt={primary.title}
                  className={SERVICE_LAYOUT_CLASSES.primaryImage}
                />

                <div className="absolute bottom-0 right-0 z-[2] h-[60%] w-[60%] bg-gradient-to-l from-slate-950/80 via-slate-950/40 to-transparent" />
              </>
            ) : null}

            <div className="relative z-10 max-w-[27rem]">
              <div
                className={`mb-6 ${SERVICE_LAYOUT_CLASSES.iconBadge} ${SERVICE_ICON_BADGE_STYLES[0]}`}
              >
                <ServiceIcon
                  service={primary}
                  className="h-6 w-6 stroke-[2.35]"
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
                <ul className="mt-6 space-y-2.5">
                  {primary.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-base text-cyan-100 sm:text-lg"
                    >
                      <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {primary.cta ? (
                <a
                  href={ROUTES.CONTACT}
                  className="hero-cta hero-cta-secondary mt-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/45 bg-cyan-300/8 px-5 py-2.5 text-base font-semibold text-cyan-100"
                >
                  {primary.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </article>

          {others.slice(0, 2).map((service, index) => (
            <article
              key={service.title}
              className={`${SERVICE_LAYOUT_CLASSES.topArticle} ${SERVICE_CARD_STYLES[index]}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(56,189,248,0.16),transparent_52%)]" />

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
                  <div className="absolute inset-[-14%] bg-[radial-gradient(96%_96%_at_50%_50%,rgba(56,189,248,0.15)_0%,rgba(14,116,144,0.12)_34%,rgba(8,47,73,0.10)_62%,rgba(2,6,23,0)_86%)] blur-xl" />
                </div>
              ) : null}

              <div className="relative z-10">
                <div
                  className={`mb-5 ${SERVICE_LAYOUT_CLASSES.iconBadge} ${
                    SERVICE_ICON_BADGE_STYLES[index + 1]
                  }`}
                >
                  <ServiceIcon
                    service={service}
                    className="h-6 w-6 stroke-[2.35]"
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

          {others.slice(2).map((service, index) => (
            <article
              key={service.title}
              className={`${SERVICE_LAYOUT_CLASSES.bottomArticle} ${
                SERVICE_CARD_STYLES[index + 2]
              }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_88%,rgba(56,189,248,0.14),transparent_48%)]" />

              {service.imageUrl ? (
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className={SERVICE_LAYOUT_CLASSES.bottomImage}
                />
              ) : null}

              <div className="relative z-10">
                <div
                  className={`mb-5 ${SERVICE_LAYOUT_CLASSES.iconBadge} ${
                    SERVICE_ICON_BADGE_STYLES[index + 3]
                  }`}
                >
                  <ServiceIcon
                    service={service}
                    className="h-6 w-6 stroke-[2.35]"
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