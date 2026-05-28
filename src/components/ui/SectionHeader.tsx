type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-8 text-slate-300">{description}</p>
    </div>
  );
}
