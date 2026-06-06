import { ArrowUpRight, FileText, Globe, Mail, Phone } from "lucide-react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import type { ContactIconKey } from "../../i18n/i18n.types";
import { useLanguage } from "../../i18n/useLanguage";
import { SECTION_ID } from "../../shared/constants/routes";
import { getExternalLinkProps } from "../../shared/utils/links";
import { SECTION_CLASSES } from "../../shared/constants/layout";
import { CONTACT_SECTION_CLASSES } from "../styles/contactSection.styles";

const ICON_BY_KEY: Record<ContactIconKey, React.ElementType> = {
  mail: Mail,
  phone: Phone,
  whatsapp: FaWhatsapp,
  quote: FileText,
  website: Globe,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  facebook: FaFacebook,
  github: FaGithub,
  tiktok: FaTiktok,
};

const ICON_COLOR_BY_KEY: Record<ContactIconKey, string> = {
  mail: "text-red-300",
  phone: "text-emerald-300",
  whatsapp: "text-[#25D366]",
  quote: "text-cyan-200",
  website: "text-sky-300",
  linkedin: "text-[#0A66C2]",
  instagram: "text-[#E4405F]",
  facebook: "text-[#1877F2]",
  github: "text-white",
  tiktok: "text-white",
};

export function ContactSection() {
  const { content } = useLanguage();

  const contact = content.contactSection;
  const primaryChannel =
    contact.channels.find((channel) => channel.isPrimary) ??
    contact.channels[0];

  if (!primaryChannel) {
    return null;
  }

  const contactChannels = contact.channels.filter(
    (channel) => channel.group === "contact" && !channel.isPrimary,
  );

  const followChannels = contact.channels.filter(
    (channel) => channel.group === "follow",
  );

  const PrimaryIcon = ICON_BY_KEY[primaryChannel.iconKey];

  return (
    <section id={SECTION_ID.CONTACT} className={SECTION_CLASSES.default}>
      <div className={CONTACT_SECTION_CLASSES.wrapper}>
        <div className={CONTACT_SECTION_CLASSES.grid}>
          <div>
            <div className={CONTACT_SECTION_CLASSES.badge}>
              <Mail className={CONTACT_SECTION_CLASSES.badgeIcon} />
              {contact.eyebrow}
            </div>

            <h2 className={CONTACT_SECTION_CLASSES.title}>{contact.title}</h2>

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
              <PrimaryIcon className={CONTACT_SECTION_CLASSES.linkIcon} />
              {contact.primaryButtonLabel}
              <ArrowUpRight className={CONTACT_SECTION_CLASSES.linkIcon} />
            </a>

            <div className={CONTACT_SECTION_CLASSES.sections}>
              <div>
                <h3 className={CONTACT_SECTION_CLASSES.groupTitle}>
                  {contact.contactGroupTitle}
                </h3>

                <div className={CONTACT_SECTION_CLASSES.linksWrapper}>
                  {contactChannels.map((channel) => {
                    const Icon = ICON_BY_KEY[channel.iconKey];

                    return (
                      <a
                        key={channel.label}
                        href={channel.href}
                        {...getExternalLinkProps(channel.href)}
                        className={CONTACT_SECTION_CLASSES.secondaryLink}
                      >
                        <Icon
                          className={`${CONTACT_SECTION_CLASSES.socialIcon} ${ICON_COLOR_BY_KEY[channel.iconKey]
                            }`}
                        />
                        <span className={CONTACT_SECTION_CLASSES.secondaryLinkText}>
                          {channel.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className={CONTACT_SECTION_CLASSES.groupTitle}>
                  {contact.followGroupTitle}
                </h3>

                <div className={CONTACT_SECTION_CLASSES.linksWrapper}>
                  {followChannels.map((channel) => {
                    const Icon = ICON_BY_KEY[channel.iconKey];

                    return (
                      <a
                        key={channel.label}
                        href={channel.href}
                        {...getExternalLinkProps(channel.href)}
                        className={CONTACT_SECTION_CLASSES.secondaryLink}
                      >
                        <Icon
                          className={`${CONTACT_SECTION_CLASSES.socialIcon} ${ICON_COLOR_BY_KEY[channel.iconKey]
                            }`}
                        />
                        <span className={CONTACT_SECTION_CLASSES.secondaryLinkText}>
                          {channel.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}