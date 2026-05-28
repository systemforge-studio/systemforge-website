import type { Service } from "../../types/site.types";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="glow-hover rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950 p-7 shadow-[0_8px_40px_rgba(2,6,23,0.45)]">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10">
        <Icon className="h-6 w-6 text-cyan-200" />
      </div>
      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
    </article>
  );
}
