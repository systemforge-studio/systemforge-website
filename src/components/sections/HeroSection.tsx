import sfsLogo from "../../assets/sfs-logo.png";
import { useLanguage } from "../../i18n/useLanguage";
import { ROUTES, SECTION_ID } from "../../shared/constants/routes";
import {
  HERO_CLASSES,
  HERO_DESCRIPTION_CLASSES,
  HERO_TITLE_CLASSES,
} from "../styles/heroSection.styles";

export function HeroSection() {
  const { content } = useLanguage();
  const hero = content.hero;

  return (
    <section id={SECTION_ID.HOME} className={HERO_CLASSES.section}>
      <div className={HERO_CLASSES.primaryGlow} />
      <div className={HERO_CLASSES.secondaryGlow} />

      <div className={HERO_CLASSES.grid}>
        <div className={HERO_CLASSES.content}>
          <p className={HERO_CLASSES.tagline}>{content.agency.tagline}</p>

          <h1
            className={`${HERO_CLASSES.titleBase} ${HERO_TITLE_CLASSES[content.direction]
              }`}
          >
            {hero.title}
          </h1>

          <p
            className={`${HERO_CLASSES.descriptionBase} ${HERO_DESCRIPTION_CLASSES[content.direction]
              }`}
          >
            {hero.description}
          </p>

          <div className={HERO_CLASSES.marketsWrapper}>
            <span className={HERO_CLASSES.marketsLabel}>
              {hero.marketsLabel}
            </span>

            {hero.markets.map((market) => (
              <span
                key={market}
                className={HERO_CLASSES.marketBadge}
              >
                {market}
              </span>
            ))}
          </div>

          <div className={HERO_CLASSES.actions}>
            <a href={ROUTES.CONTACT} className={HERO_CLASSES.primaryCta}>
              {hero.primaryCta}
            </a>

            <a href={ROUTES.PROJECTS} className={HERO_CLASSES.secondaryCta}>
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className={HERO_CLASSES.logoWrapper}>
          <div className={HERO_CLASSES.logoGlow} />

          <img
            src={sfsLogo}
            alt={hero.logoAlt}
            className={HERO_CLASSES.logo}
          />
        </div>
      </div>
    </section>
  );
}