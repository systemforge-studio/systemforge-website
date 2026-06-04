export const CONTACT_SECTION_CLASSES = {
  wrapper:
    "mx-auto max-w-5xl overflow-hidden rounded-[2.2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-900/20 via-slate-900 to-slate-950 p-6 shadow-[0_20px_100px_rgba(14,116,144,0.28)] sm:p-10 lg:p-12",
  grid: "grid items-center gap-8 sm:gap-10 md:grid-cols-[1.1fr_0.9fr]",
  badge:
    "inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-2 text-xs text-cyan-100 sm:gap-3 sm:px-4 sm:text-sm",
  badgeIcon: "h-4 w-4",
  title:
    "mt-5 text-balance text-2xl font-semibold text-white sm:mt-6 sm:text-4xl lg:text-5xl",
  description:
    "mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8",
  card: "rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-7 lg:p-8",
  label: "text-sm uppercase tracking-[0.22em] text-slate-400",
  value: "mt-3 break-all text-base font-semibold text-cyan-100 sm:text-lg",
  primaryLink:
    "mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 sm:mt-8",
  linkIcon: "h-4 w-4",
  linksWrapper: "mt-6 space-y-2 border-t border-white/10 pt-6",
  secondaryLink: "block text-sm text-slate-300 transition hover:text-cyan-200",
} as const;