import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { APP_SERVICES, getServicePath } from "@/config/constants";

export const ServiceDetailsSection: React.FC = () => {
  const { t } = useTranslation();
  const proofPoints = t("services.detail_overview.proof_points", {
    returnObjects: true,
  }) as string[];

  return (
    <section aria-labelledby="service-details-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-(--color-primary)">
            {t("services.detail_overview.kicker")}
          </p>
          <h2
            id="service-details-heading"
            className="mt-3 text-5xl font-extrabold uppercase leading-none sm:text-6xl"
          >
            {t("services.detail_overview.heading")}
          </h2>
          <p className="mt-5 text-lg leading-7 text-(--color-text-muted)">
            {t("services.detail_overview.body")}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {proofPoints.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-(--color-border-light) bg-(--color-bg-light) px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-(--color-text-primary)"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12 lg:space-y-20">
          {APP_SERVICES.map((service, index) => {
            const advantages = t(`services.${service.key}.overview.advantages`, {
              returnObjects: true,
            }) as string[];
            const imageFirst = index % 2 === 0;

            return (
              <article
                key={service.key}
                id={`details-${service.key}`}
                className={`grid overflow-hidden rounded-3xl border border-(--color-border-light) bg-(--color-bg-light) shadow-lg lg:grid-cols-2 ${imageFirst ? "" : "lg:[&>div:first-child]:order-2"}`}
              >
                <div className="min-h-72 overflow-hidden lg:min-h-105">
                  <img
                    src={service.image}
                    alt={t(`services.${service.key}.title`)}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <p className="font-bold uppercase tracking-[0.18em] text-(--color-primary)">
                    {t(`services.${service.key}.overview.kicker`)}
                  </p>
                  <h3 className="mt-3 text-4xl font-extrabold uppercase leading-none text-(--color-text-primary) sm:text-5xl">
                    {t(`services.${service.key}.overview.heading`)}
                  </h3>
                  <p className="mt-5 leading-7 text-(--color-text-muted)">
                    {t(`services.${service.key}.overview.body`)}
                  </p>
                  <ul className="mt-6 grid gap-3 text-sm font-bold text-(--color-text-primary) sm:grid-cols-3 lg:grid-cols-1">
                    {advantages.map((advantage) => (
                      <li key={advantage} className="flex items-start gap-2">
                        <span className="text-(--color-blue)" aria-hidden="true">
                          {"\u2713"}
                        </span>
                        {advantage}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 border-l-4 border-(--color-blue) pl-4 text-sm leading-6 text-(--color-text-muted)">
                    <strong className="text-(--color-text-primary)">
                      {t("services.detail_overview.included_label")}
                    </strong>{" "}
                    {t(`services.${service.key}.overview.included`)}
                  </div>
                  <Link
                    to={getServicePath(service.key)}
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-(--color-primary) px-5 py-3 font-extrabold uppercase tracking-wide text-white transition hover:bg-(--color-primary-hover)"
                  >
                    {t("services.cta")} <span aria-hidden="true">{"\u2192"}</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
