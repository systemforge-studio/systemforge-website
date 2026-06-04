export const PROJECT_CARD_CLASSES = {
  card:
    "glow-hover rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950 p-5 shadow-[0_8px_40px_rgba(2,6,23,0.45)] sm:p-7",
  imageWrapper:
    "relative mb-5 overflow-hidden rounded-2xl border border-cyan-300/15 bg-slate-900/70",
  image:
    "h-56 w-full bg-slate-950 object-contain object-center sm:h-64",
  fallbackImage:
    "flex h-56 w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_50%)] sm:h-64",
  fallbackIcon: "h-12 w-12 text-cyan-300/75",
  iconBadge:
    "absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/30 bg-slate-950/75 backdrop-blur",
  badgeIcon: "h-4 w-4 text-cyan-200",
  title: "text-lg font-semibold text-white sm:text-xl",
  secondaryTitle: "mt-1 text-sm font-semibold text-cyan-200/90",
  description: "mt-3 text-sm leading-7 text-slate-300 sm:text-base",
  tagsWrapper: "mt-5 flex flex-wrap gap-2 sm:mt-6",
  tag:
    "rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100",
} as const;