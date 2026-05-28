import { Blocks, CloudCog, KeyRound, Network, Shield, Workflow } from "lucide-react";

const architectureItems = [
  {
    title: "Microservices",
    description: "Domain-driven service boundaries that support independent scaling and change velocity.",
    icon: Blocks,
  },
  {
    title: "API Gateway",
    description: "Centralized traffic control with policy enforcement, observability, and secure exposure.",
    icon: Network,
  },
  {
    title: "Identity & Auth",
    description: "Enterprise access control with JWT, RBAC, and explicit permission boundaries.",
    icon: KeyRound,
  },
  {
    title: "Secure Services",
    description: "Defense-in-depth backend patterns with validation, hardening, and risk-aware defaults.",
    icon: Shield,
  },
  {
    title: "Cloud Pipeline",
    description: "Cloud-native delivery pipelines with repeatable releases and operational traceability.",
    icon: CloudCog,
  },
  {
    title: "Delivery Workflow",
    description: "Execution frameworks that keep scope, quality, and timeline aligned to business goals.",
    icon: Workflow,
  },
];

export function ArchitectureSection() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300 sm:text-sm sm:tracking-[0.3em]">Architecture</p>
          <h2 className="mt-3 text-balance text-2xl font-semibold text-white sm:mt-4 sm:text-5xl">
            Enterprise architecture built for uptime and growth
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
            Our architecture approach prioritizes reliability, scalability, and security so teams can
            ship faster without creating long-term operational drag.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {architectureItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="glow-hover animate-fade-up rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/85 to-slate-950/95 p-5 sm:p-6"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 text-cyan-200 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
