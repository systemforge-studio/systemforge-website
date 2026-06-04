import { ArrowUpRight, Mail } from "lucide-react";
import { useLanguage } from "../../i18n/useLanguage";
import { SECTION_ID } from "../../shared/constants/routes";
import { getExternalLinkProps } from "../../shared/utils/links";
import { SECTION_CLASSES } from "../../shared/constants/layout";

export function ContactSection() {
  const { content } = useLanguage();

  const contact = content.contactSection;

  const primaryChannel =
    contact.channels.find((channel) => channel.isPrimary) ??
    contact.channels[0];

  if (!primaryChannel) {
    return null;
  }

  return (
    <section id={SECTION_ID.CONTACT} className={SECTION_CLASSES.default}>
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-900/20 via-slate-900 to-slate-950 p-6 shadow-[0_20px_100px_rgba(14,116,144,0.28)] sm:p-10 lg:p-12">
        <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-2 text-xs text-cyan-100 sm:gap-3 sm:px-4 sm:text-sm">
              <Mail className="h-4 w-4" />
              {contact.eyebrow}
            </div>

            <h2 className="mt-5 text-balance text-2xl font-semibold text-white sm:mt-6 sm:text-4xl lg:text-5xl">
              {contact.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
              {contact.description}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-7 lg:p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
              {contact.businessContactLabel}
            </p>

            <p className="mt-3 break-all text-base font-semibold text-cyan-100 sm:text-lg">
              {primaryChannel.value}
            </p>

            <a
              href={primaryChannel.href}
              {...getExternalLinkProps(primaryChannel.href)}
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 sm:mt-8"
            >
              {contact.primaryButtonLabel}
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {contact.channels.length > 1 && (
              <div className="mt-6 space-y-2 border-t border-white/10 pt-6">
                {contact.channels
                  .filter((channel) => !channel.isPrimary)
                  .map((channel) => (
                    <a
                      key={channel.label}
                      href={channel.href}
                      {...getExternalLinkProps(channel.href)}
                      className="block text-sm text-slate-300 transition hover:text-cyan-200"
                    >
                      {channel.label}: {channel.value}
                    </a>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}