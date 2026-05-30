import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigationItems } from "../../data/siteContent";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const sectionIds = ["home", "projects", "services", "stack", "architecture", "team", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.05 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-sm font-semibold tracking-[0.15em] text-slate-100 max-[430px]:tracking-[0.12em] sm:text-lg sm:tracking-[0.2em]"
          >
            <span className="text-cyan-300">SYSTEMFORGE</span> STUDIO
          </a>

          <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex lg:gap-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-cyan-300 after:transition-all after:duration-300 ${
                  activeHref === item.href
                    ? "text-cyan-200 after:w-full"
                    : "hover:text-white after:w-0 hover:after:w-full"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-2 text-xs font-semibold text-cyan-100 transition duration-300 hover:border-cyan-200 hover:bg-cyan-300 hover:text-slate-950 sm:px-5 sm:text-sm"
            >
              Book Call
            </a>

            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 md:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-white/10 py-3 md:hidden">
            <div className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    activeHref === item.href ? "bg-cyan-300/10 text-cyan-100" : "text-slate-200 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
