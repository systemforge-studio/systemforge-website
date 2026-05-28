import { ArrowUpRight, Mail } from "lucide-react";
import { agencyName, contactEmail } from "../../data/siteContent";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-900/20 via-slate-900 to-slate-950 p-8 shadow-[0_20px_100px_rgba(14,116,144,0.28)] sm:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <Mail className="h-4 w-4" />
              Talk to an engineering partner
            </div>

            <h2 className="mt-6 text-balance text-3xl font-semibold text-white sm:text-5xl">
              De-risk delivery and scale your product roadmap.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {agencyName} helps teams move from technical uncertainty to delivery clarity across architecture,
              platform engineering, and cloud operations.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Business Contact</p>
            <p className="mt-3 break-all text-lg font-semibold text-cyan-100">{contactEmail}</p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 sm:w-auto"
            >
              Request Consultation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
