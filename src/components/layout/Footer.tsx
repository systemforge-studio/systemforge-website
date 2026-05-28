import { agencyName, agencyTagline } from "../../data/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center">
        <h3 className="text-xl font-semibold tracking-[0.2em] text-slate-100 sm:text-2xl">
          <span className="text-cyan-300">SYSTEMFORGE</span> STUDIO
        </h3>

        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200 sm:text-sm">{agencyTagline}</p>

        <p className="max-w-xl text-slate-400">
          Modern software engineering studio focused on scalable web, mobile, backend, cloud, and architecture solutions.
        </p>

        <div className="mt-3 flex gap-6 text-sm text-slate-300">
          <a className="transition hover:text-cyan-200" href="https://github.com/systemforge-studio" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="transition hover:text-cyan-200" href="mailto:haider.85ca@gmail.com">
            Email
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-500">© 2026 {agencyName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
