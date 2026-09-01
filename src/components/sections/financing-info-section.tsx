import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CONTACT_INFO } from "@/config/constants";

export const FinancingInfoSection: React.FC = () => {
  const { t } = useTranslation();
  const items = t("financing.items", { returnObjects: true }) as Array<{
    label: string;
    text: string;
  }>;

  return (
    <section className="bg-(--color-bg-light) px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-(--color-border-light) bg-white shadow-xl lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-(--color-blue-dark) p-8 text-white sm:p-10 lg:p-14">
          <p className="font-bold uppercase tracking-[0.18em] text-(--color-primary)">
            {t("financing.kicker")}
          </p>
          <h2 className="mt-4 text-4xl font-extrabold uppercase leading-none sm:text-5xl">
            {t("financing.title")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            {t("financing.body")}
          </p>
          <p className="mt-6 text-sm leading-6 text-white/65">
            {t("financing.note")}
          </p>
        </div>

        <div className="p-8 sm:p-10 lg:p-14">
          <div className="grid gap-5 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-(--color-border-light) bg-(--color-bg-light) p-5"
              >
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-(--color-primary)">
                  {item.label}
                </p>
                <p className="mt-3 leading-7 text-(--color-text-muted)">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex justify-center rounded-lg bg-(--color-primary) px-6 py-4 font-extrabold uppercase tracking-wide text-white transition hover:bg-(--color-primary-hover)"
            >
              {t("financing.cta")}
            </Link>
            <a
              href={CONTACT_INFO.PHONE_CALL}
              className="inline-flex justify-center rounded-lg border-2 border-(--color-blue) px-6 py-4 font-extrabold uppercase tracking-wide text-(--color-blue) transition hover:bg-blue-50"
            >
              {t("financing.call_label")} {CONTACT_INFO.PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
