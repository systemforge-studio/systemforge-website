import { agencyName, agencyTagline } from "../../data/siteContent";
import sfsLogo from "../../assets/sfs-logo.png";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-28 pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0ea5e955,transparent_35%)]" />
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            {agencyTagline}
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Engineering modern software solutions.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {agencyName} builds scalable web, mobile, backend, and cloud-ready systems
            for businesses that need reliable software delivery.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
              Start a Project
            </a>
            <a href="#projects" className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10">
              View Work
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

          <img
            src={sfsLogo}
            alt="SystemForge Studio"
            className="relative z-10 w-full max-w-lg object-contain drop-shadow-[0_0_55px_rgba(14,165,233,0.5)] animate-logo-enter"
          />
        </div>
      </div>
    </section>
  );
}