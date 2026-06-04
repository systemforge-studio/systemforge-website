export const LANGUAGE_SWITCHER_CLASSES = {
  wrapper:
    "flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1",
  button:
    "rounded-full px-2.5 py-1 text-xs font-semibold transition",
  activeButton: "bg-cyan-300 text-slate-950",
  inactiveButton: "text-slate-300 hover:bg-white/10 hover:text-white",
} as const;