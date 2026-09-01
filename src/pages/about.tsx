import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout";
import { SEOHead } from "@/components/common";
import { CONTACT_INFO } from "@/config/constants";

export default function AboutPage() {
  const { t } = useTranslation();
  const values = [0, 1, 2];
  const facts = [0, 1, 2, 3, 4];
  const process = [0, 1, 2];

  return (
    <Layout>
      <SEOHead title={t("about.title")} description={t("about.description")} pathname="/about" />
      <main>
        <section className="bg-(--color-blue-dark) px-4 py-20 text-white md:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div><p className="font-bold uppercase tracking-[0.18em] text-(--color-primary)">CMT Heating & Cooling</p><h1 className="mt-4 text-5xl font-extrabold uppercase leading-none sm:text-7xl">{t("about.title")}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{t("about.description")}</p><div className="mt-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-wide"><span className="rounded-full border border-white/20 px-4 py-2">{t("about.badges.licensed")}</span><span className="rounded-full border border-white/20 px-4 py-2">{t("about.badges.coverage")}</span><span className="rounded-full border border-white/20 px-4 py-2">{t("about.badges.insured")}</span></div></div>
            <img src="/assets/images/generated/about-comfort-space.png" alt="Unoccupied Florida home interior with visible HVAC equipment and thermostat" className="h-full min-h-80 w-full rounded-2xl object-cover shadow-2xl" />
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:px-8 lg:grid-cols-2 lg:py-28">
          <div><p className="font-bold uppercase tracking-[0.18em] text-(--color-primary)">{t("about.mission.title")}</p><h2 className="mt-3 text-4xl font-extrabold uppercase leading-none text-(--color-text-primary)">{t("about.mission.title")}</h2><p className="mt-6 leading-8 text-(--color-text-muted)">{t("about.mission.text")}</p><div className="mt-10 border-l-4 border-(--color-primary) pl-5"><p className="font-bold uppercase tracking-[0.18em] text-(--color-blue)">{t("about.vision.title")}</p><p className="mt-3 leading-7 text-(--color-text-muted)">{t("about.vision.text")}</p></div></div>
          <div className="rounded-2xl bg-(--color-bg-light) p-7 sm:p-10"><p className="font-bold uppercase tracking-[0.18em] text-(--color-primary)">{t("about.facts.title")}</p><div className="mt-7 grid gap-5 sm:grid-cols-2">{facts.map((index) => <div key={index} className="border-t border-(--color-border-light) pt-4"><p className="text-sm font-bold uppercase tracking-wide text-(--color-text-muted)">{t(`about.facts.items.${index}.label`)}</p><p className="mt-2 font-extrabold text-(--color-text-primary)">{t(`about.facts.items.${index}.value`)}</p></div>)}</div><a href={CONTACT_INFO.PHONE_CALL} className="mt-8 inline-flex rounded-lg bg-(--color-primary) px-5 py-3 font-extrabold uppercase text-white hover:bg-(--color-primary-hover)">{t("about.call_label")} {CONTACT_INFO.PHONE_DISPLAY}</a></div>
        </section>

        <section className="bg-(--color-bg-light) px-4 py-20 md:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><p className="font-bold uppercase tracking-[0.18em] text-(--color-primary)">{t("about.values.title")}</p><h2 className="mt-3 text-4xl font-extrabold uppercase leading-none text-(--color-text-primary)">{t("about.values.title")}</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{values.map((index) => <article key={index} className="rounded-2xl bg-(--color-surface) p-7 shadow-sm"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-primary) font-extrabold text-white">{index + 1}</div><h3 className="mt-6 text-xl font-extrabold text-(--color-text-primary)">{t(`about.values.items.${index}.name`)}</h3><p className="mt-3 leading-7 text-(--color-text-muted)">{t(`about.values.items.${index}.description`)}</p></article>)}</div></div></section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-24"><p className="font-bold uppercase tracking-[0.18em] text-(--color-primary)">{t("about.service_process.title")}</p><h2 className="mt-3 max-w-2xl text-4xl font-extrabold uppercase leading-none text-(--color-text-primary)">{t("about.service_process.title")}</h2><div className="mt-10 grid gap-8 md:grid-cols-3">{process.map((index) => <div key={index} className="relative border-t-2 border-(--color-blue) pt-6"><span className="text-5xl font-extrabold text-(--color-primary)/25">0{index + 1}</span><h3 className="mt-3 text-xl font-extrabold text-(--color-text-primary)">{t(`about.service_process.items.${index}.title`)}</h3><p className="mt-3 leading-7 text-(--color-text-muted)">{t(`about.service_process.items.${index}.text`)}</p></div>)}</div><div className="mt-12 rounded-2xl bg-(--color-blue) p-8 text-white sm:p-10"><h2 className="text-3xl font-extrabold uppercase">{t("about.final_title")}</h2><p className="mt-3 max-w-2xl text-white/80">{t("about.final_text")}</p></div></section>
      </main>
    </Layout>
  );
}
