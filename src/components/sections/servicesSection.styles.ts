export const SERVICE_ICON_BADGE_STYLES = [
  "border-blue-300/70 bg-gradient-to-br from-blue-400/30 via-blue-500/24 to-indigo-500/26 shadow-[0_0_0_1px_rgba(96,165,250,0.42),0_0_30px_rgba(59,130,246,0.38),inset_0_1px_10px_rgba(165,243,252,0.2)] text-cyan-50",
  "border-emerald-300/55 bg-emerald-400/22 shadow-[0_0_0_1px_rgba(45,212,191,0.28),0_0_26px_rgba(45,212,191,0.28)] text-cyan-50",
  "border-violet-300/70 bg-gradient-to-br from-violet-400/34 via-violet-500/28 to-indigo-500/28 shadow-[0_0_0_1px_rgba(167,139,250,0.42),0_0_30px_rgba(139,92,246,0.4),inset_0_1px_10px_rgba(196,181,253,0.2)] text-violet-50",
  "border-orange-300/55 bg-orange-500/22 shadow-[0_0_0_1px_rgba(251,146,60,0.28),0_0_26px_rgba(251,146,60,0.24)] text-orange-50",
  "border-cyan-300/55 bg-cyan-400/22 shadow-[0_0_0_1px_rgba(34,211,238,0.28),0_0_28px_rgba(34,211,238,0.24)] text-cyan-50",
  "border-blue-300/55 bg-blue-500/24 shadow-[0_0_0_1px_rgba(96,165,250,0.28),0_0_28px_rgba(96,165,250,0.28)] text-blue-50",
] as const;

export const SERVICE_CARD_STYLES = [
  "border-emerald-300/35 bg-gradient-to-br from-emerald-900/15 via-slate-950 to-cyan-950/70",
  "border-violet-300/35 bg-gradient-to-br from-violet-900/20 via-slate-950 to-indigo-950/75",
  "border-orange-300/35 bg-gradient-to-br from-orange-900/20 via-slate-950 to-slate-900",
  "border-cyan-300/35 bg-gradient-to-br from-cyan-900/20 via-slate-950 to-slate-900",
  "border-blue-300/35 bg-gradient-to-br from-blue-900/25 via-slate-950 to-indigo-950/80",
] as const;

export const SERVICE_TITLE_CLASSES = {
  primary: {
    ltr: "text-3xl font-semibold leading-tight sm:text-5xl sm:leading-[1.06]",
    rtl: "text-2xl font-medium leading-[1.25] sm:text-3xl",
  },
  secondary: {
    ltr: "text-2xl font-semibold leading-tight sm:text-4xl",
    rtl: "text-xl font-medium leading-[1.25] sm:text-2xl",
  },
} as const;

export const SERVICE_SUBTITLE_CLASSES = {
  primary: "mt-2 block text-lg font-medium text-cyan-200 sm:text-xl",
  secondary: "mt-1 block text-base font-medium text-cyan-200 sm:text-lg",
} as const;

export const SERVICE_DESCRIPTION_CLASSES = {
  primary: {
    ltr: "text-base leading-8 sm:text-[1.35rem] sm:leading-9",
    rtl: "text-sm font-normal leading-7 sm:text-base sm:leading-8",
  },
  secondary: {
    ltr: "text-sm leading-7 sm:text-lg sm:leading-8",
    rtl: "text-sm font-normal leading-7 sm:text-[0.95rem] sm:leading-8",
  },
} as const;

export const SERVICE_LAYOUT_CLASSES = {
  primaryArticle:
    "service-premium-card group relative overflow-hidden rounded-3xl border border-cyan-300/35 bg-gradient-to-br from-blue-900/45 via-slate-950 to-blue-950/75 p-6 shadow-[0_18px_50px_rgba(6,14,45,0.55)] sm:p-8 lg:col-span-6",
  topArticle:
    "service-premium-card group relative overflow-hidden rounded-3xl border p-6 shadow-[0_14px_40px_rgba(2,8,32,0.5)] sm:p-7 lg:col-span-3",
  bottomArticle:
    "service-premium-card group relative min-h-[25rem] overflow-hidden rounded-3xl border p-6 shadow-[0_14px_40px_rgba(2,8,32,0.45)] sm:min-h-[26rem] sm:p-7 lg:col-span-4",
  iconBadge:
    "flex h-[3.3rem] w-[3.3rem] items-center justify-center rounded-[1.05rem] border backdrop-blur-[2.5px]",
  primaryImage:
    "service-primary-image-mask pointer-events-none absolute bottom-[0.35rem] right-[-1rem] z-[1] h-[31%] w-[62%] object-contain opacity-[0.72] sm:bottom-[0.5rem] sm:h-[33%]",
  bottomImage:
    "service-bottom-image-mask pointer-events-none absolute bottom-[0.35rem] right-[-1rem] z-[1] h-[31%] w-[62%] object-contain opacity-[0.78] sm:bottom-[0.5rem] sm:h-[33%]",
  centerImageWrapper:
    "pointer-events-none absolute bottom-[-0.32rem] left-1/2 z-[1] h-[35%] w-[74%] -translate-x-1/2 sm:h-[37%]",
  centerImageGlow:
    "absolute inset-[-10%] h-[120%] w-[120%] max-w-none object-contain opacity-[0.38] blur-2xl",
  centerImage:
    "service-center-image-mask relative h-full w-full object-contain opacity-[0.93]",
} as const;