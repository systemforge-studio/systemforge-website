export const ARCHITECTURE_CLASSES = {
  container: "mx-auto max-w-7xl",
  header: "mx-auto max-w-3xl text-center",
  eyebrow:
    "text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300 sm:text-sm sm:tracking-[0.3em]",
  title:
    "section-title mt-3 text-balance text-2xl font-semibold text-white sm:mt-4 sm:text-5xl",
  description:
    "mt-4 text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8",
  grid:
    "mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-3",
  card:
    "glow-hover animate-fade-up rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/85 to-slate-950/95 p-5 sm:p-6",
  iconBox:
    "flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 sm:h-12 sm:w-12",
  icon: "h-5 w-5 text-cyan-200 sm:h-6 sm:w-6",
  itemTitle: "mt-5 text-lg font-semibold text-white sm:text-xl",
  itemSecondaryTitle: "mt-1 text-sm font-semibold text-cyan-200/90",
  itemDescription: "mt-3 text-sm leading-7 text-slate-300 sm:text-base",
  appliedInWrapper: "mt-5 border-t border-white/10 pt-4",
  appliedInText: "text-sm text-slate-200",
  appliedInValue: "text-cyan-200",
} as const;