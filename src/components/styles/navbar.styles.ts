export const NAVBAR_CLASSES = {
  header:
    "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl",
  nav: "mx-auto w-full max-w-7xl px-4 sm:px-6",
  row: "flex h-16 items-center justify-between sm:h-20",
  brand:
    "text-sm font-semibold tracking-[0.15em] text-slate-100 max-[430px]:tracking-[0.12em] sm:text-lg sm:tracking-[0.2em]",
  desktopLinks:
    "hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex lg:gap-8",
  desktopLinkBase:
    "relative transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-cyan-300 after:transition-all after:duration-300",
  desktopLinkActive: "text-cyan-200 after:w-full",
  desktopLinkInactive: "hover:text-white after:w-0 hover:after:w-full",
  actions: "flex items-center gap-2 sm:gap-3",
  cta:
    "rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-2 text-xs font-semibold text-cyan-100 transition duration-300 hover:border-cyan-200 hover:bg-cyan-300 hover:text-slate-950 sm:px-5 sm:text-sm",
  menuButton:
    "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 md:hidden",
  menuIcon: "h-5 w-5",
  mobilePanel: "border-t border-white/10 py-3 md:hidden",
  mobileLinks: "flex flex-col gap-2",
  mobileLinkBase: "rounded-lg px-3 py-2 text-sm font-medium transition",
  mobileLinkActive: "bg-cyan-300/10 text-cyan-100",
  mobileLinkInactive: "text-slate-200 hover:bg-white/5",
  mobileSwitcher: "px-3 pt-2",
} as const;