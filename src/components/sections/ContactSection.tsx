import { Mail } from "lucide-react";
import { agencyName, contactEmail } from "../../data/siteContent";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-slate-900 to-slate-950 p-10 text-center shadow-2xl shadow-cyan-950/30">
        <Mail className="mx-auto mb-6 h-10 w-10 text-cyan-400" />
        <h2 className="text-4xl font-bold text-white">Let’s build your next product.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Contact {agencyName} for web, mobile, backend, API, database, and cloud-ready software projects.
        </p>

        <a
          href={`mailto:${contactEmail}`}
          className="mt-8 inline-block rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-slate-950 hover:bg-cyan-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}