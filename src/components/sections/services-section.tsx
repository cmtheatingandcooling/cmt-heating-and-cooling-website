import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { APP_SERVICES, getServicePath } from "@/config/constants";

export const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="bg-(--color-bg-light) px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center"><p className="font-bold uppercase tracking-[0.18em] text-(--color-primary)">{t("services.title")}</p><h2 className="mt-3 text-5xl font-extrabold uppercase leading-none sm:text-6xl">Solutions for a more comfortable home.</h2><p className="mt-5 leading-7 text-(--color-text-muted)">{t("services.subtitle")}</p></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {APP_SERVICES.map((service) => <article key={service.key} className="group overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"><Link to={getServicePath(service.key)}><div className="relative h-60 overflow-hidden"><img src={service.image} alt={t(`services.${service.key}.title`)} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute bottom-0 left-6 flex h-14 w-14 translate-y-7 items-center justify-center rounded-full bg-(--color-primary) text-2xl text-white shadow-lg">{service.key.includes("duct") ? "↔" : service.key.includes("insulation") ? "⌂" : service.key.includes("cleaning") ? "✦" : "◉"}</div></div><div className="p-7 pt-12"><h3 className="text-4xl font-extrabold uppercase">{t(`services.${service.key}.title`)}</h3><p className="mt-3 min-h-20 text-sm leading-6 text-(--color-text-muted)">{t(`services.${service.key}.description`)}</p><span className="mt-6 inline-flex items-center gap-2 font-extrabold uppercase tracking-wide text-(--color-blue)">{t("services.cta")} <span aria-hidden="true">→</span></span></div></Link></article>)}
        </div>
      </div>
    </section>
  );
};
