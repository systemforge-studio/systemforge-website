import { Blocks, CloudCog, KeyRound, Network, Shield, Workflow } from "lucide-react";

const architectureItems = [
  {
    title: "Microservices",
    description: "Domain-driven service boundaries that support independent scaling and change velocity.",
    icon: Blocks,
    appliedIn: "EquiTip Modernization",
  },
  {
    title: "API Gateway",
    description: "Centralized traffic control with policy enforcement, observability, and secure exposure.",
    icon: Network,
    appliedIn: "EquiTip API Gateway Architecture",
  },
  {
    title: "Identity & Auth",
    description: "Enterprise access control with JWT, RBAC, and explicit permission boundaries.",
    icon: KeyRound,
    appliedIn: "All Projects",
  },
  {
    title: "Secure Services",
    description: "Defense-in-depth backend patterns with validation, hardening, and risk-aware defaults.",
    icon: Shield,
    appliedIn: "AI Fall Protection Plan & PathPal Platform",
  },
  {
    title: "Modern Deployment",
    description: "Production-ready deployment workflows using GitHub, Docker, Railway, AWS, and Azure.",
    icon: CloudCog,
    appliedIn: "EquiTip Modernization",
  },
  {
    title: "Delivery Workflow",
    description: "Execution frameworks that keep scope, quality, and timeline aligned to business goals.",
    icon: Workflow,
    appliedIn: "All Projects",
  },
];

export function ArchitectureSection() {
  return (
    <section id="architecture" className="px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 md:pb-24 md:pt-16 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300 sm:text-sm sm:tracking-[0.3em]">
            Engineering Principles
          </p>
          <h2 className="section-title mt-3 text-balance text-2xl font-semibold text-white sm:mt-4 sm:text-5xl">
            How we build reliable software systems
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
            We follow proven engineering principles and cloud-native practices to deliver
            scalable, secure, and high-quality solutions for our clients.
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
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-sm text-slate-200">
                    Applied in: <span className="text-cyan-200">{item.appliedIn}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
