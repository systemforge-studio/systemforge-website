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

  return <Icon className="h-5 w-5 text-cyan-200 sm:h-6 sm:w-6" />;
}

export function ArchitectureSection() {
  const { content } = useLanguage();

  const section = content.architectureSection;

  return (
    <section
      id="architecture"
      className="px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 md:pb-24 md:pt-16 lg:pb-28 lg:pt-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300 sm:text-sm sm:tracking-[0.3em]">
            {section.eyebrow}
          </p>

          <h2 className="section-title mt-3 text-balance text-2xl font-semibold text-white sm:mt-4 sm:text-5xl">
            {section.title}
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
            {section.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {section.items.map((item, index) => (
            <article
              key={`${item.title}-${item.iconKey}`}
              className={`glow-hover animate-fade-up ${getStaggerDelayClass(index)} rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/85 to-slate-950/95 p-5 sm:p-6`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 sm:h-12 sm:w-12">
                <ArchitectureIcon item={item} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white sm:text-xl">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                {item.description}
              </p>

              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-sm text-slate-200">
                  {section.appliedInLabel}:{" "}
                  <span className="text-cyan-200">{item.appliedIn}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}