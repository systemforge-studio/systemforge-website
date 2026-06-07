export const PROJECTS_CLASSES = {
  container: "mx-auto max-w-7xl",

  viewport:
    "mt-10 overflow-x-auto scroll-smooth [scrollbar-width:none] sm:mt-12 [&::-webkit-scrollbar]:hidden",

  track: "flex items-stretch gap-4 sm:gap-6",

  item:
    "flex shrink-0 basis-full animate-fade-up sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)]",

  navigationBar:
    "mt-8 flex items-center justify-between gap-4",

  navigationButtons:
    "flex items-center rounded-full bg-white/5 p-1.5 backdrop-blur",

  navigationButton:
    "flex h-10 w-10 items-center justify-center rounded-full text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40",

  viewAllButton:
    "text-sm font-semibold text-cyan-200 transition hover:text-cyan-100",

  modalOverlay:
    "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-6 backdrop-blur-sm",

  modal:
    "relative max-h-[88vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-cyan-300/20 bg-slate-950 p-5 shadow-[0_20px_100px_rgba(14,116,144,0.35)] sm:p-8",

  modalHeader:
    "mb-6 flex items-center justify-between gap-4",

  modalTitle:
    "text-xl font-semibold text-white sm:text-2xl",

  modalCloseButton:
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10",

  modalGrid:
    "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
} as const;