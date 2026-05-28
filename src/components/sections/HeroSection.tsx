import { agencyName, agencyTagline } from "../../data/siteContent";
import sfsLogo from "../../assets/sfs-logo.png";

const metrics = [
  { label: "Delivery Model", value: "Predictable Milestones" },
  { label: "Operational Focus", value: "Security + Reliability" },
  { label: "Scale Strategy", value: "Cloud-Native Architecture" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-14 pt-24 max-[430px]:pb-12 max-[430px]:pt-22 sm:px-6 md:pb-20 md:pt-32 lg:pb-24 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(34,211,238,0.25),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(14,116,144,0.18),transparent_35%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-7 max-[430px]:gap-6 md:grid-cols-[1.02fr_0.98fr] md:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="animate-fade-up order-2 md:order-1">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 sm:mb-5 sm:text-sm sm:tracking-[0.35em]">
            {agencyTagline}
          </p>

          <h1 className="max-w-[13ch] text-balance text-[length:var(--text-display)] font-semibold leading-[1.1] text-white max-[430px]:text-[2.05rem] md:max-w-[10.8ch] md:text-[2.75rem] lg:max-w-none lg:text-7xl">
            We build software platforms enterprises can trust to scale.
          </h1>

          <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-slate-300 max-[430px]:text-[0.95rem] md:mt-5 md:text-base md:leading-7 lg:mt-7 lg:text-lg lg:leading-8">
            {agencyName} partners with product and operations leaders to deliver secure, maintainable,
            and production-ready systems with clear architecture and measurable delivery outcomes.
          </p>

          <div className="mt-6 grid gap-2.5 sm:mt-8 sm:flex sm:flex-wrap sm:gap-4 lg:mt-10">
            <a
              href="#contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 sm:w-auto sm:px-7"
            >
              Schedule Discovery
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto sm:px-7"
            >
              View Case Highlights
            </a>
          </div>

          <div className="mt-5 grid gap-2.5 sm:mt-7 sm:grid-cols-3 sm:gap-3 lg:mt-10">
            {metrics.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 sm:p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
                <p className="mt-2 text-sm font-semibold text-cyan-100">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 flex items-center justify-center py-2 md:order-2 md:justify-end md:py-0 lg:-translate-y-20">
          <div className="absolute h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl max-[430px]:h-40 max-[430px]:w-40 md:h-72 md:w-72 lg:h-96 lg:w-96" />
          <img
            src={sfsLogo}
            alt="SystemForge Studio"
            className="animate-logo-enter relative z-10 w-full max-w-[11.5rem] object-contain drop-shadow-[0_0_80px_rgba(34,211,238,0.35)] max-[430px]:max-w-[10.8rem] md:max-w-[15rem] lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
