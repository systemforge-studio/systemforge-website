import { Cloud, Database, Monitor, Server, Zap } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { techCategories } from "../../data/siteContent";

const categoryMeta: Record<string, { shortTitle: string; desc: string; icon: typeof Monitor }> = {
  "Frontend & Mobile": {
    shortTitle: "Frontend",
    desc: "Building fast, responsive and accessible interfaces.",
    icon: Monitor,
  },
  "Backend & APIs": {
    shortTitle: "Backend",
    desc: "Robust server-side logic and APIs.",
    icon: Server,
  },
  "Database & Systems": {
    shortTitle: "Database",
    desc: "Secure, scalable and high-performance data.",
    icon: Database,
  },
  "Cloud & DevOps": {
    shortTitle: "Cloud & DevOps",
    desc: "Infrastructure, deployment and automation.",
    icon: Cloud,
  },
};

export function TechStackSection() {
  return (
    <section id="stack" className="bg-slate-900/45 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 md:pb-24 md:pt-16 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Technology"
          title="Technologies We Build With"
          description="Modern, reliable and scalable technologies that help us build high-quality digital products."
        />

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/35 sm:mt-12">
          {techCategories.map((category, index) => {
            const meta = categoryMeta[category.title];
            const Icon = meta?.icon ?? Monitor;

            return (
              <div
                key={category.title}
                className={`grid gap-5 px-4 py-6 sm:px-6 sm:py-7 lg:grid-cols-[280px_1fr] lg:items-center lg:gap-8 ${
                  index !== techCategories.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="flex gap-4">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-300/30 bg-indigo-300/10">
                    <Icon className="h-5 w-5 text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold text-white">{meta?.shortTitle ?? category.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-7 text-slate-300">{meta?.desc}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
                  {category.items.map((item) => (
                    <article
                      key={item.label}
                      className="tech-logo-card group animate-fade-up rounded-2xl border border-white/12 bg-gradient-to-b from-slate-900/90 to-slate-950 px-2.5 py-3.5 text-center shadow-[0_8px_32px_rgba(2,6,23,0.35)]"
                    >
                      <item.icon className={`tech-logo-icon mx-auto h-7 w-7 ${item.color}`} />
                      <p className="tech-logo-label mt-2">
                        {item.label}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-12 sm:pt-8">
          <p className="mx-auto flex max-w-3xl items-start justify-center gap-3 text-slate-300">
            <Zap className="mt-0.5 h-5 w-5 text-cyan-300" />
            <span className="text-base leading-8">
              We continuously explore and adopt new technologies to deliver better solutions.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
