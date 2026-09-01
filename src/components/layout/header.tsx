import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BUSINESS_INFO, CONTACT_INFO, getNavLinks, getServiceLinks } from "@/config/constants";

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);
  const menuItems = getNavLinks(t);
  const serviceLinks = getServiceLinks(t);
  const isSpanish = i18n.language === "es";

  const toggleLanguage = () => {
    i18n.changeLanguage(isSpanish ? "en" : "es");
  };

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsServicesOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <>
      <div className="bg-(--color-blue) text-xs font-semibold text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <a href={CONTACT_INFO.PHONE_CALL} className="inline-flex items-center gap-2 hover:underline">
            <span aria-hidden="true">{"\u260E"}</span> {CONTACT_INFO.PHONE_DISPLAY}
          </a>
          <span className="hidden sm:inline">{t("header.topline")}</span>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-(--color-border-light) bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <Link
            to="/"
            className="shrink-0"
            aria-label={t("header.logo", { name: BUSINESS_INFO.NAME })}
          >
            <img
              src={BUSINESS_INFO.LOGO}
              alt={BUSINESS_INFO.NAME}
              className="h-20 w-64 object-contain object-left sm:h-24 sm:w-80 xl:w-96"
            />
          </Link>

          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {menuItems.map((item) =>
              item.key === "services" ? (
                <div
                  key={item.key}
                  ref={servicesMenuRef}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="inline-flex items-center gap-1">
                    <Link
                      to={item.path}
                      className="text-sm font-bold uppercase tracking-wide hover:text-(--color-primary)"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen((open) => !open)}
                      aria-expanded={isServicesOpen}
                      aria-controls="services-dropdown"
                      aria-label={`${item.label} menu`}
                      className="rounded p-1 hover:bg-(--color-bg-light) hover:text-(--color-primary)"
                    >
                      <svg
                        className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {isServicesOpen && (
                    <div id="services-dropdown" className="absolute left-0 top-full w-64 pt-3">
                      <div className="overflow-hidden rounded-xl border border-(--color-border-light) bg-white py-2 shadow-xl">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            onClick={() => setIsServicesOpen(false)}
                            className="block px-5 py-3 text-sm font-semibold hover:bg-(--color-bg-light) hover:text-(--color-primary)"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm font-bold uppercase tracking-wide hover:text-(--color-primary)"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t("header.language.toggle_label")}
              className="inline-flex rounded-lg border border-(--color-border-light) px-3 py-2 text-xs font-extrabold uppercase tracking-wide text-(--color-blue) transition hover:border-(--color-blue) hover:bg-blue-50"
            >
              {isSpanish ? t("header.language.en") : t("header.language.es")}
            </button>
            <Link
              to="/contact"
              className="hidden rounded-lg bg-(--color-primary) px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg shadow-red-200 transition hover:bg-(--color-primary-hover) sm:inline-flex"
            >
              {t("header.cta")}
            </Link>
            <button
              type="button"
              aria-label={isMenuOpen ? t("header.close_menu") : t("header.open_menu")}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="rounded-lg border border-(--color-border-light) px-3 py-2 text-xl lg:hidden"
            >
              {"\u2630"}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="border-t border-(--color-border-light) bg-white px-4 py-4 lg:hidden">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-bold uppercase hover:bg-(--color-bg-light) hover:text-(--color-primary)"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="mt-2 flex w-full justify-center rounded-lg border border-(--color-border-light) px-4 py-3 font-bold uppercase text-(--color-blue)"
            >
              {isSpanish ? t("header.language.en") : t("header.language.es")}
            </button>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 flex justify-center rounded-lg bg-(--color-primary) px-4 py-3 font-bold uppercase text-white"
            >
              {t("header.cta")}
            </Link>
          </nav>
        )}
      </header>
    </>
  );
};
