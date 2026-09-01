import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BUSINESS_INFO, CONTACT_INFO } from "@/config/constants";

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const benefits = t("home.hero.benefits", { returnObjects: true }) as string[];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="grid min-h-[620px] lg:grid-cols-2">
        <div className="relative z-10 flex items-center px-5 py-20 sm:px-10 lg:px-16 xl:px-24">
          <div className="max-w-xl">
            <p className="mb-5 font-bold uppercase tracking-[0.18em] text-(--color-primary)">
              {t("home.hero.greeting")}
            </p>
            <h1 className="text-6xl font-extrabold uppercase leading-[0.9] text-(--color-text-primary) sm:text-7xl lg:text-8xl">
              {t("home.hero.title")}
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-(--color-text-muted) sm:text-lg">
              {t("home.hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-(--color-primary) px-7 py-4 font-extrabold uppercase tracking-wide text-white shadow-lg shadow-red-200 transition hover:-translate-y-0.5 hover:bg-(--color-primary-hover)"
              >
                {t("home.hero.cta")} <span aria-hidden="true">{"\u2192"}</span>
              </Link>
              <a
                href={CONTACT_INFO.PHONE_CALL}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-(--color-blue) px-7 py-4 font-extrabold uppercase tracking-wide text-(--color-blue) transition hover:bg-blue-50"
              >
                {t("home.hero.call_label")} {CONTACT_INFO.PHONE_DISPLAY}
              </a>
            </div>
            <div className="mt-8 grid gap-3 text-sm font-semibold text-(--color-text-primary) sm:grid-cols-3">
              {benefits.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="text-(--color-blue)" aria-hidden="true">
                    {"\u2713"}
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="relative min-h-96 overflow-hidden lg:min-h-full">
          <img
            src={BUSINESS_INFO.HERO_IMAGE}
            alt={t("home.hero.image_alt")}
            className="h-full w-full object-cover template-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:w-1/3" />
        </div>
      </div>
    </section>
  );
};
