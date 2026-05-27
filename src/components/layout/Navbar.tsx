import { navigationItems } from "../../data/siteContent";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-cyan-500/10 bg-slate-950/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold tracking-wide text-white">
          <span className="text-cyan-400">SystemForge</span> Studio
        </a>

        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-cyan-300">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}