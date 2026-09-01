import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { SEOHead } from "@/components/common";
import { Layout } from "@/components/layout";
import { RelatedServices } from "@/components/sections/related-services";
import {
  APP_SERVICES,
  CONTACT_INFO,
  getPrimaryServicePath,
  getServicePath,
} from "@/config/constants";

export default function ServiceDetailPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { serviceKey = "" } = useParams();

  const service = APP_SERVICES.find((item) => item.key === serviceKey);

  if (!service) {
    return <Navigate to={getPrimaryServicePath()} replace />;
  }

  const serviceTitle = t(`services.${service.key}.title`);
  const serviceSeoTitle = t(`services.${service.key}.seo_title`);
  const serviceDescription = t(`services.${service.key}.description`);
  const serviceSeoDescription = t(`services.${service.key}.seo_description`);
  const servicePath = getServicePath(service.key);
  const pageContent = {
    advantages: t(`services.${service.key}.advantages`, { returnObjects: true }) as string[],
    tips: t(`services.${service.key}.tips`, { returnObjects: true }) as string[],
  };
  const proofPoints = t("services.detail_overview.proof_points", {
    returnObjects: true,
  }) as string[];

  const handleContactClick = () => {
    navigate(`/contact?service=${service.key}`);
  };

  return (
    <Layout>
      <SEOHead
        title={serviceSeoTitle}
        description={serviceSeoDescription}
        pathname={servicePath}
      />

      <section className="relative w-full overflow-hidden bg-(--color-bg-light) pt-30 md:pt-36 pb-18 md:pb-24">
        <div className="absolute inset-0 template-primary-glow-service" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="template-reveal flex flex-wrap items-center gap-2 text-sm text-(--color-text-muted) mb-8">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="hover:text-(--color-primary) transition-colors"
            >
              {t("common.home")}
            </button>
            <span>/</span>
            <button
              type="button"
              onClick={() => navigate(getPrimaryServicePath())}
              className="hover:text-(--color-primary) transition-colors"
            >
              {t("common.services")}
            </button>
            <span>/</span>
            <span className="text-(--color-primary) font-semibold">
              {serviceTitle}
            </span>
          </div>

          <div className="max-w-3xl">
            <p className="template-reveal template-reveal-delay-1 text-(--color-primary) font-bold uppercase tracking-[0.18em] text-sm mb-4">
              {t("common.services")}
            </p>
            <h1 className="template-reveal template-reveal-delay-1 text-5xl md:text-6xl lg:text-7xl font-bold text-(--color-text-primary) leading-tight mb-6">
              {serviceTitle}
            </h1>
            <p className="template-reveal template-reveal-delay-2 text-lg md:text-xl text-(--color-text-muted) leading-relaxed max-w-2xl mb-10">
              {serviceDescription}
            </p>

            <button
              type="button"
              onClick={handleContactClick}
              className="template-reveal template-reveal-delay-2 inline-flex items-center justify-center rounded-xl bg-(--color-primary) px-8 py-4 text-base font-semibold text-(--color-text-inverse) shadow-lg shadow-(--color-primary)/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-(--color-primary-hover)"
            >
              {t("services.cta")}
            </button>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-(--color-bg-light) pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)] items-stretch">
            <div className="template-reveal template-reveal-delay-1 overflow-hidden rounded-[2.25rem] surface-card template-border">
              <img
                src={service.image}
                alt={serviceTitle}
                className="h-full min-h-[24rem] w-full object-cover object-center"
              />
            </div>

            <div className="template-reveal template-reveal-delay-2 surface-card template-border rounded-[2.25rem] p-8 md:p-10 flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-primary) mb-4">
                {serviceTitle}
              </h2>
              <p className="text-(--color-text-muted) leading-relaxed mb-8">
                {serviceDescription}
              </p>

              <div className="mb-8 grid gap-3">
                {proofPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-(--color-border-light) bg-(--color-bg-light) px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-(--color-text-primary)"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="grid gap-4 mb-8">
                <div className="rounded-2xl bg-(--color-surface-strong) p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--color-primary) mb-2">
                    {t("contact.info.contact_title")}
                  </p>
                  <a
                    href={CONTACT_INFO.PHONE_CALL}
                    className="text-lg font-semibold text-(--color-text-primary) hover:text-(--color-primary) transition-colors"
                  >
                    {CONTACT_INFO.PHONE_DISPLAY}
                  </a>
                </div>

                <div className="rounded-2xl bg-(--color-surface-strong) p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--color-primary) mb-2">
                    {t("contact.info.email_title")}
                  </p>
                  <a
                    href={`mailto:${CONTACT_INFO.EMAIL}`}
                    className="text-lg font-semibold text-(--color-text-primary) hover:text-(--color-primary) transition-colors break-all"
                  >
                    {CONTACT_INFO.EMAIL}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleContactClick}
                className="mt-auto inline-flex items-center justify-center rounded-xl border border-(--color-primary)/20 bg-(--color-surface) px-6 py-3.5 text-base font-semibold text-(--color-primary) transition-all duration-300 hover:bg-(--color-surface-strong) hover:border-(--color-primary)/30"
              >
                {t("services.cta")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-(--color-blue-dark) p-8 text-white sm:p-10">
            <p className="font-bold uppercase tracking-[0.18em] text-(--color-blue)">
              {t("services.detail.advantages_label")}
            </p>
            <h2 className="mt-3 text-5xl font-extrabold uppercase leading-none">
              {t("services.detail.advantages_title")}
            </h2>
            <ul className="mt-8 space-y-5">
              {pageContent.advantages.map((advantage) => (
                <li key={advantage} className="flex items-start gap-3 text-lg">
                  <span className="text-(--color-primary)" aria-hidden="true">
                    {"\u2713"}
                  </span>
                  {advantage}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-(--color-border-light) bg-(--color-bg-light) p-8 sm:p-10">
            <p className="font-bold uppercase tracking-[0.18em] text-(--color-primary)">
              {t("services.detail.tips_label")}
            </p>
            <h2 className="mt-3 text-5xl font-extrabold uppercase leading-none text-(--color-text-primary)">
              {t("services.detail.tips_title")}
            </h2>
            <ul className="mt-8 space-y-5 text-(--color-text-muted)">
              {pageContent.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 leading-7">
                  <span className="mt-1 text-(--color-blue)" aria-hidden="true">
                    {"\u2022"}
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <RelatedServices currentServiceKey={service.key} />
    </Layout>
  );
}
