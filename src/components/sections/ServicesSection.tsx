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
import { useLanguage } from "../../i18n/LanguageProvider";
import type { LocalizedService } from "../../i18n/i18n.types";
import { SectionHeader } from "../ui/SectionHeader";

const ICON_BY_KEY: Record<LocalizedService["iconKey"], typeof Rocket> = {
  rocket: Rocket,
  smartphone: Smartphone,
  code: Code,
  database: Database,
  shield: Shield,
  cloud: Cloud,
};

const ICON_BADGE_STYLES = [
  "border-blue-300/70 bg-gradient-to-br from-blue-400/30 via-blue-500/24 to-indigo-500/26 shadow-[0_0_0_1px_rgba(96,165,250,0.42),0_0_30px_rgba(59,130,246,0.38),inset_0_1px_10px_rgba(165,243,252,0.2)] text-cyan-50",
  "border-emerald-300/55 bg-emerald-400/22 shadow-[0_0_0_1px_rgba(45,212,191,0.28),0_0_26px_rgba(45,212,191,0.28)] text-cyan-50",
  "border-violet-300/70 bg-gradient-to-br from-violet-400/34 via-violet-500/28 to-indigo-500/28 shadow-[0_0_0_1px_rgba(167,139,250,0.42),0_0_30px_rgba(139,92,246,0.4),inset_0_1px_10px_rgba(196,181,253,0.2)] text-violet-50",
  "border-orange-300/55 bg-orange-500/22 shadow-[0_0_0_1px_rgba(251,146,60,0.28),0_0_26px_rgba(251,146,60,0.24)] text-orange-50",
  "border-cyan-300/55 bg-cyan-400/22 shadow-[0_0_0_1px_rgba(34,211,238,0.28),0_0_28px_rgba(34,211,238,0.24)] text-cyan-50",
  "border-blue-300/55 bg-blue-500/24 shadow-[0_0_0_1px_rgba(96,165,250,0.28),0_0_28px_rgba(96,165,250,0.28)] text-blue-50",
] as const;

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

