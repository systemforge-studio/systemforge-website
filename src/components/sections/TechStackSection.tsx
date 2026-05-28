import { techCategories } from "../../data/siteContent";
import { SectionHeader } from "../ui/SectionHeader";
import { TechBadge } from "../ui/TechBadge";

export function TechStackSection() {
  return (
    <section id="stack" className="bg-slate-900/45 px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Technology"
          title="Technology choices aligned to reliability and scale"
          description="Our stack is selected to support secure operations, release stability, and long-term maintainability across evolving product roadmaps."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {techCategories.map((category, index) => (
            <article
              key={category.title}
              className="animate-fade-up rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-[0_8px_32px_rgba(2,6,23,0.35)]"
              style={{ animationDelay: `${index * 70}ms` }}
            >
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
