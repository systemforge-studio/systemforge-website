import { useLanguage } from "../../i18n/useLanguage";
import { getExternalLinkProps } from "../../shared/utils/links";
import { FOOTER_CLASSES } from "../styles/footer.styles";

export function Footer() {
  const { content } = useLanguage();

  const agency = content.agency;
  const footer = content.footer;

  return (
    <footer className={FOOTER_CLASSES.footer}>
      <div className={FOOTER_CLASSES.container}>
        <div>
          <h3
            className={FOOTER_CLASSES.title}
            dir="ltr"
          >
            {`© ${new Date().getFullYear()} ${agency.name}`}
          </h3>

          <p className={FOOTER_CLASSES.copyrightNotice}>
            {footer.copyrightNotice}
          </p>
        </div>

        <p className={FOOTER_CLASSES.tagline}>{agency.tagline}</p>

        <p className={FOOTER_CLASSES.description}>
          {agency.footerDescription}
        </p>

        <div className={FOOTER_CLASSES.links}>
          {footer.links.map((link) => (
            <a
              key={link.label}
              className={FOOTER_CLASSES.link}
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