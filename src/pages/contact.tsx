import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout";
import { ContactSection } from "@/components/sections";
import { SEOHead } from "@/components/common";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEOHead
        title={t("contact.seo_title")}
        description={t("contact.seo_description")}
        pathname="/contact"
      />
      <ContactSection isHomePage={false} titleAs="h1" />
    </Layout>
  );
}
