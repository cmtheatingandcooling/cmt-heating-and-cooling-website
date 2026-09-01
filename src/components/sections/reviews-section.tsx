import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const REVIEWS_SCRIPT_ID = "reputationhub-review-widget-script";
const REVIEWS_SCRIPT_SRC = "https://reputationhub.site/reputation/assets/review-widget.js";
const REVIEWS_WIDGET_SRC =
  "https://reputationhub.site/reputation/widgets/review_widget/7Jy29W0nEpPiUN73xf4z";

export const ReviewsSection: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (document.getElementById(REVIEWS_SCRIPT_ID)) {
      return;
    }

    const script = document.createElement("script");
    script.id = REVIEWS_SCRIPT_ID;
    script.type = "text/javascript";
    script.src = REVIEWS_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="font-bold uppercase tracking-[0.18em] text-(--color-primary)">
            {t("reviews.kicker")}
          </p>
          <h2
            id="reviews-heading"
            className="mt-3 text-4xl font-extrabold uppercase leading-none text-(--color-text) sm:text-5xl"
          >
            {t("reviews.title")}
          </h2>
          <p className="mt-5 text-lg leading-8 text-(--color-text-muted)">{t("reviews.subtitle")}</p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
          <iframe
            className="lc_reviews_widget block min-h-[620px] w-full"
            src={REVIEWS_WIDGET_SRC}
            title={t("reviews.iframe_title")}
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: "100%", width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};
