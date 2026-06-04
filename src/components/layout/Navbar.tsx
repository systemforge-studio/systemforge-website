import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../../i18n/useLanguage";
import { LanguageSwitcher } from "../i18n/LanguageSwitcher";
import { ROUTES, SECTION_IDS } from "../../shared/constants/routes";
import { NAV_SCROLL_OBSERVER_OPTIONS } from "../../shared/constants/layout";
import { NAVBAR_CLASSES } from "../styles/navbar.styles";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>(ROUTES.HOME);
  const { content } = useLanguage();
  const navigationItems = content.nav.items;

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      NAV_SCROLL_OBSERVER_OPTIONS,
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className={NAVBAR_CLASSES.header}>
      <nav className={NAVBAR_CLASSES.nav}>
        <div className={NAVBAR_CLASSES.row}>
          <a
            href={ROUTES.HOME}
            onClick={closeMenu}
            className={NAVBAR_CLASSES.brand}
          >
            {content.agency.name}
          </a>

          <div className={NAVBAR_CLASSES.desktopLinks}>
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${NAVBAR_CLASSES.desktopLinkBase} ${
                  activeHref === item.href
                    ? NAVBAR_CLASSES.desktopLinkActive
                    : NAVBAR_CLASSES.desktopLinkInactive
                }`}
              >
                {item.label}
              </a>
            ))}

            <LanguageSwitcher />
          </div>

          <div className={NAVBAR_CLASSES.actions}>
            <a
              href={ROUTES.CONTACT}
              onClick={closeMenu}
              className={NAVBAR_CLASSES.cta}
            >
              {content.nav.callToAction}
            </a>

            <button
              type="button"
              aria-label={
                isOpen ? content.nav.closeMenuLabel : content.nav.openMenuLabel
              }
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className={NAVBAR_CLASSES.menuButton}
            >
              {isOpen ? (
                <X className={NAVBAR_CLASSES.menuIcon} />
              ) : (
                <Menu className={NAVBAR_CLASSES.menuIcon} />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className={NAVBAR_CLASSES.mobilePanel}>
            <div className={NAVBAR_CLASSES.mobileLinks}>
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`${NAVBAR_CLASSES.mobileLinkBase} ${
                    activeHref === item.href
                      ? NAVBAR_CLASSES.mobileLinkActive
                      : NAVBAR_CLASSES.mobileLinkInactive
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <div className={NAVBAR_CLASSES.mobileSwitcher}>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}