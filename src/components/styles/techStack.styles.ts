export const TECH_STACK_CLASSES = {
  section:
    "bg-slate-900/45 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 md:pb-24 md:pt-16 lg:pb-28 lg:pt-20",
  container: "mx-auto max-w-7xl",
  wrapper:
    "mt-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/35 sm:mt-12",
  categoryRow:
    "grid gap-5 px-4 py-6 sm:px-6 sm:py-7 lg:grid-cols-[280px_1fr] lg:items-center lg:gap-8",
  categoryDivider: "border-b border-white/10",
  categoryContent: "flex gap-4",
  categoryIconBox:
    "mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-300/30 bg-indigo-300/10",
  categoryIcon: "h-5 w-5 text-indigo-300",
  categoryTitle: "text-3xl font-semibold text-white",
  categorySecondaryTitle: "mt-1 text-base font-semibold text-cyan-200",
  categoryDescription: "mt-2 max-w-xs text-sm leading-7 text-slate-300", logoGrid: "grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5",
  logoCard:
    "tech-logo-card group animate-fade-up rounded-2xl border border-white/12 bg-gradient-to-b from-slate-900/90 to-slate-950 px-2.5 py-3.5 text-center shadow-[0_8px_32px_rgba(2,6,23,0.35)]",
  logoIconBase: "tech-logo-icon mx-auto h-7 w-7",
  logoLabel: "tech-logo-label mt-2",
  closingWrapper: "mt-10 border-t border-white/10 pt-6 sm:mt-12 sm:pt-8",
  closingText:
    "mx-auto flex max-w-3xl items-start justify-center gap-3 text-slate-300",
  closingIcon: "mt-0.5 h-5 w-5 text-cyan-300",
  closingLabel: "text-base leading-8",
} as const;

export const TECH_ICON_COLORS: Record<string, string> = {
  react: "text-cyan-400",
  reactNative: "text-sky-400",
  next: "text-slate-100",
  typescript: "text-blue-500",
  vue: "text-emerald-400",
  node: "text-green-500",
  express: "text-slate-100",
  dotnet: "text-violet-500",
  python: "text-blue-400",
  go: "text-cyan-300",
  postgresql: "text-blue-500",
  mongodb: "text-green-500",
  redis: "text-red-500",
  oracle: "text-red-500",
  sqlServer: "text-rose-400",
  docker: "text-blue-500",
  aws: "text-orange-400",
  azure: "text-blue-500",
  railway: "text-purple-400",
  githubActions: "text-blue-500",
};
