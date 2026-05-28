import type { Service } from "../../types/site.types";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="glow-hover rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950 p-5 shadow-[0_8px_40px_rgba(2,6,23,0.45)] sm:p-7">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 sm:mb-6 sm:h-12 sm:w-12">
        <Icon className="h-5 w-5 text-cyan-200 sm:h-6 sm:w-6" />
      </div>
      <h3 className="text-lg font-semibold text-white sm:text-xl">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{service.description}</p>
    </article>
  );
}
