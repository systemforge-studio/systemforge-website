import { navigationItems } from "../../data/siteContent";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        <a href="#home" className="text-base font-semibold tracking-[0.2em] text-slate-100 sm:text-lg">
          <span className="text-cyan-300">SYSTEMFORGE</span> STUDIO
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative transition duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2 text-sm font-semibold text-cyan-100 transition duration-300 hover:border-cyan-200 hover:bg-cyan-300 hover:text-slate-950"
        >
          Book Call
        </a>
      </nav>
    </header>
  );
}
