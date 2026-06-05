export const HERO_CLASSES = {
  section:
    "relative overflow-hidden px-4 pb-14 pt-24 max-[430px]:pb-12 max-[430px]:pt-22 sm:px-6 md:pb-20 md:pt-32 lg:pb-24 lg:pt-36",
  primaryGlow:
    "absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(34,211,238,0.25),transparent_42%)]",
  secondaryGlow:
    "absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(14,116,144,0.18),transparent_35%)]",
  grid:
    "relative mx-auto grid w-full max-w-7xl items-center gap-7 max-[430px]:gap-6 md:grid-cols-[1.02fr_0.98fr] md:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16",
  content: "animate-fade-up order-2 md:order-1",
  tagline:
    "mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 sm:mb-5 sm:text-sm sm:tracking-[0.35em]",
  titleBase: "text-balance text-white",
  descriptionBase:
    "mt-4 max-w-2xl text-slate-300 max-[430px]:text-[0.95rem] md:mt-5 lg:mt-7",
  marketsWrapper:
    "mt-5 flex flex-wrap items-center gap-2.5",

  marketsLabel:
    "text-sm font-medium text-slate-300",

  marketBadge:
    "rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100",
  actions:
    "mt-6 grid gap-2.5 sm:mt-8 sm:flex sm:flex-wrap sm:gap-4 lg:mt-10",
  primaryCta:
    "hero-cta hero-cta-primary inline-flex min-h-11 w-full items-center justify-center rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition duration-300 sm:w-auto sm:px-7",
  secondaryCta:
    "hero-cta hero-cta-secondary inline-flex min-h-11 w-full items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 sm:w-auto sm:px-7",
  logoWrapper:
    "relative order-1 flex items-center justify-center py-2 md:order-2 md:justify-end md:py-0 lg:-translate-y-5",
  logoGlow:
    "absolute h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl max-[430px]:h-40 max-[430px]:w-40 md:h-72 md:w-72 lg:h-96 lg:w-96",
  logo:
    "animate-logo-enter relative z-10 w-full max-w-[11.5rem] object-contain drop-shadow-[0_0_80px_rgba(34,211,238,0.35)] max-[430px]:max-w-[10.8rem] md:max-w-[15rem] lg:max-w-md",
  logoContent:
    "relative z-10 flex flex-col items-center gap-1",

  servicesBlock:
    "text-center -translate-y-16 sm:-translate-y-20 md:-translate-y-28 lg:-translate-y-36",

  servicesTitle:
    "text-lg font-bold text-cyan-200 sm:text-xl lg:text-2xl",

  serviceAudiences:
    "mt-4 flex flex-wrap justify-center gap-2 sm:gap-3",

  serviceAudienceBadge:
    "rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[0.7rem] font-medium text-cyan-100 sm:px-4 sm:py-1.5 sm:text-sm",
} as const;

export const HERO_TITLE_CLASSES = {
  ltr: "max-w-[13ch] text-[length:var(--text-display)] font-semibold leading-[1.1] max-[430px]:text-[2.05rem] md:max-w-[10.8ch] md:text-[2.75rem] lg:max-w-none lg:text-7xl",
  rtl: "max-w-[13ch] text-[2.35rem] font-medium leading-[1.2] max-[430px]:text-[1.9rem] md:text-[2.85rem] lg:text-[3.35rem]",
} as const;

export const HERO_DESCRIPTION_CLASSES = {
  ltr: "text-[0.98rem] leading-7 md:text-base md:leading-7 lg:text-lg lg:leading-8",
  rtl: "text-[0.95rem] font-normal leading-8 md:text-base lg:text-[1.05rem] lg:leading-9",
} as const;