import { ArrowUpRight, Mail } from "lucide-react";
import { useLanguage } from "../../i18n/useLanguage";
import { SECTION_ID } from "../../shared/constants/routes";
import { getExternalLinkProps } from "../../shared/utils/links";
import { SECTION_CLASSES } from "../../shared/constants/layout";
import { CONTACT_SECTION_CLASSES } from "../styles/contactSection.styles";

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
      <div className={CONTACT_SECTION_CLASSES.wrapper}>
        <div className={CONTACT_SECTION_CLASSES.grid}>
          <div>
            <div className={CONTACT_SECTION_CLASSES.badge}>
              <Mail className={CONTACT_SECTION_CLASSES.badgeIcon} />
              {contact.eyebrow}
            </div>

            <h2 className={CONTACT_SECTION_CLASSES.title}>
              {contact.title}
            </h2>

            <p className={CONTACT_SECTION_CLASSES.description}>
              {contact.description}
            </p>
          </div>

          <div className={CONTACT_SECTION_CLASSES.card}>
            <p className={CONTACT_SECTION_CLASSES.label}>
              {contact.businessContactLabel}
            </p>

            <p className={CONTACT_SECTION_CLASSES.value}>
              {primaryChannel.value}
            </p>

            <a
              href={primaryChannel.href}
              {...getExternalLinkProps(primaryChannel.href)}
              className={CONTACT_SECTION_CLASSES.primaryLink}
            >
              {contact.primaryButtonLabel}
              <ArrowUpRight className={CONTACT_SECTION_CLASSES.linkIcon} />
            </a>

            {contact.channels.length > 1 && (
              <div className={CONTACT_SECTION_CLASSES.linksWrapper}>
                {contact.channels
                  .filter((channel) => !channel.isPrimary)
                  .map((channel) => (
                    <a
                      key={channel.label}
                      href={channel.href}
                      {...getExternalLinkProps(channel.href)}
                      className={CONTACT_SECTION_CLASSES.secondaryLink}
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