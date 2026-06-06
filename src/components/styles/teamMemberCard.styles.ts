export const TEAM_MEMBER_CARD_CLASSES = {
  card:
    "glow-hover flex h-full w-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950 p-5 shadow-[0_8px_40px_rgba(2,6,23,0.45)] max-[430px]:p-[1.125rem] sm:p-7",
  avatarBox:
    "mb-4 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/10 sm:mb-5 sm:h-16 sm:w-16",
  avatarImage: "h-full w-full object-cover",
  fallbackIcon: "h-7 w-7 text-cyan-300 sm:h-8 sm:w-8",
  name: "text-xl font-semibold text-white",
  role: "mt-1 text-sm font-medium text-cyan-200",
  secondaryRole: "mt-1 text-xs font-medium text-cyan-100/80",
  summary:
    "team-summary mt-3.5 text-sm leading-7 text-slate-300 sm:mt-4 sm:text-base",
  skillsWrapper: "mt-auto flex flex-wrap gap-2 pt-5",
  skill:
    "rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-slate-200 sm:px-3 sm:text-xs",
} as const;