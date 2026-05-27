import { techCategories } from "../../data/siteContent";
import { SectionHeader } from "../ui/SectionHeader";
import { TechBadge } from "../ui/TechBadge";

export function TechStackSection() {
  return (
    <section id="stack" className="bg-slate-900/50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Technology"
          title="Modern stack for scalable systems"
          description="Our technology choices support reliable engineering, clean architecture, and long-term maintainability."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {techCategories.map((category) => (
            <article key={category.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}