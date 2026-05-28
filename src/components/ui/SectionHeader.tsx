type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300 sm:text-sm sm:tracking-[0.32em]">{eyebrow}</p>
      <h2 className="section-title mx-auto mt-3 max-w-4xl text-balance text-[length:var(--text-h2)] font-semibold leading-[1.14] text-white sm:mt-4">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-[length:var(--text-body)] leading-7 text-slate-300 sm:mt-6 sm:leading-8">{description}</p>
    </div>
  );
}