export function ServicesSection() {
  const { content } = useLanguage();

  const section = content.servicesSection;
  const [primary, ...others] = section.items;

  if (!primary) {
    return null;
  }

  return (
    <section
      id="services"
      className="px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 md:pb-24 md:pt-16 lg:pb-28 lg:pt-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-12">
          <article className="service-premium-card group relative overflow-hidden rounded-3xl border border-cyan-300/35 bg-gradient-to-br from-blue-900/45 via-slate-950 to-blue-950/75 p-6 shadow-[0_18px_50px_rgba(6,14,45,0.55)] sm:p-8 lg:col-span-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_26%,rgba(59,130,246,0.25),transparent_48%)]" />
            <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

            {primary.imageUrl ? (
              <img
                src={primary.imageUrl}
                alt={primary.title}
                className="pointer-events-none absolute bottom-[-1.2rem] right-[-0.8rem] z-[1] h-[52%] w-[56%] object-contain opacity-84 sm:bottom-[-1rem] sm:right-[-0.6rem] sm:h-[58%] sm:w-[58%]"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.96) 45%, rgba(0,0,0,0.55) 72%, rgba(0,0,0,0.08) 92%, rgba(0,0,0,0) 100%)",
                  maskImage:
                    "linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.96) 45%, rgba(0,0,0,0.55) 72%, rgba(0,0,0,0.08) 92%, rgba(0,0,0,0) 100%)",
                }}
              />
            ) : null}

            <div className="relative z-10 max-w-[27rem]">
              <div
                className={`mb-6 flex h-[3.3rem] w-[3.3rem] items-center justify-center rounded-[1.05rem] border backdrop-blur-[2.5px] ${ICON_BADGE_STYLES[0]}`}
              >
                <ServiceIcon service={primary} className="h-6 w-6 stroke-[2.35]" />
              </div>

              <h3 className="text-3xl font-semibold leading-tight text-white sm:text-5xl sm:leading-[1.06]">
                {primary.title}
              </h3>

              <p className="mt-4 text-base leading-8 text-slate-200 sm:text-[1.35rem] sm:leading-9">
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
                  href="#contact"
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
              className={`service-premium-card group relative overflow-hidden rounded-3xl border p-6 shadow-[0_14px_40px_rgba(2,8,32,0.5)] sm:p-7 lg:col-span-3 ${
                index === 0
                  ? "border-emerald-300/35 bg-gradient-to-br from-emerald-900/15 via-slate-950 to-cyan-950/70"
                  : "border-violet-300/35 bg-gradient-to-br from-violet-900/20 via-slate-950 to-indigo-950/75"
              }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(56,189,248,0.16),transparent_52%)]" />

              {service.imageUrl ? (
                <div className="pointer-events-none absolute bottom-[-0.32rem] left-1/2 z-[1] h-[35%] w-[74%] -translate-x-1/2 sm:h-[37%]">
                  <img
                    src={service.imageUrl}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-[-10%] h-[120%] w-[120%] max-w-none object-contain opacity-[0.38] blur-2xl"
                  />
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="relative h-full w-full object-contain opacity-[0.93]"
                    style={{
                      WebkitMaskImage:
                        "radial-gradient(98% 96% at 50% 50%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.96) 16%, rgba(0,0,0,1) 58%, rgba(0,0,0,0.92) 78%, rgba(0,0,0,0.52) 92%, rgba(0,0,0,0.12) 98%, rgba(0,0,0,0) 100%)",
                      maskImage:
                        "radial-gradient(98% 96% at 50% 50%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.96) 16%, rgba(0,0,0,1) 58%, rgba(0,0,0,0.92) 78%, rgba(0,0,0,0.52) 92%, rgba(0,0,0,0.12) 98%, rgba(0,0,0,0) 100%)",
                    }}
                  />
                  <div className="absolute inset-[-14%] bg-[radial-gradient(96%_96%_at_50%_50%,rgba(56,189,248,0.15)_0%,rgba(14,116,144,0.12)_34%,rgba(8,47,73,0.10)_62%,rgba(2,6,23,0)_86%)] blur-xl" />
                </div>
              ) : null}

              <div className="relative z-10">
                <div
                  className={`mb-5 flex h-[3.3rem] w-[3.3rem] items-center justify-center rounded-[1.05rem] border backdrop-blur-[2.5px] ${
                    ICON_BADGE_STYLES[index + 1]
                  }`}
                >
                  <ServiceIcon service={service} className="h-6 w-6 stroke-[2.35]" />
                </div>

                <h3 className="text-2xl font-semibold leading-tight text-white sm:text-4xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-lg sm:leading-8">
                  {service.description}
                </p>
              </div>
            </article>
          ))}

          {others.slice(2).map((service, index) => (
            <article
              key={service.title}
              className={`service-premium-card group relative min-h-[25rem] overflow-hidden rounded-3xl border p-6 shadow-[0_14px_40px_rgba(2,8,32,0.45)] sm:min-h-[26rem] sm:p-7 lg:col-span-4 ${
                index === 0
                  ? "border-orange-300/35 bg-gradient-to-br from-orange-900/20 via-slate-950 to-slate-900"
                  : index === 1
                    ? "border-cyan-300/35 bg-gradient-to-br from-cyan-900/20 via-slate-950 to-slate-900"
                    : "border-blue-300/35 bg-gradient-to-br from-blue-900/25 via-slate-950 to-indigo-950/80"
              }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_88%,rgba(56,189,248,0.14),transparent_48%)]" />

              {service.imageUrl ? (
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="pointer-events-none absolute bottom-[0.35rem] right-[-1rem] z-[1] h-[31%] w-[62%] object-contain opacity-78 sm:bottom-[0.5rem] sm:h-[33%]"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.95) 46%, rgba(0,0,0,0.58) 74%, rgba(0,0,0,0.1) 92%, rgba(0,0,0,0) 100%)",
                    maskImage:
                      "linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.95) 46%, rgba(0,0,0,0.58) 74%, rgba(0,0,0,0.1) 92%, rgba(0,0,0,0) 100%)",
                  }}
                />
              ) : null}

              <div className="relative z-10">
                <div
                  className={`mb-5 flex h-[3.3rem] w-[3.3rem] items-center justify-center rounded-[1.05rem] border backdrop-blur-[2.5px] ${
                    ICON_BADGE_STYLES[index + 3]
                  }`}
                >
                  <ServiceIcon service={service} className="h-6 w-6 stroke-[2.35]" />
                </div>

                <h3 className="text-2xl font-semibold leading-tight text-white sm:text-4xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-lg sm:leading-8">
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