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
    <section className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Architecture</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-white sm:text-5xl">
            Enterprise architecture built for uptime and growth
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Our architecture approach prioritizes reliability, scalability, and security so teams can
            ship faster without creating long-term operational drag.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {architectureItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="glow-hover rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/85 to-slate-950/95 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10">
                  <Icon className="h-6 w-6 text-cyan-200" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
