import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/sections";
import {
  ServicesSection,
  ServiceDetailsSection,
  FAQSection,
  TrustStrip,
  FinancingInfoSection,
  ReviewsSection,
} from "@/components/sections";
import { Link } from "react-router-dom";
import { BUSINESS_INFO } from "@/config/constants";
import { SEOHead } from "@/components/common";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEOHead title={t("seo.home.title")} description={t("seo.home.description")} pathname="/" />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <ServiceDetailsSection />
      <FinancingInfoSection />
      <section className="grid overflow-hidden bg-white lg:grid-cols-2">
        <div className="px-5 py-20 sm:px-10 lg:px-16 xl:px-24"><p className="font-bold uppercase tracking-[0.18em] text-(--color-primary)">About CMT Heating & Cooling</p><h2 className="mt-3 text-5xl font-extrabold uppercase leading-none sm:text-6xl">A local team.<br />A higher standard.</h2><p className="mt-6 max-w-xl leading-7 text-(--color-text-muted)">{BUSINESS_INFO.DESCRIPTION} We focus on straightforward recommendations, careful work, and a comfortable experience from the first conversation to the finished job.</p><div className="mt-7 space-y-3 text-sm font-semibold"><p>✓ Experienced, professional service</p><p>✓ Clear communication from start to finish</p><p>✓ Solutions that fit your home and priorities</p></div><Link to="/about" className="mt-8 inline-flex rounded-lg bg-(--color-primary) px-6 py-4 font-extrabold uppercase text-white hover:bg-(--color-primary-hover)">Learn more about us →</Link></div>
        <div className="relative min-h-96 bg-(--color-blue-dark)"><img src="/assets/images/generated/about-comfort-space.png" alt="Comfortable Florida home with visible HVAC air handler, return grille, and thermostat" className="h-full w-full object-cover opacity-85" /><div className="absolute inset-0 bg-(--color-blue)/55" /><div className="absolute inset-0 flex items-end p-8 sm:p-12"><div className="max-w-md text-white"><p className="font-bold uppercase tracking-[0.18em]">Service support</p><h2 className="mt-3 text-5xl font-extrabold uppercase leading-none">Comfort that lasts beyond the visit.</h2></div></div></div>
      </section>
      <ReviewsSection />
      <FAQSection />
      <section className="bg-(--color-primary) px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="font-bold uppercase tracking-[0.18em] text-white/80">Ready for better comfort?</p><h2 className="mt-3 text-5xl font-extrabold uppercase leading-none sm:text-6xl">Let’s make your home feel right.</h2><p className="mt-4 max-w-xl text-white/85">Call or text CMT Heating & Cooling for service or a free estimate.</p></div><div className="flex flex-col gap-3 sm:flex-row"><a href="tel:+18133457663" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-4 font-extrabold uppercase text-(--color-primary) hover:bg-red-50">Call (813) 345-7663</a><Link to="/contact" className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-4 font-extrabold uppercase text-white hover:bg-white/10">Request service</Link></div></div>
      </section>
    </Layout>
  );
}
