import { useLanguage } from "../../i18n/useLanguage";
import { getExternalLinkProps } from "../../shared/utils/links";

export function Footer() {
  const { content } = useLanguage();

  const agency = content.agency;
  const footer = content.footer;

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center">
        <h3 className="text-xl font-semibold tracking-[0.2em] text-slate-100 sm:text-2xl">
          © {new Date().getFullYear()} {agency.name}. {footer.copyrightPrefix}
        </h3>

        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200 sm:text-sm">
          {agency.tagline}
        </p>

        <p className="max-w-xl text-slate-400">
          {agency.footerDescription}
        </p>

        <div className="mt-3 flex flex-wrap justify-center gap-6 text-sm text-slate-300">
          {footer.links.map((link) => (
            <a
              key={link.label}
              className="transition hover:text-cyan-200"
              href={link.href}
              {...getExternalLinkProps(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}