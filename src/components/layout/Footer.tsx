import { agencyName, agencyTagline } from "../../data/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 bg-slate-950/80 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center">
        <h3 className="text-2xl font-bold text-white">
          <span className="text-cyan-400">SystemForge</span> Studio
        </h3>

        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          {agencyTagline}
        </p>

        <p className="max-w-xl text-slate-400">
          Modern software engineering studio focused on scalable web, mobile,
          backend, cloud, and architecture solutions.
        </p>

        <div className="mt-4 flex gap-6 text-sm text-slate-400">
          <a href="https://github.com/systemforge-studio" target="_blank">
            GitHub
          </a>

          <a href="mailto:haider.85ca@gmail.com">Email</a>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          © 2026 {agencyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}