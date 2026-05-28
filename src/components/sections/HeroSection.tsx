import { agencyName, agencyTagline } from "../../data/siteContent";
import sfsLogo from "../../assets/sfs-logo.png";

const metrics = [
  { label: "Delivery Model", value: "Predictable Milestones" },
  { label: "Operational Focus", value: "Security + Reliability" },
  { label: "Scale Strategy", value: "Cloud-Native Architecture" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-36 sm:pb-28 sm:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(34,211,238,0.25),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(14,116,144,0.18),transparent_35%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300 sm:text-sm">
            {agencyTagline}
          </p>

          <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            We build software platforms enterprises can trust to scale.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {agencyName} partners with product and operations leaders to deliver secure, maintainable,
            and production-ready systems with clear architecture and measurable delivery outcomes.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-cyan-300 px-7 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Schedule Discovery
            </a>
            <a
              href="#projects"
              className="rounded-2xl border border-white/20 bg-white/5 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              View Case Highlights
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {metrics.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
                <p className="mt-2 text-sm font-semibold text-cyan-100">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute h-[27rem] w-[27rem] rounded-full border border-cyan-200/15" />
          <img
            src={sfsLogo}
            alt="SystemForge Studio"
            className="animate-logo-enter relative z-10 w-full max-w-md object-contain drop-shadow-[0_0_80px_rgba(34,211,238,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
