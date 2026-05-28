type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300 sm:text-sm sm:tracking-[0.32em]">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-2xl font-semibold leading-tight text-white sm:mt-4 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">{description}</p>
    </div>
  );
}
