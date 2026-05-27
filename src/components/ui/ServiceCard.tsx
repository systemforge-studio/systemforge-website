import type { Service } from "../../types/site.types";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="glow-hover group rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-2xl shadow-cyan-950/20 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-cyan-500/20">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">
        <Icon className="h-6 w-6 text-cyan-400" />
      </div>
      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
    </article>
  );
}